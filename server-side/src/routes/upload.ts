import { Router } from 'express';
import multer from 'multer';

const router = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage });

// Api to upload image
router.post('/', upload.single('file'), (req, res) => {
  try {
    return res.status(200).json('Successfully uploaded image.');
  } catch (error) {
    console.error(error);
  }
});

export default router;
