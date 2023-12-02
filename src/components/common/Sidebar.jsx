import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ApiService from '@components/axios/ApiService';

const SidebarUL = styled.ul`
    list-style: none;
    padding-left: 1rem;
    position: absolute;
    top: 25%;
    position: fixed;
    li {
        font-size: 13px;
        margin-bottom: 10px;
    }
`

const SNavLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    text-decoration: none;
    &.chosen {
        color: #4DBDE5;
    }
`


export default function Sidebar() {
  const [systemNames, setSystemNames] = useState([]);
  const [selectedSystemId, setSelectedSystemId] = useState(null);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const userRole = userInfo?.role;
  const location = useLocation();

  useEffect(() => {
    if (userRole === "ADMIN") {
      ApiService.fetchSystemNames().then(names => {
        setSystemNames([{ id: 'admin', name: '공지사항' }, ...names]);
      });
    }
    // URL 경로 기반으로 선택된 시스템 ID 설정
    const currentPath = location.pathname;
    if (currentPath === "/admin") {
      setSelectedSystemId("admin");
    } else if (currentPath === "/system") {
      const storedSystemId = JSON.parse(localStorage.getItem("selectedSystemId"))?.systemId;
      setSelectedSystemId(storedSystemId);
    }
  }, [userRole, location.pathname]);

  const handleSystemClick = (systemId) => {
    setSelectedSystemId(systemId);
    localStorage.setItem("selectedSystemId", JSON.stringify({ systemId }));
    window.location.reload();
  };

  const isSelected = (systemId) => {
    return systemId === selectedSystemId;
  };

  return (
    <SidebarUL>
      {systemNames.map((system) => (
        <li key={system.id} onClick={() => handleSystemClick(system.id)}>
          <SNavLink 
            to={system.id === 'admin' ? '/admin' : '/system'}
            className={isSelected(system.id) ? "chosen" : ""}
          >
            {system.name}
          </SNavLink>
        </li>
      ))}
    </SidebarUL>
  );
}