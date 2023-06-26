import { MongoClient, Collection } from 'mongodb';

export class UserService {
  private collection: Collection;

  constructor(collection: Collection) {
    this.collection = collection;
  }

  // Implement additional user-related methods or operations using the MongoDB collection
}
