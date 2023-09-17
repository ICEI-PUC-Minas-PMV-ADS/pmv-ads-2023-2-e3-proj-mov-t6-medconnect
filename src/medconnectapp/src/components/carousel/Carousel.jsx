import {useEffect, useRef, useState} from 'react'
import {View, Text, FlatList, Image, Dimensions} from "react-native"
const carouselData = [
  {
    id: 1,
    image:
      'https://cdn.abrahao.com.br/base/c06/02e/7be/promocao-restaurante-oriental-fb.png',
  },
  {
    id: 2,
    image:
      'https://www.clickriomafra.com.br/wp-content/uploads/2021/04/06/Promo%C3%A7%C3%B5es-especiais-no-aplicativo-do-Restaurante-Vitorino-2.jpg',
  },
  {
    id: 3,
    image:
      'https://cdn.abrahao.com.br/base/c06/02e/7be/promocao-restaurante-oriental-fb.png',
  },
];

export const Carousel = () => {

  const [activeIndex, setActiveIndex] = useState(0)
  const screenWidth = Dimensions.get("window").width
  
  const flatListRef = useRef()

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index:index
  })

  useEffect(() => {
   let interval = setInterval(() => {
      if(activeIndex === carouselData.length - 1){
        flatListRef.current.scrollToIndex({
          index: 0,
          animation:true
        })
      }else{
        flatListRef.current.scrollToIndex({
          index: activeIndex+1,
          animation:true
        })
      }
    }, 3000);

  return () => clearInterval(interval)
  })

  const renderItem = ({ item, index}) => {
    return(
      <View style={{justifyContent:'center'}}>
        <Image 
          source={{uri: item.image}} 
          style={{height: 150, 
          width: screenWidth}} />
      </View>
    )
  };

  const renderIndicators = () => {
    return(
      carouselData.map((dot, index) =>{

        if(activeIndex === index){
          return(
            <View  
            style={{
              backgroundColor:'green',
              height: 6, width: 6,
              borderRadius: 5,
              marginHorizontal: 4,
              }}>

            </View>
          )
        }

        return(
          <View 
            style={{
                  backgroundColor:'red',
                  height: 6, width: 6,
                  borderRadius: 5,
                  marginHorizontal: 4,
                  }}
            key = {index}
            >
         
          </View>)
      }
      )  
    )
  }


  const handleScroll = (event) => {

    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = scrollPosition / screenWidth
    
    setActiveIndex(index)
  }

  return (
    <View >
 
      <FlatList 
          data={carouselData} 
          renderItem={renderItem} 
          horizontal={true}
          pagingEnabled={true}   
          onScroll={handleScroll} 
          getItemLayout={getItemLayout}
          keyExtractor={(item) => item.id}
          ref = {flatListRef}
      />
      <View style={{
           flexDirection:'row',
           justifyContent: 'center',
           marginTop: 10,
           
           }}>
         { renderIndicators() } 
      </View>
    </View>
  )
}
