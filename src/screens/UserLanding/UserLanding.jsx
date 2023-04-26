import React from 'react'
import Header from '../../components/Header/header'
import ProfileImage from "../../assets/profileImage.jpg"
import "../UserLanding/UserLanding.css"
import { Link } from 'react-router-dom'
import AuthorOption from '../../components/AuthorOption/AuthorOption'
import newPaper from "../../assets/newPaper.png"
import paperStatus from "../../assets/paperStatus.png"
import editPaper from "../../assets/editPaper.png"
import knowMore from "../../assets/knowMore.jpg"
const UserLanding = () => {
  return (
    <div style={{backgroundColor:"#F0F3F5",height:"100%"}}>
      <Header/>
      <div className="authorInfoContainer">
        <div className="authorInfoImage">
            <img src={ProfileImage} className="authorImage" alt="Profile image"/>
        </div>
        <div className="authorInfo">
          <table>
            <tr>
              <td className='authorInfoHeading'>Name</td>
              <td>&nbsp;:&nbsp; </td>
              <td>&nbsp;Nithish Kommineni</td>
            </tr>
            <tr>
              <td className='authorInfoHeading'>Email</td>
              <td>&nbsp;:&nbsp;</td>
              <td>nithish.kommineni@gmail.com</td>
            </tr>
            <tr>
              <td className='authorInfoHeading'>Mobile Number</td>
              <td>&nbsp;:&nbsp;</td>
              <td>6605213456</td>
            </tr>
            <tr>
              <td className='authorInfoHeading'>Country</td>
              <td>&nbsp;:&nbsp;</td>
              <td>India</td>
            </tr>
            <tr>
              <td className='authorInfoHeading'>Date of birth</td>
              <td>&nbsp;:&nbsp;</td>
              <td>06 June 1999</td>
            </tr>
            <tr>
              <td className='authorInfoHeading'>Areas of intrest</td>
              <td>&nbsp;:&nbsp;</td>
              <td>Software engineering, Cloud computing, Block chain</td>
            </tr>
          </table>
          <div className="editInfoContainer">
            <Link to="/author/edit" className='editInfo'>Edit profile</Link>
          </div>
        </div>
      </div>
      <div className="authorOptionsContainer">
        {/* <div className="authorOptions1"> */}
        <AuthorOption image={newPaper} title="Submit a new paper"/>
        <AuthorOption image={paperStatus} title="Check your paper status"/>
        {/* </div> */}
        {/* <div className="authorOptions2"> */}
        <AuthorOption image={editPaper} title="Edit/Update your submitted papers"/>
        <AuthorOption title="Know more about paper submission" image={knowMore}/>
        {/* </div> */}
      </div>
      
    </div>
  )
}

export default UserLanding
