import {Button, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

const UseEffectExample = (): React.JSX.Element => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    useEffect(()=>{
        console.log("use Effect1 - Run after every render");
    });
    useEffect(()=>{
        console.log("use Effect2 - Run only when count1 change");
    },[count1]);

    useEffect(()=>{
        console.log("use Effect3 - Run only once after the first render");
    },[]);

    return (
        <View style={{ marginTop: 50 }}>
        <Text style={{ marginTop: 50 }}>Count1: {count1}</Text>
        <Button title="Increment Count1" onPress={() => setCount1(count1 + 1)} />
        <Text>{"\n\n"}</Text>
        <Text>Count2: {count2}</Text>
        <Button title="Increment Count2" onPress={() => setCount2(count2 + 1)} />
        </View>
        );
        
}

export default UseEffectExample