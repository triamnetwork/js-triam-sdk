require('es6-promise').polyfill();


// stellar-sdk classes to expose
export * from "./errors";
export {Config} from "./config";
export {Server} from "./server";
export {FederationServer, FEDERATION_RESPONSE_MAX_SIZE} from "./federation_server";
export {StellarTomlResolver, STELLAR_TOML_MAX_SIZE} from "./stellar_toml_resolver";

// export {Interface} from "./sc_interface";
// export {constructorMethod} from "./sc_interface";
// export {mainMethod} from "./sc_interface";
// export {fallbackMethod} from "./sc_interface";

// expose classes and functions from asset-base
export * from "asset-base";

export default module.exports;

