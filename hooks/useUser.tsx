import { Subscription, UserDetials } from "@/types";
import { User } from "@supabase/auth-helpers-nextjs";
import {
  useSessionContext,
  useUser as useSupaUser,
} from "@supabase/auth-helpers-react";
import { createContext } from "react";

type UserContextType = {
  accessToken: string | null;
  user: User | null;
  userDetails: UserDetials | null;
  isLoading: boolean;
  subscription: Subscription;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export interface Props {
  [propName: string]: any;
}

export const MyUserContextProvider = (props: Props) => {
  const {
    session,
    isLoading: isloadiingUser,
    supabaseClient: supabase,
  } = useSessionContext();

  const user = useSupaUser();
};
