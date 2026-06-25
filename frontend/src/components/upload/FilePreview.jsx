import { FiFileText, FiImage, FiTrash2 } from "react-icons/fi";

const FilePreview = ({ files = [], onRemove }) => {
  if (!files.length) return null;

  return (
    <div className="space-y-3 mt-6">
      {files.map((file, index) => {
        const isImage = file.type.startsWith("image");

        return (
          <div key={index} className=" flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border">
            <div className="flex items-center gap-3">
              {isImage ? (<FiImage size={24} className="text-green-600" />
              ) : (<FiFileText size={24} className="text-red-600" />)}

              <div>
                <h4 className="font-medium">{file.name}</h4>
                <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)}MB</p>
              </div>

            </div>

            <button onClick={() => onRemove(index)} className="text-red-500">
              <FiTrash2 size={20} />
            </button>

          </div>
        );
      })}
    </div>
  );
};

export default FilePreview;