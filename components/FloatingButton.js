import Image from 'next/image';
import styled from 'styled-components';
import React from 'react';

import img from '../public/floatingbutton.svg'

// const Button = styled.button`
//   position: fixed;
//   bottom: 20px;
//   right: 20px;
//   width: 100px;
//   height: 100px;
//   border: none;
//   cursor: pointer;
//   z-index: 9999; /* 다른 요소보다 위에 표시될 수 있도록 설정 */
//   background: none; /* 배경을 투명하게 설정 */
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

const FloatingButton = ({ onClick }) => {
  return (
    <div style={{position:'fixed' , bottom:'20px',right:'20px',width: '100px',height: '100px', border: 'none',cursor: 'pointer',zindex: '9999', background: 'none', display: 'flex',alignitems: 'center',justifycontent: 'center'}}>
        <Button onClick={onClick} >
            <Image src={img} alt="Floating Button" width={80} height={80} />
        </Button>
    </div>
    


  );
};

export default FloatingButton;
