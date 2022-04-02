import React from 'react';

interface CheckBoxProps {
    
}

const CheckBox: React.FC<CheckBoxProps> = ({ children }) => {
    return (
      <div className="checkBox">
          <input placeholder='Digite sua senha' type="text" />
          <div className="estadoCheck">
          </div>
      </div>
    );
};

export default CheckBox;
