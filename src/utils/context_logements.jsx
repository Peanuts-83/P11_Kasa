import { createContext, useState } from "react";
import logements from "../app/fetcher";

export const ContextLogements = createContext();

export const ProviderLogements = ({ children }) => {
	const [locs, setLocs] = useState(logements.get());
	function getLoc(id) {
		return locs.filter((loc) => loc["id"] === id);
	}
	function getIDs() {
		return locs.map(loc => loc.id);
	}

	return (
		<ContextLogements.Provider value={{ locs, setLocs, getLoc, getIDs }}>
			{children}
		</ContextLogements.Provider>
	);
};
