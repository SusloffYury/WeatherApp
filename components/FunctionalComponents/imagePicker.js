
import { launchImageLibrary } from 'react-native-image-picker';;
import { useDispatch } from 'react-redux';
import { Gallery } from '../../store/AppActionCreators';
const pickImage = async () => {
   launchImageLibrary({
    mediaType: 'photo',
    allowsEditing: true,
    cameraType: 'front',
    quality: 1,
    saveToPhotos: true,
  }, result => {
    // const dispatch = useDispatch();
    // const path = result.uri
    // dispatch(Gallery(path))
    console.log(result.uri)
    result.uri
    
  });
};
export default pickImage;