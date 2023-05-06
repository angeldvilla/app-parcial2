import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';

const Formulario = () => {
    return(
  <View style={styles.container}>
     <Text style={styles.text}>Usuario:</Text>
     <TextInput placeholder='Ingrese su usuario' keyboardType='text' style={styles.input}/>

     <Text style={styles.text}>Contraseña:</Text>
     <TextInput placeholder='Ingrese su contraseña' secureTextEntry={true} style={styles.input}/>

     <Text style={styles.text}>Telefono:</Text>
    <TextInput placeholder='Ingrese un numero' keyboardType='numeric' style={styles.input}/>

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

    text: {
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
    },

    input: {
      textAlign: 'center',
      height: 40,
      width: 190,
      margin: 20,
      borderWidth: 1,
      borderColor:'white',
      padding: 10,
      text:'grey',
      color: 'black',
      fontWeight:'bold',
      backgroundColor:'white',
      borderRadius: 100
    }
  });


export default Formulario;