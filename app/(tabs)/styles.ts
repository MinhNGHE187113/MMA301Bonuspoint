import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    headerBackground: {
        height: 120,
        backgroundColor: "#3b82f6",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    avatarContainer: {
        alignItems: "center",
        marginTop: -50,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#fff",
    },
    cameraIcon: {
        position: "absolute",
        bottom: 40,          // dính về phía dưới avatar
        right: 160,           // dính về phía phải avatar
        backgroundColor: "#888", // nền xám
        borderRadius: 20,
        padding: 4,
        borderWidth: 2,
        borderColor: "#fff", // viền trắng như mẫu
    },

    name: {
        fontSize: 16,
        fontWeight: "600",
        marginTop: 8,
    },
    subText: {
        fontSize: 13,
        color: "#555",
    },
    menu: {
        marginTop: 20,
    },
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2",
    },
    menuIcon: {
        width: 40,
        height: 40,
        marginRight: 12,
        resizeMode: "contain",
    },
    menuText: {
        fontSize: 15,
        color: "#333",
        flex: 1, // đẩy dấu > sang phải
    },
    arrow: {
        fontSize: 16,
        color: "#999",
    },
    footer: {
        textAlign: "center",
        fontSize: 12,
        color: "#999",
        marginTop: 30,
        marginBottom: 10,
    },
});
