import React from 'react';

interface AppProps {
children:React.ReactNode
}

const App: React.FC<AppProps> = ({ children }) => {
    return (
<div className="pessoas">
    {children}
</div>
    );
};

export default App;
