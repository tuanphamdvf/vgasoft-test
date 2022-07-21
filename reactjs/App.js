import React, { useState } from 'react';

export default function App() {
  const [students, setStudent] = useState([
    {
      id: 1,
      name: 'Nguyễn văn A',
      age: 15,
      address: 'Hà nội',
    },
    {
      id: 2,
      name: 'Nguyễn văn B',
      age: 16,
      address: 'Nam định',
    },
    {
      id: 3,
      name: 'Nguyễn văn C',
      age: 16,
      address: 'Vĩnh phúc',
    },
  ]);
  const deleteStudent =  (e) => {
    const id = parseInt(e.target.value);
    const removedArr = students.filter((student, index, arr) => student.id !== id);
    setStudent(removedArr);
  };
  // Câu 1: In ra danh sách học sinh dưới dạng bảng
  // Câu 2: Tạo nút Xóa cho từng học sinh trong bảng (click là xóa học sinh đó khỏi bảng)

  return (
    <div className="App">
      <div>Danh sach hoc sinh</div>
      <table>
        <tbody>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>address</th>
          </tr>
          {students.map((item) => {
            return (
              <tr key={item.id}>
                <th>{item.id}</th>
                <th>{item.name}</th>
                <th>{item.age}</th>
                <th>{item.address}</th>
                <th>
                  <button onClick={deleteStudent} value={item.id}>
                    delete
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
