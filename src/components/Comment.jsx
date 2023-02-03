import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar.jsx";
import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {
    function handleDeleteComment() {
        onDeleteComment(content);
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
                  <button>
                      <ThumbsUp />
                      Aplaudir <span>20</span>
                  </button>

              </footer>
            </div>
        </div>
    );
}