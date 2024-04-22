import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';

const QuizForm = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']); // 4 empty options
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleSubmit = async () => {
    const data = {
      question,
      options,
      correctAnswer,
    };

    try {
      const response = await axios.post('', data);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View>
      <Text>Quiz Question:</Text>
      <TextInput
        placeholder="Enter question"
        value={question}
        onChangeText={setQuestion}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <Text>Options:</Text>
      {options.map((option, index) => (
        <TextInput
          key={index}
          placeholder={`Option ${index + 1}`}
          value={option}
          onChangeText={(value) => handleOptionChange(index, value)}
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
        />
      ))}

      <Text>Correct Answer:</Text>
      <TextInput
        placeholder="Enter correct answer"
        value={correctAnswer}
        onChangeText={setCorrectAnswer}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default QuizForm;
