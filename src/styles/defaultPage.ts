import { StyleSheet } from "react-native";
import { COLORS, SPACING } from '../styles/constants';

const defaultPageStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.dark_blue,
        padding: SPACING.small,
        alignItems: 'center',
    }
});

export default defaultPageStyles;