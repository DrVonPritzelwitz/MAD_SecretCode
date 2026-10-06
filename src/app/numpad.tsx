import { Dispatch, SetStateAction } from 'react';
import { StyleSheet, View } from 'react-native';
import Display from './display';
import Numbtn from './numbtn';

type NumPadProps = {
	code: string;
	setCode: Dispatch<SetStateAction<string>>;
}

export default function Numpad({ code, setCode }: NumPadProps) {

	return (
		<View style={styles.container}>

			<Display code={code}></Display>

			<View style={styles.row}>
				<Numbtn number='1' onPress={(num) => setCode(code + num)} />
				<Numbtn number='2' onPress={(num) => setCode(code + num)} />
				<Numbtn number='3' onPress={(num) => setCode(code + num)} />
			</View>

			<View style={styles.row}>
				<Numbtn number='4' onPress={(num) => setCode(code + num)} />
				<Numbtn number='5' onPress={(num) => setCode(code + num)} />
				<Numbtn number='6' onPress={(num) => setCode(code + num)} />
			</View>

			<View style={styles.row}>
				<Numbtn number='7' onPress={(num) => setCode(code + num)} />
				<Numbtn number='8' onPress={(num) => setCode(code + num)} />
				<Numbtn number='9' onPress={(num) => setCode(code + num)} />
			</View>

			<View style={styles.row}>
				<Numbtn number='0' onPress={(num) => setCode(code + num)} />
			</View>

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'center'
	}
});