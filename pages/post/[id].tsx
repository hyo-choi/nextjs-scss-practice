import Head from 'next/head';
import { useRouter } from 'next/router';
import classnames from 'classnames';
import { PostInfoType } from '../../types/post';
import styles from './post.module.scss';
import { getPost, getPostCount } from '../../utils/api/posts';
import PostPreview from '../../components/PostPreview/PostPreview';
import Pagination from '../../components/Pagination/Pagination';
import CommentContainer from '../../components/CommentContainer/CommentContainer';
import { LIST_PER_PAGE } from '../../utils/constants';

type PostProps = {
  prev?: PostInfoType,
  post: PostInfoType,
  next?: PostInfoType,
  pagination: {
    start: number,
    end: number,
    max: number,
  },
};

const Post = ({
  prev, post, next, pagination,
}: PostProps) => {
  const router = useRouter();
  const { id } = router.query;
  const { content, comments } = post;
  const { start, end, max } = pagination;
  return (
    <>
      <Head>
        <title>{content.title}</title>
      </Head>
      <article className={styles.article}>
        <h1>{content.title}</h1>
        <p>{content.body}</p>
      </article>
      <section className={styles.other}>
        <CommentContainer comments={comments} />
      </section>
      <section className={classnames(styles.other, styles.otherPosts)}>
        {prev
          && (
            <>
              <h2>Prev Post</h2>
              <PostPreview title={prev.content.title} body={prev.content.body} href={`/post/${Number(id) - 1}`} inPost />
            </>
          )}
        {next
          && (
            <>
              <h2>Next Post</h2>
              <PostPreview title={next.content.title} body={next.content.body} href={`/post/${Number(id) + 1}`} inPost />
            </>
          )}
      </section>
      <Pagination
        path="/post"
        start={start}
        end={end}
        prev={start > 1}
        next={end < max}
      />
    </>
  );
};

Post.defaultProps = {
  prev: null,
  next: null,
};

export async function getStaticPaths() {
  const postCount = await getPostCount();
  const pages = Array(postCount).fill(1).map((num, idx) => num + idx);
  const paths = pages.map((page) => ({
    params: { id: String(page) },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const { id } = params;
  const numId = Number(id);
  const postCount = await getPostCount();
  const post = await getPost(numId, true);
  const prev = numId > 1 ? await getPost(numId - 1) : null;
  const next = numId < postCount ? await getPost(numId + 1) : null;
  const halfCount = Math.floor(LIST_PER_PAGE / 2);

  return {
    props: {
      prev,
      post,
      next,
      pagination: {
        start: numId - halfCount > 0 ? numId - halfCount : 1,
        end: numId + halfCount - 1 < postCount ? numId + halfCount - 1 : postCount,
        max: postCount,
      },
    },
    revalidate: 10,
  };
}

export default Post;
