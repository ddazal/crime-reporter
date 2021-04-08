import { getMongoRepository, MongoRepository } from 'typeorm'
import { Subdivision } from '../domain/Subdivision'
import { ISubdivisionRepository } from '../domain/ISubdivisionRepository'

export class MongoSubdivisionRepository extends MongoRepository<Subdivision> implements ISubdivisionRepository {
  async getAll (): Promise<Subdivision[]> {
    return await getMongoRepository(Subdivision).find()
  }

  async getById (id: string): Promise<Subdivision | undefined> {
    return await getMongoRepository(Subdivision).findOne(id)
  }
}
