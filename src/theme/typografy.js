import {
  Platform
} from 'react-native';

export default {
  avenirFont: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Avenir-Regular'
  }
}
