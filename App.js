import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import{useState} from 'react'
/*
//JSX, está basada en javascript y es un árbol de componentes
export default function App() {
const [cont, setCont]=useState(0)
const handleOnPress=()=>{
  setCont(cont+1)
}
  return (
    <View style={styles.container}>
      <Text style={styles.inputStyle}>{cont}</Text>
      <br/>
      <Button title="Change text" onPress={handleOnPress} />
      <StatusBar style="auto" />
    </View>
  );
}

//JSS, se parece al css, pero este es de javascript
//es css pero en objetos de javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    color:'red'
  }
});
*/

export default function App() {

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput />
          <Button title="Soy un hamster espacial"/>
        </View>
        <View>

        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    paddind:50
  },
  inputContainer: {
    //eje x
    flexDirection:'row',
    //eje principal
    justifyContent:'space-between',
    //eje secundario
    alignItems:'center'
  }
});
