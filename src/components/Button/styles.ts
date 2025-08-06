import { StyleSheet } from "react-native";
import { COLORS, SPACING_HORIZONTAL, SPACING_VERTICAL } from '../../styles/constants';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        paddingHorizontal: SPACING_HORIZONTAL.small,
        paddingVertical: SPACING_VERTICAL.small,
    },
    text: {
        color: COLORS.white
    },
});

export default styles;