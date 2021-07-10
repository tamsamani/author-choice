import "./../styles/index.scss";

import { AppProps } from "next/app";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	// const store = useStore(pageProps.initialReduxState);

	return <Component {...pageProps} />;
};

export default App;
