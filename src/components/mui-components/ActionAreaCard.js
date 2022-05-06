import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { NavLink } from "react-router-dom";

/*
isTitleMobile : 0   Fixed
isTitleMobile : 1   Mobile
isTitleMobile : 2   Blood Center
isTitleMobile : 3   All
*/

export function ActionAreaCard({ title }) {

  if(title.includes("Mobile")){
    var isTitleMobile = 1
    var gotoURL = "/mbf"
  }

  else if(title.includes("Fixed")){
    var isTitleMobile = 0
    var gotoURL = "/fbf"
  }

  else if(title.includes("Blood Center")){
    var isTitleMobile = 2
    var gotoURL = "/bloodcenter"
  }

  else{
    var isTitleMobile = 3
    var gotoURL = "/all"
  }

  const imgDivstyle = { width: 230, height: 150, overflow: "hidden" };

  const imgStyle = {
    height: 170,
    width: 150,
    paddingLeft: 80,
    marginBottom: -10,
    marginTop: isTitleMobile ? 0 : 10
  };

  const imgURL = isTitleMobile
    ? "https://cdn-icons-png.flaticon.com/512/3487/3487352.png"
    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuraIBp_gPVSZk3UUZPEHnEL9oggXsNmGJHuzOF-qi&s";

  const imgDesc = isTitleMobile
  ? "Mobile Blood Facility ensures to reach out to each and every donor zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"
  : "Fixed Blood Facility , a donor must reach himself here and donate blood zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"

  return (
    <NavLink to={gotoURL} style={{textDecoration: "None"}} >
    <Card sx={{ maxWidth: 300 }} >
      <CardActionArea>
        <CardMedia height="160" alt="green iguana">
          <div style={imgDivstyle}>
            <img src={imgURL} style={imgStyle} />
          </div>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {imgDesc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </NavLink>
  );
}
