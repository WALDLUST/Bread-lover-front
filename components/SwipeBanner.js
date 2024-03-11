import Image from "next/image";

export default function SwipeBanner({ image }) {
  return (
    <div style={{ display: 'flex', height: '410px', width: '320px' }}>
      <Image src={image} alt="SwipeBanner" width={320} height={410} />
    </div>
  );
}
