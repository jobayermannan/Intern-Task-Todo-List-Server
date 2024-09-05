import express, { json } from 'express';
import cors from 'cors';


dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(json());

// Use task routes
app.use('/api', taskRouter);

// Default route to check the server
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
