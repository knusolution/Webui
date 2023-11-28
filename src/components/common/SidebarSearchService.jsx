import axios from 'axios';

const SidebarSearchService = {
  fetchSystemNames: async () => {
    let systemId = 1;
    let systemNames = [];
    let hasMore = true;

    while (hasMore) {
      try {
        const response = await axios.get('http://localhost:8080/base-category', {
          params: {
            systemId: systemId
          }
        });
        if (response.data && response.data.systemName) {
          systemNames.push({ id: systemId, name: response.data.systemName });
          systemId++;
        } else {
          hasMore = false;
        }
      } catch (error) {
        console.error('Error fetching system names:', error);
        hasMore = false;
      }
    }

    return systemNames;
  }
};

export default SidebarSearchService;
