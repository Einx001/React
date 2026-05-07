function PostsTable() {
  const posts = [
    { date: "1/5/2018", title: "Post One", category: "Web Development" },
    { date: "1/5/2018", title: "Post Two", category: "Android Development" },
    { date: "1/5/2018", title: "Post Three", category: "iOS Development" }
  ];

  return (
    <table className="posts-table">
      <thead>
        <tr>
          <th>Date Posted</th>
          <th>Title</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {posts.map((post, index) => (
          <tr key={index}>
            <td>{post.date}</td>
            <td>{post.title}</td>
            <td>{post.category}</td>
            <td>🗑️</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PostsTable;