// dtos/clientDTO.js

export class ClientDTO {
    constructor(name, email, phone, address) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.address = address;
    }
  }
  
  export class ClientResponseDTO {
    constructor(id, name, email, phone, address, createdAt) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.address = address;
      this.createdAt = createdAt;
    }
  }
  