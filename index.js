 const express = require("express")
 var jwt = require('jsonwebtoken');
 const bcrypt = require('bcrypt');
 const { connection } = require("./Config/db.js")
 const { UserModel } = require("./Models/User")
const passwordValidator = require('password-validator');
const validator = require('validator');
 const cors = require('cors');
 const { CourseModel } = require("./Models/Course.js");

const app = express()

require("dotenv").config()
app.use(express.json())
app.use(cors());

app.get("/lll", (req, res) => {
    res.send("welcome")
})

app.get("/login", (req, res) => {

    res.send("wrgnrggnrgngnnnnnyrn")
    // let { email, password } = req.body
    // let user = await UserModel.findOne({ email })

    // console.log(user)
    // let hash = user.password
    // bcrypt.compare(password, hash, function (err, result) {

    //     if (result) {
    //         var token = jwt.sign({ email: email }, 'secret');
    //         console.log(token)
    //         res.send({ "msg": "Login success", "token": token })

    //     }

    //     else {
    //         res.send("Login Failed")
    //     }

    // })
})

// const passwordSchema = new passwordValidator();

// // Define the password criteria
// passwordSchema
//     .is().min(8) // Minimum length of 8 characters
//     .has().uppercase() // Must have at least one uppercase letter
//     .has().lowercase() // Must have at least one lowercase letter
//     .has().digits() // Must have at least one digit
//     .has().symbols() // Must have at least one symbol
//     .has().not().spaces(); // Must not contain spaces

// app.post("/signup", async (req, res) => {
//     console.log(req.body)
//     let { username, email, password } = req.body

//     // Validate the email
//     if (!validator.isEmail(email)) {
//         return res.status(400).send("Invalid email address");
//     }

//     // Validate the password
//     if (!passwordSchema.validate(password)) {
//         return res.status(400).send("Invalid password. Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one digit, one symbol, and no spaces.");
//     }

//     try {
//         // Hash the password
//         const hash = await bcrypt.hash(password, 6);

//         // Create a new user with the hashed password
//         const user = new UserModel({ username, email, password: hash });

//         // Save the user to the database
//         await user.save();

//         res.send("Signup Successful");
//     } catch (err) {
//         console.error(err);
//         res.status(500).send("Something went wrong or invalid or used credentials. Please try again later.");
//     }
// });



// app.get("/dashboard", (req, res) => {
//     const token = req.headers.authorization.split(" ")[1]
//     jwt.verify(token, 'secret', async function (err, decoded) {
//         if (err) {
//             res.send("Please login")
//         } else {
//             let data = await CourseModel.find({ email:decoded.email })
//             res.send(data)
//         }
//     });

// })
// app.post("/addcourse", (req, res) => {
//     const token = req.headers.authorization.split(" ")[1]
//     let { course,
//         duration,
//         teacher,
//         mode,
//         fee } = req.body
//         jwt.verify(token, 'secret', async function (err, decoded) {
//             if (err) {
//             res.status(500).send("Something went wrong or invalid or used credentials. Please try again later.");
//         } else {
//             try {
//                 const courseData = new CourseModel({
//                     course,
//                     duration,
//                     teacher,
//                     mode,
//                     fee,
//                     email: decoded.email
//                 });

//                 // Save the user to the database
//                 await courseData.save();

//                 res.send("added Successful");
//             } catch (err) {
//                 console.error(err);
//                 res.status(500).send("Something went wrong or invalid or used credentials. Please try again later.");
//             }
//         }
//     });

// })


app.listen(7500, async () => {
    try {
        await connection
        console.log("connected")
    }
    catch (err) {
        console.log("not connected")
        console.log(err)
    }
    console.log("linstening to port 7500")
   // console.log(process.env.NAME)
    //console.log(process.env.MONGO_URL)
})