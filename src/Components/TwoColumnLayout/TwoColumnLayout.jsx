import React from 'react';

import Espon from '../Espon/Espon';
import Emed from '../Emed/Emed';

const TwoColumnLayout = () => {
  return (
    <>
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-1 bg-gray-200 p-4">
    <Espon/>
      </div>
      <div className="col-span-1 bg-gray-300 p-4">
        <Emed/>
      </div>
    </div>
    </>
  );
};

export default TwoColumnLayout;
