// ImageCarousel.js
import React, { useRef, useState, useEffect } from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

export default function ImageCarousel({ images }) {
    const flatListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loaded, setLoaded] = useState(Array(images.length).fill(false));

    const onImageLoad = (index) => {
        const updated = [...loaded];
        updated[index] = true;
        setLoaded(updated);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            let nextIndex = currentIndex + 1;
            if (nextIndex >= images.length) {
                nextIndex = 0;
            }
            flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
            setCurrentIndex(nextIndex);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex, images.length]);

    const onViewRef = useRef(({ changed }) => {
        if (changed.length > 0) {
            setCurrentIndex(changed[0].index);
        }
    });

    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

    return (
        <View>
            <FlatList
                data={images}
                ref={flatListRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <ShimmerPlaceholder visible={loaded[index]} style={styles.cardImage}>
                        <Image
                            source={typeof item === 'string' ? { uri: item } : item}
                            style={styles.cardImage}
                            onLoad={() => onImageLoad(index)}
                        />
                    </ShimmerPlaceholder>
                )}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
            />
            <View style={styles.dotsContainer}>
                {images.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            currentIndex === index ? styles.activeDot : styles.inactiveDot,
                        ]}
                    />
                ))}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    cardImage: {
        height: 180,
        borderRadius: 10,
        marginHorizontal: 5,
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 8,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: '#333',
    },
    inactiveDot: {
        backgroundColor: '#bbb',
    },
});
