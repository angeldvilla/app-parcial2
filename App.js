import { StyleSheet, View, ScrollView } from 'react-native';
import Home from './src/componentes/home/home';
import Formulario from './src/componentes/formulario/formulario';
import Switche from './src/componentes/switch/switch';
import AlertModal from './src/componentes/alerta/alerta';
import Footer from './src/componentes/footer/footer';
import Triangles from './src/componentes/Triangulos/triangulos';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
       
        <Home />
        <Formulario />
        <Switche />
        <AlertModal />
        <Triangles /> 
        <Footer />

      </View>
    </ScrollView>
  );
}


/* ESTILOS */
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },

  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start', 
  },
});

export default App;