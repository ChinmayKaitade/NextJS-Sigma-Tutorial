import Image from "next/image";

export default function Home() {
  return (
    <div className="container my-5 size-80 bg-red-300 relative">
      <Image
        width={100}
        height={100}
        className="mx-auto width={700} height={700} fill={true}"
        src="https://imgs.search.brave.com/_X3ijziiuj6DLz-uLSFfpV-s-U-Qnf4Mvk8Pw97csS4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kZW1v/LnNpcnYuY29tL3Ns/aWRlc2hvdy9pbWcv/bXpwLmpwZw"
        alt="slider image"
      />
    </div>
  );
}
