/**
 * Created by wuxianzhi on 2024/01/30.
 */

import { Page } from "./models/page";
import Main from "./views/main";

const Home = () => (
  <Page.Provider>
    <Main />
  </Page.Provider>
);

export default Home;
