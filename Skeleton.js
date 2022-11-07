import React, { useEffect } from 'react';
import { StyleSheet, View, Dimensions, Animated } from 'react-native';



export default function Skeleton({ visible, children }) {
    const AnimatedValue = new Animated.Value(0);

    useEffect(() => {
        circleAnimated();

        return () => circleAnimated();
    }, [])

    const circleAnimated = () => {
        AnimatedValue.setValue(0)
        Animated.timing(
            AnimatedValue,
            {
                toValue: 1,
                duration: 350,
                useNativeDriver: false
            }
        ).start(() => {
            setTimeout(() => {
                circleAnimated()
            }, 1000);
        })
    }

    const translateX = AnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-30, 170]
    });

    if(visible) {
        return (
            <View style={styles.conteinerProfile}>
                <View style={styles.conteinerUpPage}>
                    <View style={[styles.profilePictureCustomize, { overflow: 'hidden' }]}>
                        <Animated.View
                            style={{
                                width: '30%',
                                height: '100%',
                                opacity: 0.5,
                                backgroundColor: '#E3E2E2',
                                transform: [{ translateX: translateX }]
                            }}
                        >
    
                        </Animated.View>
                    </View>
                </View>
    
                <View style={[styles.nameProfile, , { overflow: 'hidden' }]}>
                    <Animated.View
                        style={{
                            width: '40%',
                            height: '100%',
                            opacity: 0.5,
                            backgroundColor: '#E3E2E2',
                            transform: [{ translateX: translateX }]
                        }}
                    >
                    </Animated.View>
                </View>
                <View style={[styles.nicknameProfile, , { overflow: 'hidden' }]}>
                    <Animated.View
                        style={{
                            width: '40%',
                            height: '100%',
                            opacity: 0.5,
                            backgroundColor: '#E3E2E2',
                            transform: [{ translateX: translateX }]
                        }}
                    >
    
                    </Animated.View>
                </View>
    
                <View>
                    <View style={[styles.individualButton, { borderTopStartRadius: 20, borderTopEndRadius: 20, backgroundColor: '#E3E2E2', overflow: 'hidden' }]} >
                        <View style={styles.iconButton}>
                            <Animated.View
                                style={{
                                    width: '40%',
                                    height: '100%',
                                    opacity: 0.5,
                                    backgroundColor: '#E3E2E2',
                                    transform: [{ translateX: translateX }]
                                }}
                            >
    
                            </Animated.View>
                        </View>
                        <View>
                            <View style={styles.textButtons}>
                                <Animated.View
                                    style={{
                                        width: '40%',
                                        height: '100%',
                                        opacity: 0.5,
                                        backgroundColor: '#E3E2E2',
                                        transform: [{ translateX: translateX }]
                                    }}
                                >
    
                                </Animated.View>
                            </View>
                            <View style={styles.subtitleButton}>
                                <Animated.View
                                    style={{
                                        width: '40%',
                                        height: '100%',
                                        opacity: 0.5,
                                        backgroundColor: '#E3E2E2',
                                        transform: [{ translateX: translateX }]
                                    }}
                                >
    
                                </Animated.View>
                            </View>
                        </View>
                        <View style={[styles.iconArrowButton, { marginLeft: 108 }]}></View>
                    </View>
    
                    <View style={[styles.individualButton, { backgroundColor: '#E3E2E2', overflow: 'hidden' }]}>
                        <View style={styles.iconButton}>
                            <Animated.View
                                style={{
                                    width: '40%',
                                    height: '100%',
                                    opacity: 0.5,
                                    backgroundColor: '#E3E2E2',
                                    transform: [{ translateX: translateX }]
                                }}
                            >
    
                            </Animated.View>
                        </View>
                        <View>
                            <View style={styles.textButtons}>
                                <Animated.View
                                    style={{
                                        width: '40%',
                                        height: '100%',
                                        opacity: 0.5,
                                        backgroundColor: '#E3E2E2',
                                        transform: [{ translateX: translateX }]
                                    }}
                                >
    
                                </Animated.View>
                            </View>
                            <View style={styles.subtitleButton}>
                                <Animated.View
                                    style={{
                                        width: '40%',
                                        height: '100%',
                                        opacity: 0.5,
                                        backgroundColor: '#E3E2E2',
                                        transform: [{ translateX: translateX }]
                                    }}
                                >
    
                                </Animated.View>
                            </View>
                        </View>
                        <View style={[styles.iconArrowButton, { marginLeft: 55 }]}></View>
                    </View>
    
                    <View style={[styles.individualButton, { backgroundColor: '#E3E2E2', overflow: 'hidden' }]}>
                        <View style={styles.iconButton}>
                            <Animated.View
                                style={{
                                    width: '40%',
                                    height: '100%',
                                    opacity: 0.5,
                                    backgroundColor: '#E3E2E2',
                                    transform: [{ translateX: translateX }]
                                }}
                            >
    
                            </Animated.View>
                        </View>
                        <View>
                            <View style={styles.textButtons}>
                                <Animated.View
                                    style={{
                                        width: '40%',
                                        height: '100%',
                                        opacity: 0.5,
                                        backgroundColor: '#E3E2E2',
                                        transform: [{ translateX: translateX }]
                                    }}
                                >
    
                                </Animated.View>
                            </View>
                            <View style={styles.subtitleButton}>
                                <Animated.View
                                    style={{
                                        width: '40%',
                                        height: '100%',
                                        opacity: 0.5,
                                        backgroundColor: '#E3E2E2',
                                        transform: [{ translateX: translateX }]
                                    }}
                                >
    
                                </Animated.View>
                            </View>
                        </View>
                        <View style={[styles.iconArrowButton, { marginLeft: 55 }]}></View>
                    </View>
    
                    <View style={[styles.individualButton, { borderBottomStartRadius: 20, borderBottomEndRadius: 20, backgroundColor: '#E3E2E2', overflow: 'hidden' }]} >
                        <View style={styles.iconButton}>
                            <Animated.View
                                style={{
                                    width: '40%',
                                    height: '100%',
                                    opacity: 0.5,
                                    backgroundColor: '#E3E2E2',
                                    transform: [{ translateX: translateX }]
                                }}
                            >
    
                            </Animated.View>
                        </View>
                        <View>
                            <View style={styles.textButtons}>
                                <Animated.View
                                    style={{
                                        width: '40%',
                                        height: '100%',
                                        opacity: 0.5,
                                        backgroundColor: '#E3E2E2',
                                        transform: [{ translateX: translateX }]
                                    }}
                                >
    
                                </Animated.View>
                            </View>
                            <View style={styles.subtitleButton}>
                                <Animated.View
                                    style={{
                                        width: '40%',
                                        height: '100%',
                                        opacity: 0.5,
                                        backgroundColor: '#E3E2E2',
                                        transform: [{ translateX: translateX }]
                                    }}
                                >
    
                                </Animated.View>
                            </View>
                        </View>
                        <View style={[styles.iconArrowButton, { marginLeft: 138 }]}></View>
                    </View>
                </View>
    
                <View style={styles.backgroundResetButton}>
                    <View style={styles.resetButton} >
                        <View style={{ width:100, height:20, backgroundColor:'#CBCBCB'}}></View>
                    </View>
                </View>
            </View>
        )
    }
    return(
        <>
        {children}
        </>
    )

    
}

