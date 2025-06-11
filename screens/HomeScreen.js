import React, { useRef, useState, useEffect } from 'react';
import {
    View, Text, TextInput, StyleSheet,
    Image, FlatList, TouchableOpacity, SafeAreaView,
    Dimensions,
    ActivityIndicator
} from 'react-native';
import Logo from "../assets/splash_logo.png";
import LottieView from 'lottie-react-native';
import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
import meenakshiammantemple from "../assets/allstate/temples-meenakshi-amman-temple-wallpaper-preview.jpg";
import meenakshi_amma1 from "../assets/allstate/50f812b5a696094ebcf2dcf4940b2a14.jpg";
import meenakshi_amman from "../assets/allstate/meenakshi_amman.jpg";
import maduraiP4810 from "../assets/allstate/madurai_P4810.webp";
import istockphoto from "../assets/allstate/istockphoto-179479162-612x612.jpg";
import thirumalainayakarmahal from "../assets/allstate/thirumalai-nayakar-mahal.png";
import Thirumalai from "../assets/allstate/Thirumalai-Nayakar-Mahal_0.jpg";
import ImageCarousel from '../custom/ImageCarousel';
import Loader from "../custom/Animation/animations/loader.json";

const { width } = Dimensions.get('window');

export const topIndianStates = [
    {
        id: 'in_101',
        name: 'Bihar',
        nativeName: '(बिहार)',
        language: 'Hindi',
        founded: '1912',
        description:
            'Bihar is one of the oldest inhabited places in the world, rich in history and culture from the Maurya and Gupta dynasties.',
        image: [meenakshiammantemple, meenakshi_amman, meenakshi_amma1, Thirumalai],
    },
    {
        id: 'in_102',
        name: 'Tamil Nadu',
        nativeName: '(தமிழ்நாடு)',
        language: 'Tamil',
        founded: '1956',
        description: 'Known for its Dravidian-style Hindu temples and classical art and culture.',
        image: [meenakshiammantemple, maduraiP4810, istockphoto, thirumalainayakarmahal],
    },
    {
        id: 'in_103',
        name: 'Rajasthan',
        nativeName: '(राजस्थान)',
        language: 'Hindi',
        founded: '1956',
        description: 'Known for its desert landscapes, majestic forts, and vibrant culture.',
        image: [meenakshiammantemple, maduraiP4810, istockphoto, thirumalainayakarmahal],
    },
    {
        id: 'in_104',
        name: 'Kerala',
        nativeName: '(കേരളം)',
        language: 'Malayalam',
        founded: '1956',
        description: 'Known as God’s Own Country, with backwaters, beaches, and Ayurveda.',
        image: [meenakshiammantemple, meenakshi_amman, meenakshi_amma1, Thirumalai],
    },
    {
        id: 'in_105',
        name: 'Uttar Pradesh',
        nativeName: '(उत्तर प्रदेश)',
        language: 'Hindi',
        founded: '1950',
        description: 'Home to historical cities, religious sites, and the Taj Mahal.',
        image: [meenakshiammantemple, meenakshi_amman, meenakshi_amma1, Thirumalai],
    },
];

export default function HomeScreen({ navigation }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);


    const renderCard = ({ item }) => (
        <View style={styles.card}>
            <ImageCarousel images={item.image} />
            <View style={styles.cardContent}>
                <TouchableOpacity onPress={() => navigation.navigate('StatePlacesScreen', { stateName: item.name, nativeName: item.nativeName, stateId: item.id })}>
                    <Text style={styles.cardTitle}>{item.name}</Text>
                    <Text style={styles.cardAge}>Founded in {item.founded}</Text>
                    <Text style={styles.cardDescription}>{item.language}</Text>
                    <Text style={styles.cardDescription}>{item.description}</Text>
                    <Text style={styles.moreText}>more...</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bookmarkIcon}>
                    <FontAwesome name="bookmark-o" size={20} color="#555" />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            {loading ? (
                <View style={styles.loaderContainer}>
                    <LottieView source={Loader} autoPlay loop style={{ width: 150, height: 150 }} />
                </View>
            ) : (
                <>
                    <View style={styles.header}>
                        <Text style={styles.infoIndia}>INDIA{' '}
                            <Text style={styles.bharatText}>(भारत)</Text></Text>
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
                    <FlatList data={topIndianStates} renderItem={renderCard} keyExtractor={(item) => item.id} contentContainerStyle={styles.list} showsVerticalScrollIndicator={false} />
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
    infoIndia: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#FF9933',
        textShadowColor: '#FFFFFF',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 2,
        shadowColor: '#138808', // Green
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.6,
        shadowRadius: 8,
    },
    bharatText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#555', // subtle gray
        textShadowColor: '#eee',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 1,
    },
    tricolorBar: {
        flexDirection: 'row',
        height: 8,
        marginTop: 10,
        borderRadius: 4,
        overflow: 'hidden',
    },
    stripe: {
        flex: 1,
    },
    logoIcon: {
        height: 30,
        width: 30,
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
    cardImage: {
        width: width - 24,
        height: 160,
        marginRight: 0,
        // borderRadius: 10,
    },
    cardContent: {
        paddingVertical: 8,
        paddingHorizontal: 10
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#6a4d38',
    },
    cardAge: {
        fontSize: 13,
        color: '#e5734b',
        fontWeight: 'bold',
    },
    cardDescription: {
        fontSize: 12,
        color: '#555',
    },
    moreText: {
        fontSize: 12,
        color: '#999',
        marginTop: 5,
    },
    bookmarkIcon: {
        position: 'absolute',
        right: 12,
        top: 10,
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 8,
        marginBottom: 8,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: '#b88a55',
    },
    inactiveDot: {
        backgroundColor: '#ccc',
    },
});
