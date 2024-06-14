# Transportation App Backend API

## Endpoints and Interaction Logic

### 1. Clients


#### Get All Clients
- **GET** `/api/clients`
  - **Description**: Retrieve all clients.

#### Get a Specific Client
- **GET** `/api/clients/:id`
  - **Description**: Retrieve a specific client by ID.


### 2. Drivers

#### Get All Drivers
- **GET** `/api/drivers`
  - **Description**: Retrieve all drivers.

#### Get a Specific Driver
- **GET** `/api/drivers/:id`
  - **Description**: Retrieve a specific driver by ID.

#### Get a Driver by near location 
- **GET** `/api/drivers/:`
  - **Description**: Retrieve a specific driver by location point.


### 3. Rides

#### Create a Ride
- **POST** `/api/rides`
  - **Description**: Create a new ride.
  - **Request Body**:
    ```json
    {
      "clientId": "60c72b2f4f1f4f1f1f4f1f1f",
      "pickupLocation": "[45.54545454,44.65998]",
      "destination": "[55.54545454,54.65998]"
    }
    ```

#### Get All Rides 
- **GET** `/api/rides`
  - **Description**: Retrieve all rides.

#### Get a Specific Ride
- **GET** `/api/rides/:id`
  - **Description**: Retrieve a specific ride by ID.

#### Update a Ride (i will make it optional for now)
- **PUT** `/api/rides/:id`
  - **Description**: Update a specific ride by ID.
  - **Request Body**:
    ```json
    {
      "pickupLocation": "123 Main St",
      "destination": "456 Elm St"
    }
    ```

#### cancel a Ride
- **DELETE** `/api/rides/:id`
  - **Description**: cancel a specific ride by ID.

### Interaction Logic

3. **Creating a Ride**:
   - A client requests a ride by providing their client ID, pickup location, and destination.
   - The ride is created and saved to the database.
   - Logic to assign a driver to the ride can be implemented here.

4. **Retrieving Data**:
   - Clients, drivers, and rides can be retrieved via their respective GET endpoints.
   - This allows for viewing all registered clients, drivers, and ride requests.

5. **Updating and Deleting**:
   - Clients, drivers, and rides can be updated or deleted via their respective PUT and DELETE endpoints.
   - This ensures that data remains up-to-date and can be managed effectively.

### Example Flow

3. **Client Requests a Ride**:
   - POST `/api/rides` with ride details including clientId.
   - Ride is created and assigned to the client.

4. **Assigning a Driver to a Ride** :
   - A driver is assigned to the ride based on availability and proximity.
   - The ride details are updated to include the assigned driver.

5. **View Rides**:
   - GET `/api/rides` to see all rides.
   - GET `/api/rides/:id` to see details of a specific ride.
