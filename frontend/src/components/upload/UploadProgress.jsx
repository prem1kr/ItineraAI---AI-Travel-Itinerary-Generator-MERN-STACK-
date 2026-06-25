const UploadProgress = ({ progress = 0 }) => {
  return (
    <div className="w-full mt-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium">Upload Progress</span>
        <span>{progress}%</span>
      </div>

      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default UploadProgress;