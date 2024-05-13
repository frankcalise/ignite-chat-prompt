import * as React from "react"
import { View, ViewStyle } from "react-native"
import {
  useFocusedInputHandler,
  useReanimatedKeyboardAnimation,
} from "react-native-keyboard-controller"
import { LaunchPad } from "./LaunchPad"
import { Input } from "./Input"
import { Avatar } from "./Avatar"
import { spacing } from "app/theme"
import { Suggestions } from "./Suggestions"
import Animated, { runOnJS, useAnimatedStyle, useSharedValue } from "react-native-reanimated"
import { Send } from "./Send"

export function PromptBar() {
  const { height, progress } = useReanimatedKeyboardAnimation()
  console.log({ progress: JSON.stringify(height.value) })
  const $animatedContainer = useAnimatedStyle(
    () => ({
      height: 100,
      transform: [{ translateY: height.value }],
    }),
    [],
  )

  const [searchText, setSearchText] = React.useState("")

  useFocusedInputHandler(
    {
      onChangeText: ({ text }) => {
        "worklet"
        runOnJS(setSearchText)(text)
      },
    },
    [],
  )

  return (
    <Animated.View style={[$container, $animatedContainer]}>
      <Suggestions />
      <View style={$promptContainer}>
        <LaunchPad />
        <Input value={searchText} />
        {searchText === "" ? <Avatar /> : <Send />}
      </View>
    </Animated.View>
  )
}

const $promptContainer: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  gap: spacing.md,
  justifyContent: "space-evenly",
}

const $container: ViewStyle = {
  width: "100%",
  paddingHorizontal: spacing.md,
  paddingTop: spacing.md,

  gap: spacing.md,
}
