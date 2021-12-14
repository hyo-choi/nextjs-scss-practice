export type PostType = {
  userId: number,
  id: number,
  title: string,
  body: string,
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

export async function getPostCount() {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await result.json();
  return posts.length;
}
