import React, { useEffect, useState } from "react";
import picios from "picios";
import {CodeToparcham,FarsiNametala} from "./constant";
import currency from './currency.js';
const tala = () =>{
	const [Items,setItems] = useState([]);
	const ApiUrl = "https://currency.jafari.li/json";
	useEffect(() => {
		picios({
			method: "GET",
			url: ApiUrl
		})
		.then(response => {
			setItems(response.data.list);
		})
		.catch(
			/* error => console.log(err) */
		);
    }, []);
	useEffect(() => {
        /* console.log(lists); */
    }, [lists]);
	return (
        <div className="main-cards">
            <h4 className="title-heading">
				ارزش گرانی:
			</h4>
            {
                (lists.map((list, index) => {return(
                      <currency index={index} buy_currency={list.Rate} sell_currency={list.Rate} code_currency={FarsiNametala[list.Name]} parcham_currency={CodeToparcham[list.Name]}/>
                    )
					})
				)
			}
		</div>
	);
}
export default tala;
