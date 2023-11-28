// AdminArticleService.jsx
import axios from 'axios';

const AdminArticleService = {
    fetchArticles: async (page) => {
        try {
            const response = await axios.get('http://localhost:8080/wait-article', {
                params: { page }
            });
            console.log('Success fetching articles:', response);
            return response.data;
        } catch (error) {
            console.error('Error fetching articles:', error);
            throw error;
        }
    }
};

export default AdminArticleService;
