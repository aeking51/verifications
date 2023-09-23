import React from 'react';
import './firebase';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import './App.css'


class MobileOTP extends React.Component {

	handleChange = (e) => {
		const { name, value } = e.target
		this.setState({
			[name]: value
		})
		
	}

	onSignInMobileValidate = (e) => {
		e.preventDefault()
		const errorMsg = document.getElementById('mobile-validate-err')

		if (this.state.mobile == null)
		{
			errorMsg.innerText = 'Enter Mobile Number';
			errorMsg.style.color = 'red';
			errorMsg.style.padding = '10px';
			return false;
		} else if (this.state.mobile.length !== 10){
			errorMsg.innerText = 'Enter Valid Number';
			errorMsg.style.color = 'red';
			errorMsg.style.padding = '10px';
			return false;
		}else{
			errorMsg.innerText = '';
			document.getElementById("verify").disabled = false;
			this.onSignInSubmit();
		}
	}

	onSubmitOTPValidate = (e) => {
		e.preventDefault()
		const otp = document.getElementById('otp')
		const errorMsg = document.getElementById('otp-validate-err')
		
		if ( otp.value == null || otp.value === ''){
			errorMsg.innerText = 'No OTP Number Provided';
			errorMsg.style.color = 'red';
			errorMsg.style.padding = '10px';
			return false;
		} else if (otp.value.length !== 6) {
			errorMsg.innerText = 'Enter Valid OTP';
			errorMsg.style.color = 'red';
			errorMsg.style.padding = '10px';
			return false;
		}else{
			errorMsg.innerText = '';
			this.onSubmitOTP();
		}
	}

	configureCaptcha = () =>{
		const auth = getAuth();

		window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
		'size': 'invisible',
		'callback': (response) => {
			// reCAPTCHA solved, allow signInWithPhoneNumber.
			this.onSignInSubmit();
			console.log("ReCaptcha Verified")
		},
		defaultCountry : 'IN'
		});
	}

	onSignInSubmit = (e) => {
		if (e && e.preventDefault) { e.preventDefault(); }

		this.configureCaptcha();
		const auth = getAuth();

		const phoneNumber = "+91" + this.state.mobile;
		console.log(phoneNumber);
		const appVerifier = window.recaptchaVerifier;
		signInWithPhoneNumber(auth, phoneNumber, appVerifier)
			.then((confirmationResult) => {
			// SMS sent. Prompt user to type the code from the message, then sign the
			// user in with confirmationResult.confirm(code).
			window.confirmationResult = confirmationResult;
			alert("Code is Sent");
			// ...
			}).catch((error) => {
			// Error; SMS not sent
			// ...
			console.log(error);
			console.log("Error in Sending OTP message")
			});
	}

	onSubmitOTP = (e) => {
		
		const code = this.state.otp;
		console.log(code);
		window.confirmationResult.confirm(code).then((result) => {
		// User signed in successfully.
		const user = result.user;
		console.log(JSON.stringify(user))
		alert("User signed in successfully");
		// ...
		}).catch((error) => {
		// User couldn't sign in (bad verification code?)
		// ...
		console.log(error);
		console.log("Error in veryfying OTP")
		});
	}

	render() {
		return(
			<div className='MobileOTP body'>
				
				<h2>Verify Your Mobile Number</h2>

				<h4>Enter Number</h4>
				<form onSubmit={this.onSignInMobileValidate}>
					<input type="tel" name='mobile' id='mobile' placeholder="Enter your mobile number" onChange={this.handleChange}/>
					<div id="mobile-validate-err"></div>
					<input type='submit' name='sign-in-button' id='sign-in-button' value='Get Code'/>
				</form>

				<h4>Enter OTP</h4>
				<form onSubmit={this.onSubmitOTPValidate}>
					<input type="number" name='otp' id='otp' placeholder="Enter your OTP number" onChange={this.handleChange}/>
					<div id="otp-validate-err"></div>
					<input type='submit' name='verify' id='verify' value='Verify' disabled/>
				</form>

				<br/><br/>
				<a href='/'>Goto Back</a>

			</div>
		)
	}


}

export default MobileOTP