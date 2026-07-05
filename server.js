require('dotenv').config();

const connectDB = require('./src/config/db');
const app = require('./src/app');

connectDB();
const PORT = process.env.PORT || 3000;

if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET belum didefinisikan pada file .env.');
}

app.listen(PORT, () => {
    console.log(`Server berjalan pada http://localhost:${PORT}`);
});