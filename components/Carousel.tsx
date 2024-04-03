import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import logo from '../assets/gsb.png';

const Carousel = () => {
  const flatlistRef = useRef<FlatList<any>>(null);
  const screenWidth = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      flatlistRef.current?.scrollToIndex({
        animated: true,
        index: activeIndex === carouselData.length - 1 ? 0 : activeIndex + 1,
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const getItemLayout = (_: any, index: number) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index,
  });

  const carouselData = [
    {
      id: '01',
      image: require('../assets/slide3.png'),
      topText: 'DOCTOR & DIETICIAN CONULT',
      bottomText: 'PERSONALIZED',
    },
    {
      id: '02',
      image: require('../assets/slide2.png'),
      topText: 'REVERSE YOUR',
      bottomText: 'DIABETES',
    },
    {
      id: '03',
      image: require('../assets/slide1.png'),
      topText: 'OPTIMIZE YOUR',
      bottomText: 'NUTRITION',
    },
  ];

  const renderItem = ({item}: {item: any}) => {
    return (
      <View>
        <Image source={item.image} style={{height: 500, width: screenWidth}} />
        <LinearGradient
          colors={['transparent', 'rgba(255, 170, 0, 1.0)']}
          style={styles.gradientOverlay}
        />
        <View style={styles.textContainer}>
          <Text style={styles.whiteText}>{item.topText}</Text>
          <Text style={styles.blackText}>{item.bottomText}</Text>
        </View>
      </View>
    );
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollOffset / screenWidth);
    setActiveIndex(index);
  };

  const renderDotIndicators = () => {
    return carouselData.map((_, index) => (
      <View
        key={index}
        style={{
          backgroundColor: activeIndex === index ? 'white' : 'gray',
          height: 5,
          width: 40,
          // borderRadius: 5,
          marginHorizontal: 6,
        }}
      />
    ));
  };

  return (
    <View>
      <FlatList
        data={carouselData}
        ref={flatlistRef}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        onScroll={handleScroll}
      />
      {/* <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: 30,
                }}
            >
                {renderDotIndicators()}
            </View> */}
      <View style={styles.dotIndicatorsContainer}>
        {carouselData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dotIndicator,
              {backgroundColor: activeIndex === index ? 'white' : 'gray'},
            ]}
          />
        ))}
      </View>

      <View style={styles.logoContainer}>
        <Image source={logo} />
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%',
  },
  dotIndicatorsContainer: {
    position: 'absolute',
    bottom: 40, // Adjust this value as per your need
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dotIndicator: {
    width: 50,
    height: 3,
    // borderRadius: 5,
    marginHorizontal: 6,
  },
  textContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 60,
    display: 'flex',
  },
  whiteText: {
    color: 'white',
    fontSize: 32,
    fontStyle: 'italic',
    textAlign: 'center',
    fontWeight: '900',
  },
  blackText: {
    color: 'black',
    fontSize: 32,
    fontStyle: 'italic',
    textAlign: 'center',
    fontWeight: '900',
  },
  logoContainer: {
    position: 'absolute',
    width: '100%',
    top: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    right: 10
  },
});
