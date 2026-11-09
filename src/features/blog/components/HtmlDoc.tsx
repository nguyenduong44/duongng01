import DOMPurify from "dompurify";

const HtmlDoc = ({ html }: { html: string }) => {
  return (
    <div
      className="retro-doc max-w-2xl"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}
    />
  );
};

export default HtmlDoc;
