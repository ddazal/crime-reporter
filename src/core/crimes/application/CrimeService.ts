import { Crime } from '../domain/Crime'
import { ICrimeRepository } from '../domain/ICrimeRepository'

export class CrimeService {
  private repository: ICrimeRepository

  constructor (repository: ICrimeRepository) {
    this.repository = repository
  }

  async getAll (): Promise<Crime[]> {
    const crimes = await this.repository.getAll()
    return crimes
  }

  async findById (id: string): Promise<Crime | undefined> {
    const crime = await this.repository.getById(id)
    return crime
  }
}
