import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  BlockQuote,
  Bold,
  ClassicEditor,
  CodeBlock,
  Essentials,
  Heading,
  Italic,
  Link,
  List,
  Paragraph,
} from "ckeditor5";
import "ckeditor5/ckeditor5.css";

interface RichEditorProps {
  value: string;
  onChange: (html: string) => void;
}

const RichEditor = ({ value, onChange }: RichEditorProps) => {
  return (
    <div className="retro-editor">
      <CKEditor
      editor={ClassicEditor}
      data={value}
      config={{
        licenseKey: "GPL",
        plugins: [Essentials, Paragraph, Heading, Bold, Italic, Link, List, BlockQuote, CodeBlock],
        toolbar: [
          "heading",
          "|",
          "bold",
          "italic",
          "link",
          "|",
          "bulletedList",
          "numberedList",
          "|",
          "blockQuote",
          "codeBlock",
          "|",
          "undo",
          "redo",
        ],
      }}
      onChange={(_event, editor) => onChange(editor.getData())}
      />
    </div>
  );
};

export default RichEditor;
