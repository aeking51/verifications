import React, { useState} from 'react';

import './App.css'

function Aadhaar () {

	function handleSubmitAadhaar(e){
		e.preventDefault();
		const aadhaar = document.getElementById('aadhaar');
		console.log(aadhaar.value);
		const errorMsg = document.getElementById('aadhaar-validate-err');

		if (aadhaar.value == null || aadhaar.value === ''){
			errorMsg.innerText = 'No aadhaar Number Provided';
			errorMsg.style.color = 'red';
			errorMsg.style.padding = '10px';
			return false;
		}else if (aadhaar.value.length !== 12) {
			alert("aadhaar number is not valid")
			return false;
		}else{
			alert("aadhaar number is valid")
		}
		
	}

	return(
		<div className='Aadhaar body'>
			
			<h2>Verify Your AADHAAR</h2>

			<h4>Enter Aadhaar No</h4>
			<form onSubmit={handleSubmitAadhaar}>
				<input type="number" name='aadhaar' id='aadhaar' placeholder="Enter your aadhaar NO." required />
				<div id="aadhaar-validate-err"></div>
				<button type='submit' name='check' id='check'>check</button>
			</form>

			<br/><br/>
			<a href='/'>Goto Back</a>

		</div>
	)


}

export default Aadhaar