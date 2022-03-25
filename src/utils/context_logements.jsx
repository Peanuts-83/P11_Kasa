import { createContext, useState } from "react";

export const ContextLogements = createContext();

export const ProviderLogements = ({ children }) => {
	const [locs, setLocs] = useState([]);
	function getLoc(id) {
		return locs.filter((loc) => loc["id"] === id);
	}
	function getAllLocs() {
		return locs;
	}

	return (
		<ContextLogements.Provider value={{ locs, setLocs, getLoc, getAllLocs }}>
			{children}
		</ContextLogements.Provider>
	);
};
