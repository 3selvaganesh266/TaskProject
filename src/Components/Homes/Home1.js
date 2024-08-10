// import React from 'react';
// import { Box, Typography, AppBar, Toolbar, Button } from '@mui/material';
// import { styled } from '@mui/system';
// import { Link } from 'react-router-dom';

// const Container = styled(Box)({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   flexDirection: 'column',
//   padding: '2rem',
//   backgroundColor: '#f5f5f5',
// });

// const Image = styled('img')({
//   width: '100%',
//   maxWidth: '600px',
//   marginBottom: '1rem',
// });

// const Content = styled(Box)({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   width: '100%',
//   maxWidth: '1200px',
//   marginTop: '3rem',
//   padding: '0 2rem',
// });

// const TextContainer = styled(Box)({
//   flex: 1,
//   marginLeft: '2rem',
// });

// const Home1 = () => {
//   return (
//     <>
    
//       <Container>
//         <Content>
//           <Image src="/mnt/data/image.png" alt="Trello board" />
//           <TextContainer>
//             <Typography variant="h3" component="h2" gutterBottom>
//               Success starts with a TIMESYNC
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//               Similar to a Kanban board, a TIMESYNC is the easiest way to go from idea to action. Plan projects and break down each step of the way to getting things done. Instantly see the status of every task and celebrate each accomplishment. Project management has never been so powerful, yet so fun.
//             </Typography>
//           </TextContainer>
//         </Content>

//         <br/>
//         <Content>
//           <TextContainer>
//             <Typography variant="h3" component="h2" gutterBottom>
//               Hit deadlines every time with Timeline
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//               Stay on top of every sprint and stay on track of every goal with Timeline. Use Timeline to see how all of the moving parts piece together over time. Drag and drop to make start and due date adjustments on the fly as priorities shift and needs change. Quickly get a glimpse of what’s coming down the pipeline and identify any gaps that might impede your team’s progress.
//             </Typography>
//             <Link href="#" variant="body2">
//               Learn more about Timeline view
//             </Link>
//           </TextContainer>
//           <Image src="/mnt/data/image2.png" alt="Timeline view" />
//         </Content>
//       </Container>
//     </>
//   );
// };

// // export default Home1;
// import React from 'react';
// import { Box, Typography, Link } from '@mui/material';
// import { styled } from '@mui/system';
// import home11 from '../../Assets/Images/home1img.svg';
// import home12 from '../../Assets/Images/home2img.svg';
// const Container = styled(Box)({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   padding: '2rem',
//   marginBottom: '300px',
// //   backgroundColor: '#f5f5f5',
// });

// const Content = styled(Box)({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   width: '100%',
//   maxWidth: '1200px',
//   marginTop: '3rem',
//   padding: '0 2rem',
//   gap: '2rem',  
// });

// const ImageContainer = styled(Box)({
//   flex: 1,
//   display: 'flex',
//   justifyContent: 'center',
// });

// const TextContainer = styled(Box)({
//   flex: 1,
// });

// const StyledLink = styled(Link)({
//   color: '#00796b',
//   textDecoration: 'none',
//   fontWeight: 'bold',
//   marginTop: '1rem',
//   display: 'inline-block',
//   '&:hover': {
//     textDecoration: 'underline',
//     color: '#004d40',
//   },
// });

// const Home1 = () => {
//   return (
//     <Container style={{ marginBottom: '300px'}}>
//       <Content>
//         <ImageContainer>
//           <img src={home11} alt="Trello board" style={{ width: '100%', maxWidth: '600px' }} />
//         </ImageContainer>
//         <TextContainer>
//           <Typography variant="h3" component="h2" gutterBottom>
//             Success Under Timesync
//           </Typography>
//           <Typography variant="body1" paragraph>
//             Similar to a Kanban board, a TIMESYNC is the easiest way to go from idea to action. Plan projects and break down each step of the way to getting things done. Instantly see the status of every task and celebrate each accomplishment. Project management has never been so powerful, yet so fun.
//           </Typography>
//         </TextContainer>
//       </Content>

//       <Content>
//         <TextContainer>
//           <Typography variant="h3" component="h2" gutterBottom>
//             Hit deadlines every time with Timeline
//           </Typography>
//           <Typography variant="body1" paragraph>
//             Stay on top of every sprint and stay on track of every goal with Timeline. Use Timeline to see how all of the moving parts piece together over time. Drag and drop to make start and due date adjustments on the fly as priorities shift and needs change. Quickly get a glimpse of what’s coming down the pipeline and identify any gaps that might impede your team’s progress.
//           </Typography>
//           <StyledLink href="#">
//             Learn more about Timeline view
//           </StyledLink>
//         </TextContainer>
//         <ImageContainer>
//           <img src={home12} alt="Timeline view" style={{ width: '100%', maxWidth: '600px' }} />
//         </ImageContainer>
//       </Content>
//     </Container>
//   );
// };

