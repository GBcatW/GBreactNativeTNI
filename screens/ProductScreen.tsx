import { View, Text, FlatList, ListRenderItem, ActivityIndicator } from "react-native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { findAllProduct } from "../services/product-service";
import { ListItem, Avatar, Badge } from '@rneui/themed';

const MaterialHeaderButton = (props: any) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
);

const ProductScreen = (): React.JSX.Element => {

  const navigation = useNavigation<any>();
  const [loading, setLoading] = useState<boolean>(false);

  //1.กำหนด state
  const [product, setProduct] = useState<any[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Product",
      headerTitleAlign: "center",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);
 

  const getProduct = async ()=>{
    try{
      setLoading(true);
      const response = await findAllProduct();
      //console.log(response.data.data);
      //2.setState
      setProduct(response.data.data)
    }catch (error:any){
      console.log(error.message);
    }finally{
      setLoading(false);
    }
  }
  
  useFocusEffect(
    useCallback(()=>{
      getProduct();
    },[])
  );
  if(loading){
    return(
        <View>
            <ActivityIndicator size="large" color="#d1aaee"/>
        </View>
    );
 }

  const _renderItem:ListRenderItem<any> = ({item})=>{
    return(
      <View>
        <>
          <ListItem 
          bottomDivider
          onPress={()=>{
            navigation.navigate("Details", {
              id: item.id,
              title: item.title,
            });
          }}>
            <Avatar source={{ uri: item.picture }} size={50} rounded />
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
                <ListItem.Subtitle>{item.detail}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron />
              <Badge value={item.view} status="success" />
            </ListItem>
          </>
      </View>
    );
  };

  return (
    <View>
      {/*3.show product data*/}
      <FlatList
        data={product} //กำหนดข้อมูลให้ FlatList
        renderItem={_renderItem} //สร้างฟังก์ชั่น
        keyExtractor={(item:any) => item.id.toString()} // keys สำหรับแต่ละรายการ
        onRefresh={async()=>{await getProduct();}}
        refreshing={loading}
      />
    </View>
  );
};

export default ProductScreen
