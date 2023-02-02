import { Post } from "./components/Post.jsx";
import { Header } from "./components/Header.jsx";
import { Sidebar } from "./components/Sidebar.jsx";

import styles from "./App.module.css";
import "./global.css";

const posts = [
    {
        id: 1,
        author: {
          avatarUrl: 'https://github.com/jamangueira7.png',
          name: 'João Mangueira',
          role: 'Web Developer'
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋'},
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
            { type: 'link', content: 'jane.design/doctorcare'},
        ],
        publishedAt: new Date('2023-02-02 10:00:00'),
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/leticea.png',
            name: 'Letícia',
            role: 'FrontEnd'
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋'},
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
            { type: 'link', content: 'jane.design/doctorcare'},
        ],
        publishedAt: new Date('2023-02-01 10:00:00'),
    },
];
function App() {

  return (
      <div>
        <Header />
        <div className={styles.wrapper}>
            <Sidebar />
            <main>
                {
                    posts.map(post => {
                        return (
                            <Post
                                author={post.author}
                                content={post.content}
                                publishedAt={post.publishedAt}
                            />
                        );
                    })
                }

            </main>
        </div>
      </div>

  )
}

export default App
