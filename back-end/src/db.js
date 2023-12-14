import mongoose from 'mongoose';

mongoose.connect("")
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.error(error))
