import styles from './Comment.module.css';
import {ThumbsUp, Trash} from "phosphor-react";
export function Comment() {
  return(
    <div className={styles.comment}>
      <img
          className={styles.avatar}
          src="https://github.com/jamangueira7.png"
      />
      <div className={styles.commentBox}>
          <div className={styles.commentContent}>
              <header>
                  <div className={styles.authorAndTime}>
                      <time
                          title="31 de janeiro ás 15:34"
                          dateTime="2023-31-01">Cerca de 1h atrás
                      </time>
                  </div>
                  <button title="Deletar comentário">
                      <Trash size={20} />
                  </button>
              </header>
              <p>Muito bom Devan, parabéns! </p>
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