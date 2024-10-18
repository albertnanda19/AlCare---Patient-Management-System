import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <div className="flex items-center mb-12 gap-2 h-10">
            <Image
              src={"/assets/icons/logo.png"}
              height={1000}
              width={1000}
              alt="patient"
              className="h-full w-fit"
            />
            <h1>AlCare</h1>
          </div>
        </div>
      </section>
    </div>
  );
}
