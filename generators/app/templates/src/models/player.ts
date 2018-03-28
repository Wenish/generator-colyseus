export class Player {
  public id: string
  public x: number
  public z: number

  constructor (
    id: string,
    x: number,
    z: number
  ) {
    this.id = id
    this.x = x
    this.z = z
  }
}
