const express = require(express);
const SpotifyWebApi = require(spotify - web - api - node);

const app = express();

app.post("/login", (req, res) => {
	const code = req.body.code;

	const spotifyApi = new SpotifyWebApi({
		redirectUri: "http://localhost:3000",
		clientId: "0ce32643c7d749ec83b63ad25c85dc8d",
		clientSecret: "cc0c62d5b30f44caaefd1276cc99005d",
	});

	spotifyApi
		.authorizationCodeGrant(code)
		.then((data) => {
			res.json({
				accessToken: data.body.access_token,
				refreshToken: data.body.refresh_token,
				expiresIn: data.body.expires_in,
			});
		})
		.catch(() => {
			res.sendStatus(400);
		});
});
