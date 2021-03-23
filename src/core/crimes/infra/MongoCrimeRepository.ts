import { getRepository } from 'typeorm'
import { Crime } from '../domain/Crime'
import { ICrimeRepository } from '../domain/ICrimeRepository'

export class MongoCrimeRepository implements ICrimeRepository {
  async getAll (): Promise<Crime[]> {
    return await getRepository(Crime).find()
  }

  async getById (id: string): Promise<Crime | undefined> {
    return await getRepository(Crime).findOne({ id })
  }
}
