import SignInForm from "../_components/SignInForm";

export default function SignInPage() {
  return (
    <div className="p-10 flex flex-col justify-center items-center h-full w-full space-y-10 ">
      <div className="text-center">
        <h1 className="font-bold text-4xl text-[#497CBF]">Sign In</h1>
      </div>
      <div className="xl:w-3/5 xl:h-2/4 h-full w-full">
        <SignInForm />
      </div>
    </div>
  );
}
