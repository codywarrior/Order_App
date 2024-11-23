/**
 * ParallaxScrollView
 *
 * This component is used as a wrapper component for the scrollable pages.
 */

// External Dependencies
import { PropsWithChildren, FC } from "react";
import Animated, { useAnimatedRef } from "react-native-reanimated";

import { useBottomTabOverflow } from "@/components/ui/TabBarBackground";

const ParallaxScrollView: FC<PropsWithChildren> = ({ children }) => {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const bottom = useBottomTabOverflow();

  return (
    <Animated.ScrollView
      ref={scrollRef}
      scrollEventThrottle={16}
      scrollIndicatorInsets={{ bottom }}
      contentContainerStyle={{ paddingBottom: bottom }}
    >
      {children}
    </Animated.ScrollView>
  );
};

export default ParallaxScrollView;
