const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");
const cors = require("cors");
const bodyParser = require("body-parser");
const lyricsFinder = require("lyrics-finder");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/refresh", (req, res) => {
	const refreshToken = req.body.refreshToken;

	const spotifyApi = new SpotifyWebApi({
		redirectUri: "http://localhost:3000/spdashboard",
		clientId: "0ce32643c7d749ec83b63ad25c85dc8d",
		clientSecret: "cc0c62d5b30f44caaefd1276cc99005d",
		refreshToken,
	});

	spotifyApi
		.refreshAccessToken()
		.then((data) => {
			res.json({
				accessToken: data.body.accessToken,
				expiresIn: data.body.expiresIn,
			});
		})
		.catch(() => {
			res.sendStatus(400);
		});
});

app.post("/slogin", (req, res) => {
	const code = req.body.code;

	const spotifyApi = new SpotifyWebApi({
		redirectUri: "http://localhost:3000/spdashboard",
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

app.get("/lyrics", async (req, res) => {
	const lyrics =
		(await lyricsFinder(req.query.artist, req.query.track)) ||
		"Seems you are gonna have to guess the lyrics for this one.";
	res.json({ lyrics });
});

app.listen(3001);
