import { ResourceOptions } from "adminjs";

export const categoryResourceOptions: ResourceOptions = {
  navigation: 'Catálago',
  editProperties: ['name', 'position'],
  filterProperties: ['name', 'position', 'createdAt', 'updtedAt'],
  listProperties: ['id', 'name', 'position'],
  showProperties: ['id', 'name', 'position', 'createdAt', 'updateAt']
}