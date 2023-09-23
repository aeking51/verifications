import React, { useState} from 'react';
import emailjs from '@emailjs/browser';

import './App.css'



function EmailOTP () {
	var otpNumber = 0;

	function handleSubmitEmail(e){
		e.preventDefault();
		const email = document.getElementById('email');
		console.log(email.value);

		otpNumber = Math.floor(Math.random()*600000);
		console.log(otpNumber);

		var params = {
			mail_to : email.value,
			otp : otpNumber,
		};
		 
		emailjs.send('service_7mfhixv', 'template_i6cppcw', params, 'btVGQG6XQEU4PFvoX')
			.then(function(response) {
			   console.log('SUCCESS!', response.status, response.text);
			   alert('Email sent!');
			}, function(error) {
			   console.log('FAILED...', error);
			}
		);
		
	}

	function handleSubmitOTP(e){
		e.preventDefault();
		
		const otpEntered =document.getElementById('otp');
		console.log(otpEntered);

		if ( otpNumber == otpEntered.value) {
			alert("You are entered Correct OTP!");
		} else {
			alert(" Wrong OTP!!! ");
		}
		
	}

	return(
		<div className='EmailOTP body'>
			
			<h2>Verify Your Email</h2>

			<h4>Enter E-Mail</h4>
			<form onSubmit={handleSubmitEmail}>
				<input type="email" name='email' id='email' placeholder="Enter your Email" required />
				<button type='submit' name='sign-in-button' id='sign-in-button' value='Get Code'>Send Code</button>
			</form>

			<h4>Enter OTP</h4>
			<form onSubmit={handleSubmitOTP}>
				<input type="number" name='otp' id='otp' placeholder="Enter your OTP number" required />
				<input type='submit' name='verify' id='verify' value='Verify'/>
			</form>

			<br/><br/>
			<a href='/'>Goto Back</a>

		</div>
	)


}

export default EmailOTP