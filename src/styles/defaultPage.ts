import { StyleSheet } from "react-native";
import { COLORS, SPACING_HORIZONTAL, SPACING_VERTICAL } from '../styles/constants';

const defaultPageStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.dark_blue,
        paddingHorizontal: SPACING_HORIZONTAL.small,
        paddingVertical: SPACING_VERTICAL.small,
        alignItems: 'center',
    }
});

export default defaultPageStyles;