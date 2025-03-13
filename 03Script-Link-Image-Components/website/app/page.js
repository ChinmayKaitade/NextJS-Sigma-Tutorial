import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Homepage Component</h1>
      <div className="container mx-auto">
        <img
          width={200}
          height={200}
          src="https://images.unsplash.com/photo-1741514377043-edcdfe6de3a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
          alt=""
        />
      </div>
    </div>
  );
}
