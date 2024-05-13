import * as React from "react"
import { View, ViewStyle } from "react-native"
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons"
import { colors } from "app/theme"

export function Avatar() {
  return (
    <View style={$container}>
      <MaterialIcons name="account-circle" color={colors.text} size={24} />
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
