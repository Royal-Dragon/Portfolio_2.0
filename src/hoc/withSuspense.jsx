// src/components/withSuspense.js

import React, { Suspense } from 'react';
import Loading from './loading';

const withSuspense = (Component) => {
  return (props) => (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};

export default withSuspense;
