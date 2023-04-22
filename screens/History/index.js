import React, { Component, useState } from 'react';
import { Button, View, Text, StyleSheet, FlatList, TextInput, } from 'react-native';
import data from '../../data/doctotlist.json'
import Card from '../../components/card';
import { useNavigation } from '@react-navigation/native';

const HistoryScreen = () => {
    const [pasentData, setpasentdata] = useState(data);
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    const navigation = useNavigation();

    const handleSearch = (text) => {
        setSearchText(text);

        const newData = pasentData.filter(item =>
            item.doctorName.toLowerCase().includes(text.toLowerCase())
        );

        setFilteredData(newData);
    };

    const handleSort = () => {
        const sortedData = [...filteredData].sort((a, b) =>
          a.slotDate.localeCompare(b.slotDate)
        );
    
        setFilteredData(sortedData);
      };

    const renderItem = ({ item }) => {
        return (
            <Card
                image={item.photoPath}
                doctorName={item.doctorName}
                specialty={item.specialization[0]}
                consultationType={item.consultationType}
                slotDate={item.slotDate}
                slotTime={item.slotStartTime}
                clinicName={item.clinicName}
                clinicAddress={item.clinicAddress}
                slotEndTime={item.slotEndTime}
            />
        )
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Search by doctor name"
                value={searchText}
                onChangeText={handleSearch}
            />

            <Button title="Sort by date" onPress={handleSort} />
            <FlatList
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                initialNumToRender={20}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

//make this component available to the app
export default HistoryScreen;
