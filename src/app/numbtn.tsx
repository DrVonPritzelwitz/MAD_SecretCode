import { useContext } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { CodeContext } from './context';

type BtnProps = {
	number: string;
}

export default function Numbtn({ number }: BtnProps) {
	const { code, setCode } = useContext(CodeContext);
	
	return (
		<Pressable style={styles.btn} onPress={ () => setCode(code + number) }>
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