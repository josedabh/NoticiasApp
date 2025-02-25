import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../utils/data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Usuario mock inicial
  private mockUsers: User[] = [
    {
      id: 1,
      username: 'admin',
      email: 'admin@example.com',
      password: 'admin',
      role: 'admin',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin'
    },
    {
      id: 2,
      username: 'user',
      email: 'user@example.com',
      password: 'user',
      role: 'user',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user'
    }
  ];

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor() {
    // Inicialmente establecemos el usuario admin como logged
    this.currentUserSubject.next(this.mockUsers[0]);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string): boolean {
    const user = this.mockUsers.find(u => u.email === email && u.password === password);
    if (user) {
      this.currentUserSubject.next(user);
      return true;
    }
    return false;
  }

  logout(): void {
    this.currentUserSubject.next(null);
    // Opcional: limpiar cualquier dato almacenado en localStorage si lo usas
    localStorage.removeItem('currentUser');
  }
}