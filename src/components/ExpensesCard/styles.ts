import { StyleSheet } from "react-native";
import { BORDER_RADIUS, COLORS, SPACING } from '../../styles/constants';

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        padding: SPACING.extraSmall,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.blue,
        borderRadius: BORDER_RADIUS.extra_small,
    },
    informationsWrapper: {
        gap: SPACING.extraSmall,
    },
    valueWrapper: {
        backgroundColor: COLORS.white,
        padding: SPACING.extraSmall,
        borderRadius: BORDER_RADIUS.extra_small,
    },
    title: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 16,
    },
    date: {
        color: COLORS.white,
        fontSize: 16,
    },
    value: {
        color: COLORS.dark_blue,
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default styles;