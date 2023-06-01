import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';

export default function Contact() {
  return (
    <div className="contactinfo">
      <h4>Contact below for your queries if any...</h4>
      <span><LocalPhoneIcon /></span>&nbsp;<span>1234567890</span>&nbsp;
      <span><MailIcon /></span>&nbsp;Atthemovies@movies.com &nbsp;
      <h4>Do let us know your required movies... </h4><br />
      <h4>Soon they will b added to movie list</h4><br />
      <h4>Thankx for stopping by....</h4><br />
      <h4> Follow us on <br /><span><TwitterIcon /></span> &nbsp;<span><InstagramIcon /></span>&nbsp;<span>< PinterestIcon /></span>
        &nbsp;  <span><YouTubeIcon /></span>&nbsp;<span><FacebookIcon /></span> </h4><br />

    </div>



  )
}
