import { render } from '@testing-library/react';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import React, {useState, useEffect} from 'react'
import AlbumList from './AlbumList'
import { v4 as uuidv4 } from 'uuid';
const GOOGLE_SPREADSHEET_KEY = process.env.REACT_APP_GOOGLE_SPREADSHEET_KEY

// array => object => "KD's Ratings" => "String"

async function fetchAPIData(){
  const doc = new GoogleSpreadsheet(GOOGLE_SPREADSHEET_KEY)
  const creds = require("./assets/client_secret.json");
  await doc.useServiceAccountAuth({
    client_email: creds.client_email,
    private_key: creds.private_key
  })
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0]
  return await sheet.getRows() 
}

function App() {  
    useEffect(() => {
        fetchAPIData().then(rows => {
          setKdData(getReviewerData(rows, "KD's Ratings")) 
          setKyleData(getReviewerData(rows, "Kyle's Ratings"))
          setConnorData(getReviewerData(rows, "Connor's Ratings"))
        })
    }, [])
  
  function getReviewerData(rows, reviewer){
    var reviews = []
    rows.forEach((temp) => {
      if(temp[reviewer] === undefined || ""){
        reviews.push("")
      }else{
        reviews.push(temp[reviewer])
      }
    })
    return reviews
  }
  
  const [kdData, setKdData] = useState([])
  const [kyleData, setKyleData] = useState([])
  const [connorData, setConnorData] = useState([])

    if(!kdData){
      return null;
    }else{
      return (
        <>
            <AlbumList data={kdData}/>
            <AlbumList data={kyleData}/>
            <AlbumList data={connorData}/>
        </>
      )

    }

}


/*
Things we need to pass down
1. Artist name
2. Album name
3. Reviews DONE
4. ? Cover art
*/

export default App;
