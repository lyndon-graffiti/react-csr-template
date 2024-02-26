import generateRouteView from "@/utils/routes/generate-route-view";
import { Outlet } from "react-router-dom";
import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";

const Layout = () => {
  const routeViewsMap = generateRouteView();
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles["app-name"]}>Welcome to the app!</h1>
        <span>wuxianzhi</span>
      </header>
      <main className={styles.main}>
        <nav className={styles.nav}>
          {routeViewsMap
            ?.filter(it => it?.path?.length > 1)
            ?.map(it => (
              <NavLink className={styles.link} key={it?.key} to={it?.path}>
                {it?.name}
              </NavLink>
            ))}
        </nav>
        <div className={styles.content}>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
