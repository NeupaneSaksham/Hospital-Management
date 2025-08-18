import { useState } from "react";

type FileUploadProps = {
  onFileSelect: (file: File | null) => void;
};

export default function FileUpload({ onFileSelect }: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type === "application/pdf") {
        onFileSelect(file);
      } else {
        alert("Please upload a PDF file only.");
        onFileSelect(null);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type === "application/pdf") {
        onFileSelect(file);
      } else {
        alert("Please upload a PDF file only.");
        onFileSelect(null);
      }
    }
  };

  return (
    <div
      className={`mt-2 border-2 border-dashed rounded-lg p-4 sm:p-6 text-center ${dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        type="file"
        id="fileUpload"
        className="hidden"
        accept="application/pdf"
        onChange={handleFileChange}
      />
      <label
        htmlFor="fileUpload"
        className="cursor-pointer text-gray-500 hover:text-gray-700"
      >
        <div className="flex flex-col items-center">
          <svg
            className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
          <p className="mt-2 text-sm sm:text-base">Drag and drop files here</p>
          <p className="text-xs sm:text-sm">or</p>
          <p className="text-xs sm:text-sm underline">Browse Files</p>
        </div>
      </label>
      {dragActive && <div className="absolute inset-0 bg-transparent"></div>}
    </div>
  );
}