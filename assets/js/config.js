export const SITE_CONFIG = {
  siteName: "Ministério Seven — Testes",
  domain: "andrewlindolfo.github.io",
  publicSiteUrl: "https://andrewlindolfo.github.io/ministerio-seven-site-test/",
  adminSiteUrl: "https://andrewlindolfo.github.io/ministerio-seven-site-test/admin/",
  integrationApiUrl: "",
  instagramUrl: "https://www.instagram.com/ministeriosev7en/",
  instagramHandle: "@ministeriosev7en",
  contatoEmail: "ministeriosev7enlouvor@gmail.com",
  defaultTheme: "dark",
  collections: {
    admins: "admins",
    musicas: "musicas",
    cifras: "cifras",
    programacoes: "programacoes",
    albuns: "albuns",
    downloads: "downloads",
    config: "config",
    contatos: "contatos"
  }
};

export function getPublicSiteUrl(path = "") {
  return new URL(String(path).replace(/^\/+/, ""), SITE_CONFIG.publicSiteUrl).href;
}

export function getAdminSiteUrl(path = "") {
  return new URL(String(path).replace(/^\/+/, ""), SITE_CONFIG.adminSiteUrl).href;
}
