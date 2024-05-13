import * as React from "react"
import { View, ViewStyle } from "react-native"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { colors } from "app/theme"

export function LaunchPad() {
  return (
    <View style={$container}>
      <MaterialIcons name="apps" color={colors.text} size={24} />
    </View>
  )
}

const $container: ViewStyle = {
  alignItems: "center",
  backgroundColor: "lightgrey",
  borderRadius: 16,
  height: 32,
  justifyContent: "center",
  width: 32,
}
