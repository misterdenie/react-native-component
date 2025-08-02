import { View, StyleSheet } from 'react-native'; // นำเข้า View และ StyleSheet จาก react-native
import MyComponent from './components/MyComponent'; // นำเข้า MyComponent ที่สร้างไว้

// ฟังก์ชันคอมโพเนนต์หลักของแอป
export default function App() {
  return (
    <View style={styles.container}>
      {/* แสดง MyComponent  */}
      <MyComponent  />
      <MyComponent  />
      <MyComponent  />
      <MyComponent  />
    </View>
  );
}

const styles = StyleSheet.create({
 container: {flex: 1, justifyContent: 'center', alignItems: 'center'}
});

