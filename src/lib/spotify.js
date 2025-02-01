import axios from "axios";

export const getToken = async () => {
	const response = await axios.post(
		"https://accounts.spotify.com/api/token",
		{
			grant_type: "client_credentials",
			client_id: process.env.REACT_APP_APOTIFY_CLIENT_ID,
			client_secret: process.env.REACT_APP_APOTIFY_CLIENT_SECRET,
		},
		{
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
		}
	);
	console.log(response.data);
};
