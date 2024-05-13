import * as React from "react"
import { TextField } from "../TextField"
import { Alert, TouchableHighlight, ViewStyle } from "react-native"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { colors } from "app/theme"
import { useFocusedInputHandler } from "react-native-keyboard-controller"
import { useSharedValue } from "react-native-reanimated"
// import { useSpeech } from "src/hooks/useSpeech"

export function Input({ value }) {
  // const { isRecognizing, startRecognizing, stopRecognizing, started, end, results, reset } =
  //   useSpeech()
  const [searchText, setSearchText] = React.useState("")

  // const handleRecording = () => {
  //   console.log({ started, end })
  //   if (!started) {
  //     startRecognizing()
  //   } else {
  //     stopRecognizing()
  //     setSearchText(results[0])
  //     reset()
  //   }
  // }

  return (
    <TextField
      containerStyle={$container}
      placeholder="Type a message..."
      inputWrapperStyle={$prompt}
      value={value}
      autoCapitalize="none"
      RightAccessory={() => (
        <TouchableHighlight style={$rightAccessory} onPress={() => Alert.alert("audio recording")}>
          <MaterialIcons name="mic" size={20} color={colors.text} />
        </TouchableHighlight>
      )}
    />
  )
}

const $container: ViewStyle = {
  flex: 1,
}

const $prompt: ViewStyle = {
  borderRadius: 24,
}

const $rightAccessory: ViewStyle = {
  height: 40,
  width: 40,
  alignItems: "center",
  justifyContent: "center",
}
