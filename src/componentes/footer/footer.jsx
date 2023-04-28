import { StyleSheet, Text, View, ScrollView } from 'react-native';

const Footer = () => {
    return(
  <View>
     <Text style={styles.text}>Los Mejores Lenguajes Para Aprender!</Text>
     <Text style={styles.lista}>
        * JavaScript {'\n'}
        * React {'\n'}
        * Swift {'\n'}
        * Go {'\n'}
        * Dart {'\n'}
        * PHP {'\n'}
        * HTML {'\n'}
        * CSS {'\n'}
        * SQL {'\n'}
      </Text>
  </View>
    );
}

/* ESTILOS */
const styles = StyleSheet.create({
    text: {
      marginTop: 25,
      color: 'black',
      fontSize: 16,
      fontWeight:'400',
      alignItems: 'center',
      justifyContent: 'center',
    },

    lista: {
      marginTop: 10,
      color: 'black',
      fontSize: 16,
      display:'flex',
      flexDirection:'column',
      fontWeight:'400',
      alignItems: 'flex-start',
    }
  });

export default Footer;