// export default Home1;



// import React from 'react';
// import { Box, Typography, Link } from '@mui/material';
// import { styled } from '@mui/system';
// import home11 from '../../Assets/Images/home1img.svg';
// import home12 from '../../Assets/Images/home2img.svg';
// import home13 from '../../Assets/Images/home3img.svg';
// import home14 from '../../Assets/Images/home4img.svg';

// const Container = styled(Box)({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   padding: '2rem',
//   marginBottom: '300px',
// });

// const Content = styled(Box)({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   width: '100%',
//   maxWidth: '1200px',
//   marginTop: '3rem',
//   padding: '0 2rem',
//   gap: '2rem',
// });

// const ImageContainer = styled(Box)({
//   flex: 1,
//   display: 'flex',
//   justifyContent: 'center',
// });

// const TextContainer = styled(Box)({
//   flex: 1,
// });

// const UnderlinedHeading = styled(Typography)({
//   position: 'relative',
//   display: 'inline-block',
//   fontSize: '2rem', 
//   '&::after': {
//     content: '""',
//     position: 'absolute',
//     left: '0',
//     bottom: '-10px',
//     width: '100%',
//     height: '3px', 
//     background: 'linear-gradient(to right, #00796b, #004d40)', 
//     borderRadius: '2px', 
//   },
// });

// const StyledLink = styled(Link)({
//   color: '#00796b',
//   textDecoration: 'none',
//   fontWeight: 'bold',
//   marginTop: '1rem',
//   display: 'inline-block',
//   '&:hover': {
//     textDecoration: 'underline',
//     color: '#004d40',
//   },
// });

// const Home1 = () => {
//   return (
//     <Container style={{marginTop:'-200px'}}>
//       <Content>
//         <ImageContainer>
//           <img src={home11} alt="Trello board" style={{ width: '100%', maxWidth: '600px' }} />
//         </ImageContainer>
//         <TextContainer>
//           <UnderlinedHeading variant="h3" component="h2" style={{fontSize:'40px'}} gutterBottom>
//             Success Under Timesync
//           </UnderlinedHeading>
//           <Typography variant="body1" style={{marginTop:'20px',font:'23px Founders Grotesk'}} paragraph>
//             Similar to a Kanban board, a TIMESYNC is the easiest way to go from idea to action. Plan projects and break down each step of the way to getting things done. Instantly see the status of every task and celebrate each accomplishment. Project management has never been so powerful, yet so fun.
//           </Typography>
//         </TextContainer>
//       </Content>

//       <Content>
//         <TextContainer>
//           <UnderlinedHeading variant="h3" component="h2" style={{fontSize:'40px'}} gutterBottom>
//             Hit deadlines every time with Timeline
//           </UnderlinedHeading>
//           <Typography variant="body1" style={{marginTop:'20px',font:'23px Founders Grotesk'}} paragraph>
//             Stay on top of every sprint and stay on track of every goal with Timeline. Use Timeline to see how all of the moving parts piece together over time. Drag and drop to make start and due date adjustments on the fly as priorities shift and needs change. Quickly get a glimpse of what’s coming down the pipeline and identify any gaps that might impede your team’s progress.
//           </Typography>
//           <StyledLink href="#">
//             Learn more about Timeline view
//           </StyledLink>
//         </TextContainer>
//         <ImageContainer>
//           <img src={home12} alt="Timeline view" style={{ width: '100%', maxWidth: '600px' }} />
//         </ImageContainer>
//       </Content>



//       <Content>
//         <ImageContainer>
//           <img src={home13} alt="Trello board" style={{ width: '100%', maxWidth: '600px' }} />
//         </ImageContainer>
//         <TextContainer>
//           <UnderlinedHeading variant="h3" component="h2" style={{fontSize:'40px'}} gutterBottom>
//           See it like a spreadsheet with Table
//           </UnderlinedHeading>
//           <Typography variant="body1" style={{marginTop:'20px',font:'20px "Charlie Text",sans-serif'}} paragraph>
//             Similar to a Kanban board, a TIMESYNC is the easiest way to go from idea to action. Plan projects and break down each step of the way to getting things done. Instantly see the status of every task and celebrate each accomplishment. Project management has never been so powerful, yet so fun.
//           </Typography>
//         </TextContainer>
//       </Content>


     
//       <Content>
//         <TextContainer>
//           <UnderlinedHeading variant="h3" component="h2" style={{fontSize:'40px'}} gutterBottom>
//            Get actionable insights with Dashboard
//           </UnderlinedHeading>
//           <Typography variant="body1" style={{marginTop:'20px',font:'23px Founders Grotesk'}} paragraph>
//             Stay on top of every sprint and stay on track of every goal with Timeline. Use Timeline to see how all of the moving parts piece together over time. Drag and drop to make start and due date adjustments on the fly as priorities shift and needs change. Quickly get a glimpse of what’s coming down the pipeline and identify any gaps that might impede your team’s progress.
//           </Typography>
//           <StyledLink href="#">
//             Learn more about Timeline view
//           </StyledLink>
//         </TextContainer>
//         <ImageContainer>
//           <img src={home14} alt="Timeline view" style={{ width: '100%', maxWidth: '600px' }} />
//         </ImageContainer>
//       </Content>

