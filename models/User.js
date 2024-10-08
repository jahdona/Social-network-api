const { Schema, model } = require('mongoose');
const userSchema = new Schema({
    username:{
        type:String,
        unique:true,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:[/.+@.+\..+/,'Must match an email address !'],
    },
    thoughts:[
        {
            type:Schema.Types.ObjectId,
            ref:"thought",
        },
    ],
    friends:[
        {
            type:Schema.Types.ObjectId,
            ref:"users",
        },
    ],

},
{
    toJSON:{
        virtuals:true,
    },
    id:false,
}
);
//Increases friends count in user model object when friends are added by a user
userSchema.virtual("friendCount").get(function(){
    return this.friends.length;
});
//create user model
const User = model("users",userSchema);
module.exports = User;
