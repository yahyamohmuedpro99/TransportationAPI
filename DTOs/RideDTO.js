export class RideDTO {
    constructor(clientId, pickupLocation, dropoffLocation, fare, paymentMethod) {
      this.clientId = clientId;
      this.pickupLocation = pickupLocation;
      this.dropoffLocation = dropoffLocation;
      this.fare = fare;
      this.paymentMethod = paymentMethod;
    }
  }
  
export class RideResponseDTO {
    constructor(id, client, driver, pickupLocation, dropoffLocation, status, fare, paymentMethod, createdAt) {
      this.id = id;
      this.client = client;
      this.driver = driver || null;
      this.pickupLocation = pickupLocation;
      this.dropoffLocation = dropoffLocation;
      this.status = status;
      this.fare = fare;
      this.paymentMethod = paymentMethod;
      this.createdAt = createdAt;
    }
  }
  