import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity('countries')
export class Country {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  name: string;

  @Column()
  code: string;

  private constructor (name: string, code: string) {
    this.name = name
    this.code = code
  }

  static create (name: string, code: string) {
    return new Country(name, code)
  }
}
