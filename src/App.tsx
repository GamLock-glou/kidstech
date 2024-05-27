import { RootStoreContext } from './hooks/useStore';
import { SideBar } from './components/sideBar/SideBar';
import { useInitApp } from './hooks/useInitApp';
import styles from "./app.module.scss";
import { Courses } from './components/courses/Courses';

const App = () => {
  const {loading, error, contextValue} = useInitApp()
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <RootStoreContext.Provider value={contextValue}>
      <div className={styles.container}>
        <SideBar />
        <Courses />
      </div>
    </RootStoreContext.Provider>
  );
}

export default App;