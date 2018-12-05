import React from 'react';
import { Loading } from '../components/Loading';
import { FormUpdateStaff } from '../containers/FormUpdateStaff';
import { Appointment } from '../utils/Appointment';

export class UpdateStaffFarmasi extends React.Component {
	/** 
	 * TODO: Akses method getDetailPasien(idPasien) pada Appointment dan lakukan update state. 
	 * TODO: Lakukan pemanggilan pada constructor() atau pada lifecycle componentDidMount()
	 */

	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			staff: {},
		}
		Appointment.getDetailStaff(this.props.match.params.id).then(response => {
			if(response.status=== 200) {
				this.setState({
					loading: false,
					staff: response.result
				})
			}
			else{
				alert('Data tidak ditemukan')
				this.props.history.push('/all-staff-farmasi')
			}
		})

		this.handleFormSubmit = this.handleFormSubmit.bind(this)
	}

	handleFormSubmit(e) {
		e.preventDefault()
		/** 
		 * TODO: Akses method updateStatusPasien(requestBody) pada Appointment dan lakukan update state. 
		 */
		this.setState({
			loading: true
		})

		const data = new FormData(e.target)
		const dataJson = {}

		data.forEach((val,key) => {
			if(val !== "") {
				let name = key.split('.');
				if(name.length > 1){
					let last = name.pop()
					name.reduce((prev, next) => {
						return prev[next] = prev[next] || {};
					},
					dataJson)[last] = val
				}
				else{
					dataJson[key]=val
				}
			}
		})
		Appointment.updateStatusStaff(dataJson).then(response => {
			if(response.status === 200){
				this.setState({
					loading : false,
					staff : response.result
				})
				alert(`Sukses update staff ${this.state.staff.name}`)
			}
			else{
				this.setState({
					loading : false
				})
				alert(`Gagal update staff ${this.state.staff.name}`)
			}
		})
	}

	render() {
		if (this.state.loading) {
			return (
				<Loading msg="Fetching Data..." />
			)
		} else {
			return (
				<FormUpdateStaff staff={this.state.staff} onSubmit={this.handleFormSubmit} />
			)
		}
	}
}