import mongoose from "mongoose";
const quizzesSchema = new mongoose.Schema(
  {
    title: {
        type: String,
        required: true
      },
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "courses",
        required: true,
      },
      quizType: {
        type: String,
        enum: ['Graded Quiz', 'Other Quiz Types']
      },
      points: {
        type: Number,
        required: true
      },
      assignmentGroup: String,
      shuffleAnswers: Boolean,
      timeLimit: Number,
      multipleAttempts: Boolean,
      showCorrectAnswers: {
        type: String,
        enum: ['Always', 'Never', 'When correct answers are shown to students']
      },
      accessCode: String,
      oneQuestionAtATime: Boolean,
      webcamRequired: Boolean,
      lockQuestionsAfterAnswering: Boolean,
      dueDate: Date,
      availableDate: Date,
      untilDate: Date,
      isPublished: Boolean,
      numberOfQuestions: Number
  },
  { collection: "quizzes" }
);
export default quizzesSchema;




