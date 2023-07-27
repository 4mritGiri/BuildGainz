import React, { useEffect, useState } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';


export default function ReportLayout() {

  const colorScheme = useColorScheme();

  return (
    <>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name='FeedingReport' />
          <Stack.Screen name='WorkoutReport' />
        </Stack>
      </ThemeProvider>
    </>
  );
}
