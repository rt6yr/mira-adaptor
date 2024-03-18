import express from 'express';  
  
const app = express();  
app.set('trust proxy', true);  
  
const handler = (req, res) => {  
  const latitude = req.headers['x-vercel-ip-latitude'];  
  const longitude = req.headers['x-vercel-ip-longitude'];  
  const location = req.headers['x-vercel-ip-city'] + ',' + req.headers['x-vercel-ip-country-region'] + ',' + req.headers['x-vercel-ip-country'];  
  const ip_address = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;  
  
  const data = {  
    latitude,  
    longitude,  
    location,  
    ip_address,  
  };  
  
  res.render('main', data);  
};  
  
export default handler;  
