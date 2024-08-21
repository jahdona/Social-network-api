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

};
module.exports = thoughtController;
