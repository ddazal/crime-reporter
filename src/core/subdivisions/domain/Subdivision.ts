import { Entity, ObjectIdColumn, Column, ObjectID, ManyToOne } from 'typeorm'
import { Country } from '../../countries/domain/Country'

@Entity()
export class Subdivision {
  @ObjectIdColumn()
  id!: ObjectID

  @Column()
  name: string

  @Column()
  code: string

  @Column()
  level: string

  @ManyToOne(() => Country, country => country.subdivisions)
  country!: Country;

  private constructor (name: string, code: string, level: string) {
    this.name = name
    this.code = code
    this.level = level
  }

  static create (name: string, code: string, level: string) {
    return new Subdivision(name, code, level)
  }
}
