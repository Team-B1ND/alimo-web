import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "src/styles/global";
import PageTemplate from "../PageTemplate/index";
import Router from "../../router/router";

const Providers = () => {
  return (
    <RecoilRoot>
      <GlobalStyles/>
        <PageTemplate>
          <Router />
        </PageTemplate>
    </RecoilRoot>
  );
};

export default Providers;
