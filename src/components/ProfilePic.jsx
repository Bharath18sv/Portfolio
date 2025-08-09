import React from 'react'

function ProfilePic() {
  return (
    <div>
      <img
        src="ProfilePIc.jpeg"
        alt="Profile Picture"
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "50%", // Makes it circular
          border: "4px solid #fff",
          boxShadow: "0 10px 20px rgba(247, 245, 245, 0.2)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          cursor: "pointer",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 15px 25px rgba(0, 0, 0, 0.3)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
        }}
      />
    </div>
  );
}

export default ProfilePic
