import { isDesktop } from 'hooks/use-device';
import React, { useEffect, useState } from 'react';
import FontAwesome from 'react-fontawesome';

import Button from '../Button/Button';
import Input from '../Inputs/Input';

interface MasonryGalleryProps {
  images: string[];
  isEditable?: boolean;
  useAnimate?: boolean;
  onUpdate?: (images: string[]) => void;
  twHeight?: string,
  twHeightHover?: string,
}

const ImageInput: React.FC<{ onAddImage: (url: string) => void }> = ({
  onAddImage,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');

  const handleInputChange = (value: string) => {
    setInputValue(value);
    setPreviewUrl(value);
  };

  const handleAddImage = () => {
    if (inputValue) {
      onAddImage(inputValue);
      setInputValue('');
      setPreviewUrl('');
    }
  };

  return (
    <div className="w-full flex flex-col items-center mb-4">
      <div className="w-full flex flex-row items-center">
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Paste image URL"
          className="w-full mb-2 p-2 border rounded"
          wFull
        />
        <Button
          onClick={handleAddImage}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add
        </Button>
      </div>
      {previewUrl && (
        <img
          src={previewUrl}
          alt="Preview"
          className="h-24 w-auto mt-4 rounded"
        />
      )}
    </div>
  );
};

export const MasonryGallery: React.FC<MasonryGalleryProps> = ({
  images,
  useAnimate,
  isEditable = false,
  onUpdate,
  twHeight = 'h-24 md:h-32',
  twHeightHover = 'hover:h-32 md:hover:h-40'
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [imageList, setImageList] = useState(images);
  const isDesktopDevice = isDesktop();
  const canEdit = isEditable && isDesktopDevice;

  useEffect(() => {
    setImageList(images);
  }, [images]);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNextImage = () => {
    if (selectedImage < imageList.length - 1) {
      setSelectedImage((prev) => prev + 1);
    }
  };

  const goToPreviousImage = () => {
    if (selectedImage > 0) {
      setSelectedImage((prev) => prev - 1);
    }
  };

  const handlePreviousImage = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    goToPreviousImage();
  };

  const handleNextImage = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    goToNextImage();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      goToPreviousImage();
    } else if (event.key === 'ArrowRight') {
      goToNextImage();
    } else if (event.key === 'Escape') {
      closeLightbox();
    }
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    // @ts-ignore
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      // @ts-ignore
      document.removeEventListener('keydown', handleKeyDown);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteImage = (index: number) => {
    if (!canEdit) return;
    const updatedImages = imageList.filter((_, i) => i !== index);
    setImageList(updatedImages);
    onUpdate && onUpdate(updatedImages);
  };

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, index: number) => {
    if (!canEdit) return;
    console.log('Drag start:', index);
    event.dataTransfer.setData('draggedIndex', index.toString());
    event.dataTransfer.effectAllowed = 'move';
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>, index: number) => {
    if (!canEdit) return;
    event.preventDefault();
    const draggedIndex = parseInt(event.dataTransfer.getData('draggedIndex'), 10);
    if (draggedIndex === index) return;

    const updatedImages = [...imageList];
    const [draggedImage] = updatedImages.splice(draggedIndex, 1);
    updatedImages.splice(index, 0, draggedImage);

    console.log('Dropped image:', draggedIndex, 'to', index);
    console.log({
      images,
      update: updatedImages,
    });
    setImageList(updatedImages);
    onUpdate && onUpdate(updatedImages);
  };

  const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
    if (!canEdit) return;
    event.preventDefault();
  };

  const handleAddImage = (url: string) => {
    if (!canEdit) return;
    const updatedImages = [...imageList, url];
    setImageList(updatedImages);
    onUpdate && onUpdate(updatedImages);
  };

  return (
    <div className="relative" onKeyDown={handleKeyDown}>
      {canEdit && <ImageInput onAddImage={handleAddImage} />}
      <div className={`masonry-container flex flex-row flex-wrap h-full overflow-y-auto ${useAnimate ? 'animate-on-change' : ''}`}>
        {imageList?.map?.((imageUrl, index) => (
          <div
            className="masonry-item relative"
            key={index}
            draggable={canEdit}
            onDragStart={(e) => handleDragStart(e, index)}
            onDrop={(e) => handleDrop(e, index)}
            onDragOver={allowDrop}
          >
            <img
              src={imageUrl}
              alt={`pic-${index}`}
              className={`${twHeight} ${canEdit ? '' : twHeightHover} w-auto m-1 rounded-xl hover:rounded-md transition-all duration-700 ease-in-out cursor-pointer`}
              onClick={() => canEdit ? null : openLightbox(index)}
            />
            {canEdit && (
              <button
                onClick={() => handleDeleteImage(index)}
                className="absolute pt-1 top-2 right-2 bg-red-600 hover:bg-red-600 text-red-500 hover:text-white rounded-full px-2.5 bg-opacity-30 hover:bg-opacity-100"
              >
                <FontAwesome name="times" />
              </button>
            )}
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div
          onClick={closeLightbox}
          className="lightbox z-50 fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-50 backdrop-blur-lg"
        >
          <div className="lightbox-content relative w-full">
            <div className="lightbox-header fixed top-0 left-0">
              <div className={`close-button m-4 text-3xl cursor-pointer opacity-${selectedImage === imageList.length - 1 ? '50' : '100'}`}
                onClick={closeLightbox}>
                <FontAwesome name="close" className="text-white" />
              </div>
            </div>
            <div className="lightbox-body w-full relative flex flex-row items-center justify-between">
              <div
                onClick={handlePreviousImage}
                className={`py-20 px-4 hover:bg-white hover:bg-opacity-10 cursor-pointer opacity-${selectedImage === imageList.length - 1 ? '50' : '100'}`}
              >
                <FontAwesome name="chevron-left" className="text-3xl text-white" />
              </div>

              <div onClick={(e) => e.stopPropagation()}>
                <img
                  src={imageList[selectedImage]}
                  alt={`focused-pic-${selectedImage}`}
                  style={{
                    height: 'auto',
                    maxHeight: 'calc(100vh - 4rem)',
                    maxWidth: 'calc(100% - 0rem)',
                    width: 'auto',
                  }}
                  className="lightbox-image"
                />
              </div>

              <div
                onClick={handleNextImage}
                className="py-20 px-4 hover:bg-white hover:bg-opacity-10 cursor-pointer"
              >
                <FontAwesome name="chevron-right" className="text-3xl text-white" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MasonryGallery;
