import { Page } from "../../models/page";
import styles from "./index.module.scss";

const Content = () => {
  const {
    state: { count },
    gotoAbout,
    onIncrease,
    onDecrease,
  } = Page.useContainer();
  return (
    <div className={styles.container}>
      <h3 className="h3">Home Page</h3>
      <span className={styles.goto} onClick={gotoAbout}>
        Go about
      </span>
      <div>
        <button onClick={onIncrease}>+</button>
        <span className={styles.count}>{count}</span>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
};

export default Content;
