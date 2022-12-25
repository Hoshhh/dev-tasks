const path = require('path')
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000;

connectDB()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

//Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'public', 'index.html')))
} else {
    app.get('/', (req,res) => res.send('Not set to production'))
}

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));