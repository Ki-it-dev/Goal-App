import { useState } from 'react';

import {
    StyleSheet,
    TextInput,
    View,
    Button,
    Modal,
    Image
} from 'react-native';

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        width: '100%',
        padding: 16,
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 8,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    }
});

export default function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    const goalInputHandler = (e) => {
        setEnteredGoalText(e)
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/goal.png')}
                />
                <TextInput style={styles.textInput}
                    placeholder='Your course goal!'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title='Add Goal'
                            onPress={addGoalHandler}
                            color="#b180f0"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='Cancel'
                            onPress={props.onCancel}
                            color="#f31282"
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}