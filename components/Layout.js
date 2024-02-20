import Head from 'next/head';
import Header from './Header';
import Image from "next/image";
import React from 'react';

export default function Layout({ children }) {
    return (
      <div>
        <Head>
         <title>테스트밸리 - 전자제품 사는게 즐겁다</title>
         <link rel="shortcut icon" href="/testvalley.ico"/>
         
        </Head>
        <Header />
         {/* Page content */}
      <main>{children}</main>
      </div>
    );
  }