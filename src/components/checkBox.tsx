import React from 'react';

interface CheckBoxProps {
    children: React.ReactNode;
}

const CheckBox: React.FC<CheckBoxProps> = ({ children }) => {
    return (
      <div className="checkBox">
          <p>checkbox</p>
          {children}
      </div>
    );
};

export default CheckBox;
