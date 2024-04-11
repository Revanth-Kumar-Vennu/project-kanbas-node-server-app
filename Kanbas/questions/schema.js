import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true
    },
    quizId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "quizzes",
      required: true,
    },
    questionType: {
      type: String,
      enum: ['Multiple Choice', 'True/False', 'Fill in the Blanks'],
      required: true
    },
    points: {
      type: Number,
      required: true
    },
    questionText: String, 
    choices: [ 
      {
        text: {
          type: String,
          required: true
        },
        isCorrect: {
          type: Boolean,
          default: false
        }
      }
    ],
    trueFalseAnswer: Boolean, 
    blanks: [String],
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  },
  { collection: "questions" }
);

export default questionSchema;
