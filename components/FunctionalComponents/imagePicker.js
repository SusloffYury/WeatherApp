
import { launchImageLibrary } from 'react-native-image-picker';;
import { useDispatch } from 'react-redux';
import { Gallery } from '../../store/AppActionCreators';
const pickImage = async () => {
  const dispatch = useDispatch();
  launchImageLibrary({
    mediaType: 'photo',
    allowsEditing: true,
    cameraType: 'front',
    quality: 1,
    saveToPhotos: true,
  }, result => {
    const path = result.uri
    dispatch(Gallery(path))
  }
  );

};
export default pickImage;