//     </Container>
//   );
// };

// export default Home1;


// import React from 'react';
// import { Box, Typography, Button } from '@mui/material';
// import { styled } from '@mui/system';
// import home11 from '../../Assets/Images/home1img.svg';
// import home12 from '../../Assets/Images/home2img.svg';
// import home13 from '../../Assets/Images/home3img.svg';
// import home14 from '../../Assets/Images/home4img.svg';
// // import backgroundImage from '/mnt/data/image.png'; // Adjust the path if needed
// import { Link } from 'react-router-dom';


// const BackgroundContainer = styled(Box)({
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '200px', 
//     width: '100%', 
//     // background: 'linear-gradient(to bottom, #f5f9ff, #d7e5fc)', 
//     textAlign: 'center',
//     padding: '2rem 0',
//   });
  
//   const Heading = styled(Typography)({
//     fontSize: '1.5rem', 
//     color: '#003366', 
//     marginBottom: '0.5rem', 
//   });
  
//   const Subheading = styled(Typography)({
//     fontSize: '1rem',
//     color: '#003366',
//     marginBottom: '1rem', 
//   });
  
//   const StartButton = styled(Button)({
//     backgroundColor: '#fff',
//     color: '#003366',
//     border: '1px solid #003366',
//     padding: '0.5rem 2rem',
//     '&:hover': {
//     //   backgroundColor: '#f0f0f0',
//     },
//   });

// const Container = styled(Box)({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   padding: '2rem',
//   marginBottom: '10px',

// });

// const Content = styled(Box)({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   width: '100%',
//   maxWidth: '1200px',
//   marginTop: '3rem',
//   padding: '0 2rem',
//   gap: '2rem',
// });

// const ImageContainer = styled(Box)({
//   flex: 1,
//   display: 'flex',
//   justifyContent: 'center',
// });

// const TextContainer = styled(Box)({
//   flex: 1,
// });

// const UnderlinedHeading = styled(Typography)({
//   position: 'relative',
//   display: 'inline-block',
//   fontSize: '2rem',
//   '&::after': {
//     content: '""',
//     position: 'absolute',
//     left: '0',
//     bottom: '-10px',
//     width: '100%',
//     height: '3px',
//     background: 'linear-gradient(to right, #00796b, #004d40)',
//     borderRadius: '2px',
//   },
// });

// const StyledLink = styled(Link)({
//   color: '#00796b',
//   textDecoration: 'none',
//   fontWeight: 'bold',
//   marginTop: '1rem',
//   display: 'inline-block',
//   '&:hover': {
//     textDecoration: 'underline',
//     color: '#004d40',
//   },
// });


// const Home1 = () => {
//   return (
//     <Container style={{marginTop:'-200px'}}>
//       <Content>
//         <ImageContainer>
//           <img src={home11} alt="Trello board" style={{ width: '100%', maxWidth: '600px' }} />
//         </ImageContainer>
//         <TextContainer>
//           <UnderlinedHeading variant="h3" component="h2" style={{ fontSize: '40px' }} gutterBottom>
//             Success Under Timesync
//           </UnderlinedHeading>
//           <Typography variant="body1" style={{ marginTop: '20px', font: '23px Founders Grotesk' }} paragraph>
//             Similar to a Kanban board, a TIMESYNC is the easiest way to go from idea to action. Plan projects and break down each step of the way to getting things done. Instantly see the status of every task and celebrate each accomplishment. Project management has never been so powerful, yet so fun.
//           </Typography>
//         </TextContainer>
//       </Content>

//       <Content>
//         <TextContainer>
//           <UnderlinedHeading variant="h3" component="h2" style={{ fontSize: '40px' }} gutterBottom>
//             Hit deadlines every time with Timeline
//           </UnderlinedHeading>
//           <Typography variant="body1" style={{ marginTop: '20px', font: '23px Founders Grotesk' }} paragraph>
//             Stay on top of every sprint and stay on track of every goal with Timeline. Use Timeline to see how all of the moving parts piece together over time. Drag and drop to make start and due date adjustments on the fly as priorities shift and needs change. Quickly get a glimpse of what’s coming down the pipeline and identify any gaps that might impede your team’s progress.
//           </Typography>
//           <StyledLink href="#">
//             Learn more about Timeline view
//           </StyledLink>
//         </TextContainer>
//         <ImageContainer>
//           <img src={home12} alt="Timeline view" style={{ width: '100%', maxWidth: '600px' }} />
//         </ImageContainer>
//       </Content>

