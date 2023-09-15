import User from "../models/userModel.js";
import Post from "../models/postModel.js";

const createPost = async (req, res) => {
  try {
    const { postedBy, text, img } = req.body;
    if (!postedBy || !text) {
      return res
        .status(400)
        .json({ message: "Posted By and text is required" });
    }

    const user = await User.findById(postedBy);
    if (!user) return res.status(400).json({ message: "User not found" });

    if (user._id.toString() !== req.user._id.toString()) {
      return res.status(400).json({ message: "Unauthorized to create a post" });
    }

    const maxLength = 500;
    if (text.length > maxLength) {
      return res
        .status(400)
        .json({ message: `Test must be smaller than ${maxLength} characters` });
    }

    const newPost = await new Post({ postedBy, text, img });
    await newPost.save();

    res.status(201).json({ message: "Post created successfully", newPost });
  } catch (error) {
    res.status(300).json({ message: error.message });
    console.log(error);
  }
};

export { createPost };
