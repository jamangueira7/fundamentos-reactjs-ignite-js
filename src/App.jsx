import { Post } from "./components/Post.jsx";
import { Header } from "./components/Header.jsx";
import { Sidebar } from "./components/Sidebar.jsx";

import styles from "./App.module.css";
import "./global.css";

function App() {

  return (
      <div>
        <Header />
        <div className={styles.wrapper}>
            <Sidebar />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
      </div>

  )
}

export default App