//       <Content>
//         <ImageContainer>
//           <img src={home13} alt="Trello board" style={{ width: '100%', maxWidth: '600px' }} />
//         </ImageContainer>
//         <TextContainer>
//           <UnderlinedHeading variant="h3" component="h2" style={{ fontSize: '40px' }} gutterBottom>
//             See it like a spreadsheet with Table
//           </UnderlinedHeading>
//           <Typography variant="body1" style={{ marginTop: '20px', font: '20px "Charlie Text",sans-serif' }} paragraph>
//             Similar to a Kanban board, a TIMESYNC is the easiest way to go from idea to action. Plan projects and break down each step of the way to getting things done. Instantly see the status of every task and celebrate each accomplishment. Project management has never been so powerful, yet so fun.
//           </Typography>
//         </TextContainer>
//       </Content>

//       <Content>
//         <TextContainer>
//           <UnderlinedHeading variant="h3" component="h2" style={{ fontSize: '40px' }} gutterBottom>
//             Get actionable insights with Dashboard
//           </UnderlinedHeading>
//           <Typography variant="body1" style={{ marginTop: '20px', font: '23px Founders Grotesk' }} paragraph>
//             Stay on top of every sprint and stay on track of every goal with Timeline. Use Timeline to see how all of the moving parts piece together over time. Drag and drop to make start and due date adjustments on the fly as priorities shift and needs change. Quickly get a glimpse of what’s coming down the pipeline and identify any gaps that might impede your team’s progress.
//           </Typography>
//           <StyledLink href="#">
//             Learn more about Timeline view
//           </StyledLink>
//         </TextContainer>
//         <ImageContainer>
//           <img src={home14} alt="Timeline view" style={{ width: '100%', maxWidth: '600px' }} />
//         </ImageContainer>
//       </Content>

//       <BackgroundContainer>
//       <Heading>
//         Bring powerful new views to your team’s work
//       </Heading>
//       <Subheading>
//         Start a free trial today
//       </Subheading>
//       <StartButton variant="contained">
//         <Link to='/login'>
//         I'm ready
//         </Link>
//       </StartButton>
//     </BackgroundContainer>
//     </Container>

    
//   );
// };

// export default Home1;


// import React from 'react';
// import { Box, Typography, Button } from '@mui/material';
// import { styled } from '@mui/system';
// import home11 from '../../Assets/Images/home1img.svg';
// import home12 from '../../Assets/Images/home2img.svg';
// import home13 from '../../Assets/Images/home3img.svg';
// import home14 from '../../Assets/Images/home4img.svg';
// import { Link } from 'react-router-dom';

// const BackgroundContainer = styled(Box)({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   height: '200px', 
//   width: '100%',
//   textAlign: 'center',
//   padding: '2rem 0',
//   fontFamily: 'Roboto, sans-serif', // Added font family
// });

// const Heading = styled(Typography)({
//   fontSize: '1.5rem', 
//   color: '#003366', 
//   marginBottom: '0.5rem',
//   fontFamily: 'Roboto, sans-serif', // Added font family
// });

// const Subheading = styled(Typography)({
//   fontSize: '1rem', 
//   color: '#003366',
//   marginBottom: '1rem',
//   fontFamily: 'Roboto, sans-serif', // Added font family
// });

// const StartButton = styled(Button)({
//   backgroundColor: '#fff',
//   color: '#003366',
//   border: '1px solid #003366',
//   padding: '0.5rem 2rem',
//   fontFamily: 'Roboto, sans-serif', // Added font family
//   '&:hover': {
//     // backgroundColor: '#f0f0f0',
//   },
// });

// const Container = styled(Box)({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   padding: '2rem',
//   marginBottom: '10px',
//   fontFamily: 'Roboto, sans-serif', // Added font family
// });

// const Content = styled(Box)({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   width: '100%',
//   maxWidth: '1200px',
//   marginTop: '3rem',
//   padding: '0 2rem',
//   gap: '2rem',
//   fontFamily: 'Roboto, sans-serif', // Added font family
// });

// const ImageContainer = styled(Box)({
//   flex: 1,
//   display: 'flex',
//   justifyContent: 'center',
// });

// const TextContainer = styled(Box)({
//   flex: 1,
// });

// const UnderlinedHeading = styled(Typography)({
//   position: 'relative',
//   display: 'inline-block',
//   fontSize: '2rem',
//   fontFamily: 'Roboto, sans-serif', // Added font family
//   '&::after': {
//     content: '""',
//     position: 'absolute',
//     left: '0',
//     bottom: '-10px',
//     width: '100%',
//     height: '3px',
//     background: 'linear-gradient(to right, #00796b, #004d40)',
//     borderRadius: '2px',
//   },
// });

