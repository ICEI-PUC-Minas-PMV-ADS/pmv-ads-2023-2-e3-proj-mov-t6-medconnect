import { useAuth } from "../hooks/useAuth";
import { AuthNavigation } from "./AuthNavigation";
import { StackNavigation } from "./StackNavigation";

async function teste(){
 const { getAllEspecialistas } = useAuth();
 const es = await getAllEspecialistas()
 console.log(es)
}

export const StartNavigation = () => {
  const { user, getAllEspecialistas } = useAuth();
 
   
  return user ? <StackNavigation /> : <StackNavigation />
}
