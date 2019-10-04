import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Icon, Text, Content, Container } from 'native-base';

export default class TodoList extends React.Component {
    render() {
        const { handleDelete, handleClearList, todos } = this.props;
        return (
            <Container>
                <Content>
                    {todos.map((item, index) =>
                        <View style={styles.container}>
                            <Text style={styles.todoText}>{item}</Text>
                            <Button danger onPress={() => handleDelete(index)}>
                                <Icon name='md-trash' />
                            </Button>
                        </View>
                    )}
                    {todos.length > 0 ?
                        <Button
                            block info
                            style={styles.button}
                            onPress={() => handleClearList()}
                        >
                            <Text style={styles.btnText}>Clear List</Text>
                        </Button>
                        : null
                    }
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'lightgray',
        borderWidth: 0.5,
        display: 'flex',
        margin: 10
    },
    todoText: {
        marginLeft: 5
    },
    button: {
        margin: 15,
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    }
})