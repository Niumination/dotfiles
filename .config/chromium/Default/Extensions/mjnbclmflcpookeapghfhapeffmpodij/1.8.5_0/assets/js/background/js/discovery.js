import ProxyController from "./proxy-control.js"
import ProxyConfigFactory from "./proxy-config-factory.js"

let hosts = [
"metalpressions.site",
"horseclicks.online",
"metalpressions.online",
"metalpressions.fun",
"horseclicks.site",
"seahorse-labs.site",
"seahorse-labs.online",
"leathavenhorst.site",
"leathavenhorst.online",
"bk-fonbet.website",
"luxsure.website",
"luxsure.site",
"chefuturo.website",
"titanmenshealth.website",
"titanmenshealth.fun",
"luxsure.online",
"luxsure.fun",
"canadasportsbetting.online",
"rmt-review.website",
"rmt-review.fun",
"laet-m.website",
"laet-m.fun",
"bk-fonbet.fun",
"packworld.website",
"packworld.fun",
"jimmywok.site",
"jimmywok.online",
"nbew-ibewmuseum.online",
"nbew-ibewmuseum.fun",
"clean-energy-ideas.site",
"clean-energy-ideas.online",
"nbew-ibewmuseum.website",
"nbew-ibewmuseum.site",
"intouchapp.site",
"intouchapp.online",
"movie-apps.website",
"movie-apps.fun",
"chefuturo.fun",
"anadasportsbetting.site"
]

export default class Discovry {
	constructor() {

		this.getHosts = function (count, callback) {
			let result = [];
			let seen = {};
			for (let i = 0; i < count; i++) {
				let idx = Math.floor(Math.random() * 100000) % hosts.length;
				//console.log("getHosts", count, idx);
				if (seen[idx] === true) {
					continue
				}
				seen[idx] = true;
				result.push(hosts[idx])
			}
			callback(result);
		};


		this.getProxyController = function (callback) {
			this.getHosts(10, function (servers) {
				//console.log("Hosts fetched successfully");
				let rule;
				rule = new ProxyController();
				let proxyConfigFactory = new ProxyConfigFactory()
				rule.config = proxyConfigFactory.getConfigForHosts(servers);
				callback(rule);
			});
		};
	}
}

