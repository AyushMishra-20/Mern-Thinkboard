
import mongoose from "mongoose";
//1-creating a schemea
//2- model bases off of that schema
const noteSchema = new mongoose.Schema({
    title: {
        type:String,
        require:true
    },
    content:{
        type :String,
        require:true,
    },
},
{timestamps:true} //createdAt ,updatedAt
);
const Note = mongoose.model("Note",noteSchema)
export default Note; 
