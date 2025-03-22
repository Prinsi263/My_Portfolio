import mongoose, { Schema } from 'mongoose'

const MessageSchema = new Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
}, { timestamps: true })

export default mongoose.models.Message || mongoose.model('Message', MessageSchema)
