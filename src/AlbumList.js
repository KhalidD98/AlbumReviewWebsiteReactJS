import React from 'react'

export default function AlbumList({data}) {
        if(!data){
            return <h1>Loading....</h1>
          }else{
            return <p>{data}</p>
          }
}