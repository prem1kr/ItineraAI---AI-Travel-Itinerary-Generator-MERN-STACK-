import Modal from "../common/Modal";
import { FiCopy } from "react-icons/fi";

const ShareModal = ({ isOpen, onClose, shareLink }) => {

  const copyLink = async () => {
    await navigator.clipboard.writeText(shareLink);
    alert("Link Copied");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Share Itinerary">
      <div className="space-y-4">
        <input readOnly value={shareLink} className="w-full border rounded-lg p-3" />
        <button onClick={copyLink} className=" w-full bg-blue-600 text-white py-3 rounded-lg flex justify-center items-center gap-2">
          <FiCopy />
          Copy Link
        </button>
      </div>
    </Modal>
  );
};

export default ShareModal;