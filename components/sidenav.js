import React from 'react';
import { Link } from 'gatsby';

/*
  The sidenav is not loaded by default on the main pages. To include this navigation you can
  add "sidenav: true" in the front-matter of your markdown pages
*/

const Sidenav = () => (
  <aside className="usa-layout-docs-sidenav desktop:grid-col-3 padding-bottom-4">
    <nav>
      <ul className="usa-sidenav">
        <li className="usa-sidenav__item">
          <Link href="/">Parent link</Link>
        </li>
        <li className="usa-sidenav__item">
          <Link href="/" className="usa-current">
            Current page
          </Link>
          <ul className="usa-sidenav__sublist">
            <li className="usa-sidenav__item">
              <Link href="/">Child link</Link>
            </li>
            <li className="usa-sidenav__item">
              <Link href="/" className="usa-current">
                Child link
              </Link>
              <ul className="usa-sidenav__sublist">
                <li className="usa-sidenav__item">
                  <Link href="/">Grandchild link</Link>
                </li>
                <li className="usa-sidenav__item">
                  <Link href="/">Grandchild link</Link>
                </li>
                <li className="usa-sidenav__item">
                  <Link href="/" className="usa-current">
                    Grandchild link
                  </Link>
                </li>
                <li className="usa-sidenav__item">
                  <Link href="/">Grandchild link</Link>
                </li>
              </ul>
            </li>
            <li className="usa-sidenav__item">
              <Link href="/">Child link</Link>
            </li>
            <li className="usa-sidenav__item">
              <Link href="/">Child link</Link>
            </li>
            <li className="usa-sidenav__item">
              <Link href="/">Child link</Link>
            </li>
          </ul>
        </li>
        <li className="usa-sidenav__item">
          <Link href="/">Parent link</Link>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Sidenav;
