import express from 'express';
import morgan from 'morgan';
import employmentsRoutes from './routes/employments.routes.js'

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.json("Api de empleos de HereMeNow");
});

app.use('/employments', employmentsRoutes)

export default app;

