import { StyleSheet, View } from "react-native";
import Numpad from "./numpad";

export default function Index() {

	return (
		<View style={styles.container}>
			<Numpad></Numpad>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
