import { Accused } from '../domain/Accused'
import { IAccusedRepository } from '../domain/IAccusedRepository'

export class AccusedService {
  private repository: IAccusedRepository

  constructor (repository: IAccusedRepository) {
    this.repository = repository
  }

  async getAll (filter: { country: string }): Promise<Accused[]> {
    if (filter.country) {
      filter.country = filter.country.toUpperCase()
    }
    return await this.repository.getAll(filter)
  }

  async getById (id: string): Promise<Accused | undefined> {
    return await this.repository.getById(id)
  }
}
