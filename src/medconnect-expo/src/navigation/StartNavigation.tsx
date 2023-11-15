import { useAuth } from "../hooks/useAuth";
import { AuthNavigation } from "./AuthNavigation";
import { StackNavigation } from "./StackNavigation";
 
export const StartNavigation = () => {

  const { user } = useAuth();
   console.log(user)
  return user ? <StackNavigation /> : <AuthNavigation />
}
