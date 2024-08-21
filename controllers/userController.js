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
    async creatUser( req,res ){
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
    }
}