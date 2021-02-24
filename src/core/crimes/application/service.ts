import { Crime } from '../domain/crime'
import { CrimeRepository } from '../domain/crime.repository'

export class CrimeService {
  private repository: CrimeRepository

  constructor (repository: CrimeRepository) {
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
