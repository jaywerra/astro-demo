/* empty css                                  */
import { e as createComponent, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_BeBMAsud.mjs';
import 'kleur/colors';
import { GraphQLClient } from 'graphql-request';
import { a as $$Hero, $ as $$Layout } from '../chunks/Hero_vXLyksRm.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const client = new GraphQLClient(process.env.HG_ENDPOINT);
  const pagesQuery = `query MyQuery {
	pages {
		slug
		title
		content {
			html
		}
	}
}`;
  await client.request(pagesQuery);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "home" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "heading": "Demo" })} ` })}`;
}, "/Users/jwerra/Desktop/demo/src/pages/index.astro", void 0);
const $$file = "/Users/jwerra/Desktop/demo/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
