import React, { Component, useState } from 'react';
import { Button, View, Text, StyleSheet, FlatList, TouchableOpacity,Image } from 'react-native';
import Card from '../../components/card';
import { useNavigation } from '@react-navigation/native';

const consultantDetails = ({ route }) => {
    const [selectedButton, setSelectedButton] = useState('');

    const { cDetails } = route.params;
    console.log(cDetails)
    const [pasentData, setpasentdata] = useState(cDetails);
    const navigation = useNavigation();

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

    const handleBackPress = () => {
        navigation.goBack();
    };

    const buttonPress = (type) => {
        if (type == 'button2') {
            const newData = cDetails.filter(item =>
                item.consultationType.includes("PHYSICAL")
            );
            setpasentdata(newData)
            setSelectedButton('button2')
        }
        else {
            const newData = cDetails.filter(item => {
                if(item.consultationType.includes("PHONE_CALL")){
                    return item.consultationType.includes("PHONE_CALL")
                }
                else if(item.consultationType.includes("VIDEO_CALL")){
                    return item.consultationType.includes("VIDEO_CALL")
                }
            }
                
            );
            setpasentdata(newData)
            setSelectedButton('button1')
        }

    };

    return (
        <View style={styles.container}>
            <View style={{height:50,backgroundColor:"#fff"}}>
            <TouchableOpacity style={{height:50,width:60,justifyContent:"center",alignItems:'center'}}
            onPress={()=> handleBackPress()}
            >
            <Image source={require('../../assets/arrow_back_icon.png')} style={{width:25,height:25}} />
            </TouchableOpacity>
            </View>
            <View style={styles.switcher}>
                <TouchableOpacity
                    style={[
                        styles.button,
                        selectedButton === 'button1' && styles.selectedButton,
                    ]}
                    onPress={() => buttonPress('button1')}
                >
                    <Text
                        style={[
                            styles.buttonText,
                            selectedButton === 'button1' && styles.selectedButtonText,
                        ]}
                    >
                        E-Consultation
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.button,
                        selectedButton === 'button2' && styles.selectedButton,
                    ]}
                    onPress={() => buttonPress('button2')}
                >
                    <Text
                        style={[
                            styles.buttonText,
                            selectedButton === 'button2' && styles.selectedButtonText,
                        ]}
                    >
                        P-Consultation
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={pasentData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                initialNumToRender={20}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    switcher: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        padding: 5
    },
    button: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#b3e5fc',
    },
    selectedButton: {
        backgroundColor: '#039be5',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    selectedButtonText: {
        color: '#fff',
    },
});

export default consultantDetails;
