import express from 'express';
import cors from 'cors';
import { ulid } from 'ulid';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mainRoutes from './routes/main.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(helmet());

const ulidgen = ulid();

  
const mains =  mainRoutes(ulidgen);  
app.use(mains);  

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
