import SideSection from "../_components/shared/SideSection";

export default function SignInPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between h-screen flex-col-reverse xl:flex-row overflow-y-scroll">
      <div className="w-full h-full flex-1">{children}</div>
      <div className="w-full h-full flex-1">
        <SideSection />
      </div>
    </div>
  );
}
