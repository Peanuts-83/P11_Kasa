import React, {useState} from "react";
import { BrowserRouter, Route, Routes, useLocation, useParams } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Logement from "../pages/Logement";
import About from "../pages/About";
import Error404 from "../pages/Error";
import { ProviderLogements } from "../utils/context_logements";
import logements from "../app/fetcher";

function Router() {
	const allIDs = logements.get().map(loc => loc.id)

	return (
		<React.StrictMode>
			<BrowserRouter className="container" basename="/P11_Kasa">
				<ProviderLogements>
					<div className="App">
						<Header />
						<Routes>
							<Route path="/" element={<Home />} />
							{allIDs.map(id => (
								<Route path={`/logement:${id}`} element={<Logement  idPage={id} />} key={id} />
							))}
							{/* <Route path="/logement:id" element={<Logement />} /> */}
							<Route path="/apropos" element={<About />} />
							<Route path="*" element={<Error404 />} />
						</Routes>
					</div>
				</ProviderLogements>
				<Footer className="footer" />
			</BrowserRouter>
		</React.StrictMode>
	);
}

export default Router;
