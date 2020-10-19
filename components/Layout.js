import Head from 'next/head';


// return children props in Layout
const Layout = ({ children }) => {

    // Bootstrap 4 CDN
    const head = () => (
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
    )

    const nav = () => (
      // Bootstrap 4 style classes
      <ul className="nav navbar-dark bg-dark">
          <li className="nav-item">
              <a className="nav-link text-light" href="">
                  Home
              </a>
          </li>
          <li className="nav-item">
              <a className="nav-link text-light" href="">
                  Login
              </a>
          </li>
          <li className="nav-item">
              <a className="nav-link text-light" href="">
                  Register
              </a>
          </li>
      </ul>
    );
    // using <React.Fragment> because <div> have default padding
    // React is avaiable globally in NextJS. No need to import
    return (
      <React.Fragment>
          {head()} {nav()} <div className="container pt-5 pb-5">{children}</div>
      </React.Fragment>
    );
};

// used to import on index.js
export default Layout;
