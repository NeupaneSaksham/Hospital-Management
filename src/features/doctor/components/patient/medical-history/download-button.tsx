import React from "react";
import { Download } from "lucide-react";

type DownloadButtonProps = {
  onClick?: () => void;
};

const DownloadButton: React.FC<DownloadButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white hover:bg-white border-2 border-gray-300 hover:text-cyan-600 hover:cursor-pointer text-black p-2 rounded-md float-right transition-colors"
    >
      <Download size={16} />
    </button>
  );
};

export default DownloadButton;