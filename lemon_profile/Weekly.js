import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'

class Weekly extends Component{

    state={
        Date: new Date(),
        level: 1,
    };

    render(){
        // const {navigation}=this.props;
        return(
            <View style={{ flex:1,backgroundColor:'#F4F4F4'}}>
                <View style={styles.top}>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={{marginTop:52, marginLeft:28}} onPress={()=>this.props.navigation.push('Main')}>
                            <AntDesign name="arrowleft" color='#000000' size={20}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginTop:52, marginLeft:91}} >
                            <AntDesign name="left" color='#353535' size={18}/>
                        </TouchableOpacity> 
                        <TouchableOpacity style={{marginTop:48, marginLeft:20}} >
                            <Text>{this.state.Date.getFullYear()}.{this.state.Date.getMonth()+1}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginTop:52, marginLeft:20}} >
                            <AntDesign name="right" color='#353535' size={18}/>
                        </TouchableOpacity>
                    </View>
                    <View>

                    </View>
                </View>
                <View style={{flex:3,alignItems:'center'}}>
                    <View style={{flexDirection: 'row',justifyContent: 'center'}}>
                        
                    </View>
                    <View style={styles.contain}>
                        <View style={{flexDirection: 'row'}} >
                            <TouchableOpacity style={[styles.vitaborder,{marginTop:32,marginLeft:14}]} onPress={()=>this.props.navigation.navigate('Vitamin',{vita:'비타민D'})}>
                                <Text style={styles.vitatext} >비타민D</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.vitabar}  onPress={()=>this.props.navigation.navigate('Vitamin',{vita:'비타민D'})} >
                                <TouchableOpacity style={styles.level}  onPress={()=>this.props.navigation.navigate('Vitamin',{vita:'비타민D'})}>
                                    <Text style={styles.leveltext}>level{this.state.level}</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>
            );
    }
}
export default Weekly;

const styles = StyleSheet.create({
    top:{
        flex:1,
        backgroundColor:'#FFFFFF',
    },
    contain:{
        backgroundColor:'#FFFF',
        height:479,
        width: 320,
        marginTop:100,
        borderRadius:14
    },
    vitaborder:{
        width:68,
        height:24.5,
        backgroundColor:'#EDEDED',
        borderRadius:8,
        alignItems:'center',
        justifyContent: 'center'
    },
    vitatext:{
       fontSize:13,
       fontWeight:'400' 
    },
    vitabar:{
        backgroundColor:'#BFBFBF',
        marginLeft:10,
        marginTop:34,
        width:210,
        height:20,
        borderRadius:90
    },
    level:{
        backgroundColor:'#1DAEFF',
        width:53,
        height:20,
        borderRadius:90,
        alignItems:'center',
        justifyContent: 'center'
    },
    leveltext:{
        fontSize:10,
        fontWeight:'700',
        color:'#FFFFFF'
    }
});
  