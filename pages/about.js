// pages/about.js
import Link from 'next/link';

export default function About() {
  return (
    <main style={{backgroundColor:'white',width:'100%',height:'100rem'}}>
    <div style={{backgroundColor:'white',width:'100%',height:'100%'}}>
    <h1 style={{color:'black',width:'100%',height:'10rem'}}>소개 페이지</h1>
      <Link href="/">
      <h1 style={{color:'black',width:'100%',height:'100%'}}>홈 페이지로 이동</h1>
      </Link>
    </div>
    </main>
  );
}
