import { Column, Entity, Index, ObjectID, ObjectIdColumn, OneToMany } from 'typeorm'
import { Subdivision } from '../../subdivisions/domain/Subdivision'

@Entity('countries')
export class Country {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  name: string;

  @Index()
  @Column()
  code: string;

  @OneToMany(() => Subdivision, subdivision => subdivision.country)
  subdivisions!: Subdivision[]

  private constructor (name: string, code: string) {
    this.name = name
    this.code = code
  }

  static create (name: string, code: string) {
    return new Country(name, code)
  }
}
