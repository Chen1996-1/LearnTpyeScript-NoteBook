class User {
    fullName: string
    lastName:string
    firstName:string

    constructor(firtName:string, lastName:string){
        this.firstName = firtName
        this.lastName = lastName
        this.fullName = firtName + ' ' + lastName
    }
}
interface Person{
    firstName:string
    lastName:string
}
function greeter(person: Person){
    return 'Hello, ' + person.firstName + person.lastName
}

let user = new User('Chen', 'Yunlong')
console.log(greeter(user))
