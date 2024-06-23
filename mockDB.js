// import mongoose from 'mongoose';
// import DriverModel from './models/Driver.js';
import { connectDB } from './config/db.js';

// const mockDrivers = [
//   // Within 3 km
//   {
//     email: 'driver1@example.com',
//     password: 'password1',
//     phone: '1234567890',
//     name: 'Driver One',
//     location: {
//       type: 'Point',
//       coordinates: [-74.0000, 40.7100] // Approx 3 km from central point
//     },
//     available: true,
//     car_id: 'car1',
//     rating: 4,
//     total_earned: 1000
//   },
//   {
//     email: 'driver2@example.com',
//     password: 'password2',
//     phone: '1234567891',
//     name: 'Driver Two',
//     location: {
//       type: 'Point',
//       coordinates: [-74.0100, 40.7150] // Approx 3 km from central point
//     },
//     available: true,
//     car_id: 'car2',
//     rating: 5,
//     total_earned: 1200
//   },
//   // Within 5 km
//   {
//     email: 'driver3@example.com',
//     password: 'password3',
//     phone: '1234567892',
//     name: 'Driver Three',
//     location: {
//       type: 'Point',
//       coordinates: [-74.0200, 40.7200] // Approx 5 km from central point
//     },
//     available: true,
//     car_id: 'car3',
//     rating: 3,
//     total_earned: 800
//   },
//   {
//     email: 'driver4@example.com',
//     password: 'password4',
//     phone: '1234567893',
//     name: 'Driver Four',
//     location: {
//       type: 'Point',
//       coordinates: [-74.0300, 40.7250] // Approx 5 km from central point
//     },
//     available: true,
//     car_id: 'car4',
//     rating: 4,
//     total_earned: 900
//   },
//   // Within 10 km
//   {
//     email: 'driver5@example.com',
//     password: 'password5',
//     phone: '1234567894',
//     name: 'Driver Five',
//     location: {
//       type: 'Point',
//       coordinates: [-74.0400, 40.7300] // Approx 10 km from central point
//     },
//     available: true,
//     car_id: 'car5',
//     rating: 5,
//     total_earned: 1500
//   },
//   {
//     email: 'driver6@example.com',
//     password: 'password6',
//     phone: '1234567895',
//     name: 'Driver Six',
//     location: {
//       type: 'Point',
//       coordinates: [-80.0500, 60.7350] // Approx 10 km from central point
//     },
//     available: true,
//     car_id: 'car6',
//     rating: 3,
//     total_earned: 700
//   }
// ];

// const insertMockDrivers = async () => {
//   try {
//     await DriverModel.insertMany(mockDrivers);
//     console.log('Mock drivers inserted successfully.');
//     mongoose.connection.close();
//   } catch (error) {
//     console.error('Error inserting mock drivers:', error);
//   }
// };

// // Connect to the database and insert mock data
// connectDB().then(() => {
//   console.log('Connected to MongoDB');
//   insertMockDrivers();
// }).catch((error) => {
//   console.error('Error connecting to MongoDB:', error);
// });

// import mongoose from 'mongoose';
// import ClientModel from './models/client.js'; 

// export const clients = [
//   {
//     name: 'Alice Smith',
//     email: 'alice@example.com',
//     phone: '+1234567890',
//     address: '123 Main St, City, Country',
//   },
//   {
//     name: 'Bob Johnson',
//     email: 'bob@example.com',
//     phone: '+1987654321',
//     address: '456 Elm St, Town, Country',
//   },
//   {
//     name: 'Charlie Brown',
//     email: 'charlie@example.com',
//     phone: '+1654321897',
//     address: '789 Oak Ave, Village, Country',
//   },
// ];


// const insertMockClients = async () => {
//   try {
//     await ClientModel.insertMany(clients);
//     console.log('Mock Clients inserted successfully.');
//     mongoose.connection.close();
//   } catch (error) {
//     console.error('Error inserting mock clinets:', error);
//   }
// };

// // Connect to the database and insert mock data
// connectDB().then(() => {
//   console.log('Connected to MongoDB');
//   insertMockClients();
// }).catch((error) => {
//   console.error('Error connecting to MongoDB:', error);
// });

// import mongoose from 'mongoose';
// import RideModel from './models/Ride.js'; 

// const mockRides = [
//   {
//     client: '666d09f75b4ba982a4714552',
//     pickupLocation: {
//       type: 'Point',
//       coordinates: [-74.005974, 40.712776], // Near New York City
//     },
//     dropoffLocation: {
//       type: 'Point',
//       coordinates: [-73.985428, 40.748817], // Near Empire State Building
//     },
//     fare: 25.0,
//     paymentMethod: 'cash',
//     status: 'requested',
//     driverId: null,
//   },

//   {
//     client: '666d09f75b4ba982a4714553',
//     pickupLocation: {
//       type: 'Point',
//       coordinates: [-74.004833, 40.742054], // Near Chelsea Market, NY
//     },
//     dropoffLocation: {
//       type: 'Point',
//       coordinates: [-73.9695, 40.785091], // Near Upper East Side, NY
//     },
//     fare: 20.0,
//     paymentMethod: 'credit_card',
//     status: 'requested',
//     driverId: null,
//   },
// ];

// const insertMockRides = async () => {
//   try {
//     await RideModel.insertMany(mockRides);
//     console.log('Mock Rides inserted successfully.');
//     mongoose.connection.close();
//   } catch (error) {
//     console.error('Error inserting mock rides:', error);
//   }
// };

// // Connect to the database and insert mock data
// connectDB().then(() => {
//   console.log('Connected to MongoDB');
//   insertMockRides();
// }).catch((error) => {
//   console.error('Error connecting to MongoDB:', error);
// });