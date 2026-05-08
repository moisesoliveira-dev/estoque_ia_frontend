export interface UpdateUserDto {
    name?: string;
    email?: string;
    role?: 'admin' | 'manager' | 'viewer';
}
