import React from "react"
import { StyleSheet, Text, View } from "react-native"
export type MessageProps = {
  text: string
  sender?: boolean
}

export function Message({ text, sender }: MessageProps) {
  return (
    <View style={sender ? styles.senderContainer : styles.recipientContainer}>
      <Text style={styles.message}>{text}</Text>
    </View>
  )
}

const container = {
  borderRadius: 10,
  padding: 10,
  margin: 10,
  marginVertical: 5,
}
const styles = StyleSheet.create({
  senderContainer: {
    alignSelf: "flex-end",
    backgroundColor: "#e0e0e0",
    ...container,
  },
  recipientContainer: {
    alignSelf: "flex-start",
    backgroundColor: "#50FF00",
    ...container,
  },
  message: {
    color: "#000000",
  },
})
