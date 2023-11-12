import AdminHeaderContainer from '@components/admin/containers/AdminHeaderContainer'
import SystemTabMenuContainer from './containers/SystemTabMenuContainer';
import AdminBorderContainer from '@components/admin/containers/AdminBoardContainer';

const System = () => {
    return (
      <>
        <AdminHeaderContainer></AdminHeaderContainer>
        <SystemTabMenuContainer></SystemTabMenuContainer>
        <AdminBorderContainer></AdminBorderContainer>
      </>
    );
  };
  
  export default System;