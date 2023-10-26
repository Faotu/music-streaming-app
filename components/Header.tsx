"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface HeaderProps {
  children: React.ReactNode;
  className: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();

  const handleLogout = () => {
    // This const will enable the user to logout from the application
  };

  return <div>This is the Header component</div>;
};

export default Header;
