/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState } from "react";
import { Button, SafeAreaView, StatusBar, Text } from "react-native";
import RTNCalculator from "rtn-calculator/js/NativeCalculator";

const App: () => React.ReactNode = () => {
  const [result, setResult] = useState<number | null>(null);
  return (
    <SafeAreaView>
      <StatusBar barStyle={"dark-content"} />
      <Text style={{ marginLeft: 20, marginTop: 20 }}>3+7={result ?? "??"}</Text>
      <Button
        title="Compute"
        onPress={async () => {
          const value = await RTNCalculator?.add(3, 7);
          if (value) {
            setResult(value);
          }
        }}
      />
    </SafeAreaView>
  );
};
export default App;
