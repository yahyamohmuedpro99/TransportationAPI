import express from 'express';
import {
  requestRide,
  cancelRide,
  updateRideLocation,
  getRideStatus,
  getAllRides
} from '../controllers/rideController.js';

const router = express.Router();

// routes 
router.post('/', requestRide);
router.put('/:id', updateRideLocation);
router.patch('/:id/cancel', cancelRide);
router.get('/:id/status', getRideStatus);
router.get('/', getAllRides);


export default router;
