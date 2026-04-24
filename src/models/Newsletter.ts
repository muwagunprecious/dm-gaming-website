import mongoose, { Schema, model, models } from "mongoose";

const NewsletterSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
});

const Newsletter = models.Newsletter || model("Newsletter", NewsletterSchema);

export default Newsletter;
