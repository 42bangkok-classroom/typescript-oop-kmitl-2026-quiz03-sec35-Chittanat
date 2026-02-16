export class Person {
   firstname?:string
   lastname?: string
   private age : number = 0; 
   static COUNTRY :string = "Thailand"

    constructor(firstname ?: string , lastname ?: string){
        if (firstname)
            this.firstname = firstname
        if (lastname)
            this.lastname = lastname
    }

   setAge(age:number){
    if (age > 0 && age <= 100) this.age = age 
    return this.age = age
   }

   getAge(age:number){
    return this.age
   }
  getFullName(firstname:string, lastname:string){
    return `${this.firstname}  ${this.lastname}`
  }

}