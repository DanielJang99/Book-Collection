const SESSIONSTORAGE_KEY = "token";

export default class TokenService {
    static get() {
        return sessionStorage.getItem(SESSIONSTORAGE_KEY);
    }
    static save(token) {
        sessionStorage.setItem(SESSIONSTORAGE_KEY, token);
    }
    static remove() {
        sessionStorage.removeItem(SESSIONSTORAGE_KEY);
    }
}
