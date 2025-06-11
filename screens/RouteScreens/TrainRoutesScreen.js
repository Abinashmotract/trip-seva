import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, LayoutAnimation } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Logo from "../../assets/splash_logo.png";
import { ScrollView } from 'react-native';
import { useState } from 'react';

const trainData = [
    {
        from: 'Delhi',
        trains: [
            { name: 'Vande Bharat Express', number: '22439', duration: '8h', stops: 4, type: 'Superfast' },
            { name: 'Shri Shakti Express', number: '22461', duration: '10h', stops: 6, type: 'Express' },
        ]
    },
    {
        from: 'Mumbai',
        trains: [
            { name: 'Swaraj Express', number: '12471', duration: '32h', stops: 18, type: 'Superfast' },
            { name: 'Lokmanya Tilak Express', number: '12137', duration: '34h', stops: 20, type: 'Express' },
        ]
    },
    {
        from: 'Kolkata',
        trains: [
            { name: 'Himgiri Express', number: '12331', duration: '33h', stops: 21, type: 'Express' },
        ]
    },
    {
        from: 'Chennai',
        trains: [
            { name: 'Andaman Express', number: '16031', duration: '56h', stops: 30, type: 'Mail/Express' },
        ]
    },
    {
        from: 'Local Jammu',
        trains: [
            { name: 'Jammu Mail', number: '14033', duration: '1h 30m', stops: 3, type: 'Local' },
        ]
    }
];

export default function TrainRoutesScreen({ navigation }) {
    const [activeTrain, setActiveTrain] = useState(null);

    const toggleAccordion = (key) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setActiveTrain(activeTrain === key ? null : key);
    };


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

            <Text style={styles.title}>🚆 Train Routes to Vaishno Devi (Katra Station)</Text>

            <ScrollView showsVerticalScrollIndicator={false}>
                {trainData.map((section, sectionIndex) => (
                    <View key={sectionIndex} style={styles.section}>
                        <Text style={styles.cityName}>From {section.from}</Text>

                        {section.trains.map((train, trainIndex) => {
                            const trainKey = `${sectionIndex}-${trainIndex}`;
                            const isOpen = activeTrain === trainKey;

                            return (
                                <View key={trainKey} style={styles.accordionCard}>
                                    <TouchableOpacity onPress={() => toggleAccordion(trainKey)} style={styles.accordionHeader}>
                                        <Text style={styles.trainName}>{train.name} ({train.number})</Text>
                                        <Ionicons name={isOpen ? "chevron-up" : "chevron-down"} size={20} color="#333" />
                                    </TouchableOpacity>

                                    {isOpen && (
                                        <View style={styles.accordionContent}>
                                            <Text style={styles.detail}>Type: {train.type}</Text>
                                            <Text style={styles.detail}>Duration: {train.duration}</Text>
                                            <Text style={styles.detail}>Stops: {train.stops}</Text>
                                            <Text style={styles.detail}>📍 Running Status: Coming Soon</Text>
                                        </View>
                                    )}
                                </View>
                            );
                        })}
                    </View>
                ))}
            </ScrollView>
            <Text style={styles.note}>
                📱 Tip: Use IRCTC or “Where Is My Train” app to track live timings and book tickets.
            </Text>
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
    title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
    section: { marginBottom: 20 },
    cityName: { fontSize: 18, fontWeight: '600', marginBottom: 8, color: '#444' },
    accordionCard: {
        backgroundColor: '#f4f4f4',
        borderRadius: 10,
        marginBottom: 10,
        overflow: 'hidden'
    },
    accordionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        backgroundColor: '#e0e0e0',
    },
    trainName: { fontSize: 16, fontWeight: '600', color: '#333' },
    accordionContent: {
        paddingHorizontal: 12,
        paddingBottom: 10,
        backgroundColor: '#fff'
    },
    detail: { fontSize: 14, color: '#555' },
    note: {
        marginTop: 20,
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 50,
    }
});
