# Scientific Calculator

A full-stack scientific calculator application with a React frontend and Node.js/Express backend.

## Features

### Basic Operations
- Addition (+), Subtraction (-), Multiplication (*), Division (/)
- Percentage (%)
- Decimal support

### Scientific Functions
- Trigonometric: sin, cos, tan
- Inverse trigonometric: asin, acos, atan
- Logarithmic: log (base 10), ln (natural log)
- Power operations: x², x³, x^y
- Square root (√)
- Factorial (!)
- Constants: π, e

### Additional Features
- Calculation history
- Memory operations (M+, M-, MR, MC)
- Clear display (C) and clear all (AC)
- Keyboard support
- Responsive design
- Dark mode support

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Backend Setup

```bash
cd server
npm install
npm start
```

The server will run on `http://localhost:5000`

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

The client will run on `http://localhost:5173`

## API Endpoints

### POST /api/calculate
Calculates basic mathematical expressions.

**Request Body:**
```json
{
  "expression": "2 + 2 * 3"
}
```

**Response:**
```json
{
  "success": true,
  "expression": "2 + 2 * 3",
  "result": 8
}
```

### POST /api/calculate-scientific
Calculates scientific functions.

**Request Body:**
```json
{
  "operation": "sin",
  "value": 0
}
```

**Response:**
```json
{
  "success": true,
  "operation": "sin",
  "value": 0,
  "result": 0
}
```

## Technologies Used

### Frontend
- React 18
- Vite
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- CORS

## Docker

```bash
docker-compose up
```

## License

MIT
