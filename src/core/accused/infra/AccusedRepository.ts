import { getRepository, MongoRepository, Repository } from 'typeorm'
import { Accused } from '../domain/Accused'
import { IAccusedRepository } from '../domain/IAccusedRepository'

export class AccusedRepository extends Repository<Accused> implements IAccusedRepository {
  async getAll (filter: { country: string }): Promise<Accused[]> {
    let query = {}
    if (filter.country) {
      query = { where: { 'birthPlace.country.code': filter.country } }
    }
    return await getRepository(Accused).find(query)
  }

  async getById (id: string): Promise<Accused | undefined> {
    return await getRepository(Accused).findOne(id)
  }

  async getMany (): Promise<Accused[] | []> {
    const repo = getRepository(Accused) as MongoRepository<Accused>
    const accused = await repo.aggregate<Accused>([
      { $sample: { size: 2 } }
    ]).toArray()
    return accused
  }
}
