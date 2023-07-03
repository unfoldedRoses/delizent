const { User } = require('../models');
const uploadUserProfile = async (req, res) => {
  try {
    // Extract the necessary data from the request body
    const { user_id, profile_image, first_name, last_name, dob, gender } = req.body;

    // Create the user profile entry in the database
    const userProfileAdd= await CandidateProfile.create({
      user_id,
      profile_image,
      first_name,
      last_name,
      dob,
      gender,
    });

    // Send a success response
    res.status(200).json({ success: true, userProfileAdd });
  } catch (error) {
    console.error('Error uploading profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = {
  uploadUserProfile
};




