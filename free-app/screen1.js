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
            <View style={StyleSheet.create({width:'100%',flexDirection:'row',})} key={`item_${index}`}>
                <View>
                    <Image/>
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
                    <Text Style={{}} onPress={()=> screen2()}> On the map 
                        <Image source={require("./image/IconArrow.png")}/>
                    </Text>
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
        imageavatar: require("./image/Ava.png"),
        day:'Until 26.09',
        title: 'Go for a walk and feed the dog',
    },
    {
        image: require("./image/imgDogCard.png"),
        imageicon1:  require("./image/Icon_Like.png"),
        imageicon2: require("./image/Icon_Chat.png"),
        imageavatar: require("./image/Ava.png"),
        day:'Until 26.09',
        title: 'Go for a walk and feed the dog',
    },
    {
        image: require("./image/imgDogCard.png"),
        imageicon1:  require("./image/Icon_Like.png"),
        imageicon2: require("./image/Icon_Chat.png"),
        imageavatar: require("./image/Ava.png"),
        day:'Until 26.09',
        title: 'Go for a walk and feed the dog',
    },
]

const Add =() =>
{
    return (
        <ScrollView>
            <View>
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
            <View>
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
            <View>
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
            <View>
                <Text>
                    profile
                </Text>
            </View>
        </ScrollView>
    );
}


export default App;