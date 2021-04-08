import { GoogleSpreadsheet } from 'google-spreadsheet';
const GOOGLE_SPREADSHEET_KEY = process.env.REACT_APP_GOOGLE_SPREADSHEET_KEY

export const fetchData = async () => {
    try {
        const doc = new GoogleSpreadsheet(GOOGLE_SPREADSHEET_KEY)
        const creds = require("../assets/client_secret.json");
        await doc.useServiceAccountAuth({
            client_email: creds.client_email,
            private_key: creds.private_key
        })

        await doc.loadInfo();
        const data = await doc.sheetsByIndex[0].getRows()

        const dataArray = []
        Object.keys(data).map(async (keyName, keyIndex) => {
            if (data[keyName]["KD's Ratings"] === undefined) {
                data[keyName]["KD's Ratings"] = ""
            }
            if (data[keyName]["Kyle's Ratings"] === undefined) {
                data[keyName]["Kyle's Ratings"] = ""
            }
            if (data[keyName]["Connor's Ratings"] === undefined) {
                data[keyName]["Connor's Ratings"] = ""
            }
            if (data[keyName]["Albums"] === undefined) {
                delete data[keyName]
                return false
            }
    
            var tempObject = {
                artist: data[keyName]["Artist"],
                album: data[keyName]["Albums"],
                kdRating: data[keyName]["KD's Ratings"],
                kyleRating: data[keyName]["Kyle's Ratings"],
                connorRating: data[keyName]["Connor's Ratings"],
                art: ""
            }
            dataArray.push(tempObject)
        })
        return dataArray
        // return await getCoverFromApi(data)
    } catch (error) { console.log(error) }
}