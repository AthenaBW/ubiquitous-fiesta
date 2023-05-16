const { Schema, model } = require("mongoose");

// Define the user schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
      match: [/.+@.+\..+/],
    },

    friends: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      ],

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
  },
  {
    // Configure toJSON
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Virtual property 'friendCount' to calculate the number of friends
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});


// Create the User model using the userSchema
const User = model("User", userSchema);

module.exports = User;