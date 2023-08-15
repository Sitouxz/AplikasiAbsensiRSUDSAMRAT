import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3001'); // Ganti PORT dengan port server Anda

const PageExampleClient = () => {
  const [messageReceived, setMessageReceived] = useState([]);

  useEffect(() => {
    const handleReceivedMessage = (data) => {
      // Mendengarkan event 'message' dari server
      setMessageReceived((prevMessages) => [...prevMessages, data]);
    };

    socket.on('recieve_msg', handleReceivedMessage);

    return () => {
      socket.off('recieve_msg', handleReceivedMessage); // Membersihkan listener saat komponen unmount
    };
  }, []); // Menggunakan array dependensi kosong untuk menjalankan useEffect hanya saat mount

  return (
    <div className="w-96 mx-auto my-8 p-4 bg-white rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Formulir Chat</h2>
      <div className="mb-4">
        <ul>
          {messageReceived.map((msg, index) => (
            <li key={index}>
              <strong>{msg.title}:</strong> {msg.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PageExampleClient;
