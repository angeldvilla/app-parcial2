import React, { useState } from 'react';
import { Modal, Text, View, ActivityIndicator, TouchableOpacity, Button } from 'react-native';

const AlertModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const showAlert = () => {
    setIsModalVisible(true);
    setIsLoading(true);
    setAlertMessage('Cargando...');
    setTimeout(() => {
      setIsLoading(false);
      setAlertMessage('Grupo: Angel Villa, Jhon Jairo Rendon, Jhoan Taborda y Yeider Franco');
    }, 3000);
  };

  return (
    <View style={{ marginTop: 40}}>
      <TouchableOpacity onPress={showAlert} style={{backgroundColor: 'blue', padding: 10, borderRadius: 100, width: 350}}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>Generar Alerta</Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(false);
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <View style={{backgroundColor: '#38ffb6b6', padding: 17}}>
            {isLoading ? (
              <ActivityIndicator size="large" color="#6d6d6d" />
            ) : (
              <>
                <Text style={{fontSize: 18, marginBottom: 10}}>{alertMessage}</Text>
                {/* <Text onPress={() => setIsModalVisible(false)}>Cerrar</Text> */}
                
                <Button style={{backgroundColor:'blue'}} title="Cerrar" onPress={() => setIsModalVisible(false)}/>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AlertModal;