import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface IUsers extends Document {
  Email: string | null;
  Password: string | null;
  _id: ObjectId;
}

const UsersSchema: Schema = new Schema({
  Email: { type: String },
  Password: { type: String },
}, { timestamps: true });

const Users = mongoose?.models?.Users || mongoose.model<IUsers>('Users', UsersSchema);

export default Users;

