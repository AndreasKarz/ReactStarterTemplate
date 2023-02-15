import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import './i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<React.Suspense fallback='Loading'>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</React.Suspense>
	</React.StrictMode>
);
