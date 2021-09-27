import React from 'react'
import styled from 'styled-components'
import BG from '../asset/bg.png'
import Logo from '../asset/logo.png';
import '../components/Partners.css'


import AEDC from '../asset/aedc.png'
import BEDC from '../asset/bedc.png'
import EEDC from '../asset/eedc.png'

import ENEDC from '../asset/enedc.png'
import IBEDC from '../asset/ibedc.png'
import IE    from '../asset/ie.png'

import JEDC from '../asset/jedc.png'
import KEDC from '../asset/kedc.png'
import KEDCO from '../asset/kedco.png'

import PHCN from '../asset/phcn.png'
import PHED from '../asset/phed.png'
import YEDC from '../asset/yedc.png'

const PartnersData = [AEDC,BEDC,EEDC,ENEDC,IBEDC,IE,JEDC,KEDC,KEDCO,PHCN,PHED,YEDC];

const SectionContainer = styled.div`
    width:100%;
    height:800px;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;  
    padding-top: 50px; 

    img{
        width:50;
        height:50px;
    }
    div.Partners{
        margin-top:5px;
        position:relative;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
    }
`;
const BottomContainer = styled.div`
    width:100%;
    height:80px;
    margin-right:auto;
    margin-left:auto;
    padding-right: 50px;
    padding-left: 50px;  
    background:url(${BG}) ;
    display:flex;
    align-items:center;
    justify-content:center;
`;

function Partners() {
    return (
        <>
            <SectionContainer className ="PartnersSection">   
                <div  className="Partners">
                     <h3 className="h1 text-center">Our Service Providers</h3>
                        <div className="row row-cols-2 row-cols-md-6 g-4">
                            {
                                PartnersData.map((partner,index)=>(
                                    <div className="col">
                                        <div className="card-body">
                                                <img src ={partner} alt={index}/>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                </div>         

            </SectionContainer>
                
            <BottomContainer>
                <img src ={Logo} />
            </BottomContainer>
        </>

    )
}

export default Partners
