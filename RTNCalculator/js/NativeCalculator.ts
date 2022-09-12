import {TurboModule, TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  add(a: number, b: number): Promise<number>;

  random(): Promise<number>;
}

export default TurboModuleRegistry.get<Spec>('RTNCalculator') as Spec | null;
