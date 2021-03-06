const mongoose= require('mongoose');

const influencerSchema= mongoose.Schema ({
    job: String,
    bio: String,
    
 location: String,

 followers:{
    type :  String,
default: 0},
 posts: {
    type :   Number,
default: 0},

likes: {
    type :   Number,
default: 0},

comments: {
    type :   Number,
default: 0},

    firstName:{
        type : String,
        required : true,
    } ,
    lastName:{
        type : String,
        required : true,
    } ,
    email:{
        type : String,
        required : true,
        unique : true ,
        match : /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    } ,
    password: {
        type : String,
        required : true,
    } ,
    phone: {
        type : String,
        required : true,
    } ,
 influencerCreatedAt:{
    type : Date,
default: new Date()} ,
influencerUpdatedAt: {
    type : Date,
default: new Date()},
lastLogin: {
    type : Date,
default: new Date()},
status: Boolean,
avatar: {
    type : String,
    required :true,
} ,

})
module.exports=mongoose.model('influencer',influencerSchema);