import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { ScrollView } from 'react-native-gesture-handler'
import register from '../helpers/register'

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState({})
  const [phone, setPhone] = useState({})
  const [id_type, setId_type] = useState({})
  const [id_number, setId_number] = useState({})
  const [referral_code, setReferral_code] = useState({})
  const [email, setEmail] = useState({})
  const [password, setPassword] = useState({})

  const onSignUpPressed = async () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    let result = await register(name, phone, email, id_type, id_number, referral_code, password);
    const passwordError = passwordValidator(password.value)
    if (result.code == 1) {

      navigation.reset({
        index: 0,
        routes: [{ name: 'Dashboard' }],
      })
    } else {
      Alert.alert(`Error Code: ${result.code}`, `${result.message}`);

    }

  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />

      <Header>Create Account</Header>

      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Phone"
        returnKeyType="next"
        value={phone.value}
        onChangeText={(text) => setPhone({ value: text, error: '' })}
        error={!!phone.error}
        errorText={phone.error}
      />
      <TextInput
        label="Id Type"
        returnKeyType="next"
        value={id_type.value}
        onChangeText={(text) => setId_type({ value: text, error: '' })}
        error={!!id_type.error}
        errorText={id_type.error}
      />
      <TextInput
        label="Id number"
        returnKeyType="next"
        value={id_number.value}
        onChangeText={(text) => setId_number({ value: text, error: '' })}
        error={!!id_number.error}
        errorText={id_number.error}
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>

    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
    alignSelf: 'center'
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})

export default RegisterScreen
