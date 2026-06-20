import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as createFileRoute, h as useRouter, m as Link, p as createRootRouteWithContext, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DDG_fZb2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BVLATrBA.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-cream px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl heading-serif text-forest",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "Página não encontrada."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "btn-outline-gold mt-6 inline-block",
					children: "Início"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-cream px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "heading-serif text-2xl",
				children: "Algo deu errado"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => {
					router.invalidate();
					reset();
				},
				className: "btn-gold mt-6",
				children: "Tentar novamente"
			})]
		})
	});
}
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Vitor & Laura · 16 Abril 2027" },
			{
				name: "description",
				content: "Convite de casamento de Vitor e Laura — 16 de Abril de 2027, Cerimonial Linda Rosa, Linhares - ES."
			},
			{
				property: "og:title",
				content: "Vitor & Laura · 16 Abril 2027"
			},
			{
				property: "og:description",
				content: "Convite de casamento de Vitor e Laura."
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800;900&family=Great+Vibes&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "pt-BR",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var hero_default = "/assets/hero-BQDTM14N.jpg";
var venue_default = "/assets/venue-CdthsJlt.jpg";
var g1_default = "/assets/g1-DM_ROaDy.jpg";
var g2_default = "/assets/g2-DDsUeXl9.jpg";
var g3_default = "/assets/g3-DqtLlxrp.jpg";
var g4_default = "/assets/g4-CIqNB2Eh.jpg";
var g5_default = "/assets/g5-DOwWwiLr.jpg";
var finale_default = "/assets/finale-BA10Bws1.jpg";
var logo_default = "/assets/logo-B8KBr549.png";
var qrcode_pix_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAYAAACAvzbMAAAAAklEQVR4AewaftIAAA8gSURBVO3BwW4lSZIEQTMH//+XdQvYw5wi0OOc7HxkqUj5I5Ik/ZcmkiQtTCRJWphIkrQwkSRpYSJJ0sJEkqSFiSRJCxNJkhYmkiQtTCRJWphIkrQwkSRpYSJJ0sJEkqSFiSRJCxNJkhYmkiQtTCRJWphIkrQwkSRpYSJJ0sJEkqSFiSRJCxNJkhYmkiQtTCRJWphIkrQwkSRpYSJJ0sJEkqSFr7yobX4bICdtswXkpm2eAOSmbbaAPKVtngBkq21ugJy0zVuAnLTNFpCttrkBctI2vw2QN0wkSVqYSJK0MJEkaWEiSdLCRJKkhYkkSQtf+VBAPlHbvKFttoBstc1T2uYpQE7a5qcBctM2W0Bu2mYLyFbbnAB5CpBP1DafZiJJ0sJEkqSFiSRJCxNJkhYmkiQtTCRJWphIkrTwlR+qbZ4A5C1AttrmpG1ugGwBOWmbGyBbbfOGttkCstU23wHkCUBu2uYEyE/UNk8A8tNMJElamEiStDCRJGlhIknSwkSSpIWJJEkLX9G/BsgbgNy0zQmQm7Z5Sttstc0TgGy1zQ2QEyA3bXPTNltATtrmBsgT2uYGiJ43kSRpYSJJ0sJEkqSFiSRJCxNJkhYmkiQtTCRJWviK/jVtswXkpwFy0zY3QLba5gltswXkpm1OgHwHkJO2uWmbrbbR7zWRJGlhIknSwkSSpIWJJEkLE0mSFiaSJC185YcC8tMAuWmbNwB5Qtt8R9ucANkC8pS22QKyBeSmbU6AbLXNFpCfCIj+30SSpIWJJEkLE0mSFiaSJC1MJElamEiStDCRJGnhKx+qbX6btrkBctI2N0BO2uYGyEnb3AA5aZsbIDdt84a2OQHylLY5AXLTNjdATtrmBsgWkJO2uQFy0jY3QLbaRv/MRJKkhYkkSQsTSZIWJpIkLUwkSVqYSJK0MJEkaeErLwLyNwFy0zZPALIF5KZtttrmEwH5aYDctM0JkJu2OQFy0zYnQG7a5glA9L8xkSRpYSJJ0sJEkqSFiSRJCxNJkhYmkiQtlD/ykrY5AbLVNvp8QG7a5gTITdv8JkBu2uYNQLba5gbISdtsAfmOtjkBctM2TwDyhokkSQsTSZIWJpIkLUwkSVqYSJK0MJEkaWEiSdLCV14E5KRt3gDkO9rmCUDe0DY3QE7a5qZtngLkpG1ugPw2QE7a5ilts9U2W0BO2uYGyBuA3LTNp5lIkrQwkSRpYSJJ0sJEkqSFiSRJCxNJkha+8qK22QJy0jZPaZsbIFtt84S2uQFyAuQnaputtnkCkKcAuWmbEyBbbXMD5KRtboCctM1T2kb/zESSpIWJJEkLE0mSFiaSJC1MJElamEiStDCRJGmh/JGXtM0TgOg/2uYpQN7QNm8ActM2J0Bu2mYLyFbbbAHZapunADlpmxsgN22zBeQ3mUiStDCRJGlhIknSwkSSpIWJJEkLE0mSFr7yIiCfpm2eAuSmbZ4A5A1t8xYgJ22z1TZPAbLVNjdAntA2N0CeAOQpbXMD5KRtttpmC8gbJpIkLUwkSVqYSJK0MJEkaWEiSdLCRJKkhYkkSQtfeVHbnAC5aZsnAPmOttkCstU2J21zA+SkbW6AbAG5aZsTIG8AstU2TwGyBeQpbXMCZKtttoB8R9ucALlpmy0gn2YiSdLCRJKkhYkkSQsTSZIWJpIkLUwkSVoof+QlbfNpgNy0zQ2QJ7TNDZDfpm22gJy0zRaQT9Q2N0C22uYJQG7a5gTITdtsAflEbXMC5A0TSZIWJpIkLUwkSVqYSJK0MJEkaWEiSdLCRJKkha+8CMhJ29wAOWmbrba5AbLVNjdAToDctM0JkKe0zRaQLSA3bXMC5KZtntA2W0C+o21OgDwFyEnb3AA5aZsbIE9pmxMgW23z00wkSVqYSJK0MJEkaWEiSdLCRJKkhYkkSQtf+VBAbtrmBMhN25wAuWmbp7TNFpCTtnkKkJO2eQuQLSBPAHLTNidtcwPkt2mbJ7TNU9rmBsgWkE8zkSRpYSJJ0sJEkqSFiSRJCxNJkhYmkiQtTCRJWih/5CVtcwLkpm1OgNy0zQmQt7TNE4DctM0TgNy0zVOAPKFttoA8pW1ugJy0zVOAbLXNE4B8R9ucAPmbTCRJWphIkrQwkSRpYSJJ0sJEkqSFiSRJCxNJkhbKH/ll2uYGyEnbfAeQk7bRfwC5aZsnALlpmy0gJ22zBeSmbW6AbLXNCZCbtjkBstU2TwFy0zYnQG7a5glA3jCRJGlhIknSwkSSpIWJJEkLE0mSFiaSJC2UP/KStvlpgNy0zQmQ36ZttoBstc0NkK22+WmA/DRtcwPkE7XNFpCTttkC8oaJJEkLE0mSFiaSJC1MJElamEiStDCRJGlhIknSwld+KCBbbbPVNlttswXkKW3zBCBvaRv9R9tsAdlqmye0zScC8hQgn2YiSdLCRJKkhYkkSQsTSZIWJpIkLUwkSVr4yocCctM2J0C2gDylbW6AbLXNE4DctM1T2uYEyE3bnAB5StucALlpm622uQHyaYDctM0WkKe0zVbbbLXNCZA3TCRJWphIkrQwkSRpYSJJ0sJEkqSFiSRJCxNJkha+8iIgW0BO2uYpbXMDZKttToDcADlpmxsgJ22z1TY3QG6AvKFtToA8BchJ29wA0T/TNjdAngJkq20+zUSSpIWJJEkLE0mSFiaSJC1MJElamEiStPCVF7XNFpA3AHkKkK22OQGyBeSmbbba5gbISds8BcinAXLTNjdAPk3bvAHIU9rmbzKRJGlhIknSwkSSpIWJJEkLE0mSFiaSJC1MJElaKH/kJW1zAuSmbX4bIJ+mbW6AnLTNDZCttvlpgNy0zRuA3LTNCZCntM1vA+SkbW6AfJqJJEkLE0mSFiaSJC1MJElamEiStDCRJGnhKy8CctI2N0C22uYEyHe0zQmQm7Z5ApA3APmOtjkBctM2J0De0DZbQP42QLba5ilAttpmq21OgLxhIknSwkSSpIWJJEkLE0mSFiaSJC1MJElamEiStPCVX6htttrmLUBO2uYGyBva5qdpmy0gb2ib7wBy0jY3QE7aZgvITds8Ach3tM0WkJO2+WkmkiQtTCRJWphIkrQwkSRpYSJJ0sJEkqSFr3woIDdt8wYgT2mbEyA3bbMF5BMB+U2A3LTNCZCbtvlEQLaAfCIgW22zBeTTTCRJWphIkrQwkSRpYSJJ0sJEkqSFiSRJCxNJkhbKH/nLtM1TgJy0zVOAnLTNJwKy1TZvAHLTNltAntI2J0De0DZbQG7a5ilAttrmBMhN25wAecNEkqSFiSRJCxNJkhYmkiQtTCRJWphIkrQwkSRp4Su/UNvcADlpmxsgW0Bu2uYEyBuA3LTNU9rmBMhT2uakbbaAPKVtboCctM0WkKcA0WebSJK0MJEkaWEiSdLCRJKkhYkkSQsTSZIWvvKh2uYGyBOA3LTNDZCTtrkBstU2W0C2gJy0zU3bbLXNFpAbIFttc9I2TwGyBeSmbd7QNidAngLkpm1OgPxNJpIkLUwkSVqYSJK0MJEkaWEiSdLCRJKkhYkkSQtfeVHbnAB5Q9vcALlpmye0zQ2QN7TNCZCbtrkBctI2vw2QTwTkpG1ugDyhbW6AnLTNU9rmBshJ29wA+TQTSZIWJpIkLUwkSVqYSJK0MJEkaWEiSdLCV/RfaZstIE9pm58GyFOAnLTNFpAtIE9pmy0gT2mbJwC5aZsTIDdtcwPkpG2e0jYnQN4wkSRpYSJJ0sJEkqSFiSRJCxNJkhYmkiQtTCRJWvjKh2qbLSBPAbLVNltAntI2W0Ce0jYnQLaA/DZAbtrmpG22gGy1zQ2Qk7bZapsbIG8A8tNMJElamEiStDCRJGlhIknSwkSSpIWJJEkLX3kRkDe0zQmQm7Z5Q9vcANkC8oS2+Q4gJ22zBWSrbW6AbLXNCZCbttkCctM2TwDyFCBbbXMD5A1tcwLkDRNJkhYmkiQtTCRJWphIkrQwkSRpYSJJ0sJEkqSFr3yotvlEQG7a5gTIVttstc0WkC0gN23zidpmq21OgNwAOWmbGyA3bXPSNjdAttrmBMhN25wA2WqbpwC5aZvfZCJJ0sJEkqSFiSRJCxNJkhYmkiQtTCRJWih/5CVtcwJkq222gNy0zVOAbLXNCZCbttkC8pS2+ZsAOWmb7wBy0jZbQJ7SNvpngLxhIknSwkSSpIWJJEkLE0mSFiaSJC1MJElamEiStFD+iP4VbfPbAHlD22wBeUrbfCIgT2ibGyAnbXMD5KRtboA8pW3eAOTTTCRJWphIkrQwkSRpYSJJ0sJEkqSFiSRJC195Udv8NkDeAOS3aZsTIDdts9U2J0A+EZCttnkDkDe0zQ2QNwD5aSaSJC1MJElamEiStDCRJGlhIknSwkSSpIWJJEkLX/lQQD5R23yittkCctI2W0Bu2uYTAXkCkJu2OQHyHW1zAuSmbU6A/DRAngLkpm1O2mYLyBsmkiQtTCRJWphIkrQwkSRpYSJJ0sJEkqSFiSRJC1/5odrmCUDeAuSkbbaA3LTNE9rmE7XNG9rmBshTgJy0zQ2Qk7bZAnLTNltt84a22QLy00wkSVqYSJK0MJEkaWEiSdLCRJKkhYkkSQtf0cdomye0zQ2Qn6ZtfhogW23zHUBOgGwBeQOQm7Y5AXLTNvpnJpIkLUwkSVqYSJK0MJEkaWEiSdLCRJKkhYkkSQtf0b8GyE3bvKFtToDctM0JkJu2+WmAbLXNDZAtIDdtcwLkpm1OgNy0zQmQN7TNDZA3tM0WkDdMJElamEiStDCRJGlhIknSwkSSpIWJJEkLX/mhgPxNgGy1zVbbbLXNDZCttrkB8jdpm622eQqQJ7TNW9rmBMhN25wAuWmbTzORJGlhIknSwkSSpIWJJEkLE0mSFiaSJC1MJElaKH/kJW3z2wA5aZsbICdtcwPk07TNDZCtttkCctM2J0Bu2uYEyE3bPAXIVttsATlpmy0gN21zAuQpbfMUIJ9mIknSwkSSpIWJJEkLE0mSFiaSJC1MJElaKH9EkqT/0kSSpIWJJEkLE0mSFiaSJC1MJElamEiStDCRJGlhIknSwkSSpIWJJEkLE0mSFiaSJC1MJElamEiStDCRJGlhIknSwkSSpIWJJEkLE0mSFiaSJC1MJElamEiStDCRJGlhIknSwkSSpIWJJEkLE0mSFiaSJC1MJEla+D8ajYZOrbachQAAAABJRU5ErkJggg==";
var flor_esquerda_default = "/assets/flor-esquerda-DByNkYud.png";
var flor_direita_default = "/assets/flor-direita-Dqcx8HvV.png";
var campo_florido_default = "/assets/campo-florido-NDMQ6Cuv.png";
var aviao_default = "/assets/aviao-Cs_rCHY2.png";
var anel_default = "/assets/anel-BhYZb1GH.png";
var coracao_default = "/assets/coracao-DWOR0UCZ.png";
var Route = createFileRoute("/")({
	head: () => ({
		meta: [{ title: "Vitor & Laura · 16 Abril 2027" }, {
			name: "description",
			content: "Convite de casamento de Vitor e Laura · 16 de Abril de 2027, Cerimonial Linda Rosa."
		}],
		link: [{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Montserrat:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap"
		}]
	}),
	component: Index
});
var WEDDING = (/* @__PURE__ */ new Date("2027-04-16T19:00:00-03:00")).getTime();
var NAV_ITEMS = [
	{
		label: "Início",
		target: "inicio"
	},
	{
		label: "Nossa História",
		target: "historia"
	},
	{
		label: "Detalhes",
		target: "detalhes"
	},
	{
		label: "Confirmação",
		target: "confirmacao"
	},
	{
		label: "Presentes",
		target: "presentes"
	},
	{
		label: "Recados",
		target: "recados"
	}
];
function useCountdown() {
	const [t, setT] = (0, import_react.useState)({
		d: 0,
		h: 0,
		m: 0,
		s: 0
	});
	(0, import_react.useEffect)(() => {
		const tick = () => {
			const diff = Math.max(0, WEDDING - Date.now());
			setT({
				d: Math.floor(diff / 864e5),
				h: Math.floor(diff / 36e5 % 24),
				m: Math.floor(diff / 6e4 % 60),
				s: Math.floor(diff / 1e3 % 60)
			});
		};
		tick();
		const id = setInterval(tick, 1e3);
		return () => clearInterval(id);
	}, []);
	return t;
}
function Monogram({ size = 56 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative inline-flex items-center justify-center",
		style: {
			width: size * 1.6,
			height: size * 1.6
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: logo_default,
			alt: "Vitor & Laura",
			className: "h-full w-full object-contain"
		})
	});
}
function MapPin({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className,
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "10",
			r: "3"
		})]
	});
}
function Heart({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className,
		fill: "currentColor",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z" })
	});
}
function Divider() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex justify-center my-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "divider-gold",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-3 w-3 text-gold" })
		})
	});
}
function Index() {
	const [showDistinction, setShowDistinction] = (0, import_react.useState)(false);
	const [showPixModal, setShowPixModal] = (0, import_react.useState)(false);
	const [startIndex, setStartIndex] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full min-h-screen bg-cream overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `transition-all duration-700 ease-in-out ${showDistinction || showPixModal ? "transform translate-x-full opacity-0 pointer-events-none absolute w-full" : "relative w-full opacity-100"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, {
					onVerMais: () => setShowDistinction(true),
					onAjude: () => setShowPixModal(true),
					startIndex,
					setStartIndex
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `transition-all duration-700 ease-in-out fixed inset-0 h-full w-full ${showDistinction && !showPixModal ? "translate-x-0 opacity-100 z-50" : "transform -translate-x-full opacity-0 pointer-events-none"}`,
				children: showDistinction && !showPixModal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DistinctionPage, { onVoltar: () => setShowDistinction(false) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `transition-all duration-700 ease-in-out fixed inset-0 h-full w-full ${showPixModal ? "translate-x-0 opacity-100 z-50" : "transform translate-x-full opacity-0 pointer-events-none"}`,
				children: showPixModal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PixPage, { onVoltar: () => setShowPixModal(false) })
			})
		]
	});
}
function Page({ onVerMais, onAjude, startIndex, setStartIndex }) {
	const t = useCountdown();
	const [activeSection, setActiveSection] = (0, import_react.useState)("inicio");
	const autoGalleryRef = (0, import_react.useRef)(null);
	const galleryImages = [
		g1_default,
		g2_default,
		g3_default,
		g4_default,
		g5_default
	];
	const totalImages = galleryImages.length;
	const visibleImages = Array.from({ length: totalImages }).map((_, i) => {
		return galleryImages[(startIndex + i) % totalImages];
	});
	const startAutoGallery = () => {
		if (autoGalleryRef.current) clearInterval(autoGalleryRef.current);
		autoGalleryRef.current = setInterval(() => {
			setStartIndex((prev) => (prev + 1) % totalImages);
		}, 4e3);
	};
	(0, import_react.useEffect)(() => {
		startAutoGallery();
		return () => {
			if (autoGalleryRef.current) clearInterval(autoGalleryRef.current);
		};
	}, [totalImages]);
	(0, import_react.useEffect)(() => {
		const ids = [
			"inicio",
			"historia",
			"detalhes",
			"confirmacao",
			"presentes",
			"recados"
		];
		ids.map((id) => document.getElementById(id)).filter((el) => el !== null);
		const updateActive = () => {
			const scrollY = window.scrollY;
			const navOffset = 120;
			let current = ids[0];
			for (const id of ids) {
				const el = document.getElementById(id);
				if (!el) continue;
				if (el.getBoundingClientRect().top + scrollY - navOffset <= scrollY) current = id;
				else break;
			}
			setActiveSection(current);
		};
		updateActive();
		window.addEventListener("scroll", updateActive, { passive: true });
		window.addEventListener("resize", updateActive);
		return () => {
			window.removeEventListener("scroll", updateActive);
			window.removeEventListener("resize", updateActive);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "text-ink overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
       @keyframes underlineGrow {
         from { width: 0; left: 50%; }
         to { width: 100%; left: 0; }
       }
       .nav-link {
         position: relative;
         display: inline-block;
       }
       .nav-link::after {
         content: '';
         position: absolute;
         bottom: -4px;
         left: 50%;
         width: 0;
         height: 2px;
         background: #d4a843;
         transition: all 0.3s ease-out;
       }
       .nav-link:hover::after {
         width: 100%;
         left: 0;
       }

       @keyframes shimmer {
         0% { background-position: -1000px 0; }
         100% { background-position: 1000px 0; }
       }
       @keyframes glow-pulse {
         0%, 100% { box-shadow: 0 0 8px rgba(229,207,154,0.3), 0 0 16px rgba(212,168,67,0.15), inset 0 1px 0 rgba(255,255,255,0.4); }
         50% { box-shadow: 0 0 16px rgba(229,207,154,0.5), 0 0 24px rgba(212,168,67,0.25), inset 0 1px 0 rgba(255,255,255,0.6); }
       }
       .confirm-btn {
         position: relative;
         background: linear-gradient(135deg, #f9eecc 0%, #e8d4a0 25%, #d4a843 50%, #e8d4a0 75%, #f9eecc 100%);
         background-size: 200% 100%;
         animation: glow-pulse 3s ease-in-out infinite;
         border: 1px solid rgba(245,230,184,0.6);
         box-shadow: 0 4px 12px rgba(191,161,95,0.35), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.1);
         transition: all 0.4s ease;
       }
       .confirm-btn:hover {
  transform: translateY(-3px) scale(1.03);

  box-shadow:
    0 0 15px rgba(232,201,106,.45),
    0 0 35px rgba(212,168,67,.35),
    0 10px 30px rgba(191,161,95,.45),
    inset 0 1px 0 rgba(255,255,255,.5);

  background: linear-gradient(
    135deg,
    #faf5d8 0%,
    #f2df9d 25%,
    #ddb84f 50%,
    #f2df9d 75%,
    #faf5d8 100%
  );
}
       .confirm-btn:active {
         transform: translateY(0);
       }
       @keyframes heartDanceFlow {
         0% { transform: rotate(0deg) scale(1); }
         15% { transform: rotate(12deg) scale(1.05); }
         30% { transform: rotate(15deg) scale(1.08); }
         50% { transform: rotate(15deg) scale(1.15); }
         70% { transform: rotate(15deg) scale(1.08); }
         85% { transform: rotate(15deg) scale(1.05); }
         100% { transform: rotate(15deg) scale(1); }
       }
       .confirm-btn .heart-icon {
         transform-origin: center;
       }
       .confirm-btn:hover .heart-icon {
         animation: heartDanceFlow 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
       }
     ` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "inicio",
				className: "relative min-h-screen w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_default,
						alt: "Vitor e Laura",
						className: "absolute inset-0 h-full w-full object-cover",
						width: 1920,
						height: 1080
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-r from-black/85 via-black/40 to-black/30" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/60" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "sticky top-0 z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monogram, { size: 64 }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
								className: "hidden lg:flex items-center gap-8 text-[11px] text-cream/90 font-sans-x",
								children: NAV_ITEMS.map((item) => {
									item.target;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `#${item.target}`,
										className: "nav-link hover:text-gold-2 transition font-semibold",
										children: item.label
									}, item.target);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#confirmacao",
								className: "confirm-btn hidden md:inline-flex items-center gap-2.5 px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-forest-3 rounded-full font-sans-x",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Confirmar Presença" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
									className: "heart-icon h-3.5 w-3.5",
									style: { transition: "all 0.3s ease" }
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-10 mx-auto flex max-w-7xl items-center justify-start px-6 pt-10 pb-24 md:pt-20 md:min-h-[80vh]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-full max-w-xl flex flex-col items-center md:items-start text-cream",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center w-full max-w-sm text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "hero-eyebrow text-cream/90 uppercase tracking-[0.2em] text-xs sm:text-sm w-full text-center",
										children: [
											"Com muita alegria",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"convidamos você para o",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"nosso casamento"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "mt-8 hero-names text-6xl sm:text-7xl md:text-8xl flex flex-col items-center w-full text-center",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block",
												children: "Vitor"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "hero-amp block text-5xl sm:text-6xl md:text-7xl my-1 leading-none",
												style: {
													fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
													fontStyle: "italic",
													fontWeight: 300,
													background: "linear-gradient(160deg, #f5e6b8 0%, #d4a843 35%, #e8c96a 55%, #b8892e 80%, #f0d98a 100%)",
													WebkitBackgroundClip: "text",
													WebkitTextFillColor: "transparent",
													backgroundClip: "text",
													filter: "drop-shadow(0 2px 8px rgba(191,161,95,0.35))",
													letterSpacing: "-0.02em",
													lineHeight: 1,
													display: "block"
												},
												children: "&"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block",
												children: "Laura"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-center w-full max-w-[180px] my-5 mx-auto",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-gradient-to-r from-transparent to-gold-2/40 flex-1" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-2.5 w-2.5 text-gold-2 mx-2.5 fill-gold-2/15" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-gradient-to-l from-transparent to-gold-2/40 flex-1" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "hero-eyebrow text-cream/90 w-full tracking-[0.15em] text-center",
										children: "16 Abril 2027"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-14 flex flex-col items-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "#historia",
											className: "group flex flex-col items-center text-gold-2/80 hover:text-gold-2 transition-all duration-500",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "uppercase tracking-[0.4em] text-[11px]",
												style: { fontFamily: "Montserrat" },
												children: "Descubra nossa história"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "animate-scroll-arrow mt-5 text-2xl",
												children: "↓"
											})]
										})
									})
								]
							})
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative bg-[#f2e5c7] py-14 overflow-visible z-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: flor_esquerda_default,
						alt: "",
						"aria-hidden": true,
						className: "pointer-events-none absolute left-0 top-0 w-[120px] sm:w-[180px] md:w-[230px] lg:w-[280px] h-auto object-contain select-none z-30 drop-shadow-[0_10px_15px_rgba(0,0,0,0.15)]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: flor_direita_default,
						alt: "",
						"aria-hidden": true,
						className: "pointer-events-none absolute right-0 bottom-0 w-[120px] sm:w-[180px] md:w-[230px] lg:w-[280px] h-auto object-contain select-none z-30 drop-shadow-[0_10px_15px_rgba(0,0,0,0.15)]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-center mb-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-3 w-3 text-gold" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto flex max-w-5xl items-center justify-center px-8 text-center",
							children: [
								{
									v: t.d,
									l: "DIAS"
								},
								{
									v: t.h,
									l: "HORAS"
								},
								{
									v: t.m,
									l: "MINUTOS"
								},
								{
									v: t.s,
									l: "SEGUNDOS"
								}
							].map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[#9C7A3E] text-6xl md:text-7xl leading-none lining-nums tabular-nums drop-shadow-[0_1px_2px_rgba(0,0,0,0.02)]",
									style: {
										fontFamily: "'Playfair Display', 'Cormorant Garamond', serif",
										fontWeight: 400
									},
									children: String(x.v).padStart(2, "0")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-[10px] md:text-xs text-muted tracking-[0.25em] uppercase font-medium",
									style: { fontFamily: "'Montserrat', 'Inter', sans-serif" },
									children: x.l
								})] }), i < 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-8 h-20 md:h-24 w-px bg-gold/20" })]
							}, x.l))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "historia",
				className: "relative overflow-hidden bg-forest-3 pt-28 pb-20 text-cream z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 w-full h-full pointer-events-none select-none z-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: campo_florido_default,
							alt: "",
							className: "w-full h-full object-cover opacity-20 mix-blend-overlay"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "section-title text-gold-2",
							children: "NOSSA HISTÓRIA"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mt-16 max-w-5xl px-6 relative z-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-[#c9a25a]/40 to-transparent z-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative z-10 grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4",
								children: [
									{
										y: "2018",
										img: coracao_default,
										sizeClass: "h-7 w-7",
										t: "Nosso primeiro encontro"
									},
									{
										y: "2020",
										img: aviao_default,
										sizeClass: "h-[42px] w-[42px] -mt-[8px]",
										t: "Nossa primeira viagem"
									},
									{
										y: "2023",
										img: anel_default,
										sizeClass: "h-[38.68px] w-[38.68px] -mt-[6px]",
										t: "O pedido de casamento"
									},
									{
										y: "2027",
										img: coracao_default,
										sizeClass: "h-7 w-7",
										t: "O nosso grande dia"
									}
								].map((e, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-center text-center px-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center justify-center",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: e.img,
												alt: "",
												className: `${e.sizeClass} object-contain drop-shadow-[0_0_4px_rgba(229,207,154,0.4)]`
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-2 text-gold-2 text-2xl tracking-wide lining-nums",
											style: {
												fontFamily: "'Playfair Display', 'Cormorant Garamond', serif",
												fontWeight: 400
											},
											children: e.y
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-cream/70 text-sm italic leading-relaxed max-w-52",
											children: e.t
										})
									]
								}, index))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-16 text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: onVerMais,
								className: "group relative inline-flex items-center gap-3 overflow-hidden px-10 py-3 rounded-full border border-gold-2/50 text-xs font-semibold uppercase tracking-widest text-gold-2 transition-all duration-700 ease-out hover:scale-[1.04] hover:text-forest-3 hover:border-transparent active:scale-[0.98] shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_rgba(229,207,154,0.55)] font-sans-x",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "\n            absolute inset-0 z-0\n            bg-gradient-to-r from-[#f8e8b6] via-[#e3c885] to-[#a07f3d]\n            -translate-x-full\n            transition-transform duration-500\n            ease-[cubic-bezier(0.22,1,0.36,1)]\n            group-hover:translate-x-0\n          " }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-y-0 z-10 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-[#fff7d1]/80 to-transparent skew-x-[-20deg] animate-[shine_3s_ease-in-out_infinite]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "relative z-20 flex items-center gap-2",
										children: ["Ver mais", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											viewBox: "0 0 24 24",
											className: "h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14M12 5l7 7-7 7" })
										})]
									})
								]
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative bg-cream-2 py-20 overflow-hidden",
				id: "galeria-root",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
          @keyframes slideInFromRight {
            from { transform: translateX(100%); opacity: 0.8; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes slideInFromLeft {
            from { transform: translateX(-100%); opacity: 0.8; }
            to { transform: translateX(0); opacity: 1; }
          }
          
          /* Se o container pai tiver a classe 'direcao-prev', desliza da esquerda. Caso contrário, da direita. */
          .animate-slide-photo {
            animation: slideInFromRight 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          }
          #galeria-root.direcao-prev .animate-slide-photo {
            animation: slideInFromLeft 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          }
        ` }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "section-title text-muted",
							children: "GALERIA"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto mt-12 max-w-7xl px-4 md:px-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 md:grid-cols-4 gap-4 overflow-hidden rounded-lg",
								children: visibleImages.slice(0, 4).map((src, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-[3/4] overflow-hidden rounded-lg shadow-lg ring-1 ring-gold/15 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl animate-slide-photo bg-cream",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src,
										alt: `Galeria ${idx + 1}`,
										loading: "lazy",
										className: "h-full w-full object-cover pointer-events-none select-none"
									})
								}, `${src}-${startIndex}-${idx}`))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									document.getElementById("galeria-root")?.classList.add("direcao-prev");
									setStartIndex((prev) => (prev - 1 + totalImages) % totalImages);
								},
								className: "absolute left-2 md:left-6 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full border border-gold/30 text-gold bg-cream/90 backdrop-blur-md shadow-md transition-all duration-300 hover:bg-gold hover:text-cream hover:scale-105 active:scale-95 z-20 cursor-pointer group",
								"aria-label": "Anterior",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									viewBox: "0 0 24 24",
									className: "h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2.5",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 18l-6-6 6-6" })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									document.getElementById("galeria-root")?.classList.remove("direcao-prev");
									setStartIndex((prev) => (prev + 1) % totalImages);
								},
								className: "absolute right-2 md:right-6 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full border border-gold/30 text-gold bg-cream/90 backdrop-blur-md shadow-md transition-all duration-300 hover:bg-gold hover:text-cream hover:scale-105 active:scale-95 z-20 cursor-pointer group",
								"aria-label": "Próximo",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									viewBox: "0 0 24 24",
									className: "h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2.5",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 18l6-6-6-6" })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 flex justify-center gap-2.5",
								children: galleryImages.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										const root = document.getElementById("galeria-root");
										if (i < startIndex) root?.classList.add("direcao-prev");
										else root?.classList.remove("direcao-prev");
										setStartIndex(i);
									},
									className: `h-1.5 rounded-full transition-all duration-300 cursor-pointer ${startIndex === i ? "bg-gold w-5" : "bg-gold/20 w-1.5 hover:bg-gold/40"}`
								}, i))
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "detalhes",
				className: "grid grid-cols-1 md:grid-cols-3 min-h-[420px] w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative min-h-[260px] md:min-h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: venue_default,
							alt: "Cerimonial Linda Rosa",
							loading: "lazy",
							className: "absolute inset-0 h-full w-full object-cover"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-forest-2 text-cream p-10 md:p-12 flex flex-col relative overflow-hidden justify-center items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 h-full w-full bg-cover bg-center opacity-25 pointer-events-none",
							style={{ backgroundImage: `url(${campoFlorido})` }}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 flex flex-col h-full w-full justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "w-full flex flex-col items-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "section-title text-gold text-center w-full block text-2xl font-semibold tracking-wider",
										children: "DETALHES"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-full",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "mt-6 space-y-6 w-full max-w-md mx-auto",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex gap-4 items-start",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-gold mt-1",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
														viewBox: "0 0 24 24",
														className: "h-6 w-6",
														fill: "none",
														stroke: "currentColor",
														strokeWidth: "1.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
															x: "3",
															y: "5",
															width: "18",
															height: "16",
															rx: "2"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 9h18M8 3v4M16 3v4" })]
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-sans text-xl font-normal text-cream tracking-wide",
													children: "16 de Abril de 2027"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-cream/70 text-sm font-sans mt-0.5",
													children: "Sexta-feira"
												})] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex gap-4 items-start",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-gold mt-1",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
														viewBox: "0 0 24 24",
														className: "h-6 w-6",
														fill: "none",
														stroke: "currentColor",
														strokeWidth: "1.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
															cx: "12",
															cy: "12",
															r: "9"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 7v5l3 2" })]
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-sans text-xl font-normal text-cream tracking-wide",
													children: "19:00 Horas"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-cream/70 text-sm font-sans mt-0.5",
													children: "Cerimônia"
												})] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex gap-4 items-start",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-gold mt-1",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
														viewBox: "0 0 24 24",
														className: "h-6 w-6",
														fill: "none",
														stroke: "currentColor",
														strokeWidth: "1.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 21s-7-7-7-12a7 7 0 1 1 14 0c0 5-7 12-7 12z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
															cx: "12",
															cy: "9",
															r: "2.5"
														})]
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "font-sans text-xl font-normal text-cream tracking-wide uppercase",
														children: "CERIMONIAL LINDA ROSA"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-cream/70 text-sm font-sans mt-1",
														children: "R. Francisco Melo Palheta, 99-167"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-cream/70 text-sm font-sans",
														children: "Interlagos · Linhares - ES"
													})
												] })]
											})
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 text-center w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://maps.app.goo.gl/97WYPZ6ETdf5Z2yPA",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "group relative inline-flex items-center gap-3 px-12 py-4 rounded-full bg-gradient-to-r from-[#d4a843] via-[#f0e6cc] to-[#d4a843] bg-[length:200%_auto] text-forest-3  transition-all duration-700 hover:bg-right hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(212,168,67,0.3)] overflow-hidden",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "\n    absolute inset-y-0\n    z-0\n    -left-1/2\n    w-1/3\n    bg-gradient-to-r\n    from-transparent\n    via-[#fff7d1]/80\n    to-transparent\n    skew-x-[-20deg]\n    animate-[shine_4s_ease-in-out_infinite]\n  " }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 relative z-10 text-forest-3/80 transition-transform duration-500 group-hover:scale-110" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "relative z-10 uppercase tracking-[0.35em] text-[0.85rem] font-semibold",
											style: { fontFamily: "var(--font-sans)" },
											children: "VER NO MAPA"
										})
									]
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative min-h-[260px] md:min-h-full bg-cream-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "Mapa Google",
							className: "absolute inset-0 h-full w-full border-0",
							src: "https://maps.google.com/maps?q=Cerimonial%20Linda%20Rosa%20-%20Linhares%20R.%20Francisco%20Melo%20Palheta,%2099-167%20-%20Interlagos,%20Linhares%20-%20ES,%2029903-250&t=&z=16&ie=UTF8&iwloc=&output=embed",
							loading: "lazy",
							allowFullScreen: "",
							referrerPolicy: "no-referrer-when-downgrade"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "confirmacao",
				className: "relative py-28 pb-20 md:py-36 md:pb-28 bg-cream-2 text-forest-3 overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-forest-3/5 rounded-full blur-[100px] pointer-events-none" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						id: "success-modal",
						className: "fixed inset-0 flex items-center justify-center bg-cream-2/95 backdrop-blur-md z-50 opacity-0 pointer-events-none transition-all duration-500 ease-out",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex flex-col items-center justify-center p-8 text-center max-w-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								id: "giant-heart-container",
								className: "relative transition-all duration-400 scale-100 opacity-100",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "w-72 h-72 sm:w-[400px] sm:h-[400px] text-gold/10 fill-gold drop-shadow-[0_15px_50px_rgba(191,161,95,0.45)]" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								id: "beautiful-phrase",
								className: "absolute z-10 opacity-0 pointer-events-none transition-all duration-500 space-y-4 px-4 translate-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
										className: "heading-serif text-3xl sm:text-5xl text-forest-3 font-medium leading-tight",
										children: [
											"Seu lugar está ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "italic text-gold font-normal",
												children: "reservado"
											}),
											" ✨"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm sm:text-base text-forest-3/80 max-w-sm mx-auto font-light leading-relaxed",
										children: "Histórias lindas são feitas de grandes momentos, e o nosso grande dia só estará completo com o seu sorriso iluminando a nossa celebração."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] tracking-[0.25em] text-gold uppercase font-bold pt-4",
										children: "Nos vemos em breve!"
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-10 max-w-6xl mx-auto px-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-5 space-y-6 text-center lg:text-left",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold uppercase tracking-[0.4em] text-gold block",
										children: "Sua presença é essencial"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "heading-serif text-4xl sm:text-5xl md:text-6xl tracking-wide leading-[1.1] text-forest-3 font-light",
										children: [
											"Você irá ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "italic font-normal text-gold",
												children: "celebrar"
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"conosco?"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm md:text-base text-forest-3/70 max-w-md mx-auto lg:mx-0 leading-relaxed font-light",
										children: "Por gentileza, confirme sua presença preenchendo os dados ao lado até a data limite."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "lg:col-span-7",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative backdrop-blur-md bg-white/40 p-8 sm:p-12 pt-20 rounded-3xl border border-white/80 shadow-[0_20px_50px_rgba(43,62,49,0.08)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										title: "Área secreta do administrador",
										className: "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cream-2 rounded-2xl p-3 shadow-sm backdrop-blur-sm z-50 cursor-pointer active:scale-95 transition-transform select-none",
										onClick: (e) => {
											const elemento = e.currentTarget;
											const cliques = parseInt(elemento.getAttribute("data-clicks") || "0") + 1;
											elemento.setAttribute("data-clicks", cliques.toString());
											if (cliques >= 5) {
												elemento.setAttribute("data-clicks", "0");
												localStorage.removeItem("rsvp_feito");
												alert("Olá Administrador! Formulário resetado com sucesso.");
												window.location.reload();
											}
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-10 w-10 fill-gold text-gold animate-pulse drop-shadow-[0_3px_8px_rgba(191,161,95,0.3)]" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
										className: "space-y-8",
										id: "rsvp-form",
										ref: (el) => {
											if (!el) return;
											const respondido = localStorage.getItem("rsvp_feito");
											if (respondido) setTimeout(() => {
												const fieldset = document.getElementById("rsvp-fieldset");
												const btnWrapper = document.getElementById("submit-btn-wrapper");
												const btnText = document.getElementById("btn-text");
												const data = JSON.parse(respondido);
												const nameInput = document.getElementById("name-input");
												const guestsInput = document.getElementById("guests-input");
												if (nameInput) nameInput.value = data.nome;
												if (guestsInput) guestsInput.value = data.convidados;
												if (fieldset) fieldset.disabled = true;
												if (btnWrapper) {
													btnWrapper.style.pointerEvents = "none";
													btnWrapper.style.filter = "grayscale(100%)";
													btnWrapper.style.opacity = "0.5";
												}
												if (btnText) btnText.innerText = "Presença Confirmada";
											}, 10);
										},
										onSubmit: (e) => {
											e.preventDefault();
											const modal = document.getElementById("success-modal");
											const heartContainer = document.getElementById("giant-heart-container");
											const phrase = document.getElementById("beautiful-phrase");
											const fieldset = document.getElementById("rsvp-fieldset");
											const btnWrapper = document.getElementById("submit-btn-wrapper");
											const btnText = document.getElementById("btn-text");
											const nameInput = document.getElementById("name-input");
											const guestsInput = document.getElementById("guests-input");
											const radioYes = document.getElementById("attendance-yes");
											const radioNo = document.getElementById("attendance-no");
											if (!nameInput?.value.trim() || !guestsInput?.value.trim() || !radioYes?.checked && !radioNo?.checked) {
												alert("Por favor, preencha todos os campos e selecione uma opção de confirmação.");
												return;
											}
											const nomeValor = nameInput.value;
											const convidadosValor = guestsInput.value;
											const presencaValor = radioYes?.checked ? "Sim" : "Não";
											if (!modal || !heartContainer || !phrase) return;
											if (btnText) btnText.innerText = "Enviando...";
											fetch("https://api.sheetmonkey.io/form/9HE4ZHaNdCwY5pxWpm1uHe", {
												method: "POST",
												headers: { "Content-Type": "application/json" },
												body: JSON.stringify({
													nome: nomeValor,
													quantidade: presencaValor === "Não" ? 0 : Number(convidadosValor),
													confirmacao: presencaValor,
													data: (/* @__PURE__ */ new Date()).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
												})
											}).then((response) => {
												if (!response.ok) throw new Error("Erro na integração com a planilha.");
												heartContainer.style.transform = "scale(1)";
												heartContainer.style.opacity = "1";
												phrase.style.opacity = "0";
												phrase.style.transform = "translateY(16px)";
												modal.style.opacity = "1";
												modal.style.pointerEvents = "auto";
												setTimeout(() => {
													heartContainer.style.transform = "scale(0)";
													heartContainer.style.opacity = "0";
													for (let i = 0; i < 24; i++) {
														const p = document.createElement("div");
														p.innerHTML = "❤️";
														p.style.position = "absolute";
														p.style.left = "50%";
														p.style.top = "50%";
														p.style.fontSize = Math.random() * 14 + 14 + "px";
														p.style.transition = "all 0.6s ease-out";
														p.style.transform = "translate(-50%, -50%)";
														if (heartContainer.parentElement) heartContainer.parentElement.appendChild(p);
														const angle = Math.random() * Math.PI * 2;
														const dist = Math.random() * 160 + 80;
														setTimeout(() => {
															p.style.transform = `translate(calc(-50% + ${Math.cos(angle) * dist}px), calc(-50% + ${Math.sin(angle) * dist}px)) scale(0)`;
															p.style.opacity = "0";
														}, 30);
														setTimeout(() => p.remove(), 650);
													}
													phrase.style.opacity = "1";
													phrase.style.transform = "translateY(0)";
													phrase.style.pointerEvents = "auto";
													setTimeout(() => {
														modal.style.opacity = "0";
														modal.style.pointerEvents = "none";
														localStorage.setItem("rsvp_feito", JSON.stringify({
															nome: nomeValor,
															convidados: convidadosValor
														}));
														if (fieldset) fieldset.disabled = true;
														if (btnWrapper) {
															btnWrapper.style.pointerEvents = "none";
															btnWrapper.style.filter = "grayscale(100%)";
															btnWrapper.style.opacity = "0.5";
														}
														if (btnText) btnText.innerText = "Presença Confirmada";
													}, 2200);
												}, 1200);
											}).catch((error) => {
												console.error(error);
												alert("Ocorreu um erro ao enviar sua confirmação. Por favor, tente novamente.");
												if (btnText) btnText.innerText = "Confirmar Resposta";
											});
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
											id: "rsvp-fieldset",
											className: "space-y-8 border-0 p-0 m-0 disabled:opacity-80",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "relative group w-full",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														id: "name-input",
														required: true,
														placeholder: " ",
														className: "peer w-full bg-transparent border-b-2 border-forest-3/20 py-3 text-base text-forest-3 focus:outline-none focus:border-gold focus:ring-0 transition-colors duration-300 block disabled:border-forest-3/10 disabled:text-forest-3/50"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														htmlFor: "name-input",
														className: "absolute left-0 text-xs font-semibold uppercase tracking-widest text-gold/60 origin-[0%] transition-all duration-300 pointer-events-none\n                       top-3 scale-100\n                       peer-focus:top-0 peer-focus:-translate-y-4 peer-focus:text-gold peer-focus:text-xs\n                       peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:text-gold peer-[:not(:placeholder-shown)]:text-xs",
														children: "Nome Completo"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "relative group w-full",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														id: "guests-input",
														inputMode: "numeric",
														required: true,
														placeholder: " ",
														onInput: (e) => {
															e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "");
														},
														className: "peer w-full bg-transparent border-b-2 border-forest-3/20 py-3 text-base text-forest-3 focus:outline-none focus:border-gold focus:ring-0 transition-colors duration-300 block disabled:border-forest-3/10 disabled:text-forest-3/50"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														htmlFor: "guests-input",
														className: "absolute left-0 text-xs font-semibold uppercase tracking-widest text-gold/60 origin-[0%] transition-all duration-300 pointer-events-none\n                       top-3 scale-100\n                       peer-focus:top-0 peer-focus:-translate-y-4 peer-focus:text-gold peer-focus:text-xs\n                       peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:text-gold peer-[:not(:placeholder-shown)]:text-xs",
														children: "Quantidade de Convidados"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-4 pt-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-xs font-bold uppercase tracking-widest text-gold block mb-2",
															children: "Sua Confirmação"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "grid grid-cols-1 sm:grid-cols-2 gap-4 relative",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																	className: "relative flex items-center justify-between p-4 rounded-xl border border-forest-3/10 bg-white/20 cursor-pointer group hover:bg-white/50 transition-all duration-300 shadow-sm has-[:checked]:border-gold has-[:checked]:bg-white/70 focus-within:border-gold",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "text-sm font-medium text-forest-3/90",
																		children: "Sim, não perco por nada!"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		type: "radio",
																		name: "presenca-opcao",
																		id: "attendance-yes",
																		required: true,
																		className: "accent-gold h-4 w-4 cursor-pointer focus:ring-0 focus:ring-offset-0",
																		onChange: () => {
																			const b = document.getElementById("blasfemia-container");
																			const btn = document.getElementById("confirm-btn");
																			if (b) {
																				b.style.maxHeight = "0px";
																				b.style.opacity = "0";
																				b.style.paddingTop = "0px";
																			}
																			if (btn) {
																				btn.disabled = false;
																				btn.style.opacity = "1";
																				btn.style.filter = "none";
																				btn.style.pointerEvents = "auto";
																			}
																		}
																	})]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																	className: "relative flex items-center justify-between p-4 rounded-xl border border-forest-3/10 bg-white/20 cursor-pointer group hover:bg-white/50 transition-all duration-300 shadow-sm has-[:checked]:border-gold has-[:checked]:bg-white/70 focus-within:border-gold",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "text-sm font-medium text-forest-3/60",
																		children: "Infelizmente não poderei ir"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		type: "radio",
																		name: "presenca-opcao",
																		id: "attendance-no",
																		required: true,
																		className: "accent-gold h-4 w-4 cursor-pointer focus:ring-0 focus:ring-offset-0",
																		onChange: (e) => {
																			const b = document.getElementById("blasfemia-container");
																			const btn = document.getElementById("confirm-btn");
																			if (b && e.target.checked) {
																				b.style.maxHeight = "100px";
																				b.style.opacity = "1";
																				b.style.paddingTop = "16px";
																			}
																			if (btn) {
																				btn.disabled = true;
																				btn.style.opacity = "0.35";
																				btn.style.filter = "grayscale(100%)";
																				btn.style.pointerEvents = "none";
																			}
																		}
																	})]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	id: "blasfemia-container",
																	className: "col-span-full flex justify-center items-center w-full max-h-0 opacity-0 pointer-events-none transition-all duration-500 ease-in-out pt-0 z-30",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "text-2xl sm:text-3xl font-extrabold tracking-[0.25em] text-gold text-center uppercase bg-gold/5 py-3 px-8 rounded-lg border border-gold/15 heading-serif animate-bounce whitespace-nowrap shadow-sm backdrop-blur-sm",
																		children: "BLASFÊMIA!"
																	})
																})
															]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4" })
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "pt-4 relative",
													id: "submit-btn-wrapper",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														type: "submit",
														id: "confirm-btn",
														className: "group relative w-full inline-flex items-center justify-center gap-3 overflow-hidden px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-forest-3 bg-gradient-to-r from-[#e5cf9a] via-[#f3e5c8] to-[#bfa15f] hover:from-[#bfa15f] hover:to-[#e5cf9a] transition-all duration-300 shadow-[0_12px_30px_rgba(191,161,95,0.3)] hover:-translate-y-0.5 font-semibold disabled:transform-none",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															id: "btn-text",
															className: "relative z-10",
															children: "Confirmar Resposta"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4 fill-forest-3 text-transparent" })]
													})
												})
											]
										})
									})]
								})
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "presentes",
				className: "relative py-20 overflow-hidden",
				style: { background: "linear-gradient(rgba(20,20,20,.95), rgba(10,10,10,.98))" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 h-full w-full bg-cover bg-center opacity-50 pointer-events-none mix-blend-overlay",
					style={{ backgroundImage: `url(${campoFlorido})` }}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "section-title text-gold font-sans font-semibold tracking-wider text-2xl",
									children: "LISTA DE PRESENTES"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mx-auto mt-4 max-w-xl text-cream/80 text-sm font-sans tracking-wide",
									children: [
										"Sua presença já é o nosso maior presente,",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"mas se quiser nos presentear, escolha uma opção abaixo:"
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-5 px-6 md:grid-cols-4",
							children: [
								{
									t: "LUA DE MEL",
									d: "Nos ajude a realizar nossa lua de mel dos sonhos",
									i: "case",
									img: "lua-de-mel.png"
								},
								{
									t: "JANTAR ROMÂNTICO",
									d: "Um jantar especial para celebrarmos",
									i: "glass",
									img: "jantar.png"
								},
								{
									t: "AJUDA PARA CASA NOVA",
									d: "Contribua para nossa vida juntos",
									i: "home",
									img: "casa-nova.png"
								},
								{
									t: "OUTRO VALOR",
									d: "Escolha o valor que quiser nos presentear",
									i: "gift",
									img: "outro.png"
								}
							].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative overflow-hidden rounded-xl border border-gold/40 bg-black/40 p-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.15)] backdrop-blur-sm group hover:border-gold transition-all duration-300",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute inset-0 h-full w-full bg-cover bg-center opacity-100 group-hover:scale-110 transition-transform duration-700 pointer-events-none",
										style: { backgroundImage: `url('/src/assets/${c.img.replace(/ /g, "-")}')` }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-0 pointer-events-none" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative z-10",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mx-auto grid h-12 w-12 place-items-center text-gold-2 group-hover:scale-110 transition-transform duration-300",
												children: [
													c.i === "case" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
														viewBox: "0 0 24 24",
														className: "h-8 w-8",
														fill: "none",
														stroke: "currentColor",
														strokeWidth: "1.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
															x: "3",
															y: "7",
															width: "18",
															height: "13",
															rx: "2"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" })]
													}),
													c.i === "glass" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
														viewBox: "0 0 24 24",
														className: "h-8 w-8",
														fill: "none",
														stroke: "currentColor",
														strokeWidth: "1.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 3l2 8a3 3 0 0 0 6 0l2-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 14v6M8 21h8" })]
													}),
													c.i === "home" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
														viewBox: "0 0 24 24",
														className: "h-8 w-8",
														fill: "none",
														stroke: "currentColor",
														strokeWidth: "1.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 11l9-8 9 8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 10v10h14V10" })]
													}),
													c.i === "gift" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
														viewBox: "0 0 24 24",
														className: "h-8 w-8",
														fill: "none",
														stroke: "currentColor",
														strokeWidth: "1.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
															x: "3",
															y: "8",
															width: "18",
															height: "13",
															rx: "1"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 12h18M12 8v13M8 8a2 2 0 1 1 4-2 2 2 0 1 1 4 2" })]
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "mt-4 font-sans text-gold-2 tracking-[.15em] text-sm font-medium",
												children: c.t
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-cream/80 text-xs leading-relaxed font-sans font-light",
												children: c.d
											})
										]
									})
								]
							}, c.t))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 text-center px-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: onAjude,
								className: "group relative inline-flex items-center justify-center gap-3 overflow-hidden px-12 py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-forest-3 bg-gradient-to-r from-[#bfa15f] via-[#f3e5c8] to-[#e5cf9a] hover:from-[#e5cf9a] hover:to-[#bfa15f] transition-all duration-500 shadow-[0_15px_40px_rgba(191,161,95,0.4)] hover:shadow-[0_20px_50px_rgba(191,161,95,0.6)] hover:scale-105 active:scale-98 font-sans font-semibold max-w-full sm:w-auto transform-gpu",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "relative z-10 flex items-center gap-2",
										children: ["Ajude", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											viewBox: "0 0 24 24",
											className: "h-4 w-4 fill-[#8a6d29] text-[#8a6d29] animate-pulse drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" })
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:animate-[shine_1s_ease-in-out]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" })
								]
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "recados",
				className: "relative min-h-120",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent z-20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent z-20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: finale_default,
						alt: "",
						loading: "lazy",
						className: "absolute inset-0 h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-black/70" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 py-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-cream",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-script text-3xl md:text-4xl leading-[1.4] text-cream",
								children: [
									"O amor não consists em olhar",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"um para o outro, mas sim em",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"olhar juntos na mesma direção."
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex items-center gap-3 text-cream/90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-3 w-3 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-sans-x text-[11px]",
									children: "ESPERAMOS VOCÊ NO NOSSO GRANDE DIA!"
								})]
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "relative overflow-hidden bg-forest-3 py-10 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-cover bg-center opacity-15",
					style: { backgroundImage: `url(${campo_florido_default})` }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monogram, { size: 56 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-sans-x text-[10px] text-cream/60 lining-nums",
						children: "VITOR & LAURA · 16 . ABRIL . 2027"
					})]
				})]
			})
		]
	});
}
function DistinctionPage({ onVoltar }) {
	const [bigHeartState, setBigHeartState] = (0, import_react.useState)("hidden");
	const [particles, setParticles] = (0, import_react.useState)([]);
	const handleCelebrate = () => {
		if (bigHeartState !== "hidden") return;
		setBigHeartState("growing");
		setTimeout(() => {
			setBigHeartState("exploding");
			setParticles(Array.from({ length: 50 }).map((_, i) => {
				const angle = Math.random() * Math.PI * 2;
				const distance = 120 + Math.random() * 300;
				return {
					id: Date.now() + i,
					x: 0,
					y: 0,
					scale: .6 + Math.random() * 1,
					tx: Math.cos(angle) * distance,
					ty: Math.sin(angle) * distance - 40,
					rot: (Math.random() - .5) * 120
				};
			}));
			setTimeout(() => {
				setParticles([]);
				setBigHeartState("hidden");
			}, 1200);
		}, 400);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "fixed inset-0 h-full w-full bg-cream py-6 px-6 md:px-12 flex flex-col justify-between overflow-hidden select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes scaleUp {
          0% { transform: scale(0); opacity: 0; }
          70% { transform: scale(1.4); opacity: 1; }
          100% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes implodeOut {
          0% { transform: scale(1.1); opacity: 1; filter: blur(0px); }
          20% { transform: scale(1.5); opacity: 0.9; }
          100% { transform: scale(0); opacity: 0; filter: blur(6px); }
        }
        @keyframes floatAway {
          0% { transform: translate(0, 0) scale(0.2) rotate(0deg); opacity: 0; }
          15% { opacity: 1; }
          100% { transform: translate(var(--tx), var(--ty)) scale(var(--sc)) rotate(var(--rot)); opacity: 0; }
        }
        @keyframes strongPulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(191, 161, 95, 0.5); }
          50% { transform: scale(1.03); box-shadow: 0 0 30px 10px rgba(191, 161, 95, 0.35); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(191, 161, 95, 0); }
        }
        .animate-big-grow { animation: scaleUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        .animate-big-explode { animation: implodeOut 0.3s ease-in forwards; }
        .animate-btn-pulse { animation: strongPulse 1.8s infinite ease-in-out; }
      ` }),
			bigHeartState !== "hidden" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center pointer-events-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `text-gold select-none transform transition-all drop-shadow-[0_15px_30px_rgba(191,161,95,0.5)] ${bigHeartState === "growing" ? "animate-big-grow" : "animate-big-explode"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						viewBox: "0 0 24 24",
						className: "w-64 h-64 sm:w-96 sm:h-96",
						fill: "currentColor",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" })
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-40 flex items-center justify-center pointer-events-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative w-1 h-1",
					children: particles.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute text-gold-2/95 drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]",
						style: {
							left: p.x,
							top: p.y,
							"--tx": `${p.tx}px`,
							"--ty": `${p.ty}px`,
							"--sc": p.scale,
							"--rot": `${p.rot}deg`,
							animation: "floatAway 1.3s cubic-bezier(0.1, 0.8, 0.25, 1) forwards"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							viewBox: "0 0 24 24",
							className: "w-9 h-9",
							fill: "currentColor",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" })
						})
					}, p.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-6 right-8 z-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: onVoltar,
					className: "group inline-flex items-center gap-2.5 px-6 py-2.5 text-[12px] font-semibold uppercase tracking-widest text-gold border border-gold/30 rounded-full bg-cream/90 backdrop-blur-xs hover:bg-gold hover:text-cream hover:border-transparent active:scale-[0.96] transition-all duration-300 font-sans-x shadow-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						viewBox: "0 0 24 24",
						className: "h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2.5",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19 12H5M12 19l-7-7 7-7" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Voltar" })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full h-full flex flex-col justify-center items-center relative py-6 px-4 md:px-12 border border-gold/20 rounded-xl my-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: flor_esquerda_default,
						alt: "",
						"aria-hidden": true,
						className: "pointer-events-none absolute left-0 top-0 w-[180px] sm:w-[260px] md:w-[350px] lg:w-[420px] h-auto object-contain select-none z-30 drop-shadow-[10px_10px_20px_rgba(0,0,0,0.12)]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: flor_direita_default,
						alt: "",
						"aria-hidden": true,
						className: "pointer-events-none absolute right-0 bottom-0 w-[180px] sm:w-[260px] md:w-[350px] lg:w-[420px] h-auto object-contain select-none z-30 drop-shadow-[-10px_10px_20px_rgba(0,0,0,0.12)]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full max-w-4xl mx-auto text-center relative z-20 px-4 md:px-8 mt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-center mb-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-5 w-5 text-gold animate-pulse" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-gold text-xs sm:text-sm tracking-[0.4em] uppercase font-semibold font-sans-x mb-6",
								children: "O amor é feito de escolhas diárias"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-ink text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.15]",
								style: { fontFamily: "'Playfair Display', 'Cormorant Garamond', serif" },
								children: [
									"Celebraremos o início de ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic font-normal text-gold block mt-2",
										style: { fontFamily: "'Cormorant Garamond', serif" },
										children: "uma nova família"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-center gap-5 my-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-20 bg-gold/30" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4 text-gold/40" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-20 bg-gold/30" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-ink/80 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-light font-sans-x",
								style: { fontFamily: "'Montserrat', sans-serif" },
								children: "Mais do que um dia especial, queremos criar memórias que ficarão para sempre em nossos corações. Cada detalhe foi gedacht com muito carinho para que vocês façam parte desse momento tão significativo para nós."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 text-center mt-14 mb-10 relative z-20 px-6",
						children: [
							{
								title: "AMOR",
								desc: "É a nossa maior escolha diária.",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									viewBox: "0 0 24 24",
									className: "h-8 w-8",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "1.2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 9.5c-1.78-2.35-5-2.18-6.5-.2-1.93 2.55-.33 6.33 6.5 11 6.83-4.67 8.43-8.45 6.5-11-1.5-1.98-4.72-2.15-6.5.2z" })
								})
							},
							{
								title: "FAMÍLIA",
								desc: "É o nosso maior sonho.",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									viewBox: "0 0 24 24",
									className: "h-8 w-8",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "1.2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "9",
										cy: "7",
										r: "2.5"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 19c0-2.5 2-4.5 5-4.5s5 2 5 4.5" })]
								})
							},
							{
								title: "AMIZADE",
								desc: "É o que nos sustenta.",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									viewBox: "0 0 24 24",
									className: "h-8 w-8",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "1.2",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 22V10M12 14c-1.5-1-3-0.5-4-1.5M12 11c1.5-1 3-0.5 4-1.5M12 10C11 7.5 12.5 4 12 2c-0.5 2 1 5.5 0 8z" })
								})
							},
							{
								title: "COMPROMISSO",
								desc: "É o que nos une para sempre.",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									viewBox: "0 0 24 24",
									className: "h-8 w-8",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "1.2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "9.5",
										cy: "12.5",
										r: "4.5"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "14.5",
										cy: "11.5",
										r: "4.5"
									})]
								})
							}
						].map((item, index, arr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center px-4 relative group",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-gold mb-3 transition-transform duration-300 group-hover:scale-110",
									children: item.icon
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-ink text-xs sm:text-sm tracking-[0.25em] font-semibold uppercase font-sans-x",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-ink/70 text-xs sm:text-sm font-light max-w-[200px] leading-relaxed font-sans-x",
									children: item.desc
								}),
								index < arr.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden md:block absolute right-0 top-2 bottom-2 w-px bg-gold/20" })
							]
						}, item.title))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-3xl mx-auto text-center mb-8 relative z-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: handleCelebrate,
					className: "animate-btn-pulse inline-flex items-center gap-4 px-14 py-4.5 rounded-full bg-gradient-to-r from-[#e5cf9a] to-[#bfa15f] text-xs sm:text-sm font-bold uppercase tracking-widest text-forest-3 transition-all duration-150 transform active:scale-95 cursor-pointer font-sans-x shadow-[0_5px_25px_rgba(191,161,95,0.35)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4 text-forest-3 animate-[bounce_1s_infinite]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Agradecemos por fazer parte dessa história" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4 text-forest-3 animate-[bounce_1s_infinite_0.5s]" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-center gap-3 mt-6 opacity-40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-14 bg-gold" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-3 w-3 text-gold" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-14 bg-gold" })
					]
				})]
			})
		]
	});
}
function PixPage({ onVoltar }) {
	const [donorName, setDonorName] = (0, import_react.useState)("");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [bigHeartState, setBigHeartState] = (0, import_react.useState)("hidden");
	const [particles, setParticles] = (0, import_react.useState)([]);
	const handleCopyPix = () => {
		navigator.clipboard.writeText("d57055ba-b4bc-456d-b51c-61f3abae0b0e");
		setCopied(true);
		setTimeout(() => setCopied(false), 2e3);
	};
	const handleCelebrate = () => {
		if (bigHeartState !== "hidden") return;
		setBigHeartState("growing");
		setTimeout(() => {
			setBigHeartState("exploding");
			setParticles(Array.from({ length: 70 }).map((_, i) => {
				const angle = Math.random() * Math.PI * 2;
				const distance = 150 + Math.random() * 450;
				return {
					id: Date.now() + i,
					x: 0,
					y: 0,
					scale: .4 + Math.random() * 1.3,
					tx: Math.cos(angle) * distance,
					ty: Math.sin(angle) * distance - 60,
					rot: (Math.random() - .5) * 240
				};
			}));
			setTimeout(() => {
				setParticles([]);
				setBigHeartState("hidden");
			}, 1600);
		}, 500);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "fixed inset-0 h-full w-full bg-[#fdfbf7] overflow-y-auto md:overflow-hidden flex items-center justify-center z-[100] py-6 md:py-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "fixed inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,168,67,0.1)_0%,_transparent_70%)] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes elegantEntrance { 
          from { opacity: 0; transform: scale(0.92) translateY(20px); filter: blur(8px); } 
          to { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); } 
        }
        @keyframes floatOrganically { 
          0%, 100% { transform: translateY(0) rotate(0) scale(1); } 
          50% { transform: translateY(-8px) rotate(1deg) scale(1.01); } 
        }
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .pix-card-container { 
          animation: elegantEntrance 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          background: transparent;
        }
        .pix-card-main {
          background: #ffffff;
          border: 1px solid #f0e6cc;
          border-radius: 40px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(191,161,95,0.15);
        }
        .flower-anim { animation: floatOrganically 8s ease-in-out infinite; }
        .btn-shine { position: relative; overflow: hidden; }
        .btn-shine::after {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 50%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.6), transparent);
          animation: shine 3s infinite;
        }
      ` }),
			bigHeartState !== "hidden" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-[300] flex items-center justify-center pointer-events-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `text-gold select-none transform transition-all drop-shadow-[0_25px_50px_rgba(191,161,95,0.7)] ${bigHeartState === "growing" ? "animate-big-grow" : "animate-big-explode"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						viewBox: "0 0 24 24",
						className: "w-64 h-64 sm:w-96 sm:h-96",
						fill: "currentColor",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" })
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-[290] flex items-center justify-center pointer-events-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative w-1 h-1",
					children: particles.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute text-gold/90 drop-shadow-[0_6px_15px_rgba(0,0,0,0.25)]",
						style: {
							left: p.x,
							top: p.y,
							"--tx": `${p.tx}px`,
							"--ty": `${p.ty}px`,
							"--sc": p.scale,
							"--rot": `${p.rot}deg`,
							animation: "floatAway 1.8s cubic-bezier(0.1, 0.8, 0.25, 1) forwards"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							viewBox: "0 0 24 24",
							className: "w-12 h-12",
							fill: "currentColor",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" })
						})
					}, p.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pix-card-container w-full max-w-4xl px-4 md:px-8 relative scale-[0.85] md:scale-100",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: flor_esquerda_default,
						alt: "",
						className: "flower-anim pointer-events-none absolute -left-12 -top-12 md:-left-24 md:-top-24 w-[120px] sm:w-[180px] md:w-[320px] h-auto object-contain select-none z-[210] drop-shadow-[15px_15px_30px_rgba(0,0,0,0.1)]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: flor_direita_default,
						alt: "",
						className: "flower-anim pointer-events-none absolute -right-12 -bottom-12 md:-right-24 md:-bottom-24 w-[120px] sm:w-[180px] md:w-[320px] h-auto object-contain select-none z-[210] drop-shadow-[-15px_15px_30px_rgba(0,0,0,0.1)]",
						style: { animationDelay: "-4s" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pix-card-main relative z-[200] p-6 md:p-12 lg:p-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-center mb-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-8 w-8 text-[#d4a843] animate-pulse" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-center text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-4 tracking-tight",
								style: { fontFamily: "'Playfair Display', serif" },
								children: [
									"Mande o que seu",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-[#d4a843] font-normal",
										style: { fontFamily: "'Cormorant Garamond', serif" },
										children: "coração mandar"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-center text-sm md:text-base text-forest-3/60 mb-8 font-light max-w-md mx-auto leading-relaxed tracking-wide",
								children: "Sua presença é o nosso maior presente, mas sua generosidade nos ajudará a construir nossos primeiros passos juntos."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "group",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-[9px] uppercase tracking-[0.4em] text-[#d4a843] font-bold mb-3 opacity-80",
											children: "Seu Nome (Opcional)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: donorName,
											onChange: (e) => setDonorName(e.target.value),
											placeholder: "Para nossa gratidão eterna...",
											className: "w-full px-0 py-3 border-b-2 border-[#d4a843]/20 bg-transparent text-forest-3 placeholder-forest-3/30 focus:outline-none focus:border-[#d4a843] transition-all duration-700 font-light text-base md:text-lg"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-[9px] uppercase tracking-[0.4em] text-[#d4a843] font-bold opacity-80",
											children: "Chave Pix Aleatória"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative group p-1 rounded-2xl bg-[#d4a843]/5 border-2 border-[#d4a843]/20",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												value: "d57055ba-b4bc-456d-b51c-61f3abae0b0e",
												readOnly: true,
												className: "w-full pl-5 pr-28 py-4 bg-transparent text-forest-3 font-mono text-[11px] focus:outline-none"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: handleCopyPix,
												className: "absolute right-1.5 top-1.5 bottom-1.5 px-7 rounded-xl bg-gradient-to-r from-[#d4a843] to-[#bfa15f] text-white font-bold text-[10px] uppercase tracking-widest transition-all duration-500 shadow-md hover:scale-105 active:scale-95",
												children: copied ? "✓ Copiado" : "Copiar"
											})]
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[9px] uppercase tracking-[0.4em] text-[#d4a843] font-bold mb-5 opacity-80",
										children: "Escaneie para Contribuir"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative p-4 bg-white rounded-[35px] shadow-[0_20px_50px_rgba(191,161,95,0.15)] border-2 border-[#f0e6cc] group",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "relative w-36 h-36 md:w-48 md:h-48 lg:w-52 lg:h-52 flex items-center justify-center overflow-hidden rounded-2xl",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: qrcode_pix_default,
												alt: "QR Code Pix",
												className: "w-full h-full object-contain"
											})
										})
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 md:mt-14 space-y-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-center py-6 px-10 bg-[#fdfcf0] rounded-[30px] border border-[#f0e6cc] italic shadow-inner",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-base md:text-lg text-forest-3/80 font-light leading-relaxed",
										style: { fontFamily: "'Cormorant Garamond', serif" },
										children: "\"Obrigado por caminhar ao nosso lado nesta jornada de amor.\""
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row gap-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: onVoltar,
										className: "flex-1 flex items-center justify-center gap-3 px-8 py-5 rounded-full border-2 border-[#d4a843] text-[#d4a843] font-bold text-[11px] uppercase tracking-[0.3em] bg-white hover:bg-[#d4a843] hover:text-white transition-all duration-500 shadow-md",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											viewBox: "0 0 24 24",
											className: "h-4 w-4",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "3",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19 12H5M12 19l-7-7 7-7" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Retornar" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: handleCelebrate,
										className: "btn-shine flex-1 px-8 py-5 rounded-full bg-gradient-to-r from-[#d4a843] via-[#bfa15f] to-[#d4a843] bg-[length:200%_auto] text-white font-bold text-[11px] uppercase tracking-[0.3em] shadow-[0_15px_35px_rgba(212,168,67,0.4)] hover:bg-right hover:scale-105 active:scale-95 transition-all duration-700 flex items-center justify-center gap-3 group",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-5 w-5 group-hover:scale-125 transition-transform" }), "Obrigado!"]
									})]
								})]
							})
						]
					})
				]
			})
		]
	});
}
var rootRouteChildren = { IndexRoute: Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
