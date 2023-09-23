import './App.css'
import React, { useState, useEffect } from 'react';
import Pincode from 'react-pincode';

function App() {
  const [pincodeData, setPincodeData] = useState('');
  return (
        <div className='PincodeLookup body'>

            <h2>Pincode Lookup</h2>

            <h4>Enter Pincode</h4>
            <Pincode
                invalidError="Please check pincode"
                lengthError="check length"
                getData={(data) => setPincodeData(data)}
            />


            <a href='/'>Goto Back</a>
    </div>
  );
}






// class EmailOTP extends React.Component {

// 	handleChange = (e) => {
// 		const { name, value } = e.target
// 		this.setState({
// 			[name]: value
// 		})
// 	}

//     onSubmitPin = (e) => {
//     }


// 	render() {
// 		return(
// 			<div className='PincodeLookup'>
				
// 				<h2>Pincode Lookup</h2>

// 				<h4>Enter Pincode</h4>
// 				<form onSubmit={this.onSubmitPin}>
// 					<input type="number" name='pincode' id='pincode' placeholder="Enter your Pincode" required onChange={this.handleChange}/>
// 					<input type='submit' name='find' id='find' value='Find'/>
// 				</form>

// 				<br/><br/>
// 				<a href='/'>Goto Back</a>

// 			</div>
// 		)
// 	}


// }

export default App