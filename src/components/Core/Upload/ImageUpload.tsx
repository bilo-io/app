import React, { ChangeEvent, useState } from 'react';

interface ImageUploadProps {
    onImageUpload: (file: File) => void;
    multiple?: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload, multiple }) => {
  // #region STATE
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  // #endregion

  // #region HANDLERS
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const selectedFile = files[0];
      setSelectedImage(selectedFile);
      onImageUpload(selectedFile);
    }
  };
    // #endregion

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        className="w-full p-3 pt-4 rounded-md pb-10"
        onChange={handleImageChange}
        multiple={multiple}
      />

      {selectedImage && (
        <div>
          <p>Selected Image:</p>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
            style={{ maxHeight: '200px', maxWidth: '100%' }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
