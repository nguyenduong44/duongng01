import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import ExplorerWindow from "../components/explorer/ExplorerWindow";
import { POSTS } from "../data/blog";

const Blog = () => {
  return (
    <ExplorerWindow title="Blog" path="/blog" items={POSTS.length}>
      <div className="flex flex-col divide-y divide-line border-y border-line">
        {POSTS.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="flex gap-3 p-3 hover:bg-select active:translate-y-px transition-all"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 border border-line bg-paper flex items-center justify-center">
              <FileText className="w-6 h-6 text-line" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold truncate">{post.title}</p>
              <p className="text-xs text-muted mt-0.5">{post.date}</p>
              <p className="text-xs text-muted mt-1 line-clamp-2">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </ExplorerWindow>
  );
};

export default Blog;
