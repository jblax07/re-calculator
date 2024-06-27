import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
import jobRoutes from './routes/jobRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/your-db-name', {
  // Use correct options as per your MongoDB version
});

app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
