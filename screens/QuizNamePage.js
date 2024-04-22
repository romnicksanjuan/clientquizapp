import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';

const QuizNamePage = ({navigation}) => {
    const [quizName, setQuizName] = useState('');

    const handleSubmit = () => {
        axios.post('http://192.168.0.65:3000/create-quiz', { quizName })
            .then(res => {
                console.log(res.data)
                if(res.data.success){
                    navigation.navigate('Dashboard')
                }
            })
            .catch(err => console.log(err))
    };

    return (
        <View>
            <Text>Quiz Name:</Text>
            <TextInput
                placeholder="Enter Quiz Name"
                value={quizName}
                onChangeText={setQuizName}
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

export default QuizNamePage
