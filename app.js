import express from 'express';
import { connectDB } from './config/db.js';
import cors from 'cors';
import routes from './routes/index.js';


const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


  
app.use('/api', routes);

export default app;