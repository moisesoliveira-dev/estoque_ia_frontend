export interface CreateUserDto {
    name: string;
    email: string;
    role: 'admin' | 'manager' | 'viewer';
}