// const StyledLink = styled(Link)({
//   color: '#00796b',
//   textDecoration: 'none',
//   fontWeight: 'bold',
//   marginTop: '1rem',
//   display: 'inline-block',
//   '&:hover': {
//     textDecoration: 'underline',
//     color: '#004d40',
//   },
// });

// const Home1 = () => {
//   return (
//     <Container style={{ marginTop: '-200px' }}>
//       <Content>
//         <ImageContainer>
//           <img src={home11} alt="Trello board" style={{ width: '100%', maxWidth: '600px' }} />
//         </ImageContainer>
//         <TextContainer>
//           <UnderlinedHeading variant="h3" component="h2" style={{ fontSize: '40px' }} gutterBottom>
//             Success Under Timesync
//           </UnderlinedHeading>
//           <Typography variant="body1" style={{ marginTop: '20px', font: '20px Roboto, sans-serif' }} paragraph>
//             Similar to a Kanban board, a TIMESYNC is the easiest way to go from idea to action. Plan projects and break down each step of the way to getting things done. Instantly see the status of every task and celebrate each accomplishment. Project management has never been so powerful, yet so fun.
//           </Typography>
//         </TextContainer>
//       </Content>

//       <Content>
//         <TextContainer>
//           <UnderlinedHeading variant="h3" component="h2" style={{ fontSize: '40px' }} gutterBottom>
//             Hit deadlines every time with Timeline
//           </UnderlinedHeading>
//           <Typography variant="body1" style={{ marginTop: '20px', font: '20px Roboto, sans-serif' }} paragraph>
//             Stay on top of every sprint and stay on track of every goal with Timeline. Use Timeline to see how all of the moving parts piece together over time. Drag and drop to make start and due date adjustments on the fly as priorities shift and needs change. Quickly get a glimpse of what’s coming down the pipeline and identify any gaps that might impede your team’s progress.
//           </Typography>
//           {/* <StyledLink href="#">
//             Learn more about Timeline view
//           </StyledLink> */}
//         </TextContainer>
//         <ImageContainer>
//           <img src={home12} alt="Timeline view" style={{ width: '100%', maxWidth: '600px' }} />
//         </ImageContainer>
//       </Content>

//       <Content>
//         <ImageContainer>
//           <img src={home13} alt="Trello board" style={{ width: '100%', maxWidth: '600px' }} />
//         </ImageContainer>
//         <TextContainer>
//           <UnderlinedHeading variant="h3" component="h2" style={{ fontSize: '40px' }} gutterBottom>
//             See it like a spreadsheet with Table
//           </UnderlinedHeading>
//           <Typography variant="body1" style={{ marginTop: '20px', font: '20px Roboto, sans-serif' }} paragraph>
//             Similar to a Kanban board, a TIMESYNC is the easiest way to go from idea to action. Plan projects and break down each step of the way to getting things done. Instantly see the status of every task and celebrate each accomplishment. Project management has never been so powerful, yet so fun.
//           </Typography>
//         </TextContainer>
//       </Content>

//       <Content>
//         <TextContainer>
//           <UnderlinedHeading variant="h3" component="h2" style={{ fontSize: '40px' }} gutterBottom>
//             Get actionable insights with Dashboard
//           </UnderlinedHeading>
//           <Typography variant="body1" style={{ marginTop: '20px', font: '20px Roboto, sans-serif' }} paragraph>
//             Stay on top of every sprint and stay on track of every goal with Timeline. Use Timeline to see how all of the moving parts piece together over time. Drag and drop to make start and due date adjustments on the fly as priorities shift and needs change. Quickly get a glimpse of what’s coming down the pipeline and identify any gaps that might impede your team’s progress.
//           </Typography>
//           {/* <StyledLink href="#">
//             Learn more about Timeline view
//           </StyledLink> */}
//         </TextContainer>
//         <ImageContainer>
//           <img src={home14} alt="Timeline view" style={{ width: '100%', maxWidth: '600px' }} />
//         </ImageContainer>
//       </Content>

//       <BackgroundContainer>
//         <Heading>
//           Bring powerful new views to your team’s work
//         </Heading>
//         <Subheading>
//           Start a free trial today
//         </Subheading>
//         <StartButton variant="contained">
//           <Link to='/login'>
//             I'm ready
//           </Link>
//         </StartButton>
//       </BackgroundContainer>
//     </Container>
//   );
// };

// export default Home1;

// import React from 'react';
// import { Box, Typography, Button } from '@mui/material';
// import { styled } from '@mui/system';
// import home11 from '../../Assets/Images/home1img.svg';
// import home12 from '../../Assets/Images/home2img.svg';
// import home13 from '../../Assets/Images/home3img.svg';
// import home14 from '../../Assets/Images/home4img.svg';
// import { Link } from 'react-router-dom';

