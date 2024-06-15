import RideModel from '../models/Ride.js';
import DriverModel from '../models/Driver.js';
// import { sendNotification } from '../services/notificationService.js'; // we will have notifications service (use the fcm service)
import { RideDTO, RideResponseDTO } from '../DTOs/RideDTO.js';


export const requestRide = async (req, res) => {
  const { clientId, pickupLocation, dropoffLocation, fare, paymentMethod } = req.body;

  try {
    const newRide = new RideDTO({
      clientId,
      pickupLocation,
      dropoffLocation,
      fare,
      paymentMethod,
    });

    await newRide.save();

    // Find the nearest available drivers
    drivers = await DriverModel.find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: ride.pickupLocation.coordinates,
          },
          $maxDistance: 3000, 
        },
      },
      available: true,
      isdeleted: false,
    });

    // notify the drivers (this is a placeholder we will use our notification service)
    drivers.forEach(driver => {
      console.log(`Notify driver ${driver._id}`);
    });

    res.status(201).json(newRide,{nearbyDrivers: drivers});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

export const updateRideLocation = async (req, res) => {
  const { id } = req.params;
  const { pickupLocation, dropoffLocation } = req.body;

  try {
    const ride = await RideModel.findById(id);

    if (!ride) {
      return res.status(404).json({ message: 'Ride not found' });
    }

    ride.pickupLocation = pickupLocation;
    ride.dropoffLocation = dropoffLocation;
    // find nearest and back with it 
    const driversNearPickup = await DriverModel.find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: pickupLocation.coordinates
          },
          $maxDistance: 3000 
        }
      },
      available: true,
      isdeleted: false
    })
    await ride.save();
    
    res.status(200).json(ride,{"ridelocation": driversNearPickup});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

export const cancelRide = async (req, res) => {
  const { id } = req.params;

  try {
    const ride = await RideModel.findById(id);

    if (!ride) {
      return res.status(404).json({ message: 'Ride not found' });
    }

    ride.status = 'canceled';

    await ride.save();

    res.status(200).json(ride);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};


export const getRideStatus = async (req, res) => {
  const { id } = req.params;

  try {
    const ride = await RideModel.findById(id);

    if (!ride) {
      return res.status(404).json({ message: 'Ride not found' });
    }
    var drivers=[]
    if (ride.status != 'cancelled'){
        // find the nearest available drivers
        drivers = await DriverModel.find({
          location: {
            $near: {
              $geometry: {
                type: 'Point',
                coordinates: ride.pickupLocation.coordinates,
              },
              $maxDistance: 3000, 
            },
          },
          available: true,
          isdeleted: false,
        });
    }

    

    res.status(200).json({ ride, nearbyDrivers: drivers });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

export const getAllRides = async (req, res) => {
  try {
    const rides = await RideModel.find();
    res.status(200).json(rides);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};