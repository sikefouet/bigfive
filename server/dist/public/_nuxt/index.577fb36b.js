import { a as c, _ as m } from "./Logo.d7fcc067.js"; import { _, r as d, f as p, o as i, c as r, a, F as u, g as f, i as h, b as l, t as x, u as v } from "./entry.f3796fb3.js"; import "./nuxt-link.0bad7dff.js"; import "./axios.8f19e258.js"; const y = { id: "menureso" }, b = { id: "lesros", class: "d-flex flex-row justify-content-end" }, j = ["href"], w = ["src", "alt"], T = { __name: "SocialLinks", setup(g) { const e = d({ socialLinks: [] }), s = t => `/${t}`; return p(async () => { try { const t = await c.get("/public/social.json"); e.socialLinks = t.data } catch (t) { console.error(t) } }), (t, o) => (i(), r("div", y, [a("ul", b, [(i(!0), r(u, null, f(e.socialLinks, n => (i(), r("li", { key: n.id }, [a("a", { href: n.url, target: "_blank" }, [a("img", { src: s(n.icon), alt: n.platform }, null, 8, w)], 8, j)]))), 128))])])) } }, L = _(T, [["__scopeId", "data-v-d7f9ae20"]]); const k = { id: "homewrapper", class: "container-fluid d-flex align-items-center flex-column justify-content-center vh-100 w-100" }, $ = { id: "ontwo", class: "row w-100" }, S = { id: "main", class: "col-12 d-flex flex-column justify-content-center align-items-center" }, A = { __name: "index", setup(g) { const e = d({ logoAltText: "", sidebarText: "", logo: "", sloganbigfive: "", metadesc: "" }); return p(async () => { try { const s = await c.get("/public/textesHomepage.json"), t = await c.get("/public/graphiques.json"), o = await c.get("/public/global.json"); e.logoAltText = s.data.logoAltText, e.sidebarText = s.data.sidebarText, e.logo = t.data.logo, e.sloganbigfive = o.data.sloganbigfive, e.metadesc = o.data.hompage.metadesc, e.homepageTitle = o.data.hompage.title } catch (s) { console.error(s) } }), h(() => { v({ title: e.homepageTitle, meta: [{ hid: "description", name: "description", content: e.metadesc }, { property: "og:title", content: e.homepageTitle }, { property: "og:description", content: e.metadesc }] }) }), (s, t) => { const o = m; return i(), r("div", k, [a("div", $, [a("div", S, [l(o, { id: 1 }), a("h1", null, x(e.sloganbigfive), 1), l(L)])])]) } } }, F = _(A, [["__scopeId", "data-v-05664e6e"]]); export { F as default };