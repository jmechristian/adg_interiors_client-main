import React from 'react';
import SplitLeft from './SplitLeft';
import SplitRight from './SplitRight';
import FullWidth from './FullWidth';

const DynamicContent = ({ component }) => {
  const renderContent = () => {
    switch (component.__component) {
      case 'image-rows.left-split-row':
        return (
          <SplitLeft
            left={component.vertical_left}
            right={component.horizontal_right}
          />
        );
      case 'image-rows.full-width-image':
        return <FullWidth image={component.full_width} />;
      case 'image-rows.right-split-row':
        return (
          <SplitRight
            left={component.horizontal_left}
            right={component.vertical_right}
          />
        );
      default:
        return undefined;
    }
  };

  return <div>{component ? renderContent() : ''}</div>;
};

export default DynamicContent;
