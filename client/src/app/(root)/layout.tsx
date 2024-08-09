import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col py-4">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-2 md:gap-8 md:p-4">
          {children}
        </main>
        <Footer/>
      </div>
    </>
  );
}
