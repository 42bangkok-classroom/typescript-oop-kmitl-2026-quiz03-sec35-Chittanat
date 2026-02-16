export class Person {
   firstname?:string
   lastname?: string
   private age : number = 0; 
   static COUNTRY :string = "Thailand"

    constructor(firstname?:string , lastname?: string){
        if (firstname)
            this.firstname = firstname
        if (lastname)
            this.lastname = lastname
    }

   setAge(age:number){
     
    return this.age = age
   }

   getAge(){
    return this.age
   }
  getFullName(

  ){
    return (`${this.firstname}  ${this.lastname}`)
  }

}