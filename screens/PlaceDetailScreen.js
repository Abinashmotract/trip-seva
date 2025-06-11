import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TextInput,
    TouchableOpacity,
    StyleSheet, SafeAreaView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Logo from "../assets/splash_logo.png";
import AboutRoutes from './AboutRoutes';

const aboutPlaceInformation = {
    title: 'Thirumalai Nayakar Mahal',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Gopurams_of_the_Madurai_Meenakshi_Temple%2C_Madurai%2C_Tamil_Nadu%2C_India_%282004%29_350.jpg/1200px-Gopurams_of_the_Madurai_Meenakshi_Temple%2C_Madurai%2C_Tamil_Nadu%2C_India_%282004%29_350.jpg',
    age: '387 year old',
    timings: ['09:00am - 01:00pm', '02:00pm - 05:00pm', '06:15pm - 08:15pm'],
    entryFees: { adult: '₹10', children: '₹5' },
    transportModes: ['Train', 'Bus', 'By Road', 'Hotels', 'Nearby', 'Tips', 'Events', 'Videos', 'Photos'],
    reviews: { rating: 4, totalReviews: 120 },
    description: [
        'It is said that just one (Swargavilasa)...',
        'It is believed that the palace is home to over 248 thick pillars...'
    ]
};


export default function PlaceDetailScreen({ navigation }) {

    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    const handleRating = (value) => setRating(value);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#333" />
                </TouchableOpacity>

                <View style={styles.headerRight}>
                    <TouchableOpacity style={styles.notificationWrapper}>
                        <Ionicons name="notifications-outline" size={24} color="#363020" />
                        <View style={styles.notificationDot} />
                    </TouchableOpacity>
                    <Image source={Logo} style={styles.logoIcon} />
                </View>
            </View>
            <Text style={styles.cityTitle}>{aboutPlaceInformation.title}</Text>
            <ScrollView contentContainerStyle={{ paddingBottom: 30 }} showsVerticalScrollIndicator={false}>
                <Image style={styles.image} source={{ uri: aboutPlaceInformation.image }} />

                <Text style={styles.age}>{aboutPlaceInformation.age}</Text>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Timing :</Text>
                    {aboutPlaceInformation.timings.map((timing, index) => (
                        <Text key={index} style={styles.timingText}>{timing}</Text>
                    ))}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Entry Fees :</Text>
                    {aboutPlaceInformation.entryFees.adult && <Text style={styles.timingText}>Adult - {aboutPlaceInformation.entryFees.adult}</Text>}
                    {aboutPlaceInformation.entryFees.children && <Text style={styles.timingText}>Children - {aboutPlaceInformation.entryFees.children}</Text>}
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="location-outline" size={18} color="#fff" />
                        <Text style={styles.buttonText}>Location</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="help-circle-outline" size={18} color="#fff" />
                        <Text style={styles.buttonText}>Get assist</Text>
                    </TouchableOpacity>
                </View>

                <AboutRoutes navigation={navigation} activeChipText={aboutPlaceInformation.transportModes} />

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Visitor Reviews</Text>
                    <View style={styles.ratingRow}>
                        {[1, 2, 3, 4, 5].map((i) => (
                            <FontAwesome
                                key={i}
                                name={i <= aboutPlaceInformation.reviews.rating ? 'star' : 'star-o'}
                                size={20}
                                color="#f1c40f"
                            />
                        ))}
                        <Text style={styles.reviewScore}>
                            {aboutPlaceInformation.reviews.rating}/5 ({aboutPlaceInformation.reviews.totalReviews} reviews)
                        </Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>About place</Text>
                    {aboutPlaceInformation.description.map((description, index) => (
                        <Text key={index} style={styles.description}>{description}</Text>
                    ))}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Drop your review</Text>
                    <View style={styles.ratingRow}>
                        {[1, 2, 3, 4, 5].map((i) => (
                            <TouchableOpacity key={i} onPress={() => handleRating(i)}>
                                <FontAwesome
                                    name={i <= rating ? 'star' : 'star-o'}
                                    size={24}
                                    color="#f1c40f"
                                />
                            </TouchableOpacity>
                        ))}
                    </View>
                    <TextInput
                        value={review}
                        onChangeText={setReview}
                        placeholder="Write your experience..."
                        multiline
                        style={styles.textArea}
                    />
                    <TouchableOpacity style={styles.submitButton}>
                        <Text style={styles.submitText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0eec7',
        paddingHorizontal: 12,
    },
    header: {
        marginTop: 40,
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
    backButton: {
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 12,
        marginBottom: 10,
    },
    age: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 10,
        textAlign: 'center',
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontWeight: '600',
        fontSize: 16,
        marginBottom: 5,
    },
    timingText: {
        color: '#444',
        marginBottom: 2,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    actionButton: {
        flexDirection: 'row',
        backgroundColor: '#e76f51',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        width: '48%',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        marginLeft: 5,
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    reviewScore: {
        marginLeft: 8,
        fontSize: 16,
        fontWeight: '500',
        color: '#444',
    },
    description: {
        fontSize: 14,
        color: '#333',
        lineHeight: 22,
        marginBottom: 8,
    },
    textArea: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        textAlignVertical: 'top',
        minHeight: 80,
        marginTop: 10,
        marginBottom: 10,
    },
    submitButton: {
        backgroundColor: '#5e4524',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    submitText: {
        color: '#fff',
        fontWeight: '600',
    },
});
