import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NavRightDropLi = ({ menu, link }) => {
  const navigate = useNavigate();
  return (
    <DropMenu>
      <p
        onClick={() => {
          navigate(link);
        }}
      >
        {menu}
      </p>
    </DropMenu>
  );
};

const DropMenu = styled.li`
  p {
    font-size: 16px;
    text-decoration: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

export default NavRightDropLi;
