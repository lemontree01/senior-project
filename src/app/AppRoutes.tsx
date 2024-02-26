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
import { Theme } from "./App";
import { AdminPoliceman } from "~/pages/AdminPoliceman/ui/AdminPoliceman";
import { MainAdmin } from "~/pages/MainAdmin";

export const AppRoutes: React.FC<{theme: Theme}> = ({theme}) => {
  return (
    <Routes>
      <Route path="/home" element={<Home theme={theme}/>} />
      <Route path="/audio" element={<VoicePrompt />} />
      <Route path="/text" element={<TextPrompt />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/result" element={<Result />} />
      <Route path="/text-result" element={<TextResult />} />
      {/* <Route path="/audio-result" element={<AudioResult />} /> */}
      <Route path="/admin-criminal" element={<Admin />} />
      <Route path="/admin-policeman" element={<AdminPoliceman />} />
      <Route path="/admin" element={<MainAdmin />} />
      <Route path="/bio" element={<Bio />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}
