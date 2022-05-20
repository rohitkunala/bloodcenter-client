import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import "./Styles/mainpage.css"

function Footer(){
return(
<div className="footer">
<InstagramIcon fontSize="large" style={{ paddingRight: 20 }}  />
<WhatsAppIcon fontSize="large" style={{ paddingRight: 20 }} />
<EmailIcon fontSize="large" style={{ paddingRight: 20 }}/>
<CallIcon fontSize="large" style={{ paddingRight: 20 }}/>
  <p>© Copyright 2022 OfferLife</p>
</div>
)
}

export default Footer