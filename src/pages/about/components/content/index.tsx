import styles from "./index.module.scss";
import { Page } from "../../models/page";

const Content = () => {
  const { gotoHome } = Page.useContainer();
  return (
    <div className={styles.container}>
      <h3 className="h3">About Page</h3>
      <button type="button" onClick={gotoHome}>
        Go home
      </button>
    </div>
  );
};

export default Content;
