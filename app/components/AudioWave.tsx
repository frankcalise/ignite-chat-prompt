import * as React from 'react'
import Animated, { ZoomIn, ZoomOut, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withTiming } from 'react-native-reanimated'

function WaveBar({ color, size }: { color: string; size: number }) {
  const height = useSharedValue(size)

  React.useEffect(() => {
    const randomValue = Math.floor(Math.random() * size * 6)
    height.value = withDelay(
      Math.random() * 1000,
      withRepeat(withTiming(randomValue, { duration: Math.random() * 200 + 200 }), Infinity, true)
    )
  }, [])

  const stylez = useAnimatedStyle(() => {
    return {
      height: height.value,
      backgroundColor: color,
      opacity: 0.8,
      borderRadius: 2,
      width: size,
    }
  })

  return (
    <Animated.View style={stylez} />
  )
}

export function AudioWave({ color, size }: { color: string; size: number })  {
  const count = 24
  return (
    <Animated.View
      style={{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: size / 8,
      }}
      entering={ZoomIn}
      exiting={ZoomOut}
    >
      {Array.from({ length: count }).map((_, index) => (
        <WaveBar key={index} color={color} size={size / (count * 2)} />
      ))}
    </Animated.View>
}