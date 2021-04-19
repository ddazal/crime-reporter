import { Accused } from '../domain/Accused'
import { IAccusedRepository } from '../domain/IAccusedRepository'

export class AccusedService {
  private repository: IAccusedRepository

  constructor (repository: IAccusedRepository) {
    this.repository = repository
  }

  getAll (filter: { country: string }): Promise<Accused[]> {
    if (filter.country) {
      filter.country = filter.country.toUpperCase()
    }
    return this.repository.getAll(filter)
  }

  getById (id: string): Promise<Accused | undefined> {
    return this.repository.getById(id)
  }

  getMany (): Promise<Accused[]> {
    return this.repository.getMany()
  }

  deleteById (id: string): Promise<number | undefined> {
    return this.repository.removeOne(id)
  }
}
