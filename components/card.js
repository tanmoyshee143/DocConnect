import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function Card(props) {
  const { image, doctorName, specialty, consultationType, slotDate, slotTime, clinicName, clinicAddress } = props;

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.doctorName}>{doctorName}</Text>
        <Text style={styles.specialty}>{specialty}</Text>
        <Text style={styles.consultationType}>{consultationType}</Text>
        <Text style={styles.slotDate}>{slotDate}</Text>
        <Text style={styles.slotTime}>{slotTime}</Text>
        <Text style={styles.clinicName}>{clinicName}</Text>
        <Text style={styles.clinicAddress}>{clinicAddress}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  content: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  specialty: {
    fontSize: 16,
    marginBottom: 5,
  },
  consultationType: {
    fontSize: 16,
    marginBottom: 5,
  },
  slotDate: {
    fontSize: 16,
    marginBottom: 5,
  },
  slotTime: {
    fontSize: 16,
    marginBottom: 5,
  },
  clinicName: {
    fontSize: 16,
    marginBottom: 5,
  },
  clinicAddress: {
    fontSize: 16,
  },
});

export default Card;