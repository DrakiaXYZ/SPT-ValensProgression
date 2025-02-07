import { HttpServerHelper } from "@spt-aki/helpers/HttpServerHelper";
import { JsonUtil } from "@spt-aki/utils/JsonUtil";
import { VFS } from "@spt-aki/utils/VFS";
export declare class BundleInfo {
    modPath: string;
    key: string;
    path: string;
    filepath: string;
    dependencyKeys: string[];
    constructor(modpath: string, bundle: any, bundlePath: string, bundleFilepath: string);
}
export declare class BundleLoader {
    protected httpServerHelper: HttpServerHelper;
    protected vfs: VFS;
    protected jsonUtil: JsonUtil;
    protected bundles: Record<string, BundleInfo>;
    constructor(httpServerHelper: HttpServerHelper, vfs: VFS, jsonUtil: JsonUtil);
    /**
     * Handle singleplayer/bundles
     */
    getBundles(local: boolean): BundleInfo[];
    getBundle(key: string, local: boolean): BundleInfo;
    addBundles(modpath: string): void;
    addBundle(key: string, b: BundleInfo): void;
}
export interface BundleManifest {
    manifest: Array<BundleManifestEntry>;
}
export interface BundleManifestEntry {
    key: string;
    path: string;
}
