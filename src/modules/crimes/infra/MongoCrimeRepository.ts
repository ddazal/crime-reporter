import { Crime } from '../domain/crime'
import { CrimeRepository } from '../domain/crime.repository'

export class MongoCrimeRepository implements CrimeRepository {
  find (): Promise<Crime[]> {
    return Promise.resolve([
      { description: 'Lorem ipsum dolore sit amet', type: 'A' },
      { description: 'Lorem ipsum dolore sit amet', type: 'B' }
    ])
  }

  findById (id: string): Promise<Crime> {
    return Promise.resolve({ description: 'Lorem ipsum dolore sit amet', type: 'B' })
  }
}
