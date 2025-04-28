import React, { useEffect, useState } from "react";

const UserAvatar = () => {
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    // LocalStorage'dan foydalanuvchi ma'lumotlarini olish
    const user = JSON.parse(localStorage.getItem("User")); // Mahalliy foydalanuvchini chaqirish
    if (user && user.avatar_url) {
      setAvatarUrl(user.avatar_url); // avatar_url maydonini olish
    }
  }, []); // Faqat birinchi yuklashda ishlaydi

  return (
    <div className="pro">
      {avatarUrl ? (
        <img src={avatarUrl} alt="User Avatar" />
      ) : (
        <p>Avatar not found</p>
      )}
    </div>
  );
};

export default UserAvatar;