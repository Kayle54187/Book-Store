import SideSection from "../_components/shared/SideSection";

export default function SignUnPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between h-screen flex-col xl:flex-row">
      <div className="w-full h-full flex-1">
        <SideSection />
      </div>
      <div className="w-full h-full flex-1">{children}</div>
    </div>
  );
}
