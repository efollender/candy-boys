const axios = require('axios');
const { SoundCloud } = require('../constants/AppConstants');

let SoundCloudUtils = {
	getTracks(){
		return axios.get(`${SoundCloud.API}/users/${SoundCloud.USER}/tracks?client_id=${SoundCloud.CLIENT_ID}`);
	},
	getTrack(trackLink){
		console.log(trackLink);
		var x = axios.get(`http://soundcloud.com/oembed`, {
			params: {
				format: 'json',
				url: trackLink,
				client_id: SoundCloud.CLIENT_ID
			}
		});
		return x;
	}
};

module.exports = SoundCloudUtils;