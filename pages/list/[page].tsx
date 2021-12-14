/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRouter } from 'next/router';
import Pagination from '../../components/Pagination/Pagination';
import PostPreview from '../../components/PostPreview/PostPreview';
import { getPostCount, getPosts, PostType } from '../../data/posts';

const POST_PER_LIST = 5;
const LIST_PER_PAGE = 10;

type ListProps = {
  posts: PostType[],
  pagination: {
    start: number,
    end: number,
    max: number,
  },
};

const List = ({ posts, pagination }: ListProps) => {
  const router = useRouter();
  const { page } = router.query;
  const { start, end, max } = pagination;

  return (
    <section>
      <h1>Recent Posts</h1>
      {posts.map(({ id, title, body }) => (
        <PostPreview
          key={id}
          title={title}
          body={body}
          href={`/post/${id}`}
        />
      ))}
      <Pagination
        path="/list"
        start={start}
        end={end}
        prev={Number(page) > LIST_PER_PAGE}
        next={end < max}
      />
    </section>
  );
};

export async function getStaticPaths() {
  const postCount = await getPostCount();
  let max = Math.floor(postCount / POST_PER_LIST);
  if (postCount % POST_PER_LIST > 0) max += 1;
  const pages = Array(max).fill(1).map((value, idx) => value + idx);
  const paths = pages.map((page) => ({
    params: { page: String(page) },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const posts = await getPosts(POST_PER_LIST, params.page);
  const postCount = await getPostCount();
  let max = Math.floor(postCount / POST_PER_LIST);
  if (postCount % POST_PER_LIST > 0) max += 1;
  const start = Math.floor((params.page - 1) / LIST_PER_PAGE) * LIST_PER_PAGE + 1;
  const end = start + LIST_PER_PAGE - 1;
  return {
    props: {
      posts,
      pagination: {
        start,
        end: end > max ? max : end,
        max,
      },
    },
    revalidate: 10,
  };
}

export default List;
