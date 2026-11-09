import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loggedOut } from "../store/authSlice";
import { useArticles, useDeleteArticle } from "../hooks/useAdmin";
import ExplorerWindow from "../../../components/explorer/ExplorerWindow";

const ArticleListPage = () => {
  const dispatch = useDispatch();
  const { data: articles = [], isLoading } = useArticles();
  const del = useDeleteArticle();

  return (
    <ExplorerWindow title="Dashboard" path="/admin" items={articles.length}>
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-lg font-bold">articles</h1>
        <div className="flex gap-2">
          <Link
            to="/admin/articles/new"
            className="px-3 h-8 flex items-center text-sm font-bold border border-line bg-select hover:bg-paper active:translate-y-px"
          >
            + new
          </Link>
          <button
            type="button"
            onClick={() => dispatch(loggedOut())}
            className="px-3 h-8 text-sm border border-line bg-ivory hover:bg-select active:translate-y-px"
          >
            logout
          </button>
        </div>
      </div>

      {isLoading && <p className="text-sm text-muted">loading...</p>}

      <div className="flex flex-col divide-y divide-line border-y border-line">
        {articles.map((post) => (
          <div key={post.slug} className="flex items-center gap-2 p-2 hover:bg-select">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold truncate">{post.title}</p>
              <p className="text-xs text-muted">{post.date}</p>
            </div>
            <Link
              to={`/admin/articles/${post.slug}`}
              className="text-xs text-accent underline shrink-0"
            >
              edit
            </Link>
            <button
              type="button"
              onClick={() => {
                if (confirm(`delete "${post.title}"?`)) del.mutate(post.slug);
              }}
              className="text-xs text-muted underline shrink-0"
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </ExplorerWindow>
  );
};

export default ArticleListPage;
