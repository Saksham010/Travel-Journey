import React from "react"
import Location from "../location.svg";
export default function Card(props){
  // console.log(props.items.id);
  return(
    <div className="father-container">
      <div className="card-container">
        <img src={props.items.image}/>
        <div className="aside-container">
          <div className="aside-one">
            <img src={Location}/>
            <p><span className="aside-one-space">{props.items.location}</span> <span className="aside-one-underline"><u>View on Google Maps</u></span></p>

          </div>

          <h1>{props.items.area}</h1>

          <h5>{props.items.date}</h5>

          <p>{props.items.description}</p>


        </div>

      </div>
      <br/>
      <hr/>

    </div>
  )

}
