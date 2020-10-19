// return children props in Layout
const Layout = ({ children }) => {
    const nav = () => (
      // Bootstrap 4 style classes
      <ul className="nav">
          <li className="nav-item">
              <a className="nav-link" href="">
                  Home
              </a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="">
                  Login
              </a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="">
                  Register
              </a>
          </li>
      </ul>
    );
    // using <React.Fragment> because <div> have default padding
    // React is avaiable globally in NextJS. No need to import
    return (
      <React.Fragment>
          {nav()} {children}
      </React.Fragment>
    );
};

// used to import on index.js
export default Layout;
