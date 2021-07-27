import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { ProgressBar } from 'react-native-paper';


class Chatbot extends Component{

  state={
      Date: new Date(),
  };


  render(){
      // const {navigation}=this.props;
      const {route}=this.props;

      console.log(route.params.uri)
      return(
        <View style={styles.container}>
          <View style={styles.title}>
            <TouchableOpacity style={{marginTop:52, marginLeft:28}} onPress={()=>this.props.navigation.push('Main')} >
              <AntDesign name="arrowleft" color='#000000' size={20}/>
            </TouchableOpacity>
            <Text style={styles.text}>모머금</Text>
          </View>
          <View style={styles.contain}>
            <View style={styles.date}>
              <Text style={styles.datetext}>{this.state.Date.getFullYear()}년{this.state.Date.getMonth()+1}월{this.state.Date.getDate()}일</Text>
            </View>
            <View style={styles.message}>
                {route.params.uri && <Image source={{ uri: route.params.uri }} style={styles.imgstyle} />}
              <View style={{alignItems: 'center'}}>
                <Text style={styles.messatext}>얼마나 먹었는지 표시🧐</Text>
                <View style={styles.result}></View>
                <TouchableOpacity style={styles.checkbutton} >
                  <Ionicons name="ios-checkmark-sharp" color='#000000' size={20}/>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flex:1}}>
              <TouchableOpacity style={styles.addbutton} onPress={()=>this.props.navigation.goBack()}>
                <Text style={{color:'#FFFFFF'}}>추가하기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        );
      }
}
export default Chatbot;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F4F4F4',
      justifyContent: 'center' //가로 정렬
    },
    title:{
        flex:1,
        flexDirection: 'row'
    },
    text:{
        marginTop:51,
        marginLeft:140,
        fontWeight: '400',
        fontSize: 18
    },
    contain:{
        flex:7,
        alignItems: 'center',
    },
    addbutton:{
      marginBottom:80,
      marginLeft:280,
      marginRight:25,
      marginTop:22,
      width:87,
      height:34,
      borderRadius:90,
      backgroundColor:'#000000',
      justifyContent: 'center',
      alignItems: 'center',
    },
    message:{
      flex:5,
      width:324,
      height:506,
      backgroundColor:'#FFFFFF',
      borderRadius:15,
      marginTop: 37,
      borderWidth:1,
      borderColor:'#ABABAB',
      alignItems: 'center'
    },
    date:{
      width:120,
      height:20,
      backgroundColor:'#FFFFFF',
      borderRadius:90,
      alignItems: 'center',
      justifyContent: 'center'
    },
    datetext:{
      fontSize:10,
      fontWeight:'400',
      color:'#747474'
    },
    messatext:{
      fontSize:15,
      fontWeight:'400',
      marginTop:18,
      marginRight:135
    },
    result:{
      width:266,
      height:162,
      borderWidth:1,
      borderColor:'#ABABAB',
      borderRadius:15,
      marginTop:7
    },
    checkbutton:{
      backgroundColor:'#F0F0F0',
      width: 227,
      height:34,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:90,
      marginTop:14
    },
    imgstyle:{
      width:284,
      height:207,
      marginTop:22,
      borderRadius:15
    }
  });
  