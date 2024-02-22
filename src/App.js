import { Box } from '@mui/material';
import './App.css';
import Page from './components/Page';
import { gift } from './utils/constant';
import Header from './components/header';
import "./style.css"
import Footer from './components/footer';
import SignIn from './components/signIn';

function App() {
  return (
    <div className="App">
      <Header/>
      <SignIn/>
      <Box className="homePage">
     
        {/* <Page imageUrl={gift[0].imageUrl}/>
        <Page imageUrl={gift[1].imageUrl}/>
        <Page imageUrl={gift[2].imageUrl}/>
        <Page imageUrl={gift[3].imageUrl}/>
        <Page imageUrl={gift[4].imageUrl}/>
        <Page imageUrl={gift[5].imageUrl}/>
        <Page imageUrl={gift[6].imageUrl}/>
        <Page imageUrl={gift[7].imageUrl}/>
        <Page imageUrl={gift[8].imageUrl}/>̵ */}
        {/* <Page /> */}
      </Box>
      <Footer/>
    </div>
  );
}

export default App;
