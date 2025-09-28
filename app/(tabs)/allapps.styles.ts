import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingTop: 10,
    },
    search: {
        backgroundColor: "#f2f2f2",
        padding: 10,
        borderRadius: 10,
        marginBottom: 16,
        fontSize: 14,
    },
    header: {
        fontSize: 22,
        fontWeight: "700",
        marginBottom: 8,
    },
    sectionContainer: {
        backgroundColor: "#f2f2f2",
        paddingVertical: 6,
        paddingHorizontal: 10,
        marginTop: 16,
        marginBottom: 8,
        borderRadius: 0,
        marginHorizontal: 0,
        alignSelf: "stretch",
        width: "100%",
    },

    sectionText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#666", // chữ xám
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    icon: {
        width: 80,
        height: 80,
        marginRight: 12,
        resizeMode: "contain",
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: "600",
        color: "#000",
    },
    desc: {
        fontSize: 13,
        color: "#666",
        marginTop: 2,
    },
    searchContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 6,
    },
    searchInput: {
        flex: 1,
        fontSize: 14,
        paddingVertical: 4,
    },

});
