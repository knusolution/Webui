import axios from 'axios';

const SystemNameService = {
    fetchBaseCategory: async (systemId) => {
        try {
            const response = await axios.get('http://54.166.160.145:8080/base-category', {
                params: {
                    systemId
                }
            });
            console.log('서버 응답:', response.data);
            return response.data;
        } catch (error) {
            console.error('Base category 요청 실패:', error);
            throw error;
        }
    }
};

export default SystemNameService;
