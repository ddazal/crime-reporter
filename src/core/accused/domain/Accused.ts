import { Column, Entity, JoinColumn, ManyToOne, ObjectID, ObjectIdColumn } from 'typeorm'
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
  @JoinColumn()
  birthPlace: Subdivision

  private constructor (firstName: string, lastName: string, gender: string, birthDate: string, birthPlace: Subdivision) {
    this.firstName = firstName
    this.lastName = lastName
    this.gender = gender
    this.birthDate = birthDate
    this.birthPlace = birthPlace
  }

  static create (firstName: string, lastName: string, gender: string, birthDate: string, birthPlace: Subdivision) {
    return new Accused(firstName, lastName, gender, birthDate, birthPlace)
  }

  get getFullName () {
    return `${this.firstName} ${this.lastName}`.trim()
  }
}
