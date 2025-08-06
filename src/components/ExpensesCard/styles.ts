import { StyleSheet } from "react-native";
import { BORDER_RADIUS, COLORS, FONT_SIZE, FONT_WEIGHT, SPACING_HORIZONTAL, SPACING_VERTICAL } from '../../styles/constants';

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        paddingHorizontal: SPACING_HORIZONTAL.extra_small,
        paddingVertical: SPACING_VERTICAL.extra_small,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.blue,
        borderRadius: BORDER_RADIUS.extra_small,
    },
    informationsWrapper: {
        gap: SPACING_VERTICAL.extra_small,
    },
    valueWrapper: {
        backgroundColor: COLORS.white,
        paddingHorizontal: SPACING_HORIZONTAL.extra_small,
        paddingVertical: SPACING_VERTICAL.extra_small,
        borderRadius: BORDER_RADIUS.extra_small,
    },
    title: {
        color: COLORS.white,
        fontWeight: FONT_WEIGHT.bold,
        fontSize: FONT_SIZE.medium,
    },
    date: {
        color: COLORS.white,
        fontSize: FONT_SIZE.medium,
    },
    value: {
        color: COLORS.dark_blue,
        fontWeight: FONT_WEIGHT.bold,
        fontSize: FONT_SIZE.medium,
    },
});

export default styles;