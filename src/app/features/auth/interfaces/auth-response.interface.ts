export interface AuthResponse {
    accessToken: string;
    user: {
        id: string;
        name: string;
        role: string;
    };
}
