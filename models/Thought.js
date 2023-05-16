const { Schema, model, Types } = require("mongoose");


const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      // Default value is set to a new Object Id
      default: () => new Types.ObjectId(),
    },

    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },

    username: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      // Set default value to current timestamp
      default: Date.now,
      // Get method to format timestamp 
      get: timestamp => new Date(timestamp).toLocaleString(),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: "Thought Required",
      minlength: 1,
      maxlength: 280,
    },

    createdAt: {
      type: Date,
      default: Date.now,

      // Get method to format timestamp 
      get: timestamp => new Date(timestamp).toLocaleString(),
    },

    username: {
      type: String,
      required: true,
    },

    // Array created with the reaction Schema
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;