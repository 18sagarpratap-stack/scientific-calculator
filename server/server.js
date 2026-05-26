import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import calculatorRoutes from './routes/calculator.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware - Allow all CORS origins
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', calculatorRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
  console.log(`CORS: Enabled for all origins`);
});

export default app;
