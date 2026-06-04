// Express framework import: API/server banane ke liye.
const express = require('express');
// CORS middleware import: frontend ko backend hit karne ki permission deta hai.
const cors = require('cors');
// Express app instance create karte hain.
const app = express();
// Port number: environment variable ho to use karo, warna 3000 use karo.
const PORT = process.env.PORT || 3000;

// Cross-origin requests allow karne ke liye CORS enable.
app.use(cors());
// JSON request body parse karne ke liye middleware.
app.use(express.json());

// Basic health/home route: browser me root URL kholne par response aata hai.
app.get('/', (req, res) => {
    // Simple text response.
    res.send('Hello World!');
});

// Ye main API route hai jise frontend Axios se call karega.
app.get('/api/hello', (req, res) => {
    // JSON format me structured response bhej rahe hain.
    res.json({
        // API success flag.
        success: true,
        // Message jo frontend par dikhaya jayega.
        message: 'Frontend aur backend successfully connect ho gaye!',
        // Current server time bhi bhej rahe hain demo ke liye.
        time: new Date().toISOString(),
    });
});

// Server start karo aur console me running log print karo.
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});