import { Link, useParams } from "react-router-dom";
import ExplorerWindow from "../components/explorer/ExplorerWindow";
import DocumentViewer from "../components/content/DocumentViewer";
import { POSTS } from "../data/blog";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <ExplorerWindow title="Not found" path={`/blog/${slug}`} items={0}>
        <p className="text-sm">file not found.</p>
        <Link to="/blog" className="text-sm text-accent underline">
          ← back to /blog
        </Link>
      </ExplorerWindow>
    );
  }

  return (
    <ExplorerWindow title={post.title} path={`/blog/${post.slug}`} items={1}>
      <h1 className="text-xl font-bold max-w-2xl">{post.title}</h1>
      <p className="text-xs text-muted mt-1">
        {post.date} · by {post.author}
      </p>
      <hr className="border-line my-4 max-w-2xl" />
      <DocumentViewer blocks={post.content} />
      <hr className="border-line my-4 max-w-2xl" />
      <Link to="/blog" className="text-sm text-accent underline">
        ← back to /blog
      </Link>
    </ExplorerWindow>
  );
};

export default BlogDetail;
