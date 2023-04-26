import React from 'react'
import Header from '../../components/Header/header'
import ProfileImage from "../../assets/profileImage.jpg"
import "../committeeLanding/CommitteeLanding.css"
import { Link } from 'react-router-dom'
import AuthorOption from '../../components/AuthorOption/AuthorOption'
import newPaper from "../../assets/newPaper.png"
import paperStatus from "../../assets/paperStatus.png"
import editPaper from "../../assets/editPaper.png"
import knowMore from "../../assets/knowMore.jpg"
const CommitteeLanding = () => {
  return (
    <div style={{backgroundColor:"#F0F3F5",height:"100%"}}>
      <Header/>
      <div className="committeeInfoContainer">
        <div className="committeeInfoImage">
            <img src={ProfileImage} className="committeeImage" alt="Profile image"/>
        </div>
        <div className="committeeInfo">
          <table>
            <tr>
              <td className='committeeInfoHeading'>Name</td>
              <td>&nbsp;:&nbsp; </td>
              <td>&nbsp;Nithish Kommineni</td>
            </tr>
            <tr>
              <td className='committeeInfoHeading'>Email</td>
              <td>&nbsp;:&nbsp;</td>
              <td>nithish.kommineni@gmail.com</td>
            </tr>
            <tr>
              <td className='committeeInfoHeading'>Mobile Number</td>
              <td>&nbsp;:&nbsp;</td>
              <td>6605213456</td>
            </tr>
            <tr>
              <td className='committeeInfoHeading'>Country</td>
              <td>&nbsp;:&nbsp;</td>
              <td>India</td>
            </tr>
            <tr>
              <td className='committeeInfoHeading'>Date of birth</td>
              <td>&nbsp;:&nbsp;</td>
              <td>06 June 1999</td>
            </tr>
            <tr>
              <td className='committeeInfoHeading'>Areas of intrest</td>
              <td>&nbsp;:&nbsp;</td>
              <td>Software engineering, Cloud computing, Block chain</td>
            </tr>
          </table>
          <div className="editInfoContainer">
            <Link to="/committee/edit" className='editInfo'>Edit profile</Link>
          </div>
        </div>
      </div>
      <div className="committeeOptionsContainer">
        {/* <div className="committeeOptions1"> */}
        <AuthorOption image={newPaper} title="Assigned Papers" redirectPage="/evaluation"/>
        <AuthorOption image={paperStatus} title="Evaluated Papers" redirectPage="/accept"/>
        {/* </div> */}
        {/* <div className="authorOptions2"> */}
        <AuthorOption image={editPaper} title="In Progress" redirectPage="/papersongo"/>
        <AuthorOption title="Discussion" image={knowMore}/>
        {/* </div> */}
      </div>
      
    </div>
  )
}

export default CommitteeLanding
