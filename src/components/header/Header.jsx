import { Link } from "react-router-dom";
import logo from "/assets/images/logo.png"
import { useState } from "react";
import styled from "styled-components";
import Dropdown from "@components/common/dropdown/Dropdown";


const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #E5EAF2;
  img {
    height: auto;
    width: 200px;
  }

  nav {
    display: flex;
    gap: 50px;
    align-items: center;
    position: relative;
    span {
      padding: 0;
      margin: 0;
      cursor: pointer;
      border: 1px solid #F1F1F1;
      border-radius: 10px;
      padding: 5px 8px;
      background-color:#F1F1F1;
      font-size: medium;
    }

    button {
      padding: 5px 10px;
      color: white;
      background-color: #007FFF;
      border: 1px solid #007FFF;
      border-radius: 10px;
      font-size: medium;
      cursor: pointer;
    }
  }
`;

const Navdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
`;


const Admin = () => {
    const [view, setView] = useState(false);
    const [view2, setView2] = useState(false);
    return (
      <Header>
        <Navdiv>
          <Link to="/admin">
            <img src={logo} alt="logo.png" />
          </Link>

          <nav>
            <span
              onClick={() => {
                setView(!view);
              }}
            >
              관리시스템 {view ? "∧" : "∨"}
            </span>

            <button>계정등록</button>

            <span
              onClick={() => {
                setView2(!view2);
              }}
            >
              JSON님 {view2 ? "∧" : "∨"}
            </span>
            {view2 && <Dropdown></Dropdown>}
          </nav>
        </Navdiv>
      </Header>
    );
  };
  
  export default Admin;