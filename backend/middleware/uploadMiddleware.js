import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/uploads/documents");
  },

  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    "application/pdf",
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/webp",
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);

  } else {
    cb(new Error("Only PDF and Image files are allowed"));
  }
};

const uploadMiddleware = multer({
  storage, fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 },
});

export default uploadMiddleware;