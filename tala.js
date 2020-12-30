import React, { useEffect, useState } from "react";
import currency from "./currency.js";
import {CodeToparcham,FarsiNametala} from "./constant";
import picios from "picios";

const tala =() =>{
	const [talas,settala] = useState([]);
	const ApiUrl = "https://currency.jafari.li/json";
	useEffect(() => {
		picios({
			method: "GET",
			url: ApiUrl
		})
		.then(response => {
			settalas(response.data.tala);
		})
		.catch(
			//err => console.log(err)
		);
	}, []);
	useEffect(() => {
		//console.log(talas);
	}, [talas]);
	return (
		<div className="cards-main">
			<h4 className="title-heading"> 
				قیمت:
			</h4>{
				talas.length === 0 ? (
					<WatingApi />
                ) : (talas.map((tala, index) => {return(
						<currency index={index} buy_currency={tala.Buy} sell_currency={tala.sell} code_courency={FarsiNametala[tala.coin]} parcham_currency={CodeToparcham[tala.coin]}/>
                    )
					})
				)
            }

		</div>
	);
}

export default tala;
