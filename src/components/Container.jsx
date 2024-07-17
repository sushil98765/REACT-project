import styles from "./Container.module.css";
const Container = ({ children }) => {
  return <div className Name={styles.container}>{children}</div>
}
export default Container;