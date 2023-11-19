import {useEffect, useRef, useState} from 'react'
import {View, Text, FlatList, Image, Dimensions} from "react-native"
const carouselData = [
  {
    id: 1,
    image: require('../../assets/images/banner.png'),
  },
  {
    id: 2,
    image: require('../../assets/images/banner1.png'),
  },
  {
    id: 3,
    image: require('../../assets/images/banner.png'),
  },
];

export const Carousel = () => {

  const [activeIndex, setActiveIndex] = useState(0)
  const screenWidth = Dimensions.get("window").width
  const screenHeight = Dimensions.get("window").height / 4
  
  const flatListRef = useRef()

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index:index
  })

  useEffect(() => {
   let interval = setInterval(() => {
      if(activeIndex === carouselData.length - 1 || activeIndex > carouselData.length - 1){
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
    }, 4000);

  return () => clearInterval(interval)
  })

  const renderItem = ({ item, index}) => {
    
    return(
      <View style={{justifyContent:'center'}}>
        <Image 
          source={item.image} 
          style={{height: screenHeight, 
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
            key = {index}
            style={{
              backgroundColor:'black',
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
                  backgroundColor:'gray',
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
    
    setActiveIndex(index <= 2 ? parseInt(index)+1 : parseInt(index)-2)
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
