declare namespace Express {
    interface Request {
        accessToken?: string;
        userId?: string;
        wallet?: string;
        os?: string;
        displayName?: string;
        ipcountry?: string;
    }
}