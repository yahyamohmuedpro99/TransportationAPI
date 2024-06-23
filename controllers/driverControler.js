// backend/controllers/driverController.js

import DriverModel from '../models/Driver.js';
import DriverDTO from '../DTOs/DriverDTO.js';

///// /////////////////////// FOR TEST ONLY /////////////////////////////////
///// /////////////////////// ///////////////////////////////////////////////

// @desc    Create a new driver [FOR TEST PURPOSE ONLY]
// @route   POST /api/drivers
// @access  Public
export const createDriver = async (req, res) => {
  try {
    const { email, password, phone, name, car_id, location } = req.body;

    if (!email || !password || !name || !car_id || !location) {
      return res.status(400).json({ message: 'Required fields are missing' });
    }

    const driverDTO = new DriverDTO(email, password, phone, name, car_id, location);
    const newDriver = new DriverModel(driverDTO);

    await newDriver.save();

    res.status(201).json(newDriver);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Update driver
// @route   PUT /api/drivers/:id
// @access  Public
export const updateDriver = async (req, res) => {
  try {
    const driver = await DriverModel.findById(req.params.id);
    if (!driver) {
      return res.status(404).json({ message: 'Driver not found' });
    }

    const {  location,available } = req.body;

  
    if (location) driver.location = location;
    if (available) driver.available = available;
    await driver.save();

    res.status(200).json(driver);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Delete driver
// @route   DELETE /api/drivers/:id
// @access  Public
export const deleteDriver = async (req, res) => {
  try {
    const driver = await DriverModel.findById(req.params.id);
    if (!driver) {
      return res.status(404).json({ message: 'Driver not found' });
    }

    driver.isdeleted = true;
    await driver.save();

    res.status(200).json({ message: 'Driver deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

///// /////////////////////// ///////////////////////////////////////////////
///// /////////////////////// ///////////////////////////////////////////////

// @desc    Get all drivers
// @route   GET /api/drivers
// @access  Public
export const getAllDrivers = async (req, res) => {
  try {
    const drivers = await DriverModel.find();
    res.status(200).json(drivers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Get driver by ID
// @route   GET /api/drivers/:id
// @access  Public
export const getDriverById = async (req, res) => {
  try {
    const driver = await DriverModel.findById(req.params.id);
    if (!driver) {
      return res.status(404).json({ message: 'Driver not found' });
    }
    res.status(200).json(driver);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
// @desc    Get nearest drivers
// @route   GET /api/drivers/nearest
// @access  Public

// things you need to check (you need to find the nearest but also the avaliable ones only)
export const getNearestDrivers = async (req, res) => {
  try {
    const { lat, lng, maxDistance } = req.query;
    if (!lat || !lng) {
      return res.status(400).json({ message: 'Latitude and longitude are required' });
    }

    const distance = maxDistance ? parseFloat(maxDistance) : 10000; // default to 10km if not provided

    const drivers = await DriverModel.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [parseFloat(lng), parseFloat(lat)]
          },
          $maxDistance: distance 
        }
      },
      available: true,
      isdeleted: false
    });

    res.status(200).json(drivers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
