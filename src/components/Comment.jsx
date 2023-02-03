import { useState } from "react";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar.jsx";
import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => state + 1);
    }

    return(
        <div className={styles.comment}>

            <Avatar
              hasBorder={false}
              src={"https://github.com/jamangueira7.png"}
            />

            <div className={styles.commentBox}>
              <div className={styles.commentContent}>
                  <header>
                      <div className={styles.authorAndTime}>
                          <strong>João Mangueira</strong>
                          <time
                              title="31 de janeiro ás 15:34"
                              dateTime="2023-31-01">Cerca de 1h atrás
                          </time>
                      </div>
                      <button onClick={handleDeleteComment} title="Deletar comentário">
                          <Trash size={24} />
                      </button>
                  </header>
                  <p>{content} </p>
              </div>
              <footer>
                  <button onClick={handleLikeComment}>
                      <ThumbsUp />
                      Aplaudir <span>{likeCount}</span>
                  </button>

              </footer>
            </div>
        </div>
    );
}