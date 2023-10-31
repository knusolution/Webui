import styled from 'styled-components';
import PropTypes from 'prop-types';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  background-color: white;
  padding: 0px;
  border-radius: 10px;
  width: 600px;
  height: 200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  position: relative;
    &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: #3b4a59; // 원하는 선의 색상
    position: absolute;
    bottom: 150px; // 적절한 위치에 조절하여 가로선을 배치합니다. 이 값은 예시입니다.
  }
`;

const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: normal;
  text-align: left;
  margin-bottom: 40px;
  margin-top: 15px;
  margin-left: 20px;
`;

const ModalContent = styled.p`
  font-size: 16px;
  text-align: left;
  margin-bottom: 20px;
  margin-left: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding: 10px 30px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  .group-button {
    padding: 10px 30px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
    width: 300px;
    height: 35px;
      
    &:first-child {
      margin-left: 0px;
      background-color: #8da0b3;
      color: white;
    }

    &:last-child {
      margin-right: 0px;
      background-color: #003a75;
      color: white;
    }
  }

`;


const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  right: 25px;
  top: 10px;
  font-size: 24px;
  width: 10px ;
  cursor: pointer;
  color: #000000;
  padding: 5px;
  line-height: 1;
  display: inline-block;
  transition: 0.3s;

  &:hover {
    color: #007fff;
  }
`;

const Modify_sys_Modal = ({ closeModal }) => {
  return (
    <ModalOverlay onClick={closeModal}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={closeModal}>&times;</CloseButton>
        <ModalTitle>시스템 정보 수정</ModalTitle>
        <ModalContent>선택하신 시스템 정보를 수정 하시겠습니까?</ModalContent>
        <ButtonGroup>
          <button className="group-button">취소하기</button>
          <button className="group-button" onClick={closeModal}>수정하기</button>
        </ButtonGroup>
      </ModalContainer>
    </ModalOverlay>
  );
};

Modify_sys_Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};


export default Modify_sys_Modal;