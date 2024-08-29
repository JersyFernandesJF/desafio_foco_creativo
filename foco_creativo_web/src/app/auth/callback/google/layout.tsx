import Image from "next/image";

export default function AuthSignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid sm:grid-cols-2 grid-cols-1 h-screen">
      {children}
      <section className="hidden sm:flex bg-primary p-10 justify-center items-center flex-col">
        <div>
          <Image
            src={require("@/assets/images/icon.svg")}
            alt=""
            width={280}
            height={280}
          />
        </div>
      </section>
    </main>
  );
}
