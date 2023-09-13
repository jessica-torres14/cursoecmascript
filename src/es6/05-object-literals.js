/* enahced object literals */

function  newUser(user, age, country,uId){
    return{
        user:user,
        age,
        country,
        id: uId
    }
}
console.log(newUser("gndx",34,"Colombia",1))