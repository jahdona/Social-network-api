//Import 
const { User, Thought } = require("../models");
//get all thoughts
const thoughtController = {
    async getThoughts(req,res){
        try {
            const thoughts = await Thought.find();
            return res.status(200).json(thoughts);
            
        } catch (error) {

            console.log(error)
            return res.status(500).json(error);
        }
    },
    // Get single thought
    async getThoughts(req,res){
        try {
            const thought = await Thought.findOne({ _id:req.params.thoughtId});
            if(!thought){
                return res.status(400).json({message:"No thought with that Id"});
            }
            
            return res.status(200).json(thought);
            
        } catch (error) {

            console.log(error)
            return res.status(500).json(error);
        }
    },
    //Create thought
    async createThought(req,res){
        try {
            const thought = await Thought.create(req.body);

            const user = await User.findByIdAndUpdate(
                req.body.userId,
                { $addToSet:{thoughts:thought._id}},
                { runValidators:true, new:true}

            );
            return res.status(200).json( thought, user );
        } catch (error) {
            console.log(error)
            return res.status(500).json(error);
            
        }
    },
    //Update thought
    async updateThought(req,res){
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id:req.params.thoughtId },
                
                 {$set:req.body},
                 {runValidators:true, new:true}
            );
            if(!thought){
                return res.status(400).json({message:"No thought with this Id"});
            }
            
            return res.status(200).json(thought);

            
        } catch (error) {
            console.log(error)
            return res.status(500).json(error);
            
        }
    }

};
module.exports = thoughtController;
