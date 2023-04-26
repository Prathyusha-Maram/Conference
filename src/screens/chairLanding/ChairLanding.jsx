import React from 'react'
import Header from '../../components/Header/header'
import ProfileImage from "../../assets/profileImage.jpg"
import "../chairLanding/ChairLanding.css"
import { Link } from 'react-router-dom'
import AuthorOption from '../../components/AuthorOption/AuthorOption'
import newPaper from "../../assets/newPaper.png"
import paperStatus from "../../assets/paperStatus.png"
import editPaper from "../../assets/editPaper.png"
import knowMore from "../../assets/knowMore.jpg"
const ChairLanding = () => {
  return (
    <div style={{backgroundColor:"#F0F3F5",height:"100%"}}>
      <Header/>
      <div className="chairInfoContainer">
        <div className="chairInfoImage">
            <img src={ProfileImage} className="chairImage" alt="Profile image"/>
        </div>
        <div className="chairInfo">
          <table>
            <tr>
              <td className='chairInfoHeading'>Name</td>
              <td>&nbsp;:&nbsp; </td>
              <td>&nbsp;Nithish Kommineni</td>
            </tr>
            <tr>
              <td className='chairInfoHeading'>Email</td>
              <td>&nbsp;:&nbsp;</td>
              <td>nithish.kommineni@gmail.com</td>
            </tr>
            <tr>
              <td className='chairInfoHeading'>Mobile Number</td>
              <td>&nbsp;:&nbsp;</td>
              <td>6605213456</td>
            </tr>
            <tr>
              <td className='chairInfoHeading'>Country</td>
              <td>&nbsp;:&nbsp;</td>
              <td>India</td>
            </tr>
            <tr>
              <td className='chairInfoHeading'>Date of birth</td>
              <td>&nbsp;:&nbsp;</td>
              <td>06 June 1999</td>
            </tr>
            <tr>
              <td className='chairInfoHeading'>Areas of intrest</td>
              <td>&nbsp;:&nbsp;</td>
              <td>Software engineering, Cloud computing, Block chain</td>
            </tr>
          </table>
          <div className="editInfoContainer">
            <Link to="/chair/edit" className='editInfo'>Edit profile</Link>
          </div>
        </div>
      </div>
      <div className="chairOptionsContainer">
        {/* <div className="chairOptions1"> */}
        <AuthorOption image={newPaper} title="Submitted Papers" redirectPage="/evaluation"/>
        <AuthorOption image={paperStatus} title="Evaluated Papers" redirectPage="/accept"/>
        {/* </div> */}
        {/* <div className="authorOptions2"> */}
        <AuthorOption image={editPaper} title="Committee Members" redirectPage="/committee"/>
        <AuthorOption title="Discussion" image={knowMore}/>
        {/* </div> */}
      </div>
      
    </div>
  )
}

export default ChairLanding