// const BackgroundContainer = styled(Box)({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   height: '200px', 
//   width: '100%',
//   textAlign: 'center',
//   padding: '2rem 0',
//   fontFamily: 'Roboto, sans-serif', // Added font family
// });

// const Heading = styled(Typography)({
//   fontSize: '1.5rem', 
//   color: '#003366', 
//   marginBottom: '0.5rem',
//   fontFamily: 'Roboto, sans-serif', // Added font family
// });

// const Subheading = styled(Typography)({
//   fontSize: '1rem', 
//   color: '#003366',
//   marginBottom: '1rem',
//   fontFamily: 'Roboto, sans-serif', // Added font family
// });

// const StartButton = styled(Button)({
//   backgroundColor: '#fff',
//   color: '#003366',
//   border: '1px solid #003366',
//   padding: '0.5rem 2rem',
//   fontFamily: 'Roboto, sans-serif', // Added font family
//   '&:hover': {
//     backgroundColor: '#f0f0f0',
//   },
// });

// const Container = styled(Box)({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   padding: '2rem',
//   marginBottom: '10px',
//   fontFamily: 'Roboto, sans-serif', // Added font family
// });

// const Content = styled(Box)({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   width: '100%',
//   maxWidth: '1200px',
//   marginTop: '3rem',
//   padding: '0 2rem',
//   gap: '2rem',
//   fontFamily: 'Roboto, sans-serif', // Added font family
// });

// const ImageContainer = styled(Box)({
//   flex: 1,
//   display: 'flex',
//   justifyContent: 'center',
// });

// const TextContainer = styled(Box)({
//   flex: 1,
// });

// // const UnderlinedHeading = styled(Typography)({
// //   position: 'relative',
// //   display: 'inline-block',
// //   fontSize: '2rem',
// //   fontFamily: 'Roboto, sans-serif', // Added font family
// //   '&::after': {
// //     content: '""',
// //     position: 'absolute',
// //     left: '0',
// //     bottom: '-10px',
// //     width: '100%',
// //     height: '3px',
// //     background: 'linear-gradient(to right, #00796b, #004d40)',
// //     borderRadius: '2px',
// //     pointerEvents: 'none', // Prevents hover effects on the underline
// //   },
// // });
// const UnderlinedHeading = styled(Typography)({
//     position: 'relative',
//     display: 'inline-block',
//     fontSize: '2rem',
//     fontFamily: 'Roboto, sans-serif',
//     '&::after': {
//       content: '""',
//       position: 'absolute',
//       left: '0',
//       bottom: '-10px',
//       width: '0',
//       height: '3px',
//       background: 'linear-gradient(to right, #00796b, #004d40)',
//       borderRadius: '2px',
//       transition: 'width 0.3s ease-in-out', // Smooth transition effect
//     },
//     '&:hover::after': {
//       width: '100%', // Full width on hover
//     },
//   });
  

// const StyledLink = styled(Link)({
//   color: '#00796b',
//   textDecoration: 'none',
//   fontWeight: 'bold',
//   marginTop: '1rem',
//   display: 'inline-block',
//   '&:hover': {
//     textDecoration: 'underline',
//     color: '#004d40',
//   },
// });

// const Home1 = () => {
//   return (
//     <Container style={{ marginTop: '-200px' }}>
//       <Content>
//         <ImageContainer>
//           <img src={home11} alt="Trello board" style={{ width: '100%', maxWidth: '600px' }} />
//         </ImageContainer>
//         <TextContainer>
//           <UnderlinedHeading variant="h3" component="h2" style={{ fontSize: '40px' }} gutterBottom>
//             Success Under Timesync
//           </UnderlinedHeading>
//           <Typography variant="body1" style={{ marginTop: '20px', font: '20px Roboto, sans-serif' }} paragraph>
//             Similar to a Kanban board, a TIMESYNC is the easiest way to go from idea to action. Plan projects and break down each step of the way to getting things done. Instantly see the status of every task and celebrate each accomplishment. Project management has never been so powerful, yet so fun.
//           </Typography>
//         </TextContainer>
//       </Content>

//       <Content>
//         <TextContainer>
//           <UnderlinedHeading variant="h3" component="h2" style={{ fontSize: '40px' }} gutterBottom>
//             Hit deadlines every time with Timeline
//           </UnderlinedHeading>
//           <Typography variant="body1" style={{ marginTop: '20px', font: '20px Roboto, sans-serif' }} paragraph>
//             Stay on top of every sprint and stay on track of every goal with Timeline. Use Timeline to see how all of the moving parts piece together over time. Drag and drop to make start and due date adjustments on the fly as priorities shift and needs change. Quickly get a glimpse of what’s coming down the pipeline and identify any gaps that might impede your team’s progress.
//           </Typography>
//           {/* <StyledLink href="#">
//             Learn more about Timeline view
//           </StyledLink> */}
//         </TextContainer>
//         <ImageContainer>
//           <img src={home12} alt="Timeline view" style={{ width: '100%', maxWidth: '600px' }} />
//         </ImageContainer>
//       </Content>

