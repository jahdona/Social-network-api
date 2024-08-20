const { Schema, Types } =require('mongoose');
//This is not a model, but rather is going to be used as the reaction field's sub-document schema in the Thought model
const reactionSchema = new Schema({
    reactionId:{
        type:Schema.Types.ObjectId,
        default:()=>new Types.ObjectId(),
    },
    reactionBody:{
        type:String,
        required:true,
        maxlength:280,
    },
    username:{
        type:String,
        required:true,
        
    },
    CreatedAt:{
        type:Date,
        default:Date.now,
    },
});
module.exports = reactionSchema;