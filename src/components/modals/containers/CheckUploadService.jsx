import axios from 'axios';

const CheckUploadService = {
    reviewArticle: async (formData) => {
        try {
            // PUT 요청을 보내는 부분
            const response = await axios.put('http://54.166.160.145:8080/article-review', formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Success in reviewArticle:', response);
        return response.data; // 요청이 성공하면 응답 데이터를 반환
        } catch (error) {
            console.error('Error in reviewArticle:', error);
        throw error; // 오류 발생 시 예외를 던짐
        }
    }
};

export default CheckUploadService;
