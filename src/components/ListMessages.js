import React, { useState } from 'react';
//Cai components ListMessage.js de thong bao ra doan text HeroesComponent o phia duoi nhe ae
const ListMessage = (props) => {
  return (
    <div>
      <ul>
        {props.list.map(
          (
            mess //o day ta su dung .map , props chinh la de truyen du lieu vao ham
          ) => (
            <li key={mess}>
              {/* Phai co key de lay ra mess, sau do truyen truc tiep vao de lay ra gia tri cua id */}
              <label>HeroesComponent: Selected hero id={mess}</label>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default ListMessage;
