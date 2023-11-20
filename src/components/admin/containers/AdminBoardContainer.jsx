import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Data from '../../../Data.json';
import CheckUploadModal from '@components/modals/CheckUploadModal';


const Boarddiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  table {
    width: 100%;
    max-width: 1000px;
    border-collapse: collapse;
    border-spacing: 0;

    caption {
        text-align: left;
        margin-bottom: 30px;
        font-weight: bolder;
    }
  }
  thead {
    background-color: #F3F6F9;
    
  }
  th {
    text-align: left;
    padding: 7px 5px;
    font-weight: normal;
  }

  td {
    padding: 7px 5px;
  }

  td:last-child {
    display: flex;
    justify-content: space-between;
  }
  button {
      padding: 2px 5px;
      color: white;
      background-color: #007FFF;
      border: 1px solid #007FFF;
      border-radius: 10px;
      font-size: medium;
      cursor: pointer;
      text-align: center;
  }
`;

const Tbodytr = styled.tr`
    border-bottom: 2px solid #E5EAF2;
    align-items: center;
`


export default function AdminBorderContainer(props) {
  const [isModalOpen, setModalOpen] = useState(false);
    return (
      <Boarddiv>
        <table>
          <caption>{props.title}</caption>
          <thead>
            <tr>
              <th>차수</th>
              <th>증빙자료명</th>
              <th>업로드 일시</th>
              <th>검토결과</th>
              <th>상세내역</th>
              <th>관련파일</th>
            </tr>
          </thead>
    
          <tbody>
            {Data.map((n, i) => (
              <Tbodytr key={i}>
                <td>{n.article_id}</td>
                <td>{n.task_file_name}</td>
                <td>{n.uploade_date}</td>
                <td>{n.approval}</td>
                <td>{n.decline}</td>
                <td>
                  <span>{n.decline_file_name}</span>
                  <button onClick={() => setModalOpen(true)}>검토</button>
      {isModalOpen && <CheckUploadModal closeModal={() => setModalOpen(false)} />}
                </td>
              </Tbodytr>
            ))}
          </tbody>
        </table>
      </Boarddiv>
    );
}

