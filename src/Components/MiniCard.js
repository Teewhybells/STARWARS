import React, {useEffect, useState } from 'react'
import axios from 'axios';

const MiniCard = ({url}) => {
    const [name, setName] = useState('')

    useEffect(() => {
        axios.get(url).then(function(response){
        
          setName(response.data.name)
        }, [])
      });
  return (
    <div>{name}</div>
  )
}

export default MiniCard