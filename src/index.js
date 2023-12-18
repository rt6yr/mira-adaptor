import express from 'express';  
import cors from 'cors';  
import { ulid } from 'ulid';  
import helmet from 'helmet';  
import morgan from 'morgan';  
import dotenv from "dotenv/config";  
  
const app = express();  
const PORT = process.env.PORT || 3000;  
app.use(cors());  
app.use(bodyParser.json());  
app.use(morgan('combined'));  
app.use(helmet());  

const ulidgen=ulid();

  
app.all("*", async (req, res) => {  
  const data = req.body;  
  const jsonString = JSON.stringify(data);  
  const strippedStr = jsonString.replace(/`/g, '');  

    let log = {
        status: "ok",
        url: req.originalUrl,
        ip_address: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        request_body: req.body,
        request_method: req.method,
        lat: req.headers['x-vercel-ip-latitude'],
        lon: req.headers['x-vercel-ip-longitude'],
        city: req.headers['x-vercel-ip-city'],
        region: req.headers['x-vercel-ip-country-region'],
        country: req.headers['x-vercel-ip-country'],
        UA: req.headers['user-agent'],
        date_time: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
        ulid: ulidgen
    };

  req.send(log);
  
});

app.listen(PORT, () => {  
  console.log(`Server listening on port ${PORT}`);  
}); 
