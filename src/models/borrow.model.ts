import { Schema, model, Document, Types } from "mongoose";

interface IBorrow extends Document {
  book: Types.ObjectId;
  quantity: number;
  dueDate: Date;
  borrowedAt: Date;
}

const borrowSchema = new Schema<IBorrow>({
  book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
  quantity: { type: Number, required: true, min: 1 },
  dueDate: { type: Date, required: true },
  borrowedAt: { type: Date, default: Date.now },
});

export const Borrow = model<IBorrow>("Borrow", borrowSchema);
