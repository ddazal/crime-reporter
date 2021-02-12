export class Crime {
  description: string
  type: string

  private constructor (description: string, type: string) {
    this.description = description
    this.type = type
  }

  static create (description: string, type: string) {
    return new Crime(description, type)
  }
}
