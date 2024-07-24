
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <div className="max-w-[1290px] my-4 mt-8 mx-auto">

        
          {children}
      
   </div>
     
  );
}
