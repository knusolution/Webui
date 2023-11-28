// ModifyService.jsx
import axios from 'axios';

const ModifyService = async (userData) => {
  try {
    const response = await axios.put('http://localhost:8080/users', userData);
    console.log('Success in modifyUser:', response);
    return response.data;
  } catch (error) {
    console.error('Error during the update request:', error);
    throw error;
  }
};

export default ModifyService;
