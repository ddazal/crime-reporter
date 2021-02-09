import { Crime } from '../../../../models'
import { ICrimeRepository } from '../crime.repository'

// TODO: Implement MongoDB operations
export class MongoCrimeRepository implements ICrimeRepository {
  getAll (): Promise<Crime[]> {
    return Promise.resolve([
      { title: 'Crimen A' },
      { title: 'Crimen B' }
    ])
  }

  getById (id: string): Promise<Crime> {
    return Promise.resolve({ title: 'Crimen A' })
  }
}
