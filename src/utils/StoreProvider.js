import React, { useState } from 'react';

export const StoreContext = React.createContext(null);

const StoreProvider = ({ children }) => {  

    const [entry, setEntry] = useState('');
    const [ proteins, setProteins ] = useState([]);

	const store = {
		entry: [entry, setEntry],
        proteins: [ proteins, setProteins ]
	};

	return( 
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    );
};
export default StoreProvider;