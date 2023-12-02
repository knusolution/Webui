import axios from 'axios';

const LoginService = {
    loginUser: async (loginId, password) => {
        try {
            const response = await axios.post('http://54.166.160.145:8080/users', {
                loginId,
                password
            });
            console.log('로그인 응답:', response.data);
            return response.data;
        } catch (error) {
            console.error('로그인 실패:', error);
            throw error;
        }
    }
};

export default LoginService;
