import { StyleSheet } from "react-native";
import { BORDER_RADIUS, COLORS, SPACING } from '../../styles/constants';

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: 'row',
        padding: SPACING.extraSmall,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.grey,
        borderRadius: BORDER_RADIUS.extra_small,
        marginBottom: SPACING.small,
    },
    text: {
        color: COLORS.dark_blue
    },
    value: {
        color: COLORS.dark_blue,
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default styles;