import React, { useCallback, useState } from 'react';
import { CommentType } from '../../types/post';
import { MAX_COMMENTS } from '../../utils/constants';
import Button from '../Button/Button';
import Comment from '../Comment/Comment';
import styles from './CommentContainer.module.scss';

type CommentContainerProps = {
  comments: CommentType[] | undefined,
};

const FewComments = ({ comments }: { comments: CommentType[] }) => (
  <>
    {comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
  </>
);

const ManyComments = ({ comments }: { comments: CommentType[] }) => {
  const [isOpen, setOpen] = useState(false);
  const onButtonClick = useCallback(() => setOpen(!isOpen), [isOpen]);
  return (
    <>
      {comments.slice(0, MAX_COMMENTS)
        .map((comment) => <Comment key={comment.id} comment={comment} />)}
      {!isOpen && (
        <div className={styles.button}><Button onClick={onButtonClick}>More Comments</Button></div>
      )}
      {isOpen && comments.slice(MAX_COMMENTS)
        .map((comment) => <Comment key={comment.id} comment={comment} />)}
    </>
  );
};

const CommentContainer = ({ comments }: CommentContainerProps) => {
  const Comments = React.useCallback(() => {
    if (!comments) return <p>No comments</p>;
    if (comments.length <= MAX_COMMENTS) return <FewComments comments={comments} />;
    return <ManyComments comments={comments} />;
  }, [comments]);

  return (
    <div className={styles.comments}>
      <h2>{`Comments (${comments?.length || 0})`}</h2>
      <Comments />
    </div>
  );
};

export default CommentContainer;
