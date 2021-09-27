import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import styled from 'styled-components';
import TopBg from './asset/bg.png'
import WhyPayAfrik from './components/WhyPayAfrik';
import AppSection from './components/AppSection';
import Partners from './components/Partners';
import TopService from './components/TopService';
import Register from './components/pages/Register';


const TopContainer = styled.div`
    width:100%;
    height:800px;
    background:url(${TopBg}); 
    background-size:cover;
`;

const SectionContainer = styled.div`
    width:100%;
    height:800px;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;
`;

function App() {
  return (
    <Router>
        <TopContainer>
            <Navbar />  
            <TopService />      
        </TopContainer>
 
        <WhyPayAfrik /> 

        <AppSection />  

        <Partners />
 

    <Switch>
        {/* <Route path ='/' exact component ={Register}/>  */}
        <Route path ='/login' component ={Register}/> 
    </Switch>
  </Router>
  );
}

export default App;
