import { Column, Entity, ManyToOne, ObjectID, ObjectIdColumn } from 'typeorm'
import { Subdivision } from '../../subdivisions/domain/Subdivision'

@Entity('accused')
export class Accused {
  @ObjectIdColumn()
  id!: ObjectID

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  gender: string

  @Column()
  birthDate: string

  @ManyToOne(() => Subdivision)
  birthPlace!: Subdivision

  private constructor (firstName: string, lastName: string, gender: string, birthDate: string) {
    this.firstName = firstName
    this.lastName = lastName
    this.gender = gender
    this.birthDate = birthDate
  }

  static create (firstName: string, lastName: string, gender: string, birthDate: string) {
    return new Accused(firstName, lastName, gender, birthDate)
  }

  get getFullName () {
    return `${this.firstName} ${this.lastName}`.trim()
  }
}
