import { User } from 'lucide-react';
import React from 'react';
// import { FaUserCircle } from 'react-icons/fa';

function ProfileButton() {
    return (
    <div  className="w-12 h-12 flex items-center justify-center rounded-full  cursor-pointer">
        {/* <FaUserCircle  /> */}
        <User className="w-full h-full text-gray-100 hover:text-gray-200" />
    </div>
    );
}

export default ProfileButton;