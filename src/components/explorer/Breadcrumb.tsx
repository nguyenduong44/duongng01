import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, House } from "lucide-react";

interface BreadcrumbProps {
  path: string;
}

const Breadcrumb = ({ path }: BreadcrumbProps) => {
  const navigate = useNavigate();

  const btn =
    "w-8 h-8 flex items-center justify-center border border-line bg-ivory hover:bg-select active:translate-y-px";

  return (
    <div className="flex items-center gap-2 px-3 py-2 border-b border-line bg-ivory">
      <button type="button" aria-label="Back" className={btn} onClick={() => navigate(-1)}>
        <ArrowLeft className="w-4 h-4" />
      </button>
      <button type="button" aria-label="Forward" className={btn} onClick={() => navigate(1)}>
        <ArrowRight className="w-4 h-4" />
      </button>
      <button type="button" aria-label="Home" className={btn} onClick={() => navigate("/")}>
        <House className="w-4 h-4" />
      </button>
      <div className="flex-1 h-8 flex items-center px-3 border border-line bg-paper text-sm truncate">
        {path}
      </div>
    </div>
  );
};

export default Breadcrumb;
