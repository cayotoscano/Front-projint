import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  saveSession(token: string, user: any) {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  }

  getToken() {
    return localStorage.getItem("token");
  }

  getUser() {
    const u = localStorage.getItem("user");
    return u ? JSON.parse(u) : null;
  }

  isLogged() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  isTokenExpired(token: string): boolean {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const now = Math.floor(Date.now() / 1000);
    return payload.exp < now;
  } catch {
    return true;
  }
}


}
