import React from 'react';
import { View, Text, Image, StyleSheet ,TouchableOpacity} from 'react-native';

function Card(props) {
  const { image, doctorName, specialty, consultationType, slotDate, slotTime, clinicName, clinicAddress, slotEndTime } = props;

  return (
    <View style={styles.container}>
      <View style={{flex:1, flexDirection: 'row'}}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        {doctorName && <Text style={styles.doctorName}>{doctorName}</Text>}
        {specialty && <Text style={styles.specialty}>{specialty}</Text>}
        {consultationType && <Text style={styles.consultationType}>{consultationType}</Text>}
        {slotDate && <Text style={styles.slotDate}>{slotDate}</Text>}
        {slotTime && <Text style={styles.slotTime}>{slotTime}-{slotEndTime}</Text>}
        {clinicName && <Text style={styles.clinicName}>{clinicName}</Text>}
        {clinicAddress && <Text style={styles.clinicAddress}>{clinicAddress}</Text>}
      </View>
      </View>
      <View style={styles.cardFooter}>
      <TouchableOpacity style={styles.footerButton}>
        <Text style={styles.buttonText}>Prescription</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerButton}>
        <Text style={styles.buttonText}>Invoices</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerButton}>
        <Text style={styles.buttonText}>History</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerButton}>
        <Text style={styles.buttonText}>Experience</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
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
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginTop:10
  },
  footerButton: {
    backgroundColor: '#eee',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  footerButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Card;