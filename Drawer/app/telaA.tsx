import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App(){

  const [ name, setName ] = useState('')
  const [ data, setData ] = useState('')
  const [ cpf, setCpf ] = useState('')
  const [ endereco, setEndereco ] = useState('')
  const [ valor, setValor ] = useState('')

  function handleUserAdd(){
      console.log(
          "Nome Completo: " + name + "\nData de Nascimento: " + data + "\nCPF: " + cpf + "\nEndereço: " + endereco + "\nValor da Consulta: " + valor
      )

      Alert.alert(
        "Nome Completo: " + name + "\nData de Nascimento: " + data + "\nCPF: " + cpf + "\nEndereço: " + endereco + "\nValor da Consulta: " + valor
      )
  }

  return(
  <View style={styles.container}>
      <Text style={styles.text}>Preencha os Dados</Text>

      <TextInput 
          style={styles.input}
          placeholder="Nome Completo"

          value={ name }
          onChangeText={ setName }
      />

      <TextInput 
          style={styles.input}
          placeholder="Data de Nascimento"

          value={ data }
          onChangeText={ setData }
      />

      <TextInput 
          style={styles.input}
          placeholder="CPF"

          value={ cpf }
          onChangeText={ setCpf }
      />

      <TextInput 
          style={styles.input}
          placeholder="Endereço"

          value={ endereco }
          onChangeText={ setEndereco }
      />

      <TextInput 
          style={styles.input}
          placeholder="Valor da Consulta"

          value={ valor }
          onChangeText={ setValor }
      />

      <TouchableOpacity style={styles.button} onPress={ handleUserAdd }>
          <Text style={styles.text2}>Cadastrar</Text>
      </TouchableOpacity>

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

  logo: {
    height: 100,
    width: 100,
  },

  input: {
    height: 40,
    margin: 12,
    marginLeft: 30,
    padding: 10,
    borderRadius: 4,
    width: '80%',
    backgroundColor: '#CCCCCC',
    color: '#7A7A7A',

    fontSize: 15,
  },

  button: {
    backgroundColor: '#113946',
    padding: 8,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
    marginTop: 15,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  
    elevation: 5,
  },

  text2: {
    fontSize: 15,
    color: '#F2F2F2',
    textAlign: 'center',
  },
});
