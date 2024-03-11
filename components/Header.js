

export default function Header() {
  return (
    <div style={{backgroundColor:'white',display:'flex',  boxShadow: '0px 1px 2px gray', width:'100%',height:'90px',justifyContent:'center',alignItems:'flex-end',position:'fixed',flexDirection:'row'}}>
      <p style={{fontSize:'25px', fontWeight:'bold',textDecorationLine:'underline'}}>탐욕의 빵순이</p>
      <p style={{fontSize:'20px', fontWeight:'normal',color:'gray'}}>님 반가워요!</p>
    </div>
  );
}
