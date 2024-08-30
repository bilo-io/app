import React from 'react';
import FontAwesome from 'react-fontawesome';

interface GalleryFilterProps {
    onFilter: (key: string) => () => void,
    isShowing?: boolean
}

export const GalleryFilter: React.FC<GalleryFilterProps> = ({
  onFilter,
  isShowing,
}) => {
  const buttonProps = {
    className: 'p-3 hover:text-primary cursor-pointer',
  };
  return (
    <>
      <hr />
      <div className={`flex flex-row overflow-hidden ${isShowing ? 'h-auto' : 'h-0'} transition-all duration-500 ease-in-out`}>
        <div
          {...buttonProps}
          onClick={onFilter('name')}>
          <FontAwesome name="arrow-up-a-z" />
        </div>

        <div
          {...buttonProps}
          onClick={onFilter('collapse-all')}>
          <FontAwesome name="folder" />
        </div>

        <div
          {...buttonProps}
          onClick={onFilter('expand-all')}>
          <FontAwesome name="folder-open" />
        </div>
      </div>
    </>
  );
};