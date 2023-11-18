import { useAuth } from "../hooks/useAuth";
import { AuthNavigation } from "./AuthNavigation";
import { Start } from "./DrawerNavigation";
 
export const StartNavigation = () => {

  const { user, token } = useAuth();
 
  return user ? <Start /> : <AuthNavigation />
}
