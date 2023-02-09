import React, { useState } from 'react'
import { NikkeInfo } from '../../nikkes/interfaces';
import nikkes from '../../nikkes/index';

type NikkeProps = {
    nikkes: NikkeInfo[];
}
  
const Item: React.FC<NikkeProps> = ({ nikkes }) => {
    return (
      <div>
          {
              nikkes.map(nikke => {
                  console.log(nikke.enName)
                  return (
                      <div key={nikke.enName}>
                          <label>{nikke.krName}</label>
                      </div>
                  )
              })
          }
      </div>
    );
  };

const Characters = () => {
    return (
        <div>
            <Item
                nikkes={nikkes}
            />
        </div>
    )
}

export default Characters;