//       <Content>
//         <ImageContainer>
//           <img src={home13} alt="Trello board" style={{ width: '100%', maxWidth: '600px' }} />
//         </ImageContainer>
//         <TextContainer>
//           <UnderlinedHeading variant="h3" component="h2" style={{ fontSize: '40px' }} gutterBottom>
//             See it like a spreadsheet with Table
//           </UnderlinedHeading>
//           <Typography variant="body1" style={{ marginTop: '20px', font: '20px Roboto, sans-serif' }} paragraph>
//             Similar to a Kanban board, a TIMESYNC is the easiest way to go from idea to action. Plan projects and break down each step of the way to getting things done. Instantly see the status of every task and celebrate each accomplishment. Project management has never been so powerful, yet so fun.
//           </Typography>
//         </TextContainer>
//       </Content>

//       <Content>
//         <TextContainer>
//           <UnderlinedHeading variant="h3" component="h2" style={{ fontSize: '40px' }} gutterBottom>
//             Get actionable insights with Dashboard
//           </UnderlinedHeading>
//           <Typography variant="body1" style={{ marginTop: '20px', font: '20px Roboto, sans-serif' }} paragraph>
//             Stay on top of every sprint and stay on track of every goal with Timeline. Use Timeline to see how all of the moving parts piece together over time. Drag and drop to make start and due date adjustments on the fly as priorities shift and needs change. Quickly get a glimpse of what’s coming down the pipeline and identify any gaps that might impede your team’s progress.
//           </Typography>
//           {/* <StyledLink href="#">
//             Learn more about Timeline view
//           </StyledLink> */}
//         </TextContainer>
//         <ImageContainer>
//           <img src={home14} alt="Timeline view" style={{ width: '100%', maxWidth: '600px' }} />
//         </ImageContainer>
//       </Content>

//       <BackgroundContainer>
//         <Heading>
//           Bring powerful new views to your team’s work
//         </Heading>
//         <Subheading>
//           Start a free trial today
//         </Subheading>
//         <StartButton variant="contained">
//           <Link to='/login'>
//             I'm ready
//           </Link>
//         </StartButton>
//       </BackgroundContainer>
//     </Container>
//   );
// };

// export default Home1;





import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import home11 from '../../Assets/Images/home1img.svg';
import home12 from '../../Assets/Images/home2img.svg';
import home13 from '../../Assets/Images/home3img.svg';
import home14 from '../../Assets/Images/home4img.svg';
import { Link } from 'react-router-dom';

const BackgroundContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '200px',
  width: '100%',
  textAlign: 'center',
  padding: '2rem 0',
  fontFamily: 'Roboto, sans-serif',
});

const Heading = styled(Typography)({
  fontSize: '1.5rem',
  color: '#003366',
  marginBottom: '0.5rem',
  fontFamily: 'Roboto, sans-serif',
});

const Subheading = styled(Typography)({
  fontSize: '1rem',
  color: '#003366',
  marginBottom: '1rem',
  fontFamily: 'Roboto, sans-serif',
});

const StartButton = styled(Button)({
  backgroundColor: '#fff',
  color: '#003366',
  border: '1px solid #003366',
  padding: '0.5rem 2rem',
  fontFamily: 'Roboto, sans-serif',
  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
});

const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
  marginBottom: '10px',
  fontFamily: 'Roboto, sans-serif',
});

const Content = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '1200px',
  marginTop: '3rem',
  padding: '0 2rem',
  gap: '2rem',
  fontFamily: 'Roboto, sans-serif',
});

const ImageContainer = styled(Box)({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
});

const TextContainer = styled(Box)({
  flex: 1,
});

const UnderlinedHeading = styled(Typography)({
  position: 'relative',
  display: 'inline-block',
  fontSize: '2rem',
  color: 'rgb(65, 18, 237)', // Dark blue color for headings
  fontFamily: 'Roboto, sans-serif',
  transition: 'color 0.3s ease-in-out', // Smooth transition for color change
  '&::after': {
    content: '""',
    position: 'absolute',
    left: '0',
    bottom: '-10px',
    width: '0',
    height: '3px',
    background: 'linear-gradient(to right, rgb(65, 18, 237), rgb(65, 18, 237))',
    borderRadius: '2px',
    transition: 'width 0.3s ease-in-out', // Smooth transition effect
  },
  '&:hover': {
    color: 'rgb(65, 18, 237)', // Change heading color on hover
  },
  '&:hover::after': {
    width: '100%', 
    
  },
});

