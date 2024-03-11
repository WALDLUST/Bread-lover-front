import Image from "next/image";

export default function Banner({image}) {
  return (
    <div style={{ display: 'flex', height: '160px', width: '320px' }}>
      <Image src={image}  alt="Banner" width={320} height={160} />
    </div>
  );
}
