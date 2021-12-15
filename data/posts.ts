export type PostType = {
  userId: number,
  id: number,
  title: string,
  body: string,
};

export type CommentType = {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
};

export type PostInfoType = {
  content: PostType,
  comments?: CommentType[],
};

export async function getPosts(perPage?: number, page?: number) {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: PostType[] = await result.json();

  if (perPage && page) {
    const start = (page - 1) * perPage;
    return posts.slice(start, start + perPage);
  }
  return posts;
}

export async function getPost(id: number, includeComments: boolean = false) {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post: PostType = await result.json();
  if (!includeComments) return { content: post };

  const rawComments = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  const comments: CommentType[] = await rawComments.json();
  return { content: post, comments };
}

export async function getPostCount() {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await result.json();
  return posts.length;
}
