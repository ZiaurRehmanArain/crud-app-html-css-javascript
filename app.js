// console.log(firebase.database())
var email = document.getElementById("email")
var password = document.getElementById("password")
var signup = document.getElementById("signup")
var signin = document.getElementById("signin")
var signout = document.getElementById("signout")


signup.addEventListener("click", function () {
    // console.log(email.value)
    // console.log(password.value)
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((user) => {
            console.log(user.user.uid)

            //get current user 

            localStorage.setItem("email",email.value)

            localStorage.setItem("uid",user.user.uid)

            // signup.setAttribute("style","display:none")
            // signin.setAttribute("style","display:none")

            //send database 
            var obj = {
                name : "smit",
                email:email.value,
                password:password.value,
                role: "user",//multi user 
                // home_service=>user,worker,admin>panel 
                uid:user.user.uid
            }

            // send data : 

            // ecom add : storage 
            // firebase.database().ref("users/").push(obj)
            // firebase.database().ref("users/").child(user.user.uid).push(obj)

            //send database 

            firebase.database().ref("users/").child(user.user.uid).set(obj)



            firebase.auth().signInWithEmailAndPassword(email.value, password.value)
                .then((user) => {
                    console.log(user.user.uid)





                })
                .catch((err) => {
                    alert(err.message)
                })



        })
        .catch((e) => {
            // console.log(console.log(e.message))
            alert(e.message)
        })
})


signin.addEventListener("click", function () {
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((user1) => {
            console.log(user1.user)
            

            localStorage.setItem("uid",user1.user.uid)

            // window.location.href="new.html"

            window.location.replace("new.html") //page change

            // signup.setAttribute("style","display:none")
            // signin.setAttribute("style","display:none")
            // signout.removeAttribute("style")






        })
        .catch((err) => {
            alert(err.message)
        })
})

// var getuid = localStorage.getItem("uid")
// console.log(getuid)
// if(getuid!=null){
//     signup.setAttribute("style","display:none")
//     signin.setAttribute("style","display:none")
//     signout.removeAttribute("style")

// }

// signout.addEventListener("click",function(){
//     firebase.auth().signOut()
// })



function Student(name,class1){
   this.name= name
   this.class1= class1
   
}

var std1 = new Student("asad",13)
var std2 = new Student("ali")

console.log(std1,std2)


