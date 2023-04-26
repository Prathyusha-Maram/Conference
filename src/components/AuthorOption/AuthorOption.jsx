import React from 'react'
import { Link } from 'react-router-dom'
import "../AuthorOption/AuthorOption.css"
import {useHistory} from "react-router-dom"


const AuthorOption = ({title,image,redirectPage}) => {
    // const history = useHistory();
  return (
    <div className='authorOptionContainer' onClick={event=>window.location.href=redirectPage?redirectPage:"/author/home/submit"}>
        
      <div className="authorOptionImageContainer">
      <img src={image} alt="New paper Image" className='authorOptionImage' />
      </div>
      <p className='authorOptionTitle'>{title}</p>
      
    </div>
  )
}

export default AuthorOption
