import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "~/pages/Home";
import { VoicePrompt } from "~/pages/VoicePrompt";
import { TextPrompt } from "~/pages/TextPrompt";
import { SignUp } from "~/pages/SignUp";
import { SignIn } from "~/pages/SignIn";
import { Result } from "~/pages/Result";
import { TextResult } from "~/pages/TextResult";
import { Bio } from "~/pages/Bio";
import { AudioResult } from "~/pages/AudioResult";
import { Admin } from "~/pages/Admin";
import { Theme, User } from "./App";
import { AdminPoliceman } from "~/pages/AdminPoliceman/ui/AdminPoliceman";
import { MainAdmin } from "~/pages/MainAdmin";
import { SearchCriminal } from "~/pages/SearchCriminal/SearchCriminal";
import { ListCriminals } from "~/pages/ListCriminals/ListCriminals";
import { Contacts } from "~/pages/Contacts/Contacts";
import { EditCriminal } from "~/pages/EditCriminal/EditCriminal";
import { useState } from "react";
import { ICriminal, IUser } from "~/shared/lib/types";
import { ListUsers } from "~/pages/ListUsers/ListUsers";
import { EditUser } from "~/pages/EditUser/EditUser";

interface IApp {
  theme: Theme;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  user: User;
}

export const AppRoutes: React.FC<IApp> = ({ theme, user, setUser }) => {
  const [currentCriminal, setCurrentCriminal] = useState<ICriminal | null>(
    null
  );
  const [currentUser, setCurrentUser] = useState<IUser | null>(
    null
  );

  if (user.name === null) {
    return (
      <Routes>
        <Route
          path="/login"
          element={<SignIn setUser={setUser} user={user} />}
        />
        <Route
          path="/register"
          element={<SignUp setUser={setUser} user={user} />}
        />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
        <Route
          path="/login"
          element={<SignIn setUser={setUser} user={user} />}
        />
        <Route
          path="/register"
          element={<SignUp setUser={setUser} user={user} />}
        />
        <Route path="/home" element={<Home theme={theme} />} />
        <Route path="/audio" element={<VoicePrompt />} />
        <Route path="/text" element={<TextPrompt />} />
        <Route path="/result" element={<Result />} />
        <Route path="/text-result" element={<TextResult />} />
        <Route
          path="/edit-criminal"
          element={<EditCriminal currentCriminal={currentCriminal} />}
        />
        {/* <Route path="/audio-result" element={<AudioResult />} /> */}
        <Route
          path="/admin-criminal"
          element={<Admin setCurrentCriminal={setCurrentCriminal} />}
        />
        <Route path="/admin-policeman" element={<AdminPoliceman />} />
        <Route path="/admin" element={<MainAdmin />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/edit-user" element={<EditUser user={currentUser} />} />
        <Route path="/search-criminal" element={<SearchCriminal />} />
        <Route path="/list-users" element={<ListUsers setCurrentUser={setCurrentUser}/>} />
        <Route
          path="/list-criminals"
          element={<ListCriminals setCurrentCriminal={setCurrentCriminal} />}
        />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    );
  }
};
