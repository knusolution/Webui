import { Route, Routes } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import LoginNavigation from "./LoginNavigation";
import { useToken } from "@hooks/useToken";
import Admin from "@components/Admin";
import System from "@components/System";

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
    </Routes>
  );
};

export default RootNavigation;
