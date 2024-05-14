let usernames :string [] = ["admin" ,"user1" ,"user2" ,"user3","user4"]

usernames.forEach(usernames =>{
    if(usernames=="admin"){
        console.log("Hello admin, would you like to see a status report?")

    }
    else{
        console.log(`Hello ${usernames} ,thank you for logging again!!`)
    }
})