const StyledLink = styled(Link)({
  color: 'rgb(65, 18, 237)',
  textDecoration: 'none',
  fontWeight: 'bold',
  marginTop: '1rem',
  display: 'inline-block',
  '&:hover': {
    textDecoration: 'underline',
    color: 'rgb(65, 18, 237)',
  },
});
const Home1 = () => {
  return (
    <Container style={{ marginTop: '-200px' }}>
      <Content>
        <ImageContainer>
          <img src={home11} alt="Trello board" style={{ width: '100%', maxWidth: '600px' }} />
        </ImageContainer>
        <TextContainer>
          <UnderlinedHeading variant="h3" component="h2" style={{ fontSize: '40px' }} gutterBottom>
            Success Under Timesync
          </UnderlinedHeading>
          <Typography variant="body1" style={{ marginTop: '20px', font: '18px Roboto, sans-serif',textAlign:'justify',lineHeight:'1.6',color:'#333',fontSize:'1.1rem' }} paragraph>
            Similar to a Kanban board, a TIMESYNC is the easiest way to go from idea to action. Plan projects and break down each step of the way to getting things done. Instantly see the status of every task and celebrate each accomplishment. Project management has never been so powerful, yet so fun.
          </Typography>
        </TextContainer>
      </Content>

      <Content>
        <TextContainer>
          <UnderlinedHeading variant="h3" component="h2" style={{ fontSize: '40px' }} gutterBottom>
            Hit deadlines every time with Timeline
          </UnderlinedHeading>
          <Typography variant="body1" style={{ marginTop: '20px', font: '18px Roboto, sans-serif',textAlign:'justify',lineHeight:'1.6',color:'#333',fontSize:'1.1rem' }} paragraph>
            Stay on top of every sprint and stay on track of every goal with Timeline. Use Timeline to see how all of the moving parts piece together over time. Drag and drop to make start and due date adjustments on the fly as priorities shift and needs change. Quickly get a glimpse of what’s coming down the pipeline and identify any gaps that might impede your team’s progress.
          </Typography>
          {/* <StyledLink href="#">
            Learn more about Timeline view
          </StyledLink> */}
        </TextContainer>
        <ImageContainer>
          <img src={home12} alt="Timeline view" style={{ width: '100%', maxWidth: '600px' }} />
        </ImageContainer>
      </Content>

      <Content>
        <ImageContainer>
          <img src={home13} alt="Trello board" style={{ width: '100%', maxWidth: '600px' }} />
        </ImageContainer>
        <TextContainer>
          <UnderlinedHeading variant="h3" component="h2" style={{ fontSize: '40px' }} gutterBottom>
            See it like a spreadsheet with Table
          </UnderlinedHeading>
          <Typography variant="body1" style={{ marginTop: '20px', font: '18px Roboto, sans-serif',textAlign:'justify',lineHeight:'1.6',color:'#333',fontSize:'1.1rem' }} paragraph>
            Similar to a Kanban board, a TIMESYNC is the easiest way to go from idea to action. Plan projects and break down each step of the way to getting things done. Instantly see the status of every task and celebrate each accomplishment. Project management has never been so powerful, yet so fun.
          </Typography>
        </TextContainer>
      </Content>

      <Content>
        <TextContainer>
          <UnderlinedHeading variant="h3" component="h2" style={{ fontSize: '40px' }} gutterBottom>
            Get actionable insights with Dashboard
          </UnderlinedHeading>
          <Typography variant="body1" style={{ marginTop: '20px', font: '18px Roboto, sans-serif',textAlign:'justify',lineHeight:'1.6',color:'#333',fontSize:'1.1rem'}} paragraph>
            Stay on top of every sprint and stay on track of every goal with Timeline. Use Timeline to see how all of the moving parts piece together over time. Drag and drop to make start and due date adjustments on the fly as priorities shift and needs change. Quickly get a glimpse of what’s coming down the pipeline and identify any gaps that might impede your team’s progress.
          </Typography>
          {/* <StyledLink href="#">
            Learn more about Timeline view
          </StyledLink> */}
        </TextContainer>
        <ImageContainer>
          <img src={home14} alt="Timeline view" style={{ width: '100%', maxWidth: '600px' }} />
        </ImageContainer>
      </Content>

      <BackgroundContainer>
        <Heading>
          Bring powerful new views to your team’s work
        </Heading>
        <Subheading>
          Start a free trial today
        </Subheading>
          <StyledLink to="/signup">
            I'm ready
            Learn more about TimeSync
          </StyledLink>
        {/* <StartButton variant="contained">
          <Link to='/login'>
          </Link>
        </StartButton> */}
      </BackgroundContainer>
    </Container>
  );
};

export default Home1;



