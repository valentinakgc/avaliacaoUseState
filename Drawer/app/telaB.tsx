import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [data, setData] = useState([
    { name: 'Daniel de Maria Prio', date: '2023-10-09', time: '11:15' },
    { name: 'João Carlos da Silva', date: '2023-10-10', time: '16:00' },
    { name: 'Ana Maria Pereira', date: '2023-10-11', time: '09:30' },
  ]);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/medica.png')} />
      <Text style={styles.text}>Clinica Valentina Kroth</Text>
      <Text style={styles.text2}>Lista de Pacientes</Text>

      {data.map(item => (
        <View key={item.name} style={styles.itemList}>
          <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
          <Text>Data da Consulta: {item.date}</Text>
          <Text>Horário da Consulta: {item.time}</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Editar</Text>
          </TouchableOpacity>
          </View>
      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
  },

  text2: {
    fontSize: 15,
    marginTop: 15,
    textAlign: 'center',
  },

  logo: {
    height: 150,
    width: 150,
  },

  itemList:{
    color: '#000',
    backgroundColor: "#CCCCCC",
    borderRadius: 5,
    fontWeight: "400",

    width: '60%',
    margin: 10,
    padding: 10,
},
});