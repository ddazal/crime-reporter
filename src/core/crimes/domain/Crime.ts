import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity('crimes')
export class Crime {
  @ObjectIdColumn()
  id!: ObjectID

  @Column()
  description: string

  @Column()
  type: string

  private constructor (description: string, type: string) {
    this.description = description
    this.type = type
  }

  static create (description: string, type: string) {
    return new Crime(description, type)
  }
}
