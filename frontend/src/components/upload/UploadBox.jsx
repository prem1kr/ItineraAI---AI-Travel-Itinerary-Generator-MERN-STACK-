import { useRef } from "react";
import { FiUploadCloud } from "react-icons/fi";

const UploadBox = ({ onFilesSelect }) => {
  const inputRef = useRef();

  const handleFiles = (files) => {
    const selectedFiles = Array.from(files);
    if (onFilesSelect) {
      onFilesSelect(selectedFiles);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e) => {
    handleFiles(e.target.files);
  };

  return (
    <div onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}
      className="border-2 border-dashed border-blue-400 rounded-2xlp-10text-center bg-blue-50 cursor-pointer" onClick={() => inputRef.current.click()}>
      <FiUploadCloud size={50} className="mx-auto text-blue-600 mb-4" />

      <h3 className="text-xl font-semibold">Upload Travel Documents</h3>
      <p className="text-gray-500 mt-2">Drag & Drop or Click to Upload</p>
      <p className="text-sm text-gray-400 mt-2">PDF, JPG, JPEG, PNG</p>
      <input ref={inputRef} type="file" multiple accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={handleChange} />
    </div>
  );
};

export default UploadBox;