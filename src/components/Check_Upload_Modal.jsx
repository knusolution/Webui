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
  height: 700px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  position: relative;
    &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: #3b4a59; // 원하는 선의 색상
    position: absolute;
    top: 50px; // 적절한 위치에 조절하여 가로선을 배치합니다. 이 값은 예시입니다.
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

  .modal-group-button {
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

const RadioGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -10px;
  margin-left: 20px;
  margin-bottom: 20px;
`;

const RadioButton = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-right: 20px;

  label {
    margin-left: 10px;
  }

  .approve-label {
    color: #4dd392;
  }

  .reject-label {
    color: red;
  }
`;

const FileUpload = styled.div`
  margin-top: 10px;
  margin-left: 20px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input[type="file"] {
    margin-top: 10px;
    display: block;
    padding: 5px;
    width: 250px;
    font-size: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const TextArea = styled.textarea`
  width: 80%;
  height: 150px;
  resize: none;
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 5px;
  font-size: 14px;
  margin-left: 20px;
  margin-bottom: 20px;
 
  &:focus {
    outline: none;
    border-color: #007fff;
  }

  &::placeholder {
    line-height: 150px;
    text-indent: 35%;
  }

  &:not(:placeholder-shown) {
    line-height: normal;
  }
`;

const Check_Upload_Modal = ({ closeModal }) => {
  return (
    <ModalOverlay onClick={closeModal}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={closeModal}>&times;</CloseButton>
        <ModalTitle>검토</ModalTitle>
        <ModalContent>검토 결과를 선택하여 주세요</ModalContent>
        <RadioGroup>
          <RadioButton>
            <input type="radio" name="system_info" value="option1" />
            <label className="approve-label">승인</label>
          </RadioButton>
          <RadioButton>
            <input type="radio" name="system_info" value="option2" />
            <label className="reject-label">반려</label>
          </RadioButton>
        </RadioGroup>
        <ModalContent>검토 결과 상세내역을 입력하여 주세요</ModalContent>
        <TextArea placeholder="상세 내역을 입력하세요." />
        <FileUpload>
          <label>업로드 파일을 선택해주세요.</label>
          <input type="file" />
        </FileUpload>
        <ButtonGroup>
          <button className="modal-group-button" onClick={closeModal}>취소</button>
          <button className="modal-group-button">수정</button>
        </ButtonGroup>
      </ModalContainer>
    </ModalOverlay>
  );
};

Check_Upload_Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};


export default Check_Upload_Modal;