//import React from 'react'

export default function EmpSal() {
    const empData = [
      {  name:"Taj Mahal",
        location:"Agra",
        country:"India",
        url:"https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/taj-mahal-202004-1587656298.jpg?impolicy=Medium_Widthonly&w=700" },

      {  name:"Colosseum",
        location:"Rome",
        country:"Italy",
        url:"https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/colosseum-202004-1587656297.jpg?impolicy=Medium_Widthonly&w=700" },

      {name:"Machu Picchu",
        location:"Cuzco",
        country:"Peru",
        url:"https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/machu-picchu-202004-1587656296.jpg?impolicy=Medium_Widthonly&w=700" },

      {  name:"Christ the Redeemer",
        location:"Rio de Janeiro",
        country:"Brazil",
        url:"https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/christ-the-redeemer-202004-1587656295.jpg?impolicy=Medium_Widthonly&w=700" } ,

      {  name:"Chichen Itza",
        location:"Yucatan State",
        country:"Mexico",
        url:"https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/chichen-itza-202004-1587656294.jpg?impolicy=Medium_Widthonly&w=700" },

        {  name:"Petra",
            location:"Ma'an",
            country:"Jordan",
            url:"https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/petra-202004-1587656293.jpg?impolicy=Medium_Widthonly&w=700" },

            {  name:"Great Wall of China",
                location:"china",
                country:"China",
                url:"https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/great-wall-of-china-202004-1587656292.jpg?impolicy=Medium_Widthonly&w=700" },
                
    
    ];
  
    // () => ()
  
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">name</th>
              <th scope="col">location</th>
              <th scope="col">country</th>
              <th scope="col">url</th>

            </tr>
          </thead>
          <tbody>
            {empData.map(
                (x)=>( 
                    <tr>
                    <td>{name}</td>
                    <td>{location}</td>
                    <td>{country}</td>
                    <td>{url}</td>
                  </tr>
                 )
            )}
           
          </tbody>
        </table>
      </div>
    );
  }