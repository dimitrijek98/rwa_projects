const Sequelize = require('sequelize');
const express = require('express');
const app = express();
const axios = require('axios');
const Op = Sequelize.Op;
const fs = require('fs');
const download = require('image-downloader')
const request = require('request');


const config = {
    "api_key":"RGAPI-54acc6d9-985b-4a0a-a273-85874cc7fbbb"
    
}
function downloadPictures(imgName){	
	 
	// Download to a directory and save with the original filename
	const options = {
	  url: `http://ddragon.leagueoflegends.com/cdn/9.9.1/img/profileicon/${imgName}`,
	  dest: './profileIcons'                  // Save to /path/to/dest/image.jpg
	}
	 
	download.image(options)
	  .then(({ filename, image }) => {
		console.log('File saved to', filename)
	  })
	  .catch((err) => {
		console.error(err)
	  })
	
}
axios.get(`http://ddragon.leagueoflegends.com/cdn/9.9.1/data/en_US/profileicon.json`)
	.then(response => response.data)
	.then(response => {
		//download(`http://ddragon.leagueoflegends.com/cdn/9.9.1/img/profileicon/${valule.image.full}`, `./prifileIcons/${value.image.full}`,()=>console.log("done"));
		//Object.keys(response).map(resp => console.log(resp))
		Object.values(response.data).map(value => {

				downloadPictures(value.image.full);

		})
		
	})