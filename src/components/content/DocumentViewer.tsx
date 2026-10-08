import type { ContentBlock } from "../../data/types";

const DocumentViewer = ({ blocks }: { blocks: ContentBlock[] }) => {
  return (
    <div className="font-doc max-w-2xl">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={i} className="font-ubuntu text-lg font-bold mt-6 mb-2">
                {block.text}
              </h2>
            );
          case "paragraph":
            return (
              <p key={i} className="font-doc text-[15px] leading-7 mb-4">
                {block.text}
              </p>
            );
          case "image":
            return (
              <figure key={i} className="my-5">
                <img
                  src={block.src}
                  alt={block.caption ?? ""}
                  loading="lazy"
                  className="w-full border border-line"
                />
                {block.caption && (
                  <figcaption className="font-ubuntu text-xs text-muted mt-1">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="font-doc border-l-2 border-accent pl-4 my-5 italic text-[15px] leading-7"
              >
                {block.text}
              </blockquote>
            );
          case "code":
            return (
              <pre
                key={i}
                className="bg-ink text-ivory text-xs leading-5 p-3 my-5 overflow-x-auto rounded-sm"
              >
                <code>{block.code}</code>
              </pre>
            );
          case "video":
            return (
              <div
                key={i}
                className="relative w-full pt-[56.25%] bg-ink my-5 overflow-hidden rounded-sm"
              >
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${block.videoId}`}
                  title="Video"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            );
        }
      })}
    </div>
  );
};

export default DocumentViewer;
