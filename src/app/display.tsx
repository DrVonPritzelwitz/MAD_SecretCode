import { StyleSheet, View } from 'react-native';

type DisplayProps = {
	code: String;
}

export default function Display({ code }: DisplayProps) {

	return (
		<View style={styles.mainContainer}>
			<View style={[styles.dot, { backgroundColor: code.length >= 1 ? 'plum' : 'white' }]}></View>
			<View style={[styles.dot, { backgroundColor: code.length >= 2 ? 'plum' : 'white' }]}></View>
			<View style={[styles.dot, { backgroundColor: code.length >= 3 ? 'plum' : 'white' }]}></View>
			<View style={[styles.dot, { backgroundColor: code.length >= 4 ? 'plum' : 'white' }]}></View>
		</View>
	)
}

const styles = StyleSheet.create({
	mainContainer: {
		flexDirection: 'row',
		margin: 10
	},
	dot: {
		width: 20,
		height: 20,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: 'white',
		margin: 5,
	}
})