import React from 'react';

import './loader.scss';

const Loader = () => (
  <div className="loader">
    <div className="Loader-logos">
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  </div>
);

export default Loader;
