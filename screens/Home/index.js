import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import data from '../../data/doctotlist.json'

function HomeScreen() {
  const [selectedValue, setSelectedValue] = useState('All Consultations');
  const [pasentData, setpasentdata] = useState(data);
  const [showOptions, setShowOptions] = useState(false);
  const navigation = useNavigation();

  const handleOptionPress = (value) => {
    setSelectedValue(value);
    setShowOptions(false);
  };

  const handlePress = () => {
    const newData = pasentData.filter(item =>
      selectedValue == 'All Consultations' ? item : item.consultationStatus.includes(selectedValue)
  );
    navigation.navigate('consultantDetails', { cDetails: newData });
  };

  const options = [
    { label: 'Upcoming', value: 'UPCOMING' },
    { label: 'Prescription Pending', value: 'PRESCRIPTION_PENDING' },
    { label: 'Completed', value: 'COMPLETED' },
    { label: 'Canceled', value: 'CANCELED' },
    { label: 'All Consultations', value: 'All Consultations' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Consultation Type</Text>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setShowOptions(!showOptions)}
      >
        <Text style={styles.selectedOption}>{selectedValue}</Text>
        {showOptions && (
          <View style={styles.options}>
            {options.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={styles.option}
                onPress={() => handleOptionPress(option.value)}
              >
                <Text>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Go to details</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "green",

  },
  dropdown: {
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  selectedOption: {
    fontSize: 18,
  },
  options: {
    backgroundColor: 'white',
    marginTop: 5,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    maxHeight: 200,
    overflow: 'scroll',
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default HomeScreen;
