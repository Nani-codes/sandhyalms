
import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div style={{display:"flex",alignContent:"center",justifyContent:"center"}}>
          <SignUp />
        </div>
      );
}