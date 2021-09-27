import React from 'react'
import Energy from '../asset/energy.png'
import  Bell from '../asset/bell.png'

import  DebitCard from '../asset/debit-card.png'
import  Dial from '../asset/dial.png'
import  BankTransfer from '../asset/bank-transfer.png'

import Help from '../asset/help.png'
import History from '../asset/history.png'
import RemoteControl from '../asset/remote-control.png'
import styled from 'styled-components'

const ServicesData =[
    {
        img:[Energy],
        title:"Purchase Electriciy Easily",
        desc:"With PayAfrik smart power you are assured an easy purchase. No more hassle just to fill your Units",
    },
    {
        img:[Bell],
        title:"Set Reminders",
        desc:"With PayAfrik smart power we remind you to buy Electricity. Set a reminder date and we won't forget",
    },
    {
        img:[DebitCard,Dial,BankTransfer],
        title:"Various Payment Methods",
        desc:"With PayAfrik samrt power you can make paymentsvia any payment method of your choice. Be it Card, USSD, or Bank Transfer",
    },
    {
        img:[Help],
        title:"24/7 Customer Service",
        desc:"Our Customer Service will be there always to have your issues resolved",
    },
    {
        img:[History],
        title:"Purchase History",
        desc:"Always have access to your purchase history. Never miss out on any trasctiob made",
    },
    {
        img:[RemoteControl],
        title:"Smart Control",
        desc:"Coming Soon",
    },
];

const ImageContainer  = styled.div`
    display:flex;  
    div{
        background:#ccc;
        height:40px;
        width:40px;
        margin:3px;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:4px;
    }
`;
const SectionContainer = styled.div`
    width:100%;
    height:800px;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    div.whyPayAfrik{
        position:relative;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
      }

      &:@media only screen and (min-width: 500px){
         height:auto;

         div.whyPayAfrik{
            position:none; 
         }
      }
      
`;

  


function WhyPayAfrik() {
    return (
     <SectionContainer>
        <div className='whyPayAfrik'>    
             <p className="h1 mb-4">Why choose PayAfrik?</p>
                <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                ServicesData.map((data)=>(  
                        <div class="col">
                         <div className="card h-100">  
                            <ImageContainer>
                            {
                              
                                data.img.map((image)=>(
                                   <div>
                                        <img src={image} className="card-img-top serviceImage" alt={data.title} />
                                   </div>
                                ))
                            }
                            </ImageContainer>
                             <div className="card-body">
                                 <h4 className="card-title">{data.title}</h4>
                                 <p className="card-text"><small className="text-muted">{data.desc}</small></p>
                   
                             </div>
                         </div>
                     </div>
                    
                ))
            } 
            </div>   
        </div>
    </SectionContainer>
    )
}

export default WhyPayAfrik;
