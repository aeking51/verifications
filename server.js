const express = require('express');
const router =express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());

app.use("/", router);

app.listen(8080, () => console.log('Server is Running on 8080'));

const Email = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:"jerinmr51@gmail.com",
        pass : "azyzqennegzkyxgv"
    }
})

Email.verify((error) => {
    if(error){
        console.log(error)
    }else{
        console.log("Ready to send email")
    }
})

router.get('/email',(req,res) => {
    res.send("Hi it is working!");
})

router.post('/email',(req,res) => {
    const email = req.body.email;
    const otp = req.body.otp;

    console.log(req.body.otp);

    const mailto = {
        from : "jerinmr51@gmail.com",
        to : email,
        subject: "YOU got a NEW OTP",
        html: `
            <p> email : ${email} </p>
            <p>Your OTP Is ${otp} ${req.body}</p>
        `
    }
    Email.sendMail(mailto, (error) => {
        if (error) {
            res.json({status: 'error'});
        } else {
            res.json({status: 'success'});
        }
    })

})