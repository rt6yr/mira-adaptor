import express from 'express';
import cors from 'cors';
import { ulid } from 'ulid';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import setupRoutes from './main';  

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(helmet());

const ulidgen = ulid();

  
const router = setupRoutes();  
app.use(router);  

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
