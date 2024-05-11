import { useLocation } from "react-router-dom";
import Layout from "../Layout";
import { ProvidersProps } from "../Provider/types";
import Header from "../header/header";
import SideBar from "../sideBar/sideBar";

export default function PageTemplate({ children }: ProvidersProps) {
  const { pathname } = useLocation();
  return (
    <div style={{width : "100%",height:"100vh",display:"flex"}}>
      {pathname !== "/login" && <Header />}
      {pathname !== "/login" && <SideBar />}
      <Layout>{children}</Layout>
    </div>
  );
}