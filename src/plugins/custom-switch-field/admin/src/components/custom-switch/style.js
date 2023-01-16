import React from 'react';
import styled from 'styled-components';


const SwitchContent = styled.div`
background: ${({ theme }) => theme.colors.danger500};
border: none;
border-radius: 16px;
position: relative;
height: ${24 / 16}rem;
width: ${40 / 16}rem;
& span {
  font-size: ${({ visibleLabels }) => (visibleLabels ? '1rem' : 0)};
}
&:before {
  content: '';
  background: ${({ theme }) => theme.colors.neutral0};
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  position: absolute;
  transition: all 0.5s;
  left: ${({ theme }) => theme.spaces[1]};
  top: ${({ theme }) => theme.spaces[1]};
}
@media (prefers-reduced-motion: reduce) {
  &:before {
    transition: none;
  }
}
`;

const SwitchButton = styled.button`
  background: transparent;
  padding: 0;
  border: none;
  &[aria-checked='true'] ${SwitchContent} {
    background: ${({ theme }) => theme.colors.success500};
  }
  &[aria-checked='true'] ${SwitchContent}:before {
    transform: translateX(1rem);
  }
`;

export {
    SwitchContent,
    SwitchButton,
}