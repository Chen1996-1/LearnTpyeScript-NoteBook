var User = /** @class */ (function () {
    function User(firtName, lastName) {
        this.firstName = firtName;
        this.lastName = lastName;
        this.fullName = firtName + ' ' + lastName;
    }
    return User;
}());
function greeter(person) {
    return 'Hello, ' + person.firstName + person.lastName;
}
var user = new User('Chen', 'Yunlong');
console.log(greeter(user));
