import mongoose from 'mongoose';
import schema from './schema';

export default mongoose.model('comments', schema);
