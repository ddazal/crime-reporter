import { getRepository, Repository } from 'typeorm'
import { Accused } from '../domain/Accused'
import { IAccusedRepository } from '../domain/IAccusedRepository'

export class AccusedRepository extends Repository<Accused> implements IAccusedRepository {
  async getAll (): Promise<Accused[]> {
    return await getRepository(Accused).find()
  }

  async getById (id: string): Promise<Accused | undefined> {
    return await getRepository(Accused).findOne(id)
  }

  async getOne (): Promise<Accused | undefined> {
    return await getRepository(Accused).findOne()
  }
}
