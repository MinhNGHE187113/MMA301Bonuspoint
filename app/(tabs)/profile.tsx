import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // chỉ thêm icon cho camera
import { styles } from "./styles";

const Profile = () => {
    return (
        <ScrollView style={styles.container}>
            {/* Header background */}
            <View style={styles.headerBackground}></View>

            {/* Avatar + Name */}
            <View style={styles.avatarContainer}>
                <Image
                    source={{ uri: "https://cdn-media.sforum.vn/storage/app/media/thanhhuyen/%E1%BA%A3nh%20s%C6%A1n%20t%C3%B9ng%20mtp/anh-son-tung-mtp-thumb.jpg" }}
                    style={styles.avatar}
                />
                {/* Camera icon */}
                <TouchableOpacity style={styles.cameraIcon}>
                    <Ionicons name="camera" size={18} color="#fff" />
                </TouchableOpacity>

                <Text style={styles.name}>Sơn Tùng MTP</Text>
                <Text style={styles.subText}>(BM SE)</Text>
            </View>

            {/* Menu Items */}
            <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem}>
                    <Image
                        source={require("../../assets/images/20.png")}
                        style={styles.menuIcon}
                    />
                    <Text style={styles.menuText}>My Profile</Text>
                    <Text style={styles.arrow}>›</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Image
                        source={require("../../assets/images/21.png")}
                        style={styles.menuIcon}
                    />
                    <Text style={styles.menuText}>Settings</Text>
                    <Text style={styles.arrow}>›</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Image
                        source={require("../../assets/images/3.png")}
                        style={styles.menuIcon}
                    />
                    <Text style={styles.menuText}>Support</Text>
                    <Text style={styles.arrow}>›</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Image
                        source={require("../../assets/images/2.png")}
                        style={styles.menuIcon}
                    />
                    <Text style={styles.menuText}>FAQ</Text>
                    <Text style={styles.arrow}>›</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Image
                        source={require("../../assets/images/1.png")}
                        style={styles.menuIcon}
                    />
                    <Text style={styles.menuText}>Admin</Text>
                    <Text style={styles.arrow}>›</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Image
                        source={require("../../assets/images/4.png")}
                        style={styles.menuIcon}
                    />
                    <Text style={styles.menuText}>Logout</Text>
                    <Text style={styles.arrow}>›</Text>
                </TouchableOpacity>
            </View>

            {/* Footer */}
            <Text style={styles.footer}>
                myFPT Version 5.9.19 {"\n"}Copyright @ FPT Software 2021
            </Text>
        </ScrollView>
    );
};

export default Profile;
