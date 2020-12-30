import React, { useEffect, useState } from "react";
import picios from "picios";
import {CodeTocountry, CodeToparcham} from "./constant";
import currency from './currency.js';
import apiwait from './apiwait.js';
function App(){
	const [currencies, setCurrencies] = useState([]);
	const ApiUrl = "https://currency.jafari.li/json";
	useEffect(() => {
		picios({
			method: "GET",
			url: ApiUrl;
		})
		.then(response =>{
			setCurrencies(response.data.currency);
		})
		.catch(
			/*error mide, matni ke dakhele parantez hast ro mige
				err => console.log(err) 
			*/
		);
	},[]);
	return (
		<div ClassName="app">
			<header ClassName="header-app">
				<img ClassName="logo-app" src={logo}/>
				<p>
					Edit <code> src/App.js </code> & save to reload.
				</p>
				<a className="link-app" href="https://reactjs.org" rel="noopener noreferrer">
					learning react -_-
				</a>
			</header>
		</div>
	);
}
export default App;
