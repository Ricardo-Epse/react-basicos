import React from 'react';
import { HeroList } from '../hero/HeroList';


export const DcScreen = ({publisher}) => {
  return <div>
    <h1>DC</h1>
            <HeroList publisher="DC Comics"/>
  </div>;
};
