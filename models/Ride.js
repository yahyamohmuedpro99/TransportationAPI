import mongoose from 'mongoose';

const rideSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, required: true }, //, ref: 'Client'
  driver: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver', default: null },
  pickupLocation: {
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
  dropoffLocation: {
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
  status: { type: String, enum: ['requested', 'accepted', 'ongoing', 'completed', 'cancelled'], default: 'requested' },
  fare: { type: Number, required: true },
  paymentMethod: { type: String, enum: ['cash', 'credit_card'], default: 'cash' },
}, { timestamps: true });

rideSchema.index({ pickupLocation: '2dsphere'});

const RideModel = mongoose.model('ride', rideSchema);

export default RideModel;
