import { Accused } from './Accused'

export interface IAccusedRepository {
  getAll(filter: { country: string }): Promise<Accused[]>
  getById(id: string): Promise<Accused | undefined>
  getMany(): Promise<Accused[]>
  removeOne(id: string): Promise<number | undefined>
}
