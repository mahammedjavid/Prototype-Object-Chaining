var func = function(name,age){
    this.name = name;
    this.age =age
}

func.prototype.logIn = function(){
    console.log( this.name ,  'logged In ')
}

func.prototype.logOut = function(){
    console.log( this.name ,  'logged Out ')
}

var func1 = new func('Javid',22)
console.log(func1)



// if i change the this.name tag eg. this.nameee it will give undefined so we need to use object chaining ___ accessing the property from the prototype
if(func1.hasOwnProperty("name")){
    console.log(func1.name)
}

