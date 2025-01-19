const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/testdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

// Define a Schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

// Create a Model
const User = mongoose.model('User', userSchema);

// Add a Document
const user = new User({
    name: 'John Doe',
    age: 25,
    email: 'john.doe@example.com'
});

user.save().then(() => {
    console.log('User saved to database');
}).catch(err => {
    console.error('Failed to save user', err);
});
