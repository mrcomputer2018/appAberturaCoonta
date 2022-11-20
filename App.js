import React, { Component } from 'react';
import 
{ View, StyleSheet, Text, TextInput, TouchableOpacity } 
from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class App extends Component { 

  constructor(props){
    super(props);
    this.state = { 
      name:'',
      age:'',
      sexo: 0,
      listSexos: [
        {nome: 'Masculino', valor: 1},
        {nome: 'Feminino', valor: 2},
      ],
      limite: 250,
    };

    this.criar = this.criar.bind(this);
    this.limpar = this.limpar.bind(this);
  };

  criar() {
    if (this.state.name === '' && this.state.age != '') {
      alert('O campo nome é obrigatório');
    }
    else if (this.state.age === '' && this.state.name != '') {
      alert('O campo idade é obrigatório');
    }
    else if(this.state.name === '' && this.state.age === '') {
      alert('Os campos nome e idade são obrigatórios');
    }
    else {
      alert('Conta criada com sucesso!!!\n\n' +
              'Nome: ' + this.state.name +'\n' +
              'Idade: ' + this.state.age + '\n' +
              'Sexo: ' + this.state.listSexos[this.state.sexo].nome + '\n' 
      );
    }
  }

  limpar() {
    this.setState({
        name: '',
        age: ''
    })
  }

  render() {
    /* Retorna os items do Picker do sexo M ou F */
    let sexoItems = this.state.listSexos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome}/>
    });

    return (
      <View style={ styles.container }>
        <Text style={ styles.textTittle }>
          Crie sua conta
        </Text>

       {/*  input name */}
        <View style={ styles.viewNome }>
          <Text style={ styles.legend }>Nome:</Text>
          <TextInput 
            style={ styles.textInput }
            placeholder='Digite seu nome'
            underlineColorAndroid='transparent'
            maxLength={60}
            onChangeText={ (text) => this.setState({ name: text }) }
          />
        </View>

        {/*  input age */}
        <View style={ styles.viewIdade }>
          <Text style={ styles.legend }>Idade:</Text>
          <TextInput
            style={ styles.textInput }
            placeholder='Digite sua idade'
            underlineColorAndroid='transparent'
            keyboardType="numeric"
            maxLength={110}
            onChangeText={ (text) => this.setState({ age: text }) }
          />
        </View>

        {/* picker */}
        <View style={ styles.pickerView }>
          <Text style={ styles.legend }>Sexo:</Text>
          <Picker
          style={ styles.picker }
          selectedValue={ this.state.sexo }
          onValueChange={ (itemValue, itemIndex) => this.setState({ sexo: itemValue }) }
          > 
            { sexoItems }
          </Picker>
        </View>

        {/* slider */}
        <View style={ styles.sliderView }>
          <Text style={ styles.legend }>Limite:</Text>
          <Slider
          style={ styles.slider }
          minimumValue={0}
          maximumValue={500}
          onValueChange={(valorSelecionado) => this.setState({ limite: valorSelecionado })}
          value={ this.state.limite }
          />
          <Text style={ styles.textSlider }>
              R$ { this.state.limite.toFixed(1) }
          </Text>
        </View>

        {/* buttons */}
        <View style={ styles.btnView }>
          <TouchableOpacity 
          style={ styles.btn } onPress={ this.criar }>
            <Text style={ styles.btnText }>Criar</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={ styles.btn } onPress={ this.limpar }>
            <Text style={ styles.btnText }>Limpar</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
  },
  textTittle: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 15,
  },
  viewNome: {
    margin: 10,
  },
  legend: {
    fontSize: 16,
  },
  viewIdade: {
    margin: 10,
  },
  textInput: {
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#dadae8',
    marginTop: 5,
    padding: 10,
    backgroundColor: 'whitesmoke',
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    margin: 20,
  },
  btn: {
    backgroundColor: 'blue',
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pickerView: { 
    margin: 10,
  },
  picker: {
    fontSize: 16,
    backgroundColor: 'whitesmoke',
    border: 1,
    borderRadius: 5,
    height: 50,
  },
  slider: { 
    marginTop: 10,
  },
  textSlider: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default App;