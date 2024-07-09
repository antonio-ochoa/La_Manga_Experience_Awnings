export function getUrl (lang: string, href: string) {
    if (href === "") {
        if (lang === "de") { return "/de" }
        if (lang === "fr") { return "/fr" }
        return "/"
    }
    if (lang === "de") { return "/de/" + href }
    if (lang === "fr") { return "/fr/" + href }
    return "/" + href
}