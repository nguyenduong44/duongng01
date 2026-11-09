import { useEffect, useState } from "react";

interface TextTypeProps {
  text: string | string[];
  className?: string;
  typingSpeed?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
  loop?: boolean;
}

const TextType = ({
  text,
  className = "",
  typingSpeed = 50,
  pauseDuration = 2000,
  deletingSpeed = 30,
  showCursor = true,
  cursorCharacter = "|",
  loop = true,
}: TextTypeProps) => {
  const texts = Array.isArray(text) ? text : [text];
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index % texts.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        typingSpeed,
      );
    } else if (!deleting) {
      if (!loop && index === texts.length - 1) return;
      timeout = setTimeout(() => setDeleting(true), pauseDuration);
    } else if (displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed((prev) => prev.slice(0, -1)),
        deletingSpeed,
      );
    } else {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayed, deleting, index]);

  return (
    <h1 className={`inline-block whitespace-pre-wrap tracking-tight ${className}`}>
      <span className="inline">{displayed}</span>
      {showCursor && (
        <span className="ml-1 inline-block animate-blink">
          {cursorCharacter}
        </span>
      )}
    </h1>
  );
};

export default TextType;
