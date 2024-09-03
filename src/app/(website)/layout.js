import Aside from "@/components/aside/Aside";

export default function RootLayout({ children }) {
  return (
    <div className="flex">
      <Aside />
      <main className=" m-[5vh] ml-0 mr-16 w-calc-full-minus-329">
        {children}
      </main>
    </div>
  );
}
