import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

interface User{
    id:number;
    name:string;
    email:string;
}
const FlastListcallBackend = () => {

    //กำหนด state สำหรับเก็บข้อมูลผู้ใช้และสถานะการโหลด
    const[data, setData] = useState<User[]>([]);
    const[loading,setLoading] = useState(true);

    //กำหนด useEffect สำหรับเรียกข้อมูลจาก API เมื่อ component mount
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data => {
            setData(data);
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
            setLoading(false);
        });
    },[]);
    type RenderItemProps = { item: User };
    //ฟังก์ชัน _renderItem
  const _renderItem = ({ item }: RenderItemProps) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.email}>{item.email}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading?(// ถ้ายังโหลดข้อมูลอยู่จะแสดง ActivityIndicator
        <ActivityIndicator size="large" color="red"/>
      ):(//ถ้าข้อมูลถูกโหลดมาแล้วจะแสดง FlatList
        <FlatList
            data={data}
            renderItem={_renderItem}
            keyExtractor={item=>item.id.toString()}
        />
      )}
    </View>
  )
}

export default FlastListcallBackend

const styles = StyleSheet.create({
    container: {
    justifyContent: 'center',
    paddingTop: 50,
    },
    item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    },
    name: {
    fontSize: 20,
    fontWeight: 'bold',
    },
    email: {
    fontSize: 16,
    },
    });
    