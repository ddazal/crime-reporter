import { getMongoRepository, MongoRepository } from 'typeorm'
import { Accused } from '../domain/Accused'
import { IAccusedRepository } from '../domain/IAccusedRepository'

export class MongoAccusedRepository extends MongoRepository<Accused> implements IAccusedRepository {
  async getAll (filter: { country: string }): Promise<Accused[]> {
    let query = {}
    if (filter.country) {
      query = { where: { 'birthPlace.country.code': filter.country } }
    }
    return await getMongoRepository(Accused).find(query)
  }

  async getById (id: string): Promise<Accused | undefined> {
    return await getMongoRepository(Accused).findOne(id)
  }

  async getMany (): Promise<Accused[]> {
    return await getMongoRepository(Accused).aggregate<Accused>([
      { $sample: { size: 2 } }
    ]).toArray()
  }
}
