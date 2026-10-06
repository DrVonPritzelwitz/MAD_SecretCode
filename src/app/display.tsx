import { StyleSheet, View } from 'react-native'

export default function Display() {


	return (
		<View style={styles.mainContainer}>
			<View style={[styles.dot, { backgroundColor: 'plum' }]}></View>
			<View style={[styles.dot, { backgroundColor: 'white' }]}></View>
			<View style={[styles.dot, { backgroundColor: 'white' }]}></View>
			<View style={[styles.dot, { backgroundColor: 'white' }]}></View>
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