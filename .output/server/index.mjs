globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/finale-BA10Bws1.jpg": {
		"type": "image/jpeg",
		"etag": "\"29247-YadqhS7jsnBN5vU3XUrhu5neGPI\"",
		"mtime": "2026-06-20T19:07:58.510Z",
		"size": 168519,
		"path": "../public/assets/finale-BA10Bws1.jpg"
	},
	"/assets/g1-DM_ROaDy.jpg": {
		"type": "image/jpeg",
		"etag": "\"56b9c-WOgELk2kyKlXVUelF1LAMdt43k0\"",
		"mtime": "2026-06-20T19:07:58.512Z",
		"size": 355228,
		"path": "../public/assets/g1-DM_ROaDy.jpg"
	},
	"/assets/g2-DDsUeXl9.jpg": {
		"type": "image/jpeg",
		"etag": "\"4861b-MnkFt6P7TyLmLvCLHB376eTEgfY\"",
		"mtime": "2026-06-20T19:07:58.512Z",
		"size": 296475,
		"path": "../public/assets/g2-DDsUeXl9.jpg"
	},
	"/assets/g3-DqtLlxrp.jpg": {
		"type": "image/jpeg",
		"etag": "\"42122-Im8D+3QVLvQO3TqArbCK2CuACmQ\"",
		"mtime": "2026-06-20T19:07:58.513Z",
		"size": 270626,
		"path": "../public/assets/g3-DqtLlxrp.jpg"
	},
	"/assets/g5-DOwWwiLr.jpg": {
		"type": "image/jpeg",
		"etag": "\"446d7-dlR+ENSmorLf1b9/PS1lxZGQMwM\"",
		"mtime": "2026-06-20T19:07:58.514Z",
		"size": 280279,
		"path": "../public/assets/g5-DOwWwiLr.jpg"
	},
	"/assets/hero-BQDTM14N.jpg": {
		"type": "image/jpeg",
		"etag": "\"422cd-Ihl0O4hhrREMaKfhMdAdBzSwWZY\"",
		"mtime": "2026-06-20T19:07:58.514Z",
		"size": 271053,
		"path": "../public/assets/hero-BQDTM14N.jpg"
	},
	"/assets/g4-CIqNB2Eh.jpg": {
		"type": "image/jpeg",
		"etag": "\"706a8-r8e2gwb2h1k3H9COAua+7UCZJlA\"",
		"mtime": "2026-06-20T19:07:58.513Z",
		"size": 460456,
		"path": "../public/assets/g4-CIqNB2Eh.jpg"
	},
	"/assets/styles-BVLATrBA.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1bd2e-TJv348YEqrCS+CuoqhWRavq9c/U\"",
		"mtime": "2026-06-20T19:07:58.515Z",
		"size": 113966,
		"path": "../public/assets/styles-BVLATrBA.css"
	},
	"/assets/index-BpN8Pa6Q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"62ebe-KeneihNJ6tY0nKWUvBg1W3H4TTU\"",
		"mtime": "2026-06-20T19:07:58.468Z",
		"size": 405182,
		"path": "../public/assets/index-BpN8Pa6Q.js"
	},
	"/assets/venue-CdthsJlt.jpg": {
		"type": "image/jpeg",
		"etag": "\"a48b6-j2tggMCXdXpe/Z2GlflS4sHu1iQ\"",
		"mtime": "2026-06-20T19:07:58.515Z",
		"size": 673974,
		"path": "../public/assets/venue-CdthsJlt.jpg"
	},
	"/assets/anel-BhYZb1GH.png": {
		"type": "image/png",
		"etag": "\"1654a0-FehDcjEqAwgsBiIDT8+ZEW3BWhE\"",
		"mtime": "2026-06-20T19:07:58.469Z",
		"size": 1463456,
		"path": "../public/assets/anel-BhYZb1GH.png"
	},
	"/assets/coracao-DWOR0UCZ.png": {
		"type": "image/png",
		"etag": "\"14ddab-9RPOGFdCZmVvBjSl7sbGTtWIuyc\"",
		"mtime": "2026-06-20T19:07:58.509Z",
		"size": 1367467,
		"path": "../public/assets/coracao-DWOR0UCZ.png"
	},
	"/assets/aviao-Cs_rCHY2.png": {
		"type": "image/png",
		"etag": "\"15feec-k59IHZ1hOc6XIamc4rdEc2ZhhxU\"",
		"mtime": "2026-06-20T19:07:58.507Z",
		"size": 1441516,
		"path": "../public/assets/aviao-Cs_rCHY2.png"
	},
	"/assets/logo-B8KBr549.png": {
		"type": "image/png",
		"etag": "\"1311a2-Gezl8Nn4WwPDSTPFxx738fmPVEg\"",
		"mtime": "2026-06-20T19:07:58.515Z",
		"size": 1249698,
		"path": "../public/assets/logo-B8KBr549.png"
	},
	"/assets/flor-esquerda-DByNkYud.png": {
		"type": "image/png",
		"etag": "\"243d48-eilQXogUUzBn7YOH9nsgh6egAcA\"",
		"mtime": "2026-06-20T19:07:58.512Z",
		"size": 2374984,
		"path": "../public/assets/flor-esquerda-DByNkYud.png"
	},
	"/assets/flor-direita-Dqcx8HvV.png": {
		"type": "image/png",
		"etag": "\"24c904-o/T54LYAeVDE6afI6KKfJuTvlg4\"",
		"mtime": "2026-06-20T19:07:58.511Z",
		"size": 2410756,
		"path": "../public/assets/flor-direita-Dqcx8HvV.png"
	},
	"/assets/campo-florido-NDMQ6Cuv.png": {
		"type": "image/png",
		"etag": "\"271327-f4+8rcunMygs0MBC8YDUqwAqgFQ\"",
		"mtime": "2026-06-20T19:07:58.508Z",
		"size": 2560807,
		"path": "../public/assets/campo-florido-NDMQ6Cuv.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_dIHOdG = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_dIHOdG
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
