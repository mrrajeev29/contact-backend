const mongoose=require('mongoose');
const {Schema,model}=mongoose;


const DataSchema=new Schema({
    name:{type: String,require:true},
    age:{type :Number,require:true},
    mob:{type:Number,require:true},
    amob:{type:Number,require:true},
    details:{type:String, require:true}
});

const DataModel= model('Data',DataSchema);

module.exports=DataModel;