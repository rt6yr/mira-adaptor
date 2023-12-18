import express from 'express';
import cors from 'cors';
import { createClient } from "@supabase/supabase-js";
import { ulid } from 'ulid';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import ejs from 'ejs';
import path  from 'path';


dotenv.config();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
const landingEjsPath = path.join(__dirname, '../views/landingpage.ejs');

const mainRoutes = (ulidgen) => {
  const router = express.Router();

  router.all("*", async (req, res) => {
    const data = req.body;
    const jsonString = JSON.stringify(data);
    const strippedStr = jsonString.replace(/`/g, '');

    let log = {
      status: 'ok',
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

   res.render(landingEjsPath);
    //  soon will be sent to database
    console.log(log);
  });

  return router;
};

export default mainRoutes;
