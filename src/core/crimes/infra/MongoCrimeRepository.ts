import { getMongoRepository, MongoRepository } from 'typeorm'
import { Crime } from '../domain/Crime'
import { ICrimeRepository } from '../domain/ICrimeRepository'

export class MongoCrimeRepository extends MongoRepository<Crime> implements ICrimeRepository {
  async getAll (page: number): Promise<Crime[]> {
    return await getMongoRepository(Crime).find({ skip: (page - 1) * 100, take: page * 100 })
  }

  async getById (id: string): Promise<Crime | undefined> {
    return await getMongoRepository(Crime).findOne(id)
  }

  async createCrime (data: Crime): Promise<String> {
    const result = await getMongoRepository(Crime).insertOne(data)
    return result.insertedId.toString()
  }
}
