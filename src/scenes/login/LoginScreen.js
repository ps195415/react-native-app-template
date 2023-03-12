import React, { useEffect, useState } from 'react'
import { View, Image, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Surface, TextInput, Title, Text } from 'react-native-paper'
import { SignIn } from '../../store/reducers';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const token = useSelector((state) => state.authToken.token);

    const dispatch = useDispatch();

    const loginhandel = () => {
        console.log(token)
        if (email != null && password != null) {
            dispatch(SignIn(email, password))
        }

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Surface style={styles.box}>
                <View>
                    <TextInput
                        label="Username"
                        mode="outlined"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput
                        label="Password"
                        mode="outlined"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>
                <Button
                    mode="contained"
                    style={{ marginTop: 20 }}
                    onPress={loginhandel}>
                    Submit
                </Button>
            </Surface>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 28,
        backgroundColor: 'white',
    },
    box: {
        borderRadius: 10,
        elevation: 5,
        padding: 20,
        height: 250,
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        color: 'green',
        marginBottom: 20,
        fontWeight: 'bold'
    }
})

export default LoginScreen