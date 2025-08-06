import { StyleSheet } from "react-native";
import { BORDER_RADIUS, COLORS, SPACING } from '../../styles/constants';

const styles = StyleSheet.create({
    modal: {
        width: '100%',
        height: '90%',
    },
    modalHeader: {
        width: '100%',
        backgroundColor: COLORS.blue,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: SPACING.small,
    },
    modalHeaderTitle: {
        color: COLORS.white,
    },
    modalBody: {
        flex: 1,
        backgroundColor: COLORS.dark_blue,
        alignItems: 'center',
        gap: SPACING.small,
    },
    modalBodyInput: {
        width: '80%',
        marginTop: SPACING.small,
        borderColor: COLORS.grey,
        borderWidth: 1,
        borderRadius: BORDER_RADIUS.extra_small,
        padding: SPACING.extraSmall,
        color: COLORS.white,
    },
    modalBodyButtonsWrapper: {
        flexDirection: 'row',
        gap: SPACING.small,
        alignItems: 'center',
    },
    modalBodySeparator: {
        width: '90%',
        height: 2,
        backgroundColor: COLORS.grey,
    }
});

export default styles;