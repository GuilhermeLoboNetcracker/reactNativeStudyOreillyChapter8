import { StyleSheet } from "react-native";
import { BORDER_RADIUS, COLORS, FONT_SIZE, FONT_WEIGHT, SPACING_HORIZONTAL, SPACING_VERTICAL } from '../../styles/constants';

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: 'row',
        paddingHorizontal: SPACING_HORIZONTAL.extra_small,
        paddingVertical: SPACING_VERTICAL.extra_small,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.grey,
        borderRadius: BORDER_RADIUS.extra_small,
        marginBottom: SPACING_VERTICAL.small,
    },
    text: {
        color: COLORS.dark_blue
    },
    value: {
        color: COLORS.dark_blue,
        fontWeight: FONT_WEIGHT.bold,
        fontSize: FONT_SIZE.medium,
    },
});

export default styles;