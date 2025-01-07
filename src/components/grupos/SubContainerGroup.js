import React from 'react';
import SubContainer from '../../components/SubContainer';

const SubContainerGroup = ({ titles, additionalStyles }) => {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        overflowY: 'auto',
        maxHeight: '900px',
        padding: '16px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        ...additionalStyles,
      }}
    >
      {titles.map((title, index) => (
        <SubContainer key={index}>{title}</SubContainer>
      ))}
    </div>
  );
};

export default SubContainerGroup;
