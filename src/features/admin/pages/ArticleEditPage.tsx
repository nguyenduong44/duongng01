import { Suspense, lazy, useState } from "react";
import type { FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useArticle, useSaveArticle } from "../hooks/useAdmin";
import type { BlogPost, ContentBlock } from "../../blog/types/blog.types";
import ExplorerWindow from "../../../components/explorer/ExplorerWindow";

const RichEditor = lazy(() => import("../components/RichEditor"));

const input =
  "w-full h-9 px-3 text-sm border border-line bg-paper focus:outline-none focus:border-accent";

const blockToHtml = (b: ContentBlock): string => {
  switch (b.type) {
    case "heading":
      return `<h2>${b.text}</h2>`;
    case "paragraph":
      return `<p>${b.text}</p>`;
    case "image":
      return `<img src="${b.src}" alt="${b.caption ?? ""}">`;
    case "quote":
      return `<blockquote><p>${b.text}</p></blockquote>`;
    case "code":
      return `<pre><code>${b.code}</code></pre>`;
    case "video":
      return `<p>[video: ${b.videoId}]</p>`;
  }
};

const EditForm = ({ post }: { post?: BlogPost }) => {
  const navigate = useNavigate();
  const save = useSaveArticle();
  const [title, setTitle] = useState(post?.title ?? "");
  const [html, setHtml] = useState(
    post?.contentHtml ?? post?.content.map(blockToHtml).join("") ?? "",
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const slug =
      post?.slug ??
      title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
    save.mutate(
      {
        slug,
        title,
        date: post?.date ?? new Date().toISOString().slice(0, 10).replace(/-/g, "."),
        author: post?.author ?? "duong nguyen",
        excerpt: text.slice(0, 120),
        content: post?.content ?? [],
        contentHtml: html,
      },
      { onSuccess: () => navigate("/admin") },
    );
  };

  return (
    <form onSubmit={onSubmit} className="max-w-2xl flex flex-col gap-2">
      <label className="text-xs text-muted">title</label>
      <input className={input} value={title} onChange={(e) => setTitle(e.target.value)} required />
      <label className="text-xs text-muted">content</label>
      <Suspense fallback={<p className="text-sm text-muted">loading editor...</p>}>
        <RichEditor value={html} onChange={setHtml} />
      </Suspense>
      {save.isError && <p className="text-xs text-accent">save failed, try again.</p>}
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={save.isPending}
          className="px-4 h-9 text-sm font-bold border border-line bg-select hover:bg-paper active:translate-y-px disabled:opacity-50"
        >
          {save.isPending ? "saving..." : "save"}
        </button>
        <button
          type="button"
          onClick={() => navigate("/admin")}
          className="px-4 h-9 text-sm border border-line bg-ivory hover:bg-select active:translate-y-px"
        >
          cancel
        </button>
      </div>
    </form>
  );
};

const ArticleEdit = () => {
  const { slug } = useParams();
  const isNew = slug === "new";
  const { data: post, isLoading } = useArticle(isNew ? undefined : slug);

  return (
    <ExplorerWindow
      title={isNew ? "New article" : (post?.title ?? "Edit article")}
      path="/admin/articles"
      items={0}
    >
      {isLoading ? (
        <p className="text-sm text-muted">loading...</p>
      ) : (
        <EditForm key={post?.slug ?? "new"} post={post} />
      )}
    </ExplorerWindow>
  );
};

export default ArticleEdit;
