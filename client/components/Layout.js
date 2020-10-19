import Head from 'next/head';
// allow use of <Link> to avoid page reload
import Link from 'next/link';
// use page router system
import Router from 'next/router';
// new page progress bar
import NProgress from 'nprogress';
// import css from node_modules/ instead of <link>
import 'nprogress/nprogress.css';

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();


// return children props in Layout
const Layout = ({ children }) => {

    // Bootstrap 4 CDN
    const head = () => (
      // <React.Fragment> allows 2 links to be treated as one statement
      <React.Fragment>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />

        <link rel="stylesheet" href="/static/css/styles.css" />

      </React.Fragment>

    )

    const nav = () => (
      // Bootstrap 4 style classes
      <ul className="nav navbar-dark bg-dark">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link text-light">
                Home
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/login">
              <a className="nav-link text-light">
                Login
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/register">
              <a className="nav-link text-light">
                Register
              </a>
            </Link>
          </li>
      </ul>
    );
    // using <React.Fragment> because <div> has default padding
    // React is avaiable globally in NextJS. No need to import
    return (
      <React.Fragment>
          {head()} {nav()} <div className="container pt-5 pb-5">{children}</div>
      </React.Fragment>
    );
};

// used to import on index.js
export default Layout;
