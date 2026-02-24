export function getFromUrlOrLocalStorage(key) {
    if (typeof window === 'undefined')
        return null;

    const params = new URLSearchParams(window.location.search);
    let value = params.get(key);
    if (value) {
        window.localStorage.setItem(`client_${key}`, value);
        return value;
    }

    value = window.localStorage.getItem(`client_${key}`);
    return value;
}