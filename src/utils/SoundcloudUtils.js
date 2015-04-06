const axios = require('axios');
const { SoundCloud } = require('../constants/AppConstants');

let SoundCloudUtils = {
	getTracks(){
		return axios.get(`${SoundCloud.API}/users/${SoundCloud.USER}/tracks?client_id=${SoundCloud.CLIENT_ID}`);
	}
};

module.exports = SoundCloudUtils;