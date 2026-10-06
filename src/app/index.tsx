import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Numpad from "./numpad";

export default function Index() {
	const [code, setCode] = useState('');
	const [isCorrect, setIsCorrect] = useState(false);

	useEffect(() => {
		console.log('code: ', code);

		if (code === '7787') {
			setIsCorrect(true);
		}

		if (code.length >= 4) {
			setCode('');
		}
	}, [code]);


	if (isCorrect) {
		return (
			<View style={styles.container}>
				<Text style={ styles.txt }>YOU GOT IT!</Text>
			</View>
		)
	} else {
		return (
			<View style={styles.container}>
				<Numpad code={code} setCode={setCode}></Numpad>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
	txt: {
		padding: 20,
		fontSize: 20,
		fontWeight: 'bold',
		color: 'green'
	}
});
