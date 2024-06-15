import express from 'express';
import {
  createDriver,
  getAllDrivers,
  getDriverById,
  updateDriver,
  deleteDriver,
  getNearestDrivers
} from '../controllers/driverControler.js';

const router = express.Router();
// for easy testing
router.post('/', createDriver);
router.get('/', getAllDrivers);
router.delete('/:id', deleteDriver);

// actual use 
router.get('/driver_by_id/:id', getDriverById);
router.get('/nearest', getNearestDrivers);
router.put('/:id', updateDriver); // update availableity and location 




export default router;
