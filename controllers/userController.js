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
}