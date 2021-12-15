import { CommentType } from '../../data/posts';
import styles from './Comment.module.scss';

type CommentProps = {
  comment: CommentType,
};

const Comment = ({ comment }: CommentProps) => {
  const { name, email, body } = comment;
  return (
    <div className={styles.comment}>
      <a href={`mailto:${email}`}><p className={styles.name}>{name}</p></a>
      <p>{body}</p>
    </div>
  );
};

export default Comment;
