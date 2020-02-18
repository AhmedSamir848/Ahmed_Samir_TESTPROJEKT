/* Libraries That Needed */
import React, { useReducer, useCallback } from 'react';
import { View, Text, SafeAreaView, ImageBackground, ScrollView, Switch } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Button from "react-native-button";

import colors from '../../constants/colors';
import Input from '../../components/UI/Input';
import styles from './styles';
/****************************/

// Constant Used For Form Reducer
const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const Profile = props => {
    /*
        Form Reducer Is An Internal Reducer That Handle Only Profile Form Inputes 
        Like Save And Update The Value Of User Name Or Location .    
    */
    const formReducer = (state, action) => {
        if (action.type === FORM_INPUT_UPDATE) {
            const updatedValues = {
                ...state.inputValues,
                [action.input]: action.value
            };
            const updatedValidities = {
                ...state.inputValidities,
                [action.input]: action.isValid
            };
            let updatedFormIsValid = true;
            for (const key in updatedValidities) {
                updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
            }
            return {
                formIsValid: updatedFormIsValid,
                inputValidities: updatedValidities,
                inputValues: updatedValues
            };
        }
        return state;
    };

    // Form State Saves Form Inputes Values
    const [FormState, DispatchFormState] = useReducer(formReducer, {
        inputValues: {
            name: '',
            location: '',
            email: '',
            contactDetails: false,
            enablelocation: false
        },
        inputValidities: {
            name: false,
            location: false,
            email: false,
            contactDetails: true,
            enablelocation: true
        },
        signupFormIsValid: false
    });

    // The Action That Will Fired When Pree Update Btn 
    const submitProfile = async () => {
        console.log(FormState.inputValues.name + " = " + FormState.inputValues.location + " = " + FormState.inputValues.email + " = " + FormState.inputValues.contactDetails + " = " + FormState.inputValues.enablelocation);
    };

    // handle text Input  Changes, It Saved The Values To Form State
    const inputChangeHandler = useCallback(
        (inputIdentifier, inputValue, inputValidity) => {
            DispatchFormState({
                type: FORM_INPUT_UPDATE,
                value: inputValue,
                isValid: inputValidity,
                input: inputIdentifier
            })
        },
        [DispatchFormState]
    );

    //View 
    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Text h5 style={styles.imageTitle}>My Profile</Text>
                    <View style={styles.image}>
                        <ImageBackground
                            style={styles.imageBackground}
                            source={{ uri: 'https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg' }}
                        >
                            <View style={styles.imageAddBtnCont}>
                                <AntDesign
                                    name="plus"
                                    size={20}
                                    color={colors.primary}
                                    style={styles.plusIcon}
                                />
                            </View>
                        </ImageBackground>
                    </View>
                </View>
                <View style={styles.inputCont}>
                    <Input
                        id="name"
                        label="Name"
                        errorText="Please enter a valid Name!"
                        keyboardType="default"
                        autoCapitalize="sentences"
                        autoCorrect
                        returnKeyType="next"
                        onInputChange={inputChangeHandler}
                        initialValue={''}
                        required
                    />
                    <Input
                        id="location"
                        label="Location"
                        errorText="Please enter a valid Location!"
                        keyboardType="default"
                        autoCapitalize="sentences"
                        autoCorrect
                        returnKeyType="next"
                        onInputChange={inputChangeHandler}
                        initialValue={''}
                        required
                    />
                    <Input
                        id="email"
                        label="E-mail"
                        errorText="Please enter a valid E-mail!"
                        email
                        keyboardType="email-address"
                        returnKeyType="next"
                        onInputChange={inputChangeHandler}
                        initialValue={''}
                        required
                    />
                    <View style={styles.switchCont}>
                        <Text style={styles.switchTitle}>Contact Details</Text>
                        <Switch
                            value={FormState.inputValues.contactDetails}
                            onValueChange={value => DispatchFormState({
                                type: FORM_INPUT_UPDATE,
                                value: value,
                                isValid: true,
                                input: 'contactDetails'
                            })}
                            thumbColor="white"
                            trackColor={{ true: colors.accent, false: '#c2c2c2' }}
                        />
                    </View>
                    <View style={styles.switchCont}>
                        <Text style={styles.switchTitle}>Enable Location</Text>
                        <Switch
                            value={FormState.inputValues.enablelocation}
                            onValueChange={value => DispatchFormState({
                                type: FORM_INPUT_UPDATE,
                                value: value,
                                isValid: true,
                                input: 'enablelocation'
                            })}
                            thumbColor="white"
                            trackColor={{ true: colors.accent, false: '#c2c2c2' }}
                        />
                    </View>
                    <Button
                        containerStyle={styles.loginContainer}
                        style={styles.loginText}
                        onPress={submitProfile}
                    >Update</Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export { Profile };
