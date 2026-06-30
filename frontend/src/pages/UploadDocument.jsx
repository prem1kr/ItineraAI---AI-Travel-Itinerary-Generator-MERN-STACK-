import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import UploadBox from "../components/upload/UploadBox";
import FilePreview from "../components/upload/FilePreview";
import UploadProgress from "../components/upload/UploadProgress";
import Button from "../components/common/Button";
import Loader from "../components/common/Loader";
import { uploadDocuments } from "../services/uploadService";
import { uploadStart, uploadSuccess, uploadFailure } from "../redux/slices/uploadSlice";
import { showSuccess, showError } from "../utils/toast";

const UploadDocument = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleFilesSelect = (selectedFiles) => {
    setFiles(selectedFiles);
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (!files.length) {
      return showError("Please select at least one document");
    }

    try {
      setLoading(true);
      dispatch(uploadStart());
      const response = await uploadDocuments(files, (uploadProgress) => { setProgress(uploadProgress); });
      console.log("UPLOAD RESPONSE:", response);
      console.log("UPLOAD RESPONSE DATA:", response.data);

      const documents = response.data;

      dispatch(uploadSuccess({ files: documents.files, extractedData: documents.data.extractedText }));
      showSuccess("Documents uploaded successfully");
      navigate("/generate-itinerary");

    } catch (error) {
      dispatch(uploadFailure(error.response?.data?.message || error.message));
      showError(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading && progress === 100) {
    return <Loader />;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Upload Travel Documents</h1>
      <UploadBox onFilesSelect={handleFilesSelect} />
      <FilePreview files={files} onRemove={removeFile} />

      {progress > 0 && (
        <div className="mt-6">
          <UploadProgress progress={progress} />
        </div>
      )}

      {files.length > 0 && (
        <div className="mt-6">
          <Button onClick={handleUpload} className="w-full md:w-auto">
            Upload & Continue
          </Button>
        </div>
      )}
    </div>
  );
};

export default UploadDocument;