import type { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { RootState } from "../../../app/store";

const RequireAdmin = ({ children }: { children: ReactNode }) => {
  const user = useSelector((state: RootState) => state.auth.user);
  if (!user) return <Navigate to="/admin/login" replace />;
  return <>{children}</>;
};

export default RequireAdmin;
