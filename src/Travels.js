import React from "react"

import Travel from "./Travel";

const arr = [{
    destination:"Madrid",
    country:"España",
    photo:"https://upload.wikimedia.org/wikipedia/commons/9/99/Calle_de_Alcalá_%28Madrid%29_16.jpg",
    distance:"2000" 
}, {      
    destination:"Roma",
    country:"Italia",
    photo:"https://upload.wikimedia.org/wikipedia/commons/c/c0/Rome_Montage_2017.png",
    distance:"1500"
}, {      
    destination:"Paris",
    country:"Francia",
    photo:"https://upload.wikimedia.org/wikipedia/commons/9/97/01_vue_Paris_depuis_Notre-Dame.jpg",
    distance:"1500"
}, {      
    destination:"Estocolmo",
    country:"Suecia",
    photo:"https://upload.wikimedia.org/wikipedia/commons/8/8c/Operan_Stockholm.jpg",
    distance:"1500"
}, {      
    destination:"Asturias",
    country:"España",
    photo:"https://upload.wikimedia.org/wikipedia/commons/0/01/LagoEnol.JPG",
    distance:"1500"

}];

const Travels = () => (
    <div>
        <h2>Travel</h2>
        {arr.map(item => (
            <Travel 
            destination = {item.destination}
            country = {item.countre}
            photo = {item.photo}
            distance = {item.distance}
            />
        ))}
    </div>

)
export default Travels;
