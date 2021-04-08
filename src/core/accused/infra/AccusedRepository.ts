import { getRepository, Repository } from 'typeorm'
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

  async getOne (): Promise<Accused | undefined> {
    return await getRepository(Accused).findOne()
  }
}
