import 'whatwg-fetch'

class Http {
	static async request(method, url, data) {
		const param = {
			method: method,
			headers: {
				'Content-Type': 'application/json',
			},
		}
		if (method === 'GET') {
			//url -> url/?xx=xx&ff=xx...
			url += this.formatQuery(data)
		} else {
			param['body'] = JSON.stringify(data)
		}
		//return response
		return fetch(url, param)
			.then((response) => this.isSuccess(response))
			.then((response) => {
				return response.json()
			})
	}
	// {to:xxx,wd:xxxx}
	static formatQuery(query) {
		let params = []

		if (query) {
			for (let key in query) {
				if (query[key] != undefined) {
					//key=value
					params.push(key + '=' + query[key])
				}
			}
		}
		// '?k1=v1&k2=v2'
		return params.length > 0 ? '?' + params.join('&') : ''
	}

	static isSuccess(res) {
		if (res.status >= 200 && res.status < 300) {
			return res
		} else {
			this.requestException(res)
		}
	}

	static requestException(res) {
		const error = new Error(res.statusText)
		error.response = res
		throw error
	}
	static get(url, data) {
		return this.request('GET', url, data)
	}

	static post(url, data) {
		return this.request('POST', url, data)
	}

	static delete(url, data) {
		return this.request('DELETE', url, data)
	}

	static patch(url, data) {
		return this.request('PATCH', url, data)
	}
}

export default Http
