/* 1. Írj egy `setCookie` nevű függvényt, ami a paraméterként kapott stringet eltárolja
egy `token` nevű sütiben, ami 15 perc után lejár!
*/
const setCookie (num) => {
    const expires = new Date(Date.now() + (15 * 60 * 1000)).toUTCString();
    document.cookie = `token=${num}; expires=${expires}`
}

export default setCookie;
