import { getRepository } from 'typeorm'
import { Accused } from '../domain/Accused'
import { IAccusedRepository } from '../domain/IAccusedRepository'

export class MongoAccusedRepository implements IAccusedRepository {
  async getAll (): Promise<Accused[]> {
    return await getRepository(Accused).find()
  }

  async getByName (name: string): Promise<Accused | undefined> {
    return await getRepository(Accused).findOne({ firstName: name })
  }
}
