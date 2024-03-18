import { v4 as uuidv4 } from 'uuid';  
import { ulid } from 'ulid';  
import mime from 'mime';  
import multer from 'multer';   
import { dirname } from 'path';  
import { fileURLToPath } from 'url';      
  
export const getRootDir = () => dirname(fileURLToPath(import.meta.url));     
  
export const getMimeType = mime.getType;  
export const multerInstance = multer();  
