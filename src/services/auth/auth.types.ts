export interface ITokenResponse {
    token: string;
    refreshToken: string;
}

export interface IAuthResponse extends ITokenResponse {
    name: string;
    email: string;
}

export interface ICurrentResponse extends IAuthResponse {
    _id: string;
}

export interface ISignoutResponse {
    message: string;
}
