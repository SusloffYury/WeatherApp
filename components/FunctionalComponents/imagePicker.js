
import { launchImageLibrary } from 'react-native-image-picker';;

const pickImage = async () => {
  launchImageLibrary({
    mediaType: 'photo',
    allowsEditing: true,
    cameraType: 'front',
    quality: 1,
    saveToPhotos: true,
  },result=>{
    result.uri
  }
  );
  
};
export default pickImage;