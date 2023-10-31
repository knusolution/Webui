import { Route, Routes } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import LoginNavigation from "./LoginNavigation";
import { useToken } from "@hooks/useToken";
import Admin from "@components/Admin";
import System from "@components/System";
import Modify_sys from "@components/Modify_sys";
import Modify_sys_Modal from "@components/Modify_sys_Modal";

const RootNavigation = () => {
  const { getToken } = useToken();

  return (
    <Routes>
      <Route
        path="*"
        element={getToken("access") ? <MainNavigation /> : <LoginNavigation />}
      />
      <Route path="/" element={<MainNavigation></MainNavigation>}/>
      <Route path="/login" element={<LoginNavigation></LoginNavigation>}/>
      <Route path="/admin" element={<Admin></Admin>}/>
      <Route path="/system" element={<System></System>}/>
      <Route path="/modify_sys" element={<Modify_sys></Modify_sys>} />
      <Route path="/modify_sys_modal" element={<Modify_sys_Modal></Modify_sys_Modal>} />
    </Routes>
  );
};

export default RootNavigation;
