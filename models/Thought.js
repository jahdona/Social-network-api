const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reactions');

//Thought Schema

const thoughtSchema = new Schema({
    thoughtText:{
        type:String,
        required:true,
        maxlength:280,
        minlength:1,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    username:{
        type:String,
        required:true,
    },
    reactions:[reactionSchema],

},
{
    toJSON:{
        virtuals:true,
    },
    id:false,
}
);
//increases reaction count in tghought model object when reaction are added to a thought
thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});
//create thought model with thoughtschema
const Thought = model('thought',thoughtSchema);

module.exports= Thought;