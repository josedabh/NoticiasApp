import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../utils/data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Array con usuarios 
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

  //Observables
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  /**
   * Retorna el usuario actual sin necesidad de suscribirse al observable.
   * @returns {User | null} El usuario autenticado o null si no hay ninguno.
   */
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

  /**
   * Metodo para cerra sesión
  */
  logout(): void {
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser');
  }

  /**
   * Método para registrar un nuevo usuario.
   * @param newUser - User con los datos del nuevo usuario.
   * @returns {boolean} True si el registro es exitoso, false si el email ya existe.
   */
  register(newUser: User): boolean {
    if (this.mockUsers.some(user => user.email === newUser.email)) {
      return false;
    }
    
    this.mockUsers.push(newUser);
    this.currentUserSubject.next(newUser);
    return true;
  }
}