const styles = StyleSheet.create({

    conteinerProfile: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
    },
    conteinerUpPage: {
        borderRadius: 50,
        justifyContent: 'center',
    },
    profilePictureCustomize: {
        borderRadius: 50,
        width: 170,
        height: 170,
        backgroundColor: '#CBCBCB',
        justifyContent: 'center',
        marginTop: 20,
    },
    idModalProfile: {
        width: 200,
        height: 70,
        backgroundColor: '#50327c',
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 30,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        top: 160,
        right: 30,
        padding: 8,
    },
    modalProfile: {
        width: 50,
        height: 50,
        backgroundColor: 'black',
        borderRadius: 20,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        bottom: 40,
    },
    nameProfile: {
        width: 150,
        height: 25,
        bottom: 10,
        marginTop: 20,
        backgroundColor: '#CBCBCB',
        borderRadius: 8,
    },
    nicknameProfile: {
        width: 120,
        height: 20,
        color: '#CBCBCB',
        bottom: 10,
        marginBottom: 10,
        backgroundColor: '#CBCBCB',
        borderRadius: 8,
    },
    individualButton: {
        width: 380,
        height: 90,
        padding: 25,
        borderWidth: 1,
        borderColor: '#CBCBCB',
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: 'white'
    },
    textButtons: {
        width: 60,
        height: 10,
        bottom: 5,
        backgroundColor: '#CBCBCB',
    },
    subtitleButton: {
        width: 120,
        height: 10,
        backgroundColor: '#CBCBCB',
        bottom: 10,
    },
    iconButton: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: '#e2e2e2',
        backgroundColor: '#CBCBCB',
        borderRadius: 5,
        marginRight: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconArrowButton: {
        width: 40,
        height: 40,
        top: 8,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundResetButton: {
        marginTop: 30,
        width: 380,
        height: 120,
        backgroundColor: '#E3E2E2',
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        justifyContent: 'center',
    },
    resetButton: {
        width: 340,
        height: 70,
        borderRadius: 25,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#e2e2e2',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#E6E6E6',
    },
});