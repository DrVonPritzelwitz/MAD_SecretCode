import { Pressable, StyleSheet, Text } from 'react-native';

type BtnProps = {
	number: string;
}

export default function Numbtn({ number }: BtnProps) {
	return (
		<Pressable style={styles.btn} onPress={() => { }}>
			<Text style={styles.txt}> {number} </Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	btn: {
		width: 40,
		height: 40,
		borderRadius: 3,
		backgroundColor: 'plum',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 2
	},
	txt: {
		color: 'white',
		fontSize: 20
	}
})