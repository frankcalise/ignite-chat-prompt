import * as React from "react"
import { View } from "react-native"
import { spacing } from "app/theme"

export function Suggestions() {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 24,
        width: "100%",
        gap: spacing.sm,
      }}
    >
      <View
        style={{
          borderRadius: 16,
          width: 90,
          height: 24,
          backgroundColor: "lightblue",
        }}
      />
      <View
        style={{
          borderRadius: 16,
          width: 90,
          height: 24,
          backgroundColor: "lightblue",
        }}
      />
      <View
        style={{
          borderRadius: 16,
          width: 90,
          height: 24,
          backgroundColor: "lightblue",
        }}
      />
    </View>
  )
}
