import React, { Component } from "../../../node_modules/react";
import "./doctorCards";
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBBtn } from "mdbreact";



class DoctorCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [{
      name:"Dr.Khalid",
      email  : "khaledahmad@life.org"
      },{
       name:"Dr.Ali",
       email : "ali.ammmar@life.org"
      }]
    };
  }
  componentDidMount() {
    //is the best place to fetch data
    fetch("http://localhost:5001/Doctors")
      .then(response => response.json())
      .then(doctors => this.setState({ doctors }));
      
    }
  render() {
    return (
      

      <div className="center ">
        {this.state.doctors.map(doctor => {
          return (
            <section className="text-center m-5">
            <MDBRow>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
            <MDBCard style={{ width: "22rem" }}>
              <MDBCardImage
                src="https://i2-prod.mirror.co.uk/interactives/article12645227.ece/ALTERNATES/s810/doctor.jpg"
                waves 
                 className="img-fluid"
                alt="Photo menacing."
              />
              <MDBCardBody>
              <MDBCardTitle>
        
                   
                      <h1 className="f5 f4-ns mv0 ">{doctor.name}</h1> <br></br>
                      <h1 className="f5 f4-ns mv0">{doctor.email}</h1>

            
                <center>
                  <p className="f6 lh-copy measure mt2 mid-gray">
                    {doctor.specialty}{" "}
                  </p>
                </center>
              
              <center></center>
              </MDBCardTitle>
              <MDBBtn>
                <a
                  className="f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3"
                    href="/EditProfile"
                  > Profile</a>
              </MDBBtn>
              </MDBCardBody> 
                </MDBCard>
              </MDBCol>
            </MDBRow>
            </section>
          );
        })}
      </div> 
     
    );
  }
}

export default DoctorCards;

//     <div>
//       <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
//       <img src="https://i2-prod.mirror.co.uk/interactives/article12645227.ece/ALTERNATES/s810/doctor.jpg" class="db w-100 br2 br--top" alt="Photo of a kitten looking menacing."/>
//       <div class="pa2 ph3-ns pb3-ns">
//         <div class="dt w-100 mt1">
//           <center>
//             <div class="dtc">
//             <h1 class="f5 f4-ns mv0">Dr.Khaled</h1>
//           </div>
//       </center>
//         </div>
//         <center>
//         <p class="f6 lh-copy measure mt2 mid-gray">
//         Doctor of Dentist </p></center>
//       </div>
//       <center>
//       <button>
//       <a
//               class="f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3"
//               href="/"
//             >
//               Profile
//             </a>
//       </button></center>
//     </article>

//     <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
//     <img src="https://debatechamber.com/wp-content/uploads/2017/02/bigstock-Portrait-of-a-friendly-female-26984102-2-238x300.jpg"/>
//     <div class="pa2 ph3-ns pb3-ns">
//       <div class="dt w-100 mt1">
//         <center>
//           <div class="dtc">
//           <h1 class="f5 f4-ns mv0">Dr.Sara</h1>
//         </div>
//     </center>
//       </div>
//       <center>
//       <p class="f6 lh-copy measure mt2 mid-gray">
//       Doctor of pharmacy      </p></center>
//     </div>
//     <center>
//     <button>
//     <a
//             class="f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3"
//             href="/"
//           >
//             Profile
//           </a>
//     </button></center>
//   </article>

//   <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
//       <img src="https://purefitness.net.au/wordpress/wp-content/uploads/2016/05/doctor-facing-amera.jpg"/>
//       <div class="pa2 ph3-ns pb3-ns">
//         <div class="dt w-100 mt1">
//           <center>
//             <div class="dtc">
//             <h1 class="f5 f4-ns mv0">Dr.Ali</h1>
//           </div>
//       </center>
//         </div>
//         <center>
//         <p class="f6 lh-copy measure mt2 mid-gray">
//         Doctor of science
//         </p></center>
//       </div>
//       <center>
//       <button>
//       <a
//               class="f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3"
//               href="/"
//             >
//               Profile
//             </a>
//       </button></center>
//     </article>
//     <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
//       <img src="https://www.writergirl.com/wp-content/uploads/2014/11/Doctor-790X1024.jpg"/>
//       <div class="pa2 ph3-ns pb3-ns">
//         <div class="dt w-100 mt1">
//           <center>
//             <div class="dtc">
//             <h1 class="f5 f4-ns mv0">Dr.Amar</h1>
//           </div>
//       </center>
//         </div>
//         <center>
//         <p class="f6 lh-copy measure mt2 mid-gray">
//         Doctor of eyes
//         </p></center>
//       </div>
//       <center>
//       <button>
//       <a
//               class="f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3"
//               href="/"
//             >
//               Profile
//             </a>
//       </button></center>
//     </article>
// </div>

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

// const useStyles = makeStyles(theme => ({
//   card: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: '70%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

// export default function RecipeReviewCard() {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   function handleExpandClick() {
//     setExpanded(!expanded);
//   }

//   return (
//     <Card className={classes.card}>
//       <CardHeader
//         avatar={
//           <Avatar aria-label="Recipe" className={classes.avatar}>
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="Settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Shrimp and Chorizo Paella"
//         subheader="September 14, 2016"
//       />
//       <CardMedia
//         className={classes.media}
//         image="https://purefitness.net.au/wordpress/wp-content/uploads/2016/05/doctor-facing-amera.jpg"
//         title="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">
//           This impressive paella is a perfect party dish and a fun meal to cook together with your
//           guests. Add 1 cup of frozen peas along with the mussels, if you like.
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="Add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="Share">
//           <ShareIcon />
//         </IconButton>
//         <IconButton
//           className={clsx(classes.expand, {
//             [classes.expandOpen]: expanded,
//           })}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="Show more"
//         >
//           <ExpandMoreIcon />
//         </IconButton>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
//             minutes.
//           </Typography>
//           <Typography paragraph>
//             Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
//             heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
//             browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
//             and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
//             pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
//             saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//           </Typography>
//           <Typography paragraph>
//             Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
//             without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
//             medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
//             again without stirring, until mussels have opened and rice is just tender, 5 to 7
//             minutes more. (Discard any mussels that don’t open.)
//           </Typography>
//           <Typography>
//             Set aside off of the heat to let rest for 10 minutes, and then serve.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }
