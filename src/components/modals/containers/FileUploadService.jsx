import axios from 'axios';

const FileUploadService = {
  uploadFile: (detailCategoryId, file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('detailCategoryId', detailCategoryId);

    return axios.post('http://localhost:8080/article-file', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
};

export default FileUploadService;
