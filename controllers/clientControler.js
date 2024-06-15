
import ClientModel from '../models/client.js';
import { ClientDTO, ClientResponseDTO } from '../DTOs/ClientDTO.js';

export const createClient = async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;
    const clientDTO = new ClientDTO(name, email, phone, address);

    const newClient = new ClientModel(clientDTO);
    await newClient.save();

    const responseDTO = new ClientResponseDTO(
      newClient._id,
      newClient.name,
      newClient.email,
      newClient.phone,
      newClient.address,
      newClient.createdAt
    );

    res.status(201).json(responseDTO);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

export const getClients = async (req, res) => {
  try {
    const clients = await ClientModel.find();
    const clientResponseDTOs = clients.map(client => new ClientResponseDTO(
      client._id,
      client.name,
      client.email,
      client.phone,
      client.address,
      client.createdAt
    ));

    res.status(200).json(clientResponseDTOs);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};
