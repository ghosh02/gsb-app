import {
    Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Carousel from '../components/Carousel';
import countryFlag from "../assets/india.png"

import appleLogo from "../assets/apple.png"
import googleLogo from "../assets/google.png"
import fbLogo from "../assets/fb.png"

const SignUp = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <View style={{position: 'relative', height: '100%'}}>
        <Carousel />
        <View style={styles.bottomContainer}>
          <Text style={styles.sectionTitle}>Phone Number</Text>
          <View style={styles.inputContainer}>
            {/* Country Flag Section */}
            <View style={styles.flagContainer}>
              {/* Your country flag component goes here */}
              <Image source={countryFlag}  />
            </View>
            {/* Phone Number Input Section */}
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
            />
          </View>
          {/* Button */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
          {/* Logos and Text */}
          <Text style={styles.footerText}>On Connect With</Text>
          <View style={styles.logosContainer}>
            {/* Three logos go here */}
            <Image source={googleLogo} style={styles.logo} />
            <Image source={appleLogo} style={styles.logo} />
            <Image source={fbLogo} style={styles.logo} />
          </View>
          <Text style={styles.footerText}>By continuing you agree to the <Text style={{color: '#FFA800', fontWeight: "bold"}}>Term of service</Text> and <Text style={{color: '#FFA800', fontWeight: "bold"}}>Policies</Text></Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },

  bottomContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    height: 310,
    width: '100%',
    bottom: 0,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: "black",
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingLeft: 20,
  },
  flagContainer: {
    marginRight: 10,
    // Add styles for your country flag container
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 0,
    paddingHorizontal: 10,
    
  },
  button: {
    backgroundColor: '#F6AF24',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logosContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 10,
  },
  logo: {
    width: 24,
    height: 25,
    // Add other styles for your logos
  },
  footerText: {
    textAlign: 'center',
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
});
