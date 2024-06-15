import mongoose from 'mongoose';

const driverSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String,required:false },
  name: { type: String, required: true },
  active: { type: Boolean, default: false }, 
  verificationCode: { type: String, default: null },
  verificationCodeExpires: { type: Date, default: null },
  isdeleted: {type: Boolean, default: false},
  vertified:{type: Boolean, default: false},
  available:{type: Boolean, default: false},
  car_id:{type:String,required:true},
  location: {
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
  },
  fcmtoken:{ type: String,required:false},
  fcm_id:{ type: String,required:false},
  rating:{type:Number,required:true,default:3},
  total_earned:{type:Number,required:true,default:0},
},{timestamps:true});

// index users locations to make it easier to get them 
driverSchema.index({ location: '2dsphere' });

const DriverModel = mongoose.model('driver', driverSchema);

export default DriverModel ;