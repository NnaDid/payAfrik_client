import React from 'react'
import MobileAppImage from '../asset/mobile.png';
import AppStore  from '../asset/AppStore.png';
import styled from 'styled-components';

const AppContainer = styled.div`
  width:100%;
  height:800px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  background:orange;
  margin-top:-20px;

  img.appstoreImage{
      width:100%;
  }

  div.AppStoreInnerHolder{
    position:relative;
    top:50%;
    left:50%;
    transform: translate(-50%,-30%);
    display:flex;
    justify-content:center;
    align-items:center;
  }
`;


function AppSection() {
    return ( 
        <AppContainer>
            <div className ="AppStoreInnerHolder">
            <div className="row">
                <div className="col-sm-6"> 
                    <div className="card-body"> 
                            <img src={MobileAppImage} className="img-fluid" alt="payAfrik" />
                    </div> 
                </div>
                <div className="col-sm-6"> 
                    <div className="card-body">
                            <h3 className="h1">Download Our Moblie App</h3>
                            <p className="h4">
                                Pay your bills anywhere and anytime using our mobile App. Fast, Easy and convinient
                            </p>
                            <img src ={AppStore} className ="appstoreImage" alt ="mobile app download"/>
                                        
                    </div> 
                </div>
            </div>
            </div>
     </AppContainer>
    )
}





export default AppSection;
