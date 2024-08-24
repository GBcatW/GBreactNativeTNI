import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import axios from 'axios';

// Define types for the data structure​
type User = {
    id: number;
    name: string;
    email: string;
};

const AxiosgetData = (): React.JSX.Element => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    //get Data by axios
    const fetchData = async ()=>{
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data);
        }catch{
            setError('Failed to fetch users')
        
        }finally{
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchData();
    },[])

    if(loading){
        return(
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="#d1aaee"/>
            </View>
        );
    }
    if(error){
        return(
            <View style={styles.centered}>
                <text style={styles.errorText}>{error}</text>
            </View>
        );
    }


  return (
    <FlatList
        contentContainerStyle = {styles.container}
        data={users}
        renderItem={({item})=>(
            <View style={styles.item}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.email}>{item.email}</Text>
            </View>
        )}
        keyExtractor={item=>item.id.toString()}
    />
  );
};

export default AxiosgetData;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  item: {
    backgroundColor: "#aacdee",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
  },
});
