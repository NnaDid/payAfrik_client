import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import TitleImage from '../asset/title.png';
import Energy from '../asset/energy.png';
import Telcos from '../asset/telcos.png';
import CableTV from '../asset/cable-icon.png';
import Help from '../asset/help.png';
import Visa from '../asset/visa.png';
import RemoteControl from '../asset/remote-control.png';


const ServiceImage = [
    {
       img:Energy,
       title:"Buy Electricity" 
    },
    {
        img:Telcos,
        title:"Airtime & Data"
    },
    {
       img:CableTV,
       title:"CableTV Subscription"
    },
    {
       img:Help,
       title:"Help & Support"
    },
    {
       img:Visa,
       title:"1xBET Payment"
    },
    {
       img:RemoteControl,
       title:"Smart Control"
    },

    
]


const TopServiceSectionContainer = styled.div`
    width:100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;
    margin-top:50px;

    div.ServiceContainer{    
            img.topServiceImage{
                width:70%;
                height:70%;
            }
    }
`;

const ServiceContainer =styled.div`
    display:flex;
    margin:15px;
    flex-wrap:wrap;
    max-width:550px;
`;

const ImageHolder = styled.div`
    width:120px;
    height:120px;
    margin:15px;
    background-color:darkblue;
    padding:14px;
    border-radius:10px;

`;


function TopService() {
    return (
        <>
            <TopServiceSectionContainer className="TopServiceSectionContainer">
                <img src={TitleImage} className ="TtileImage" alt ="...payafrik"/> 
                    <ServiceContainer className="row row-cols-3 row-cols-sm-3 row-cols-md-3 g-4 ServiceContainer"> 
                            {
                            ServiceImage.map((pix)=>(
                                <ImageHolder className=" col ImageServiceHolder">
                                    <Link to ='/login'>
                                            <img src={pix.img} className ="topServiceImage" alt="payafrik_2"/>
                                            <h6 className="text-white">{pix.title}</h6>
                                    </Link>
                                </ImageHolder> 
                                ))
                            } 
                                    
                    </ServiceContainer>   

               
            </TopServiceSectionContainer>

        </>
    )
}

export default TopService;
