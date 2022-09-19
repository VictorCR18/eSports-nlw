import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Activity, CheckCircle } from 'phosphor-react-native';
import * as Clipbord from "expo-clipboard";

import { styles } from './styles';
import { THEME } from '../../theme';

import { Heading } from '../Heading';
import React, { useState } from 'react';

interface Props extends ModalProps {
    discord: string;
    onClose: () => void;
}



export function DuoMatch({ discord, onClose, ...res }: Props) {
    const [isCopping, setIsCoppig] = useState(false);

    async function handleCopyDiscordToClipboard() {
        setIsCoppig(true);
        await Clipbord.setStringAsync(discord);

        Alert.alert('Discord Copiado!', 'Usuário copiado para sua área de transferência.');
        setIsCoppig(false);
    }

    return (
        <Modal
            animationType='fade'
            transparent
            statusBarTranslucent
            {...res}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity
                        style={styles.closeIcon}
                        onPress={onClose}
                    >
                        <MaterialIcons
                            name="close"
                            size={20}
                            color={THEME.COLORS.CAPTION_500}
                        />

                    </TouchableOpacity>

                    <CheckCircle
                        size={64}
                        color={THEME.COLORS.SUCCESS}
                        weight="bold"
                    />

                    <Heading
                        title="Let´s play!"
                        subtitle="Agora é só começar a jogar!"
                        style={{ alignItems: 'center', marginTop: 24 }}
                    />

                    <Text style={styles.label}>
                        Adicione seu Discord
                    </Text>
                    <TouchableOpacity
                        style={styles.discordButton}
                        onPress={handleCopyDiscordToClipboard}
                        disabled={isCopping}
                    >
                        <Text style={styles.discord}>
                            {isCopping ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> : discord}
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </Modal>
    );
}