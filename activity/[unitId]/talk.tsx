import { Stack, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function TalkScreen() {
  const { unitId } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Stack.Screen options={{ title: `Unit ${unitId} - TALK` }} />
      <Text>Ini Layar Bicara untuk Unit: {unitId}</Text>
      {/* Di sini Anda akan meletakkan tombol CLICK TO TALK */}
    </View>
  );
}