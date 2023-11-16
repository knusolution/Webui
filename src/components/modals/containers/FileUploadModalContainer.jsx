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
  height: 400px;
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
      background-color: #7B91A7;
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
  flex-direction: column;
  margin-top: -10px;
  margin-left: 20px;
  margin-bottom: 20px;
`;

const RadioButton = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  label {
    margin-left: 10px;
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

const FileUploadModalContainer = ({ closeModal }) => {
  return (
    <ModalOverlay onClick={closeModal}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={closeModal}>&times;</CloseButton>
        <ModalTitle>파일 업로드</ModalTitle>
        <ModalContent>등록할 파일 종류를 선택하세요</ModalContent>
        <RadioGroup>
          <RadioButton>
            <input type="radio" name="system_info" value="option1" />
            <label>DB표준 정의서</label>
          </RadioButton>
          <RadioButton>
            <input type="radio" name="system_info" value="option2" />
            <label>DB표준 도메인</label>
          </RadioButton>
          <RadioButton>
            <input type="radio" name="system_info" value="option3" />
            <label>DB표준 단어</label>
          </RadioButton>
          <RadioButton>
            <input type="radio" name="system_info" value="option4" />
            <label>DB표준 코드</label>
          </RadioButton>
        </RadioGroup>
        <FileUpload>
          <label>업로드 파일을 선택해주세요.</label>
          <input type="file" />
        </FileUpload>
        <ButtonGroup>
          <button className="modal-group-button" onClick={closeModal}>취소하기</button>
          <button className="modal-group-button">수정하기</button>
        </ButtonGroup>
      </ModalContainer>
    </ModalOverlay>
  );
};

FileUploadModalContainer.propTypes = {
  closeModal: PropTypes.func.isRequired,
};


export default FileUploadModalContainer;