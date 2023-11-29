import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import AdminSearchContainer from '@components/admin/containers/AdminSearchContainer';
import FileUploadModal from "@components/modals/FileUploadModal";
import SystemNameService from "@components/system/containers/SystemNameService";
import SystemArticleService from "@components/system/containers/SystemArticleService";
import TabMenuContainer from "@components/system/containers/tabmenu/TabMenuContainer";

const Container = styled.div`
  display: flex;
  justify-content: center;
  div {
    width: 100%;
    max-width: 1000px;
    h3 {
        margin-bottom: 30px;
    }
  }
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    gap: 4rem;
  }
  li {
    border: 2px solid black;
    padding: 7px 35px;
    border-bottom: none;
    cursor: pointer;
  }
  .focused {
    border: 2px solid #4DBDE5;
    border-bottom: none;
  }
  button {
      padding: 5px 10px;
      color: white;
      background-color: #007FFF;
      border: 1px solid #007FFF;
      border-radius: 10px;
      font-size: medium;
      cursor: pointer;
      float: right;
    }
`;


export default function SystemTabMenuContainer() {
    const menu = ['표준 정의서', '구축 정의서', '진단 보고서'];
    const [tab, setTab] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [systemName, setSystemName ] = useState('');
    const [systemId, setSystemId] = useState(null);

    const [baseCategoryIds, setBaseCategoryIds] = useState([]);
    const [detailCategories, setDetailCategories] = useState([]);

    useEffect(() => {
        // localStorage에서 userInfo 가져오기
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        let currentSystemId = userInfo?.systemIds?.[0]; // 기본 시스템 ID 설정

        // ADMIN 사용자인 경우, 선택한 시스템 ID로 변경
        if (userInfo?.role === "ADMIN") {
            const selectedSystem = JSON.parse(localStorage.getItem("selectedSystemId"));
            if (selectedSystem?.systemId) {
                currentSystemId = selectedSystem.systemId;
            }
        }

        // currentSystemId를 사용하여 시스템 이름 및 기타 정보 가져오기
        if (currentSystemId) {
            setSystemId(currentSystemId);
            SystemNameService.fetchBaseCategory(currentSystemId)
                .then(data => {
                    if (data?.systemName) {
                        setSystemName(data.systemName);
                    }
                    if (data?.baseCategories) {
                        setBaseCategoryIds(data.baseCategories.map(category => category.baseCategoryId));
                        // detailCategories 정보 가져오기
                        Promise.all(data.baseCategories.map(category => 
                            SystemArticleService.fetchDetailCategories(category.baseCategoryId)
                        )).then(allDetailData => {
                            setDetailCategories(allDetailData.map(data => data.detailCategories));
                        });
                    }
                })
                .catch(error => {
                    console.error('Base category 요청 오류:', error);
                });
        }
    }, []);
    
    useEffect(() => {
        if (systemId !== null) {
            SystemNameService.fetchBaseCategory(systemId)
                .then(data => {
                    if (data && data.baseCategories) {
                        setBaseCategoryIds(data.baseCategories.map(category => category.baseCategoryId));
                        // 모든 baseCategoryId에 대해 detailCategories 정보 가져오기
                        Promise.all(data.baseCategories.map(category => 
                            SystemArticleService.fetchDetailCategories(category.baseCategoryId)
                        )).then(allDetailData => {
                            setDetailCategories(allDetailData.map(data => data.detailCategories));
                        });
                    }
                })
                .catch(error => {
                    console.error('Base category 요청 오류:', error);
                });
        }
    }, [systemId]);

    const openModal = () => {
      setIsModalOpen(true);
    };

  return (
    <Container>
      <div>
        <h3>{systemName || '시스템 이름 로딩 중...'}</h3>
        <ul>
          {menu.map((e, i) => (
            <li
              key={i}
              className={i === tab ? "focused" : null}
              onClick={() => {
                setTab(i);
              }}
            >
              {e}
            </li>
          ))}
        </ul>

        <AdminSearchContainer></AdminSearchContainer>
        
        <button onClick={openModal}>게시글 등록</button>

        {isModalOpen && (
          <>
            {tab === 0 && <FileUploadModal closeModal={() => setIsModalOpen(false)} detailCategories={detailCategories[0]} />}
            {tab === 1 && <FileUploadModal closeModal={() => setIsModalOpen(false)} detailCategories={detailCategories[1]} />}
            {tab === 2 && <FileUploadModal closeModal={() => setIsModalOpen(false)} detailCategories={detailCategories[2]} />}
          </>
        )}
        {tab === 0 ? (
          <TabMenuContainer detailCategories={detailCategories[0]} />
        ) : tab === 1 ? (
          <TabMenuContainer detailCategories={detailCategories[1]} />
        ) : (
          <TabMenuContainer detailCategories={detailCategories[2]} />
        )}
      </div>
    </Container>
  );
}