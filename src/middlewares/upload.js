// src/middlewares/upload.js

import multer from 'multer';

const storage = multer.memoryStorage();

export const upload = multer({ storage });
