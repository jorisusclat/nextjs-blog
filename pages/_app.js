import '../scss/global.scss';
import ErrorBoundary from '../components/ErrorBoundary';

/* 
Persisting layout between page changes
Keeping state when navigating pages
Custom error handling using componentDidCatch
Inject additional data into pages
Add global CSS
*/

export default function App({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
