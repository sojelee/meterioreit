import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Meteoreit from '../components/Meteoreit';
import Header from '../containers/common/header';

export default class Landings extends React.Component{
 
 render(){
     
      return(
      <HashRouter>
        <>  
            <Header />
            <Route exact  path='/' render={(props) =>{
                return (<Meteoreit />)
                    }}
            />
        </> 
      </HashRouter>
        
      )
    }
  }

