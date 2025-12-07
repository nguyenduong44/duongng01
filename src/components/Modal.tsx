import { useState } from "react";
import type { ModalProps } from "../types";
import { Maximize2, Minimize2, X } from "lucide-react";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  icon,
  headerColor = "from-blue-600 to-blue-500",
}: ModalProps) => {
  const [isMaximized, setIsMaximized] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-pop-in "
      onClick={onClose}
    >
      <div
        className={`bg-white shadow-2xl transition-all duration-300 flex flex-col overflow-hidden ${
          isMaximized ? "w-full h-full" : "w-full max-w-5xl h-[80vh] rounded-lg"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className={`bg-gradient-to-r ${headerColor} px-4 py-2 flex items-center justify-between`}
        >
          <div className="flex items-center gap-2">
            {icon && (
              <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                {icon}
              </div>
            )}
            <span className="text-white font-semibold text-sm">{title}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="w-6 h-6 bg-white/20 hover:bg-white/30 rounded flex items-center justify-center transition-colors"
            >
              {isMaximized ? (
                <Minimize2 className="w-3 h-3 text-white" />
              ) : (
                <Maximize2 className="w-3 h-3 text-white" />
              )}
            </button>
            <button
              onClick={onClose}
              className="w-6 h-6 bg-red-500 hover:bg-red-600 rounded flex items-center justify-center transition-colors"
            >
              <X className="w-3 h-3 text-white" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
