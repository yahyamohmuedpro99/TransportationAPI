import express from 'express';
import driverRoutes from './driverRoutes.js';
import rideRoutes from './rideRoutes.js'
import clientRoutes from './clientRoutes.js'
const router = express.Router();

router.use('/driver', driverRoutes);
router.use('/ride', rideRoutes);
router.use('/client', clientRoutes);
// check the health  
router.use('/check/', (req,res) => {
    res.send("all is good :) ")
});

// router.use('/clients', require('./clientRoutes'));
// router.use('/rides', require('./rideRoutes'));

export default router;
