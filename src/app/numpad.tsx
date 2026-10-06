import { StyleSheet, View } from 'react-native';
import Display from './display';
import Numbtn from './numbtn';

export default function Numpad() {
	return (
		<View style={styles.container}>

			<Display></Display>

			<View style={styles.row}>
				<Numbtn number='1' />
				<Numbtn number='2' />
				<Numbtn number='3' />
			</View>

			<View style={styles.row}>
				<Numbtn number='4' />
				<Numbtn number='5' />
				<Numbtn number='6' />
			</View>

			<View style={styles.row}>
				<Numbtn number='7' />
				<Numbtn number='8' />
				<Numbtn number='9' />
			</View>

			<View style={styles.row}>
				<Numbtn number='0' />
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