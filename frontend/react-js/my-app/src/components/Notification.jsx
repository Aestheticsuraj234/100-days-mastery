import React from 'react';

const Notification = ({ notficationMessage }) => {
  return (
    <div>
      {/* Welcome message */}
      <h1>Welcome to Dashboard</h1>

      {/* Conditional rendering of the notification message with inline styles */}
      {notficationMessage && (
        <p
          style={{
            color: 'red', // Text color
            fontWeight: 'bold', // Bold text
            backgroundColor: '#f8d7da', // Light red background
            padding: '10px', // Padding around the text
            borderRadius: '5px', // Rounded corners
            border: '1px solid #f5c6cb', // Border for emphasis
            marginTop: '10px', // Space above the notification
          }}
        >
          {notficationMessage}
        </p>
      )}
    </div>
  );
};

export default Notification;