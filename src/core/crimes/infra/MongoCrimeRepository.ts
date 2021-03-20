import { getRepository } from 'typeorm'
import { Crime } from '../domain/Crime'
import { ICrimeRepository } from '../domain/ICrimeRepository'

export class MongoCrimeRepository implements ICrimeRepository {
  async getAll (): Promise<Crime[]> {
    const crimes = await getRepository(Crime).find()
    return crimes
  }

  async getById (id: string): Promise<Crime | undefined> {
    const crime = await getRepository(Crime).findOne({ id })
    return crime
  }
}
