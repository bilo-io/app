import { IGallery, IProject } from '@vision/core';
import { Button, Icon, IconName, Modal, Spinner, Typography, modalStyle } from 'components/Core';
import translations from 'data/translations';
import { useAppLanguage, useAppTheme } from 'hooks';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import FontAwesome from 'react-fontawesome';
import { dispatchCustomEvent } from 'utils/events';

import { GalleryFilter } from './GalleryFilter';

interface GalleryExplorerProps<T> {
  data: IGallery[],
  onRefresh?: Function;
  onSetItem?: (value: T) => void;
  loading?: boolean;
  error?: any;
  icon: IconName;
  heading: {
    title: string;
    description: string;
  }
  renderItem: (item: T) => React.ReactElement;
  onDeleteItem?: (item: T) => void;
  maxHeight?: 'calc(100% - 0rem)'
}

// eslint-disable-next-line @typescript-eslint/comma-dangle
export const GalleryExplorer = <T,>({
  data: galleries,
  onRefresh,
  onSetItem,
  onDeleteItem,
  loading,
  error,
  heading,
  renderItem,
  icon,
  maxHeight,
}: GalleryExplorerProps<T>): React.ReactElement => {
  // #region HOOKS
  const { language } = useAppLanguage();
  const { theme } = useAppTheme();
  // #endregion

  // #region TRANSLATIONS
  // @ts-ignore
  const commonMessages = translations[language].common;
  // #endregion

  // #region STATE
  const [query, setQuery] = useState<string>('');
  const [itemToDelete] = useState<T | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const [isGalleryExpanded, setIsGalleryExpanded] = useState<{
    [key in string | number]: boolean
  }>({});
  const [filteredGalleries, setFilteredGalleries] = useState<IGallery[] | IProject[] | null>(galleries);
  const [activeItem, setActiveItem] = useState<T & { id: string } | null>(null);
  // #endregion

  // #region HELPERS
  const filterGalleries = (query: string): IGallery[] => {
    let results: IGallery[] = galleries as IGallery[];
    const queryLowerCase = query?.toLowerCase();
    if (!_.isEmpty(query)) {
      results = galleries?.filter?.((gallery: IGallery & { name: string }) => {
        const galleryHasItems = gallery && gallery?.media && Array.isArray(gallery.media);
        // @ts-ignore
        const galleryHasMatch = galleryHasItems && gallery?.media?.filter?.(
          (item: any) => (
            item?.name?.toLowerCase?.().includes?.(queryLowerCase) ||
            item?.alias?.toLowerCase?.()?.includes(queryLowerCase) ||
            item?.names?.firstName?.toLowerCase?.()?.includes(queryLowerCase) ||
            item?.names?.lastName?.toLowerCase?.()?.includes(queryLowerCase)
          )
        )?.length > 0;

        return gallery.name.toLowerCase().includes(query?.toLowerCase()) || galleryHasMatch;
      }
      );
    }
    return results;
  };
  // #endregion

  // #region HANDLERS
  const handleSearch = (e: any) => {
    const value: string = e.target.value;
    setQuery(value);
    setFilteredGalleries(filterGalleries(value));
  };

  const handleFilter = (key: string) => () => {
    console.log('toggling filter', { key });
  };

  const handleSetItem = (galleryItem: T & { id: string }) => {
    setActiveItem(galleryItem);
    dispatchCustomEvent('ui.closeLeftSideMenu');
    onSetItem?.(galleryItem);
  };

  const handleToggleSection = (i: number) => {
    setIsGalleryExpanded((prevState) => ({
      ...prevState,
      [i]: !prevState[i],
    }));
  };

  const handleToggleFilters = () => {
    setShowFilters((prev) => !prev);
  };
  // #endregion

  // #endregion
  useEffect(() => {
    if (galleries) {
      const result: { [key in string | number]: boolean } = {};
      galleries.forEach((p: IGallery, i) => {
        result[i] = true;
      });
      setIsGalleryExpanded(result);
    }
  }, [galleries, loading, error]);

  // #endregion

  return (
    <div className="w-full flex flex-col h-full"
    >
      <div className="w-full px-2 py-0 overflow-hidden overflow-y-auto no-scrollbar"
        style={{
          borderBottom: '1px solid #88888888',
          // maxHeight,
          height: `${maxHeight}!important`,

          marginTop: '0.5px',
        }}>
        {/* <Tooltip
          content={heading?.description}
          trigger={'hover'}
          direction={'right'}
          themeName={themeName}> */}
        <div className="hidden md:flex flex-row items-center justify-between"
          style={{
            height: 'calc(3rem - 5px)',
          }}>
          <div className="flex flex-row whitespace-nowrap text-ellipsis overflow-hidden float w-fit h-12 max-h-12 items-center overflow-x-hidden flex-nowrap">
            <div
              onClick={(): void => onRefresh?.()}
              className={`${onRefresh ? 'cursor-pointer' : ''}`}>
              <div className="mr-1">
                <Icon
                  name={icon}
                  size={20}
                  imageClass='mr-1'
                  color={loading ? `${theme?.PRIMARY}88` : theme?.TEXT}
                />
              </div>
            </div>
            <Typography weight="500" size="sm" className='py-0'>
              {heading?.title}
            </Typography>
          </div>
          {onRefresh && (
            <FontAwesome
              name="refresh"
              className={`hidden md:block hover:text-primary py-1 px-2 mr-1 ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              onClick={(): void => loading ? null : onRefresh?.()}
            />
          )}
        </div>
        {/* </Tooltip> */}
      </div>

      <div className="relative p-2 pt-0 mb-1 flex flex-row items-center overflow-x-hidden flex-nowrap">
        <div className="top-3 px-2  left-4">
          <FontAwesome name="search" />
        </div>
        <input
          id={'gallery_name_input'}
          onChange={handleSearch}
          className='w-full h-10 mt-2 py-5 indent-2 leading-8'
          placeholder={commonMessages?.searchResource?.('')}
          // placeholder={commonMessages?.search}
          value={query}
        />
        <div>
          <div
            className="top-3 px-2 pt-1 right-4 hover:text-primary"
            onClick={() => handleToggleFilters()}>
            <FontAwesome name="filter" />
          </div>
        </div>
      </div>
      <GalleryFilter isShowing={showFilters}
        onFilter={handleFilter}
      />
      {loading ? <Spinner color={theme?.PRIMARY} /> : (
        <div className="overflow-y-auto no-scrollbar" style={{
          height: maxHeight,
          maxHeight,
        }}>
          {filteredGalleries?.map((gallery: IGallery | IProject, i: number) => {
            // @ts-ignore
            const galleryContainsActiveDoc = activeItem ? (gallery?.media || [])?.findIndex?.((item: T & { id: string }) => item.id === activeItem?.id) !== -1 : false;

            return (
              <div key={`gallery-${i}`}>
                <div className="w-full flex flex-col border-layout-border p-2 px-2 cursor-pointer hover:bg-blue-500 hover:bg-opacity-20"
                  onClick={() => handleToggleSection(i)}
                >
                  <div className="flex flex-row justify-between align-center overflow-hidden whitespace-nowrap flex-nowrap">
                    <div className='font-bold !text-gray-500 flex flex-row'>
                      <div className="mr-2">
                        <Icon
                          name="folder"
                          size={24}
                          color={`${galleryContainsActiveDoc
                            ? theme?.PRIMARY
                            : theme?.TEXT}44`
                          }
                        />
                      </div>
                      <Typography color={galleryContainsActiveDoc ? theme?.PRIMARY : theme?.TEXT}>{gallery.name}</Typography>
                    </div>
                    <div>
                      <FontAwesome
                        className="!text-gray-500 text-xs mr-1"
                        name={isGalleryExpanded[i] ? 'chevron-up' : 'chevron-down'}
                      />
                    </div>
                  </div>
                </div>


                <div className={`w-full overflow-hidden ${isGalleryExpanded[i] ? 'max-h-screen' : 'max-h-0'} transition-all duration-500 ease-in-out `}>
                  {(gallery as IGallery)?.media?.length > 0 && (gallery as IGallery)?.media?.map((item: T | any, dI: number) => (
                    <div key={`gallery-${i}-document-${dI}`}
                      className={`w-full p-2 pl-4 flex flex-row overflow-x-hidden whitespace-nowrap flex-nowrap cursor-pointer ${item.id === activeItem?.id ? '!text-blue-500' : '!text-gray-500'} hover:bg-blue-500 hover:bg-opacity-10 ${isGalleryExpanded[i] ? 'border-t' : 'border-none'}`}
                      style={{
                        borderColor: '#88888888',
                      }}
                      onClick={() => handleSetItem(item)}
                    >
                      <div className="w-full flex flex-row items-center">
                        <div className="w-full flex flex-row">
                          {renderItem(item)}
                        </div>
                        {/* <div onClick={(e) => {
                                                    e.stopPropagation()
                                                    handleDeleteItem(item)
                                                }}>
                                                    <FontAwesome name="trash" className="hover:text-red-500" />
                                                </div> */}
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            );
          })}
        </div>
      )}
      <Modal isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        {/* @ts-ignore */}
        <div className="w-full p-8 flex flex-col items-center justify-between" style={modalStyle}>
          <Typography size="xl" variant={'light'} className="mb-4">Delete Character</Typography>

          <Typography>You are about to delete this item.</Typography>
          <Typography>Are you sure you want to do this?</Typography>

          <Button
            backgroundColor={theme?.ERROR}
            onClick={() => onDeleteItem?.(itemToDelete as T)}
            className='w-full justify-center'>
            <Typography align="center">Yes, Delete</Typography>
          </Button>
          <Button
            backgroundColor={'transparent'}
            onClick={() => setShowDeleteModal(false)}
            className='w-full justify-center'
            style={{ color: '#000' }}>
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default GalleryExplorer;