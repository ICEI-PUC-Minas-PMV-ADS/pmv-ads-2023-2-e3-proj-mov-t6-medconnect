import { useAuth } from "../hooks/useAuth";
import { AuthNavigation } from "./AuthNavigation";
import { StackNavigation } from "./StackNavigation";
 
export const StartNavigation = () => {

  const { user } = useAuth();
   
  return user ? <StackNavigation /> : <AuthNavigation />
}
