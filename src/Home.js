import React from 'react';

import './App.css'


class Home extends React.Component {

	render() {
		return(
			<div className='Home body'>
				
                <h2>Go to menu</h2>

                <ul>
                    <li><a href='/mobileotp'>Mobile OTP</a></li>
                    <li><a href='/emailotp'>Email OTP</a></li>
					<li><a href='/pincodelookup'>Find Pincode Details</a></li>
					<li><a href='/aadhaar_check'>Validate your AADHAAR Number</a></li>
                </ul>

			</div>
		)
	}


}

export default Home