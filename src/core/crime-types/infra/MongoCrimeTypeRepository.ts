import { getMongoRepository, MongoRepository } from 'typeorm'
import { CrimeType } from '../domain/CrimeType'
import { ICrimeTypeRepository } from '../domain/ICrimeTypeRepository'

export class MongoCrimeTypeRepository extends MongoRepository<CrimeType> implements ICrimeTypeRepository {
  async getAll (): Promise<CrimeType[]> {
    return await getMongoRepository(CrimeType).find()
  }

  async getMany (): Promise<CrimeType[]> {
    return await getMongoRepository(CrimeType).aggregate<CrimeType>([
      { $sample: { size: 2 } }
    ]).toArray()
  }
}
