const GithubProfile = require("../models/githubModel");

const fetchGithubProfile = require("../services/githubServices");

const calculateInsights = require("../utils/calculateInsights");

const analyzeProfile = async (req, res) => {

  try {

    const { username } = req.params;

    const githubData =
      await fetchGithubProfile(username);

    const insights = calculateInsights(
      githubData.user,
      githubData.repos
    );

    const savedProfile =
      await GithubProfile.findOneAndUpdate(
        { username: insights.username },
        insights,
        {
          new: true,
          upsert: true,
        }
      );

    res.status(200).json({
      success: true,
      message: "Profile analyzed successfully",
      data: savedProfile,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllProfiles = async (req, res) => {

  try {

    const profiles =
      await GithubProfile.find();

    res.status(200).json({
      success: true,
      count: profiles.length,
      data: profiles,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getSingleProfile = async (req, res) => {

  try {

    const { username } = req.params;

    const profile =
      await GithubProfile.findOne({
        username,
      });

    if (!profile) {

      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    res.status(200).json({
      success: true,
      data: profile,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  analyzeProfile,
  getAllProfiles,
  getSingleProfile,
};