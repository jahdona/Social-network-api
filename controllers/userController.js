const { User, Thought } = require("../models");



const userController = {
    //get all users
    async getUsers( req,res ){
        try {
            const users = await User.find()
                .populate({ path: "thoughts", select: "-__v" })
                .populate({ path: "friends", select: "-__v" });

            return res.status(200).json(users);
            
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    //get a single user
    async getUser( req,res ){
        try {
            const user = await User.findOne({ _id:req.params.userId})
                .populate({ path: "thoughts", select: "-__v" })
                .populate({ path: "friends", select: "-__v" });
            if(!user){
                return res.status(400).json({message:'No user for this id'});
            }
            return res.status(200).json(user);
            
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    //create user
    async createUser( req,res ){
        try {
            const user = await User.create(req.body);
            return res.status(200).json(user);
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    //update user
    async updateUser( req, res ){
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId},
                { $set: req.body},
                { runValidators: true, new:true}
            );
            if(!user){
                return res.status(400).json({message:'No user for this id'});
            }
            return res.status(200).json(user);
            
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    //delete user and associated thought and reactions
    async deleteUSer( req, res){
        try {
            const user = await User.findOneAndDelete({ _id:req.params.userId});
            if(!user){
                return res.status(400).json({message:"No user found of this id!"});
            }
            await Thought.deleteMany({_id:{ $in:user.thoughts } });
            return res.status(200).json({ message: "User and associated thoughts and reactions was deleted!"})
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
            
        }
    },
    //add friend
    async addFriend( req, res ){
        try {
            const friend = await User.findOneAndUpdate(
                { _id: req.params.userId},
                { $addToSet: { friends: req.params.friendId } },
                { runValidators:true, new: true}
            );
            if(!friend){
                return res.status(400).json({ message: "No user  found with that Id"});
            }
            return res.status(200).json(friend);
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    // Delete friend
  async deleteFriend(req, res) {
    try {
      const friend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      if (!friend) {
        return res.status(404).json({ message: "Check user and friend ID" });
      }

      return res.status(200).json(friend);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

}
 module.exports = userController