

import "./../styles/index.scss";

const App = ({ Component, pageProps }) => {
	// const store = useStore(pageProps.initialReduxState);

	return (
		<Component {...pageProps} />
	);
};

export default App;
