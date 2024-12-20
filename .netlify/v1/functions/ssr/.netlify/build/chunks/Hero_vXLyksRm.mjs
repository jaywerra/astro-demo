import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as createAstro, i as renderComponent, j as renderHead, k as renderSlot } from './astro/server_BeBMAsud.mjs';
import 'kleur/colors';
import 'clsx';
import { GraphQLClient } from 'graphql-request';
/* empty css                          */

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> <a href="/" class="block h-[50px] w-[120px] bg-blue-600"></a> </div>`;
}, "/Users/jwerra/Desktop/demo/src/components/Logo.astro", void 0);

const $$Astro$2 = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navigation;
  const currentPath = Astro2.url.pathname;
  const client = new GraphQLClient(process.env.HG_ENDPOINT);
  const pagesQuery = `
    query MyQuery {
        pages {
            slug
            title
        }
    }
`;
  const { pages } = await client.request(pagesQuery);
  const navLinks = pages.map((page) => ({
    ...page,
    slug: page.slug.startsWith("/") ? page.slug : `/${page.slug}`
  }));
  return renderTemplate`${maybeRenderHead()}<nav> <ul class="flex gap-6"> ${navLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.slug, "href")}${addAttribute(`text-xl ${currentPath === link.slug ? "text-blue-600" : "text-black"}`, "class")}> ${link.title} </a> </li>`)} </ul> </nav>`;
}, "/Users/jwerra/Desktop/demo/src/components/Navigation.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="py-4 bg-slate-100"> <div class="container mx-auto"> <div class="flex justify-between items-center px-4 lg:px-0"> ${renderComponent($$result, "Logo", $$Logo, {})} ${renderComponent($$result, "Navigation", $$Navigation, {})} </div> </div> </header>`;
}, "/Users/jwerra/Desktop/demo/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="py-4 bg-slate-50"> <div class="container mx-auto px-4 lg:px-0"> <div class="flex justify-between items-center"> ${renderComponent($$result, "Navigation", $$Navigation, {})} <div class="text-lg">
&copy; Lorem ipsum // ${(/* @__PURE__ */ new Date()).getFullYear()} </div> </div> </div> </footer>`;
}, "/Users/jwerra/Desktop/demo/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro Basics</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> <div class="flex flex-col h-screen" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} <div class="flex-grow" data-astro-cid-sckkx6r4>${renderSlot($$result, $$slots["default"])}</div> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </div> </body></html>`;
}, "/Users/jwerra/Desktop/demo/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { heading } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-24 lg:py-36 bg-slate-300"> <div class="container mx-auto px-4 lg:px-0"> <h1 class="text-6xl">${heading}</h1> </div> </section>`;
}, "/Users/jwerra/Desktop/demo/src/components/Hero.astro", void 0);

export { $$Layout as $, $$Hero as a };
