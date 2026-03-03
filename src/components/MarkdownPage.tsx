import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownPageProps {
  content: string;
}

const MarkdownPage = ({ content }: MarkdownPageProps) => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <article className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </div>
  );
};

export default MarkdownPage;
