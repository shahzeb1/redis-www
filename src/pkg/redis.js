import * as wasm from "./redis_bg.wasm";
import { __wbg_set_wasm } from "./redis_bg.js";
__wbg_set_wasm(wasm);
export * from "./redis_bg.js";
