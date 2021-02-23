import { Crime } from '../domain/crime'
import { CrimeRepository } from '../domain/crime.repository'

export class CrimeService {
  private repo: CrimeRepository

  constructor (repo: CrimeRepository) {
    this.repo = repo
  }

  async find (): Promise<Crime[]> {
    const crimes = await this.repo.find()
    return crimes
  }

  async findById (id: string): Promise<Crime> {
    const crime = await this.repo.findById(id)
    return crime
  }
}
