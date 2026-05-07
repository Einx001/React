import PostsTable from './PostsTable';

function PostsCard() {
  return (
    <div className="card">
      <h2>Recent Posts</h2>
      <PostsTable />
    </div>
  );
}

export default PostsCard;