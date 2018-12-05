const cors = "https://cors-anywhere.herokuapp.com/";
const baseUrl = "http://si-appointment.herokuapp.com/api";

export const Appointment = {
	getAllPasien() {
		/** 
		 * TODO: Fetch data all pasien
		 * @return listAllPasien
		 */
		return fetch(`${cors}${baseUrl}/1/getAllPasien`, {
			method: 'GET',
		})
		.then(response => {
			return response.json()
		})
		.then(jsonResponse => {
			return jsonResponse
		})
	},

	getDetailPasien(idPasien) {
		/** 
		 * TODO: Fetch detail data pasien
		 * @param idPasien
		 * @return detailPasien
		 */
		return fetch(`${cors}${baseUrl}/getPasien/${idPasien}`, {
			method:'GET',
		})
		.then(response => {
			return response.json()
		})
		.then(jsonResponse => {
			return jsonResponse
		})
	},

	updateStatusPasien(requestBody) {
		/** 
		 * TODO: POST data baru pasien ke SI-Appointment
		 * @param requestBody
		 * @return responseRequest
		 */
		return fetch(`${cors}${baseUrl}/1/updatePasien`, {
			method : 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		})
		.then(response=> {
			return response.json()
		})
		.then(jsonResponse => {
			return jsonResponse
		})
	},

	getAllStafFarmasi(){
		return fetch(`${cors}${baseUrl}/1/getAllStaffFarmasi`, {
			method: 'GET',
		})
		.then(response => {
			return response.json()
		})
		.then(jsonResponse=> {
			return jsonResponse
		})
	},

	getDetailStaff(idStaff) {
		/** 
		 * TODO: Fetch detail data staff
		 * @param idStaff
		 * @return detailStaff
		 */
		return fetch(`${cors}${baseUrl}/getStaff/${idStaff}`, {
			method:'GET',
		})
		.then(response => {
			return response.json()
		})
		.then(jsonResponse => {
			return jsonResponse
		})
	},

	updateStatusStaff(requestBody) {
		/** 
		 * TODO: POST data baru pasien ke SI-Appointment
		 * @param requestBody
		 * @return responseRequest
		 */
		return fetch(`${cors}${baseUrl}/1/updateStaff`, {
			method : 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		})
		.then(response=> {
			return response.json()
		})
		.then(jsonResponse => {
			return jsonResponse
		})
	},

	addLabResult(requestBody) {
		/** 
		 * TODO: POST data baru hasil lab pasien ke SI-Appointment
		 * @param requestBody
		 * @return responseRequest
		 */
		 return fetch(`${cors}${baseUrl}/1/addLabResult`, {
		 	method : 'POST',
		 	headers : {
		 		'Content-Type' : 'application/json'
		 	},
		 	body: JSON.stringify(requestBody)
		 })
		 .then(response => {
		 	return response.json()
		 })
		 .then(jsonResponse => {
		 	return jsonResponse
		 })
	}

	
}