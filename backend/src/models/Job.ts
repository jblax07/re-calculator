import mongoose, { Schema, Document } from 'mongoose';

interface IJob extends Document {
  title: string;
  description: string;
  client: mongoose.Schema.Types.ObjectId;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

const JobSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['To Do', 'In Progress', 'Done'], default: 'To Do' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model<IJob>('Job', JobSchema);
