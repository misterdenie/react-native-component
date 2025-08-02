import { View, Text, StyleSheet } from 'react-native';
// ฟังก์ชันคอมโพเนนต์สำหรับแสดงข้อความหัวข้อ
export default function MyComponent() {
  return (
    <View style={styles.container}>
      {/* ข้อความหัวข้อที่รับค่าจาก props */}
      <Text style={styles.text}>แอพพลิเคชั่นบุหรี่ไฟฟ้า</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { margin: 10, padding: 16, backgroundColor: "orange",width: '100%' },
  text: { fontSize: 18, color: "#333" },
});
