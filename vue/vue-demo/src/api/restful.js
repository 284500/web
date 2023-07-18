import axios from 'axios'

const API_URL = '/api'

export default api = {
	get(url, params) {
		return axios.get(`${API_URL}/${url}`, {
			params
		})
	},
	post: (url, data) => {
		return axios.post(`${API_URL}/${url}`, data)
	},
	put: (url, data) => {
		return axios.put(`${API_URL}/${url}`, data)
	},
	delete: (url) => {
		return axios.delete(`${API_URL}/${url}`)
	}
}