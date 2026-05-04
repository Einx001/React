function PostList() {
  return (
    <main className="content">
      <article>
        <h2>Lorem ipsum dolor sit amet</h2>
        <div className="post">
          <div className="img-placeholder"></div>
          <p>
            Nullam est lacus, suscipit ut, dapibus quis...
          </p>
        </div>
        <a href="#">Seguir leyendo...</a>
      </article>

      <article>
        <h2>Vivamus lobortis turpis</h2>
        <div className="post">
          <div className="img-placeholder"></div>
          <p>
            Quisque eget ipsum. Donec commodo...
          </p>
        </div>
        <a href="#">Seguir leyendo...</a>
      </article>
    </main>
  );
}

export default PostList;