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
      firstName: 'Admin',
      lastName: 'Usuario',
      email: 'admin@example.com',
      password: 'admin',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin',
      categories: ['Tecnología', 'Negocios', 'Ciencia'],
      newsletter: true
    },
    {
      id: 2,
      firstName: 'Usuario',
      lastName: 'Normal',
      email: 'user@example.com',
      password: 'user',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user',
      categories: ['Deportes', 'Entretenimiento'],
      newsletter: false
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

  register(newUser: User): boolean {
    // Verificar si el email ya existe
    if (this.mockUsers.some(user => user.email === newUser.email)) {
      return false;
    }
    
    // Agregar el nuevo usuario
    this.mockUsers.push(newUser);
    // Autenticar al usuario automáticamente
    this.currentUserSubject.next(newUser);
    return true;
  }
}