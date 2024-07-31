import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div style={{display:"flex",alignContent:"center",justifyContent:"center"}}>
      <SignIn />
    </div>
  );
}
