import React from "react";
import { SafeAreaView, ScrollView, Text, View, StyleSheet, Image, Button, TextInput, ViewBase } from "react-native";
import {FontAwesome} from "@expo/vector-icons"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const tab = createMaterialBottomTabNavigator();


const App = () =>
{
    return (
        <NavigationContainer>
            <Footer>
                <ScrollView>
                    {Screen1()}
                </ScrollView>
            </Footer>
        </NavigationContainer>
    );
}

const Footer = () =>
{
    return(
        <tab.Navigator >
            <tab.Screen options={{
                headershown:false,
                tabBarLabel: '',
              tabBarIcon: () => (
                <Image source={require("./image/iconMenuList.png")}/>
              ),
            }} name="Home" component={Screen1}/>
            <tab.Screen options={{
                tabBarLabel: '',
              tabBarIcon: () => (
                <Image source={require("./image/iconMenuHeart.png")}/>
              ),
            }} name="Like" component={Save}/>
            <tab.Screen options={{
                tabBarLabel: '',
              tabBarIcon: () => (
                <View style={{ 
                bottom: 20, // space from bottombar
                height: 70,
                width: 70,
                borderRadius: 30,
              }}>
                    <Image style={{position:'absolute',height:70,width: 70,}} source={require("./image/iconAdd.png")}/>
                </View>
              ),
            }} name="Add" component={Add}/>
            <tab.Screen options={{
                tabBarLabel: '',
              tabBarIcon: () => (
                <Image source={require("./image/iconMenuChat.png")}/>
              ),
            }} name="Comment" component={Cm}/>
            <tab.Screen options={{
                tabBarLabel: '',
              tabBarIcon: () => (
                <Image source={require("./image/iconMenuUser.png")}/>
              ),
            }} name="profile" component={Profile}/>

        </tab.Navigator>
    );
}

const Screen1 = () =>
{
    const Nexttoyou = () =>
    {
        return nexttoyou.map((item, index) =>(
            <View style={StyleSheet.create({backgroundColor:'white',borderRadius:12,width: 250,marginRight: 10,})} key={`item_${index}`}>
                <View style={{marginTop: 10,}}>
                    <Image style={{marginLeft:10,}} source={item.image}/>
                    <View style={{backgroundColor:'#FFFFFF',width: 140,height:26,borderRadius: 18,opacity:0.3,alignItems:'center',justifyContent:"center",position:'absolute',
                        bottom: 10,left: 16,}}></View>
                    <Image style={{position:'absolute', padding:1,
                        bottom: 13,left: 20,}} source={item.imageavatar}/>
                    <Text style={{position:'absolute',bottom: 13,color: '#ffffff', left: 44,}}>{item.name}</Text>
                    <Text style={{position:'absolute',top: 13,color: '#ffffff', left: 23,}}>{item.day}</Text>
                    <Image style={{position:'absolute',bottom: 13,left: 130,}} source={item.imageicon3}/>
                    <Image style={{position:'absolute',top: 10,right: 10,}} source={item.imageicon1}/>
                </View>
                <View style={{flexDirection:'row',marginLeft:10,marginTop:10,width: 220,justifyContent:'space-between'}}>
                    <Text style={{width: '48%',fontWeight: 500,}}>{item.title}</Text>
                    <Image source={item.imageicon2}/>
                </View>
                
            </View>
        ));
    }

    return (
        <ScrollView style={{marginLeft: 18,marginRight: 18,}}>
            <View style={{marginTop: 40,}}>
                <View style={{ flexDirection:'row',width:'100%'}}>
                    <TextInput style={{backgroundColor: 'white',borderRadius: 8,marginTop: 8, width: '70%',marginLeft: 6,height: 45,paddingLeft: 35,}} placeholder="Search" /> 
                    <Image style={{position: 'absolute',marginLeft: 14.5,marginTop:16,}} source={require("./image/iconSearch.png")}/>
                    <Image style={{marginRight: 0,}} source={require("./image/Icon_Filter.png")}/>
                </View>
            </View>
            <View>
                <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%', height: 50,alignItems: 'center'}}>
                    <Text style={{fontWeight:'bold', fontSize: 27.4,}}>Next to you</Text>
                    <Text Style={{}} onPress={()=>Screen2()}> On the map 
                        <Image source={require("./image/IconArrow.png")}/>
                    </Text>
                </View>
            </View>
            <View style={{flexDirection: 'row',}}>
                {Nexttoyou()}
            </View>
            <View>
                <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%', height: 50,alignItems: 'center'}}>
                    <Text style={{fontWeight:'bold', fontSize: 27.4,}}>Categories</Text>
                    <Text > See all
                        <Image Style={{ marginLeft: 10,}} source={require("./image/IconArrow.png")}/>
                    </Text>
                </View>
                <View style={{backgroundColor:'white',width: '100%',height: 62, borderRadius: 14.5,flexDirection:'row'}}>
                    <Image style={{left:10,top: 6,}} source={require("./image/Icon_Moving.png")}/>
                    <View style={{marginLeft: 40,marginTop: 15,}}>
                        <Text>Moving and things</Text>
                        <Text style={{fontSize: 10,color:'#dedddf'}}>24 tasks</Text>
                    </View>
                    <Image style={{position:'absolute',top: 25,right: 20,}} source={require('./image/iconMore.png')}/>
                </View>
                <View style={{backgroundColor:'white',width: '100%',height: 62, borderRadius: 14.5,flexDirection:'row',marginTop: 30,}}>
                    <Image style={{left:10,top: 6,}} source={require("./image/Icon_House.png")}/>
                    <View style={{marginLeft: 40,marginTop: 15,}}>
                        <Text>Help around the house</Text>
                        <Text style={{fontSize: 10,color:'#dedddf'}}>5 tasks</Text>
                    </View>
                    <Image style={{position:'absolute',top: 25,right: 20,}} source={require('./image/iconMore.png')}/>
                </View>
            </View>
        </ScrollView>
        
    );
}

