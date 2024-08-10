import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";

interface NewsItem {
    title:string;
    description: string;
    publishedAt: string; //convert to date local:new Date(item.publishedAt).toLocaleDateString()
    url:string;
}

const NewsApp = () => {

    const[data, setData] = useState<NewsItem[]>([]);
    const[loading,setLoading] = useState(true);

    useEffect(()=>{
        const API_KEY = '653e6c13f9fe4d7fa18459b44ac215e4'; // ใส่ API Key ของนักศึกษาที่นี่
        const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
        fetch(URL)
        .then(response=>response.json())
        .then((responseData) => {
            setData(responseData.articles);
            setLoading(false);
        })
        .catch(error => {
            console.error(error.errorText);
            setLoading(false);
        });
    },[]);

    const _renderItem = ({item} : { item: NewsItem}) => (
        <TouchableOpacity style={styles.card}>
            <Text style={styles.headline}>{item.title}</Text>
            <Text style={styles.date}>{new Date(item.publishedAt).toLocaleDateString()}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </TouchableOpacity>
    )
    
  return (
    <View style={styles.container}>
      {loading?(// ถ้ายังโหลดข้อมูลอยู่จะแสดง ActivityIndicator
        <ActivityIndicator size="large" color="red"/>
      ):(//ถ้าข้อมูลถูกโหลดมาแล้วจะแสดง FlatList
        <FlatList
            data={data}
            renderItem={_renderItem}
            keyExtractor={(item) => item.url}
        />
      )}
    </View>
  );
};

export default NewsApp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    padding: 16,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  card: {
    backgroundColor: "#d1aaee",
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  headline: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: "#888",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#333",
  },
});
