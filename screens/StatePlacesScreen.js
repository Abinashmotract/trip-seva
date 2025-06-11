import React, { useEffect, useMemo, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    Dimensions,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import Logo from "../assets/splash_logo.png";
import bodh1 from "../assets/allstate/bodh1.jpg";
import bodh2 from "../assets/allstate/bodh2.jpg";
import rajgir1 from "../assets/allstate/rajgir1.jpg";
import rajgir2 from "../assets/allstate/rajgir2.jpg";
import ImageCarousel from '../custom/ImageCarousel';
import Loader from "../custom/Animation/animations/loader.json";
import LottieView from 'lottie-react-native';

const { width } = Dimensions.get('window');
export const topIndianStatesPlaces = [
    {
        id: 'in_101',
        places: [
            {
                name: 'Bodh Gaya',
                image: [bodh1, bodh2],
                description: 'The place where Gautama Buddha attained enlightenment under the Bodhi tree.',
            },
            {
                name: 'Rajgir',
                image: [rajgir1, rajgir2],
                description: 'Ancient city and spiritual center, associated with Lord Mahavira and Buddha.',
            },
        ],
    },
    {
        id: 'in_102',
        places: [
            {
                name: 'Meenakshi Amman Temple',
                image: [rajgir1, rajgir2],
                description: 'Iconic temple dedicated to Goddess Meenakshi in Madurai.',
            },
            {
                name: 'Thanjavur',
                image: [rajgir1, rajgir2],
                description: 'Known for the Brihadeeswarar Temple and rich cultural heritage.',
            },
        ],
    },
];

function PlaceCard({ item, navigation }) {
    const images = Array.isArray(item.image) ? item.image : [item.image];
    return (
        <View style={styles.card}>
            <ImageCarousel images={images} />
            <TouchableOpacity onPress={() => navigation.navigate('PlaceDetailScreen')}>
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>{item.name}</Text>
                    <Text style={styles.cardDescription}>{item.description}</Text>
                    <Text style={styles.moreText}>more...</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default function StatePlacesScreen({ route, navigation }) {
    const [loading, setLoading] = useState(true);

    const { stateName, nativeName, stateId } = route.params;

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const places = useMemo(() => {
        const matched = topIndianStatesPlaces.find((state) => state.id === stateId);
        return matched ? matched.places : [];
    }, [stateId]);

    return (
        <SafeAreaView style={styles.container}>
            {loading ? (
                <View style={styles.loaderContainer}>
                    <LottieView source={Loader} autoPlay loop style={{ width: 150, height: 150 }} />
                </View>
            ) : (
                <>
                    <View style={styles.header}>
                        <Text style={styles.cityTitle}>
                            {stateName} <Text style={styles.statenativeName}>{nativeName}</Text>
                        </Text>
                        <View style={styles.headerRight}>
                            <TouchableOpacity style={styles.notificationWrapper}>
                                <Ionicons name="notifications-outline" size={24} color="#363020" />
                                <View style={styles.notificationDot} />
                            </TouchableOpacity>
                            <Image source={Logo} style={styles.logoIcon} />
                        </View>
                    </View>

                    <View style={styles.searchSection}>
                        <View style={styles.searchInputContainer}>
                            <Ionicons name="search" size={18} color="#fff" style={{ marginRight: 10 }} />
                            <TextInput placeholder="Search by place" placeholderTextColor="#ccc" style={styles.searchInput} />
                        </View>
                        <TouchableOpacity style={styles.filterButton}>
                            <Feather name="sliders" size={18} color="#fff" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.subHeader}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back" size={24} color="#333" />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>{stateName} Most Popular Places</Text>
                        <View style={{ width: 24 }} />
                    </View>

                    <FlatList
                        data={places}
                        renderItem={({ item }) => <PlaceCard item={item} navigation={navigation} />}
                        keyExtractor={(item, index) => index.toString()}
                        contentContainerStyle={styles.list}
                        showsVerticalScrollIndicator={false}
                    />
                </>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0eec7',
        paddingHorizontal: 12,
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        marginTop: 40,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cityTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6a4d38',
    },
    statenativeName: {
        fontSize: 14,
        fontWeight: '500',
        color: '#555', // subtle gray
        textShadowColor: '#eee',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 1,
    },
    logoIcon: {
        height: 30,
        width: 30,
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    notificationWrapper: {
        position: 'relative',
        marginRight: 6,
    },
    notificationDot: {
        position: 'absolute',
        top: -2,
        right: -2,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'red',
    },
    searchSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    searchInputContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#183c2b',
        paddingHorizontal: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    searchInput: {
        flex: 1,
        color: '#fff',
        fontSize: 14,
    },
    filterButton: {
        marginLeft: 10,
        backgroundColor: '#b88a55',
        padding: 10,
        borderRadius: 10,
    },
    subHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    list: {
        paddingBottom: 20,
    },
    card: {
        backgroundColor: '#fffbe9',
        borderRadius: 10,
        marginBottom: 16,
        overflow: 'hidden',
        position: 'relative',
    },
    image: {
        width: width - 24,
        height: 180,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    cardContent: {
        padding: 12,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#6a4d38',
    },
    cardDescription: {
        fontSize: 14,
        color: '#555',
        marginTop: 4,
    },
});
