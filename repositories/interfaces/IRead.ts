export interface IRead<T> {
  getAll(): Promise<T[]>
  get(id: string): Promise<T>
}
