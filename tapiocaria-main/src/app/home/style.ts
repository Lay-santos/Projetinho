import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  

    container: {
        flex: 1
    },
    header: {
        padding: 16
    },
    headerImage: {
        width: "100%",
        height: 200,
        borderRadius: 8
    },
    restaurantName:{
        fontSize: 24,
        fontWeight:'bold',
        marginTop: 5
    },
    subtitle: {
        color: "#666",
        marginTop: 4
    },
    tabs: {
        flexDirection: "row",
        padding: 16,
        borderBottomWidth: 1,
        borderBlockStartColor: "#eee",
        gap: 16
    },
    tabText: {
        color: "#666"
    },
    menuList:{
        flex: 1,
        padding: 16
    },
    menuItem:{
        flexDirection: "row",
        padding: 16,
        borderBottomColor: "#eee",
        borderBottomWidth: 1
    },
    menuContent:{
        flex: 1,
        marginRight: 16
    },
    itemName:{
        fontSize: 16,
        fontWeight:"bold"
    },
    itemPrice:{
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 4
    },
    itemImage:{
        width: 80,
        height:80,
        borderRadius:8
    }

})

/*#D4A7B0 */