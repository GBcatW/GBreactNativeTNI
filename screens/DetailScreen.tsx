import { ActivityIndicator, Dimensions, FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { findProductbyId } from '../services/product-service';
import { ListItem, Tile } from '@rneui/base';

const DetailScreen = ():React.JSX.Element => {
    const route = useRoute<any>();
    const navigation = useNavigation<any>();
    const [detail, setDetail] = React.useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);

    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle:route.params.title
        });
    },[route, navigation]);
    const getProductbyId = async ()=>{
        try{
          setLoading(true);
          const response = await findProductbyId(route.params.id);
          setDetail(response.data.data)
        }catch (error){
          console.log(error);
        }finally{
          setLoading(false);
        }
      }
      
      useFocusEffect(
        React.useCallback(()=>{
          getProductbyId();
        },[])
      );
      if(loading){
        return(
            <View>
                <ActivityIndicator size="large" color="#d1aaee"/>
            </View>
        );
     }
     const _renderItem: ListRenderItem<any> = ({ item }) => (
        <>
        <Tile
                        imageSrc={{
                            uri: 'https://cdn.discordapp.com/attachments/868782427697475584/1284376599168286751/v567-mynt-doodles-01.jpg?ex=66e6686b&is=66e516eb&hm=a959f2dcf1ded5e0a1e5516fbdc60fb7adbd9d89ea41b3be879617f0401072a6&',
                            cache: 'force-cache',
                        }}
                        title={item.ch_title}
                        titleStyle={styles.titleStyle}
                        containerStyle={styles.tileContainer}
                        caption={item.ch_dateadd}
                        captionStyle={styles.captionStyle}
                        featured
                        activeOpacity={0.9}
                        width={Dimensions.get('screen').width-20} // ลบขอบเล็กน้อยทั้งสองข้าง
                    />
        </>
        );
  return (
    <View>
      <FlatList
        data={detail} //กำหนดข้อมูลให้ FlatList
        renderItem={_renderItem} //สร้างฟังก์ชั่น
        keyExtractor={(item:any) => item.ch_id.toString()} // keys สำหรับแต่ละรายการ
        onRefresh={async()=>{await getProductbyId();}}
        refreshing={loading}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};
export default DetailScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0', // สีพื้นหลัง
    },
    listContent: {
        paddingHorizontal: 10, // การเว้นวรรคขอบซ้ายและขวาเท่ากัน
    },
        titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#524811', // สีขาวส าหรับชื่อ
    },
    tileContainer: {
        borderRadius: 10, //ก าหนดให้มุมของ container มีความโค้งมน
        overflow: 'hidden', //ก าหนดให้เนื้อหาที่อาจล้นออกจากขอบของ container ไม่แสดงผล
        marginBottom: 10, //ก าหนดระยะห่างจากขอบล่างของ container ไปยัง element ต่อไปที่อยู่ด้านล่าง
        elevation: 5, // เงาส าหรับ Android
        shadowOffset: { width: 0, height: 2 }, //ก าหนดต าแหน่งของเงาที่แสดงผล
        shadowOpacity: 0.25, //ก าหนดระดับความโปร่งแสงของเงา 
        shadowRadius: 3.84, //ก าหนดรัศมีของการกระจายตัวของเงา 
        opacity: 0.5, // ความโปร่งใสของภาพ , ค่าน้อยจะโปร่งใสมาก
    },
    captionStyle: {
        fontSize: 14,
        color: '#7a6c26' // สีขาวส าหรับวันที่
    },
});