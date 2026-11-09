import { useState } from "react";
import type { FormEvent } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import type { RootState } from "../../../app/store";
import { useLogin } from "../hooks/useAdmin";
import ExplorerWindow from "../../../components/explorer/ExplorerWindow";

const input =
  "w-full h-9 px-3 text-sm border border-line bg-paper focus:outline-none focus:border-accent";

const AdminLogin = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();
  const login = useLogin();
  const [email, setEmail] = useState("admin@local");
  const [password, setPassword] = useState("admin123");

  if (user) return <Navigate to="/admin" replace />;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    login.mutate(
      { email, password },
      { onSuccess: () => navigate("/admin") },
    );
  };

  return (
    <ExplorerWindow title="Login" path="/admin/login" items={0}>
      <form onSubmit={onSubmit} className="max-w-xs flex flex-col gap-2">
        <label className="text-xs text-muted">email</label>
        <input className={input} value={email} onChange={(e) => setEmail(e.target.value)} />
        <label className="text-xs text-muted">password</label>
        <input
          className={input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {login.isError && (
          <p className="text-xs text-accent">{(login.error as Error).message}</p>
        )}
        <button
          type="submit"
          disabled={login.isPending}
          className="h-9 mt-1 text-sm font-bold border border-line bg-select hover:bg-paper active:translate-y-px disabled:opacity-50"
        >
          {login.isPending ? "checking..." : "login"}
        </button>
      </form>
    </ExplorerWindow>
  );
};

export default AdminLogin;
