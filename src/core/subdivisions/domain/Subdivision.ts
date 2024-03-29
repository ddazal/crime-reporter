import { Entity, ObjectIdColumn, Column, ObjectID } from 'typeorm'
import { Country } from '../../countries/domain/Country'

@Entity('subdivisions')
export class Subdivision {
  @ObjectIdColumn()
  id!: ObjectID

  @Column()
  name: string

  @Column()
  code: string

  @Column()
  level: string

  @Column(type => Country)
  country: Country;

  private constructor (name: string, code: string, level: string, country: Country) {
    this.name = name
    this.code = code
    this.level = level
    this.country = country
  }

  static create (name: string, code: string, level: string, country: Country) {
    return new Subdivision(name, code, level, country)
  }
}
