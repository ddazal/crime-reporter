import { getMongoRepository, MongoRepository } from 'typeorm'
import { Crime } from '../domain/Crime'
import { ICrimeRepository } from '../domain/ICrimeRepository'

export class MongoCrimeRepository extends MongoRepository<Crime> implements ICrimeRepository {
  async getAll (): Promise<Crime[]> {
    return await getMongoRepository(Crime).find()
  }

  async getById (id: string): Promise<Crime | undefined> {
    return await getMongoRepository(Crime).findOne(id)
  }
}
