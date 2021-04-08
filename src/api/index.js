import { GoogleSpreadsheet } from 'google-spreadsheet';

export const fetchData = async () => {
    try {
        const doc = new GoogleSpreadsheet(process.env.REACT_APP_GOOGLE_SPREADSHEET_KEY)
        await doc.useServiceAccountAuth({
            client_email: process.env.REACT_APP_CLIENT_EMAIL,
            private_key: process.env.REACT_APP_PRIVATE_KEY.replace(/\\n/g, "\n"),
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
    } catch (error) { console.log(error) }
}