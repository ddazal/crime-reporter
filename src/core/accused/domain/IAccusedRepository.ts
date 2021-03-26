import { Accused } from './Accused'

export interface IAccusedRepository {
  getAll(): Promise<Accused[]>
  getByName(name: string): Promise<Accused | undefined>
}
