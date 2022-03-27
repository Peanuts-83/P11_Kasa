import { createContext, useState } from "react";

export const ContextLogements = createContext();

export const ProviderLogements = ({ children }) => {
	const [locs, setLocs] = useState([]);
	function getLoc(id) {
		return locs.filter((loc) => loc["id"] === id);
	}
	function getIDs() {
		console.log('IDS', locs.map(loc => loc.id))
		return locs.map(loc => loc.id);
	}

	return (
		<ContextLogements.Provider value={{ locs, setLocs, getLoc, getIDs }}>
			{children}
		</ContextLogements.Provider>
	);
};
