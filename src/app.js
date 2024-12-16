import express from 'express';
import cors from 'cors';

import ProjectRoutes from './routes/projectRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', ProjectRoutes);

// Default Route
app.get('/', (req, res) => {
    res.send('Welcome to the DVHQ Backend API');
});

export default app;