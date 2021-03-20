import { Crime } from '../domain/Crime'
import { ICrimeRepository } from '../domain/ICrimeRepository'

export class CrimeService {
  private repository: ICrimeRepository

  constructor (repository: ICrimeRepository) {
    this.repository = repository
  }

  async find (): Promise<Crime[]> {
    const crimes = await this.repository.find()
    return crimes
  }

  async findById (id: string): Promise<Crime> {
    const crime = await this.repository.findById(id)
    return crime
  }
}
