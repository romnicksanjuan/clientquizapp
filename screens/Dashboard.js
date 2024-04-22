import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Text,StyleSheet, Pressable,TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native';

const CreateQuiz = ({navigation}) => {
    const [activities,setActivities] = useState([])
    const [isPressed, setIsPressed] = useState(false)

    const isFocused = useIsFocused()

    useEffect(() =>{
        axios.get('http://192.168.0.65:3000/')
        .then(res => {console.log(res.data)
        setActivities(res.data)})
        .catch(err => console.log(err))
    },[isFocused])
  return (
    <View style={styles.Container}>
        {
            activities.map((act) => (
                <TouchableOpacity onPress={() => navigation.navigate('QuizForm')} style={styles.activitiesContainer} key={act._id}>
                    <Text style={{color:"white"}}>{act.quizName}</Text>
                </TouchableOpacity>
                
            ))
        }
        <Pressable style={[styles.button]} title='Create Quiz'  onPress={() => navigation.navigate('QuizNamePage')}>
            <Text style={{color:'white'}}>Create Quiz</Text>
        </Pressable>
    </View>
     
  );
};
const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'whitesmoke',
        alignItems:'center',
        width:'100%',
        position:'relative'
    },
    activitiesContainer:{
        alignItems:'center',
        justifyContent:'center',
        width:'90%',
        backgroundColor:'gray',
        marginVertical:2,
        height:80,
        borderRadius:5,
        borderWidth:1
    },
    button:{
        position:'absolute',
        backgroundColor:'gray',
        alignItems:'center',
        justifyContent:'center',
        bottom:50,
        right:50,
        height:80,
        width:80,
        borderRadius:80,
        padding:10,
        borderWidth:1
    },
    pressed:{
        backgroundColor:"whitesmoke"
    }
})
export default CreateQuiz;
