import React, { Component } from 'react';
import { StyleSheet, Text, View,ScrollView, Image, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { ProgressBar } from 'react-native-paper';
import { BarChart } from 'react-native-chart-kit';

class Main extends Component{
    state={
        kcal: 1578,
        Date: new Date(),
        progressvalue: 0.5 //value: 0~1
    };

    render(){
        const {navigation}=this.props;
        const graphdata={
            labels:[this.state.Date.getDate()-5,this.state.Date.getDate()-4,this.state.Date.getDate()-3,this.state.Date.getDate()-2,this.state.Date.getDate()-1,this.state.Date.getDate()],
            datasets:[
                {
                    data:[1500, 1450, 1000, 800, 1200, this.state.kcal],
                    colors:[
                        (opacity=1)=>'#CFCFCF',
                        (opacity=1)=>'#CFCFCF',
                        (opacity=1)=>'#CFCFCF',
                        (opacity=1)=>'#CFCFCF',
                        (opacity=1)=>'#CFCFCF',
                        (opacity=1)=>'#1DAEFF',

                    ]
                }
            ]
        }
        const chartConfig={ 
            backgroundColor: '#FFFFFF',
            backgroundGradientFrom: '#FFFFFF',
            backgroundGradientTo: '#FFFFFF',
            barRadius:15,
            barpersentagge:0.1,
            decimalPlaces: 0,
            color: (opacity = 1) => '#e3e3e3',
            labelColor:(opacity=1)=>'#CFCFCF',
       };
        return(
            <View style={{ backgroundColor:'#F4F4F4'}}>
                <ScrollView>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.date}>{this.state.Date.getMonth()+1}월{this.state.Date.getDate()}일</Text>
                        <TouchableOpacity style={{marginTop:81, marginLeft:11}}>
                            <AntDesign name="rightcircle" color='#000000' size={26}/>
                        </TouchableOpacity>
                    </View>
                    <Image source={require('./assets/images/bar.png')} style={styles.image_bar}/>
                    <View style={styles.info}>
                        <Image source={require('./assets/images/man.png')} style={styles.image_man}/>
                        <View style={[styles.list,styles.border]}>
                            <Text style={styles.infotext}>필요 영양소</Text>
                            <TouchableOpacity style={{ marginLeft:50,marginTop:132}}> 
                                {/* list 넣으면 top 값 달라짐  */}
                                <Text style={styles.infoall}> 모든 영양소 보기 </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.infograph}>
                        {/* gradient x */}
                        <ProgressBar progress={this.state.progressvalue} color='#B9BFEC' style={styles.progress}/>
                        <Text style={styles.kcal}>{this.state.kcal} Kcal</Text>
                    </View>
                    <TouchableOpacity style={[styles.graph,styles.border,styles.position]} onPress={()=>this.props.navigation.navigate('Weekly')}>
                        <BarChart data={graphdata} width={340} height={165} yAxisSuffix=" kcal" withCustomBarColorFromData={true} flatColor={true} fromZero={true}
                            showBarTops={false} chartConfig={chartConfig} style={{ marginVertical: 8, borderRadius: 16,}}
                        />
                    </TouchableOpacity>
                    <View style={[styles.food,styles.border]}>
                        <Text style={styles.foodfont}>최근 섭취 식품</Text>
                        <TouchableOpacity style={styles.plusbutton}>
                            <Text style={{color:'white', fontSize:14, fontWeight:'400'}}>더보기</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.Nutrients,styles.border]}>
                        <Text style={styles.foodfont}>투데이 복용 영양제</Text>
                        <TouchableOpacity style={styles.plusbutton}>
                            <Text style={{color:'white', fontSize:14, fontWeight:'400'}}>추가</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            );
    }
}
export default Main;

const styles = StyleSheet.create({
    border:{
        borderWidth:1,
        borderRadius:14,
        borderColor:'#ABABAB'
    },
    date:{
        marginTop:72,
        marginLeft:43,
        fontSize:34,
        fontWeight:'700'
    },
    image_bar:{
        resizeMode:'contain',
        marginTop:20,
        width: '100%'
    },
    info:{
        marginTop:10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infotext:{
        fontSize:16,
        fontWeight:'700',
        marginLeft:17,
        marginTop:21
    },
    infoall:{
        color:'#999999',
        fontSize:10,
        fontWeight:'400',
    },
    image_man:{
        resizeMode:'contain',
        marginTop: 40,
        marginLeft: 55
    },
    list:{
        backgroundColor:'#FFFFFF',
        marginTop:40,
        marginRight:28,
        width:175,
        height:197,
    },
    infograph:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    progress:{
        marginLeft:30,
        marginTop:21,
        width:224,
        height:20,
        borderRadius:90,
        backgroundColor:'#CFCFCF'
    },
    kcal:{
        marginRight:40,
        marginTop:17,
        fontSize:18,
        fontWeight:'700'
    },
    graph:{
        backgroundColor:'#FFFFFF',
        marginTop:20,
        marginLeft:28,
        marginRight:28,
        height:180
    },
    food:{
        backgroundColor:'#FFFFFF',
        marginTop:19,
        marginLeft:27,
        marginRight:28,
        height:260,
        flexDirection: 'row',
        justifyContent: 'space-between' //양쪽정렬
    },
    foodfont:{
        fontSize:16,
        fontWeight:'700',
        marginLeft:25,
        marginTop:18
    },
    plusbutton:{
        marginTop:14,
        backgroundColor:"#000000",
        width:59,
        height:28,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:90,
        marginRight:15
    },
    Nutrients:{
        backgroundColor:'#FFFFFF',
        marginTop:22,
        marginLeft:27,
        marginRight:28,
        marginBottom:10,
        height:199,
        flexDirection: 'row',
        justifyContent: 'space-between' //양쪽정렬
    },
    position:{
        alignItems:'center',
        justifyContent:'center',
    }
  });
  