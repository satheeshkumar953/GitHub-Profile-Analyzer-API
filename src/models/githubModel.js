const mongoose = require("mongoose");

const githubProfileSchema = new mongoose.Schema(
  {
    githubId: Number,

    username: {
      type: String,
      unique: true,
      required: true,
    },

    name: String,

    bio: String,

    publicRepos: Number,

    followers: Number,

    following: Number,

    totalStars: Number,

    topLanguage: String,

    profileUrl: String,

    avatarUrl: String,

    accountCreatedAt: Date,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "GithubProfile",
  githubProfileSchema
);