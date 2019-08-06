import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import Home from './components/screens/Home'
import About from './components/screens/About'

const DrawerContainer = createDrawerNavigator({
  Home: {
    screen: Home
  },
  About: {
    screen: About
  }
  
});

export default createAppContainer(DrawerContainer)
