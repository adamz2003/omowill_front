import React from 'react'
import { useAuth } from '../../context/AuthProvider';
import Navbar from '../../component/navbar/navbar';
import AuthNav from '../../component/promiseNav/AuthNav';
import Footer from '../../component/footer/footer';
import ContentDeath from '../../component/my/death/contentDeath';

export default function SmpWill() {
  const { isAuthenticated } = useAuth();
  return (
    <>
      {
        !isAuthenticated ? <Navbar /> : <AuthNav />
      }
      <ContentDeath />
      <Footer />
    </>
  );
}
