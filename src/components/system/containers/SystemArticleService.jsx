import axios from 'axios';

const SystemArticleService = {
    fetchDetailCategories: async (baseCategoryId) => {
        try {
            const response = await axios.get('http://54.166.160.145:8080/detail-category', {
                params: { baseCategoryId }
            });
            console.log('서버 응답:', response.data);
            return response.data;
        } catch (error) {
            console.error('Detail category 요청 실패:', error);
            throw error;
        }
    },
    fetchArticles: async (detailCategoryId, page) => {
        try {
            const response = await axios.get('http://54.166.160.145:8080/articles', {
                params: { detailCategoryId, page }
            });
            console.log('서버 응답:', response.data);
            return response.data;
        } catch (error) {
            console.error('Articles 요청 실패:', error);
            throw error;
        }
    }
};

export default SystemArticleService;
