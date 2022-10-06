/**
 * Sample React Native TurboModuleExample
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {Button, SafeAreaView, StatusBar, Text} from 'react-native';
import RTNCalculator from 'rtn-calculator/js/NativeCalculator';

export const TurboModuleExample: () => React.ReactNode = () => {
  const [result, setResult] = useState<number | null>(null);
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <Text style={{marginLeft: 20, marginTop: 20}}>
        random number={result ?? '??'}
      </Text>
      <Button
        title="Compute"
        onPress={async () => {
          const value = await RTNCalculator?.random();
          if (value) {
            setResult(value);
          }
        }}
      />
    </SafeAreaView>
  );
};
