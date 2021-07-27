import React, { useState, useEffect }  from 'react';
import { StyleSheet,View,TouchableOpacity,Text} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useFocusEffect } from '@react-navigation/native';

export default function Came({navigation,route}){
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  useFocusEffect(
    React.useCallback(()=>{
      pickImage();
    },[])
  );

  //expo 공식 문서:https://docs.expo.io/versions/latest/sdk/imagepicker/
  //내부 앨범 launchImageLibrary, 카메라 launchCameraAsync
  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true, //이미지 편집 여부
      aspect: [4, 3], //Android만 적용,편집 크기 
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{marginTop:15}}>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Chatbot',{uri:image})} >
          <Text style={styles.send}>send </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  button:{
    width:87,
    height:34,
    borderRadius:90,
    backgroundColor:'#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  send:{
    fontWeight: '400',
    fontSize: 18,
    color:'#FFFFFF'
  }
  });
  