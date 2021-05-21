import { makeAutoObservable } from 'mobx'

export class RootStore {
  user: User
  sampleStringList = ['one', 'two', 'three']
  frontImage: any = null
  sideImage: any = null

  constructor() {
    makeAutoObservable(this)
  }

  get sampleStringsCount(): number {
    return this.sampleStringList.length
  }

  public addNewString(newString: string): void {
    this.sampleStringList.push(newString)
  }

  public addFrontImage(newString: any): boolean {
    this.frontImage = newString
    return true
  }

  public addSideImage(newString: any): boolean {
    this.sideImage = newString
    return true
  }

  public removeFrontImage(): boolean {
    this.frontImage = null
    return true
  }

  public removeSideImage(): boolean {
    this.sideImage = null
    return true
  }
}

export class User {
  acceptedTerms = false
  isAdult = false
}
