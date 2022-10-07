function User(name,age){
    this.name = name;
    this.age =age
    this.online = false
}

User.prototype.logIn = function(){
    console.log( this.name ,  'logged In ')
}

User.prototype.logOut = function(){
    console.log( this.name ,  'logged Out ')
}


// Creating New Main Function ( child Function of User)

function Admin(...args){
    // console.log(args)
    User.apply(this , args)
    this.firstname = "Mahammed"
}

// this prototype will be nested inside the other
Admin.prototype = Object.create(User.prototype)
// if i create method in Admin it wont nested it will stay in admin prototype
Admin.prototype.deleteUser = function(UserName){
    AllUsers = AllUsers.filter((x)=>{
       return x.name != UserName.name
    })
}
var UserOne = new User("Mahammed Javid",23)
var Usertwo = new User("Muhammad Aizan",6)
var adminOne = new Admin("Javid",22)
console.log(adminOne)

var AllUsers = [UserOne,Usertwo,adminOne]


adminOne.deleteUser(Usertwo)
console.log(AllUsers)

// Inherite the methods from User Function (Parent Function)



