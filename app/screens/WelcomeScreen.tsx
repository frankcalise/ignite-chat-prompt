import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { TextInput, View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "../navigators"
import { PromptBar } from "app/components/PromptBar"
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated"
import { Message } from "app/components/Message"
import { useReanimatedKeyboardAnimation } from "react-native-keyboard-controller"
import { history } from "app/components/Message/data"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useSafeAreaInsetsStyle } from "app/utils/useSafeAreaInsetsStyle"
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen(_props) {
  const { height, progress } = useReanimatedKeyboardAnimation()

  const $containerInsets = useSafeAreaInsetsStyle(["top"])
  const { bottom } = useSafeAreaInsets()

  const scrollViewStyle = useAnimatedStyle(
    () => ({
      transform: [{ translateY: height.value }, ...$inverted.transform],
    }),
    [],
  )

  const fakeView = useAnimatedStyle(
    () => ({
      height: Math.abs(height.value),
    }),
    [],
  )

  const $bottomHeight = useAnimatedStyle(
    () => ({
      height: interpolate(progress.value, [0, 1], [bottom, 0]),
      // backgroundColor: "blue",
    }),
    [progress, bottom],
  )

  return (
    <View style={[$container, $containerInsets]}>
      <Animated.ScrollView showsVerticalScrollIndicator={false} style={scrollViewStyle}>
        <View style={$inverted}>
          <Animated.View style={fakeView} />
          {history.map((message, index) => (
            <Message key={index} {...message} />
          ))}
        </View>
      </Animated.ScrollView>
      <PromptBar />
      <Animated.View style={$bottomHeight} />
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  justifyContent: "flex-end",
}

const $inverted: ViewStyle = {
  transform: [
    {
      scaleY: -1,
    },
  ],
}
