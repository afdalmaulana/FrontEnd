import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';

const AvatarUploader = ({ onAvatarChange }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);
      onAvatarChange(reader.result); // Pass the selected image to the parent component
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {selectedImage && <img src={selectedImage} alt="Selected Avatar" />}
    </Box>
  );
};

export default AvatarUploader;
