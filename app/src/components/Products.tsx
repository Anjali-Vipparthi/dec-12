//import React from 'react'

export default function Products() {
    const data = [
        {  Name:"Taj Mahal",
            Location:"Agra",
            Country:"India",
            URL:"https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/taj-mahal-202004-1587656298.jpg?impolicy=Medium_Widthonly&w=700" },
    
          {  Name:"Colosseum",
            Location:"Rome",
            Country:"Italy",
            URL:"https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/colosseum-202004-1587656297.jpg?impolicy=Medium_Widthonly&w=700" },
    
          {Name:"Machu Picchu",
            Location:"Cuzco",
            Country:"Peru",
          URL:"https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/machu-picchu-202004-1587656296.jpg?impolicy=Medium_Widthonly&w=700" },
    
          {  Name:"Christ the Redeemer",
            Location:"Rio de Janeiro",
            Country:"Brazil",
           URL:"https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/christ-the-redeemer-202004-1587656295.jpg?impolicy=Medium_Widthonly&w=700" } ,
    
          {  Name:"Chichen Itza",
            Location:"Yucatan State",
            Country:"Mexico",
          URL:"https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/chichen-itza-202004-1587656294.jpg?impolicy=Medium_Widthonly&w=700" },
    
            {  Name:"Petra",
               Location:"Ma'an",
                Country:"Jordan",
                URL:"https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/petra-202004-1587656293.jpg?impolicy=Medium_Widthonly&w=700" },
    
                {  Name:"Great Wall of China",
                    Location:"china",
                 Country:"China",
                    URL:"https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/great-wall-of-china-202004-1587656292.jpg?impolicy=Medium_Widthonly&w=700" },
                    
      ];
    // () => ()
   
    return <div>
      
      <table className="table">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Location</th>
        <th scope="col">Country</th>
        <th scope="col">URL</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Taj Mahal</td>
        <td>Agra</td>
        <td>India</td>
        <td>https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/taj-mahal-202004-1587656298.jpg?impolicy=Medium_Widthonly&w=700</td>
      </tr>
      <tr>
        <td>Colosseum</td>
        <td>Rome</td>
        <td>Italy</td>
        <td>https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/colosseum-202004-1587656297.jpg?impolicy=Medium_Widthonly&w=700</td>
      </tr>
      <tr>
        <td>Machu Picchu</td>
        <td>Cuzco</td>
        <td>Peru</td>
        <td>https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/machu-picchu-202004-1587656296.jpg?impolicy=Medium_Widthonly&w=700</td>
      </tr>
      <tr>
        <td>Christ the Redeemer</td>
        <td>Rio de Janeiro</td>
        <td>Brazil</td>
        <td>https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/christ-the-redeemer-202004-1587656295.jpg?impolicy=Medium_Widthonly&w=700</td>
      </tr>
      <tr>
        <td>Chichen Itza</td>
        <td>Yucatan State</td>
        <td>Mexico</td>
        <td>https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/chichen-itza-202004-1587656294.jpg?impolicy=Medium_Widthonly&w=700</td>
      </tr>
      <tr>
        <td>Petra</td>
        <td>Ma'an</td>
        <td>Jordan</td>
        <td>https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/petra-202004-1587656293.jpg?impolicy=Medium_Widthonly&w=700</td>
      </tr>
      <tr>
        <td>Great Wall of China</td>
        <td>China</td>
        <td>China</td>
        <td>https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/great-wall-of-china-202004-1587656292.jpg?impolicy=Medium_Widthonly&w=700</td>
      </tr>
     </tbody>
    </table>
    </div>;
}