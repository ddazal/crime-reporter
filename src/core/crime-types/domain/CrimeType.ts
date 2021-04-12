import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity('crimetypes')
export class CrimeType {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  name: string;

  private constructor (name: string) {
    this.name = name
  }

  static create (name: string) {
    return new CrimeType(name)
  }
}
