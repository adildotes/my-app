import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { ThemedView } from "@/components/ThemedView";

const imagesArr = [
    "https://images.unsplash.com/photo-1596742578443-7682ef5251cd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwYXBwc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1704018453307-d563498b585b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlJTIwYXBwc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwYXBwc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vYmlsZSUyMGFwcHN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1593789198788-8b21805d5fdb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vYmlsZSUyMGFwcHN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1533022139390-e31c488d69e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vYmlsZSUyMGFwcHN8ZW58MHx8MHx8fDA%3D",
];

export default function ImageGallery() {
    return (
        <ThemedView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Image Gallery</Text>
            </View>
            <FlatList
                data={imagesArr}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Image source={{ uri: item }} style={styles.image} />
                )}
                numColumns={2}
                contentContainerStyle={styles.gallery}
            />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
    },
    header: {
        padding: 16,
        alignItems: "center",
        backgroundColor: "#6200ee",
    },
    title: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
    },
    gallery: {
        padding: 10,
    },
    image: {
        width: "45%",
        height: 150,
        margin: 8,
        borderRadius: 10,
    },
});
