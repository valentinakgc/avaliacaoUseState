import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/medica.png')} />
      <Text style={styles.text}>Clinica Valentina Kroth</Text>
      <Text style={styles.text2}></Text>
      
      <Link href="/telaA" style={styles.button}>Agendamento</Link>
      <StatusBar style="auto" />

      <Link href="/telaB" style={styles.button}>Pacientes</Link>
      <StatusBar style="auto" />
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
    padding: 5,
  },

  logo: {
    height: 200,
    width: 200,
  },

  button: {
    backgroundColor: '#113946',
    color: '#EBEBEB',
    padding: 8,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
    marginTop: 15,
    textAlign: 'center',
    fontSize: 15,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  
    elevation: 5,
  },
});
