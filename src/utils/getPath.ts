export function getPath (newLang: string, { pathname }: { pathname: string }, pastLang: string) {
    let newPath = pathname;
    if (pastLang === "DE" || pastLang === "FR") { newPath = pathname.slice(3) }
    if (newLang === "de") { return "/de" + newPath }
    if (newLang === "fr") { return "/fr" + newPath }
    return newPath
}