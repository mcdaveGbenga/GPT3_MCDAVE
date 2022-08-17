import React from 'react';
import './brand.css'
import{google, slack , atlassian, shopify, dropbox } from './import'
function Brand() {
  return (
    <div className='gpt3__brand  section__padding'>

     <div>
      <img src={google} alt="google"/>
      </div>

      <div>
      <img src={slack} alt="Slack"/>
      </div>

      <div>
      <img src={dropbox} alt="dropbox"/>
      </div>
      
      <div>
      <img src={shopify} alt="google"/>

      </div>
      <div>
      <img src={atlassian } alt="google"/>
      </div>
      </div>
   
  );
}

export default Brand;
