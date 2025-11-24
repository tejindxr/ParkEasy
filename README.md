
setup rn project 

# 1. Create project with latest stable RN
npx @react-native-community/cli@latest init MyApp --version 0.82.1
cd MyApp

# 2. Add TypeScript using official RN config
npm install -D typescript @react-native/typescript-config @types/jest @types/react @types/react-test-renderer

cat > tsconfig.json << 'EOF'
{
  "extends": "@react-native/typescript-config"
}
EOF

# 3. Convert App to TS
mv App.js App.tsx

cat > App.tsx << 'EOF'
import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>React Native 0.82.1 + TypeScript ✅</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18 }
});

export default App;
EOF

# 4. Install iOS pods
cd ios
pod install
cd ..

# 5. Run iOS
npx react-native run-ios#6 Add navigation npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context===> for deices xcrun simctl list devicesnpx react-native run-ios --udid <device-udid>




app/
 ├── main.py
 ├── database/
 │     └── connection.py
 ├── models/
 │     └── user.py
 ├── schemas/
 │     └── user.py
 ├── routers/
 │     └── auth.py
 ├── utils/
 │     ├── hashing.py
 │     └── jwt_handler.py
 └── config/
       └── settings.py