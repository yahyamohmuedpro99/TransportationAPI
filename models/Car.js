import mongoose from 'mongoose';


const carSchema = new mongoose.Schema({
  model:{type: String,required:true},
  type:{type: String,required:true},
  year:{type: Number,required:true},
},{timestamps:false});

const CarModel = mongoose.model('car', carSchema);

export default CarModel ;