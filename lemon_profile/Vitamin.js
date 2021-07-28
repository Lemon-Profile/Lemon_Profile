import React from 'react';
import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'

export default function Vitamin({navigation,route}){
    return(
        <View style={{ backgroundColor:'#F4F4F4'}}>
            <ScrollView>
                <View>
                    <TouchableOpacity style={{marginTop:52, marginLeft:28}} onPress={()=>navigation.goBack()}>
                        <AntDesign name="arrowleft" color='#000000' size={20}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>{route.params.vita}</Text>
                </View>
                <Image source={require('./assets/images/bar.png')} style={styles.image_bar}/>
                <View style={{alignItems:'center', marginBottom:10}}>
                    <View style={styles.group}>
                        <Text style={styles.text}>그룹 비교</Text>
                    </View>
                    <View style={styles.recommend}>
                        <Text style={styles.text}>추천</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
        );
}


const styles = StyleSheet.create({
    title:{
        marginTop:27,
        marginLeft:43,
        fontSize:34,
        fontWeight:'700'
    },
    image_bar:{
        resizeMode:'contain',
        marginTop:20,
        width: '100%'
    },
    group:{
        width:320,
        height:341,
        backgroundColor:'#FFFFFF',
        borderRadius:15,
        marginTop:25
    },
    recommend:{
        width:320,
        height:393,
        backgroundColor:'#FFFFFF',
        borderRadius:15,
        marginTop:27
    },
    text:{
        fontSize:18,
        fontWeight:'700',
        marginLeft:23,
        marginTop:21
    }
});
  