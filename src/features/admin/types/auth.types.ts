export interface AuthUser {
  email: string;
  fullName: string;
  roles: string[];
}

export interface AuthState {
  user: AuthUser | null;
  accessToken: string | null;
}
