export interface LoginResponse {
    data: {
      accessToken: string;
      refreshToken: string;
    };
  }