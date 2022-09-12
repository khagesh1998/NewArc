import RTNCenteredText from 'rtn-centered-text/js/CenteredTextNativeComponent';
import React from 'react';

// ... other code
export const FabricNativeComponentExample: () => React.ReactNode = () => {
  // ... other App code ...
  return (
    <RTNCenteredText text="Hello World!" style={{width: '100%', flex: 1}} />
  );
};
