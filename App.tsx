/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useCallback, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard
} from 'react-native';
import {format} from 'date-fns';
interface ListaTarefasInterface{
  titulo: string; 
  data: Date;
}

const App = () => {
  const[novaTarefa, setNovaTarefa] = useState('');
  const[listaTarefa, setListaTarefa] =  useState<Array<ListaTarefasInterface>>([]);
  const gravaTarefa = () => {
    if(novaTarefa === ''){
      return false;
    }
    Keyboard.dismiss();
    setNovaTarefa('');
    const novaLista = [...listaTarefa];
    
    novaLista.unshift({
      titulo: novaTarefa, 
      data: new Date(),
    });
    setListaTarefa(novaLista);
  };
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor ='#fff' />
      <View style ={{flex:1, padding: 16}}>
        <Image 
          source = {require('./todo-list.png')}
          style={{height: 58, width: '75%'}}
          resizeMode="contain"
        />
       <View style={{flexDirection: 'row'}}>
           <TextInput
              value={novaTarefa}
              onChangeText={(valor) => {
                setNovaTarefa(valor);
              }}
              placeholder="Adicionar tarefa"
              style={{
                flex:1,
                marginRight: 12,
                borderBottomWidth: 1,
                borderBottomColor: '#707070',
              }}
            />
            <TouchableOpacity
              onPress = {() =>{
                gravaTarefa();
              }}
              style={{
                width: 52,
                borderRadius: 26,
                backgroundColor: '#FFAA00',
                alignItems: 'center',
                justifyContent: 'center'
                
              }}>
                <Text style ={{ color: '#fff', fontSize: 26}}>+</Text>
            </TouchableOpacity>  
        </View>
        <View style ={{marginTop: 24}}>
          {listaTarefa.map((item, index) => (
             <View
              key ={'item' + index}
              style ={{
              backgroundColor: '#F5F8F9',
              padding: 8,
              borderLeftColor: '#1ABC9C',
              borderLeftWidth: 4,
              marginBottom:8
              
              }}>
                  <Text style ={{
                    textAlign: 'right', 
                    fontSize: 12,
                    fontWeight: 'bold',
                    
                    }}>{format(item.data,'dd/MM/yyyy HH:mm')}</Text>
                  <Text style={{
                    fontSize: 16,
                    }}>{item.titulo}</Text>
                  </View>
          ))}
             
          </View>    
      </View>
    
    </>
  );
};

const styles = StyleSheet.create({
  
  Text:{
    flex: 1,
    flexDirection: 'column'
  }

  
});

export default App;
