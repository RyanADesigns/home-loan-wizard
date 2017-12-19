import React from 'react';
import WizardOne from './components/WizardOne/WizardOne';
import WizardTwo from './components/WizardTwo/WizardTwo';
import WizardThree from './components/WizardThree/WizardThree';
import WizardFour from './components/WizardFour/WizardFour';
import WizardFive from './components/WizardFive/WizardFive';
import WizardSix from './components/WizardSix/WizardSix';
import WizardSeven from './components/WizardSeven/WizardSeven';
import WizardEight from './components/WizardEight/WizardEight';
import WizardNine from './components/WizardNine/WizardNine';
import WizardTen from './components/WizardTen/WizardTen';
import WizardEleven from './components/WizardEleven/WizardEleven';
import Finish from './components/Finish/Finish';

import NextBtn from './components/NextBtn/NextBtn';
import { HashRouter as Router,Switch, Route } from 'react-router-dom';


export default (

            <Router>
                <div>
                    <Route exact path= '/' render={()=> <NextBtn />} />

                    <Route path='/wOne' render={ ()=> <WizardOne /> } 
                />
                    <Route path="/wTwo" render={ ()=> <WizardTwo/> } 
                />
                    <Route path="/wThree" render={ ()=> <WizardThree/> } 
                />
                    <Route path='/wFour' render={ ()=> <WizardFour/> }  
                />
                    <Route path="/wFive" render={ ()=> <WizardFive/> }  
                />
                    <Route path="/wSix" render={ ()=> <WizardSix/> } 
                />
                    <Route path="/wSeven" render={ ()=> <WizardSeven /> } 
                />
                    <Route path="/wEight" render={ ()=> <WizardEight /> } 
                />
                    <Route path="/wNine" render={ ()=> <WizardNine/> } 
                />
                    <Route path="/wTen" render={ ()=> <WizardTen /> } 
                />
                    <Route path="/wEleven" render={ ()=> <WizardEleven /> } 
                />
                    <Route path='/finish' component={Finish} />

                 </div>

                </Router>
            )
        

 

 