const nexttoyou = [
    {
        image: require("./image/imgDogCard.png"),
        imageicon1:  require("./image/Icon_Like.png"),
        imageicon2: require("./image/Icon_Chat.png"),
        imageicon3: require("./image/Icon_Verify.png"),
        imageavatar: require("./image/Ava.png"),
        day:'Until 26.09',
        title: 'Go for a walk and feed the dog',
        name: 'Anderson G.'
    },
    {
        image: require("./image/imgDogCard.png"),
        imageicon1:  require("./image/Icon_Like.png"),
        imageicon2: require("./image/Icon_Chat.png"),
        imageicon3: require("./image/Icon_Verify.png"),
        imageavatar: require("./image/Ava2.png"),
        day:'Until 26.09',
        title: 'Water the flowers once a week',
        name: 'Amelia A.'
    },
    {
        image: require("./image/imgDogCard.png"),
        imageicon1:  require("./image/Icon_Like.png"),
        imageicon2: require("./image/Icon_Chat.png"),
        imageicon3: require("./image/Icon_Verify.png"),
        imageavatar: require("./image/Ava.png"),
        day:'Until 26.09',
        title: 'Feed your cat twice a day',
        name: 'Benjamin O.'
    },
]

const Add =() =>
{
    return (
        <ScrollView>
            <View style={{marginTop: 300,marginLeft: 100,}}>
                <Text>
                    add
                </Text>
            </View>
        </ScrollView>
    );
}

const Save =() =>
{
    return (
        <ScrollView>
            <View style={{marginTop: 300,marginLeft: 100,}}>
                <Text>
                    save
                </Text>
            </View>
        </ScrollView>
    );
}

const Cm =() =>
{
    return (
        <ScrollView>
            <View style={{marginTop: 300,marginLeft: 100,}}>
                <Text>
                    comment
                </Text>
            </View>
        </ScrollView>
    );
}

const Profile =() =>
{
    return (
        <ScrollView>
            <View style={{marginTop: 300,marginLeft: 100,}}>
                <Text>
                    profile
                </Text>
            </View>
        </ScrollView>
    );
}

const Screen2 = () =>
{
    return(
        <ScrollView>

        </ScrollView>
    );
}

export default App;