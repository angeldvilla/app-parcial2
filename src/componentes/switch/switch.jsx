import React, {useState} from 'react';
import { StyleSheet, Text, View, Switch, ScrollView } from 'react-native';

const Switche = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [message, setMessage] = useState('');

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    setMessage(isEnabled ? 'El Switch esta Apagado' : 'El Switch esta Encendido');
  };
    
  return(
  <View style={styles.container}>
     <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#4bf5d6' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
       <Text style={styles.text}>{message}</Text>
  </View>
    );

}


/* ESTILOS */
const styles = StyleSheet.create({
  container:{
    marginTop: 2,
    justifyContent:'center',
    alignItems:'center',
    },

    text: {
      color:'black',
      fontWeight:'400',
      fontSize: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Switche;