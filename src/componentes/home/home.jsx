import { StyleSheet, Text, View, Image } from 'react-native';
import logo from '../../logo/cotecnova.png'

const Home = () => {
    return(
  <View style={styles.container}>
    <Image source={logo} style={styles.imagenLogo}/>

   <Text style={styles.titulo}>Examen 2 Corte</Text>
   <Text style={styles.subtitulo}>Manejo de Componentes y API React Native</Text>
  </View>
    );
}


/* ESTILOS */
const styles = StyleSheet.create({
    
    container:{
    marginTop: 35,
    justifyContent:'center',
    alignItems:'center',
    },

    titulo: {
    marginBottom: 90,
    textAlign:'center',
     fontSize: 29,
     fontWeight: 'bold',
     color: 'white'
    },
    subtitulo: {
        marginTop: -88,
        textAlign:'center',
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'
       },
       
    imagenLogo: {
        marginBottom: 17,
        width: 150,
        height: 150,
        borderRadius: 100,
      },

  });

export default Home;