import Image from "next/image";

export default function SwipeLocation({ image }) {
  return (
    <div style={{ display: 'flex', height: '110px', width: '100%', alignItems:'flex-end' ,justifyContent:'flex-end'}}>
      <Image src={image} alt="SwipeLocation" height={90} />
    </div>
  );
}