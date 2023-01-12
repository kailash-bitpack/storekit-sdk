/* tslint:disable */
/* eslint-disable */
/**
 * Meroku dApp store
 * Open API specs for Meroku DApp store. This documentation is the guide to Backend API. These APIs are required to build the frontend.  You can choose to build on top of this API or use the npm package available at [some link](https://www.example.com)  **Authentication**  The endpoints themselves are public. The CORS policy restricts browser usage beyond `*.meroku.store`. This means that you can use these APIs in your backend services, but if called directly from frontend, it has to be hosted at *.meroku.store.  The `GET` calls are public without rate limiting.  The `POST`, `UPDATE`, `DELETE` calls ensure that only the dApp developer can make changes to their own dApp listing. This is done by sending the Github (user - server) token in these API calls. The mechanism to get the Github access tokens is up to the frontend to decide. They can for example create a Github App or use a service like Auth0.  In this server, you will be able to see your github details on the top left. You can use those details to enter values in the update calls.   **FAQs**  1. I am getting a `400 Resource not accessible by integration` error on update calls. This can happen when the github token supplied does not have valid permissions. Ensure that you are not sending `org` param. Right now, the fork can only happen on individual and not at org level.   2. I am getting a `400 Not Found` error on update calls. Ensure that you are passing the correct github ID or the user who wants to make the update.
 *
 * OpenAPI spec version: 1.7
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { InlineResponse200 } from '../models';
import { InlineResponse2001 } from '../models';
/**
 * UserPermissionsApi - axios parameter creator
 * @export
 */
export const UserPermissionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Checks if the Github App is installed for this user or not
         * @summary GH App Installed?
         * @param {string} ghID Github Username of the user whose permissions have to check
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appGhIDInstalledGet: async (ghID: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ghID' is not null or undefined
            if (ghID === null || ghID === undefined) {
                throw new RequiredError('ghID','Required parameter ghID was null or undefined when calling appGhIDInstalledGet.');
            }
            const localVarPath = `/app/{ghID}/installed`
                .replace(`{${"ghID"}}`, encodeURIComponent(String(ghID)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Get the URL where Github app can be installed
         * @summary Github App Install Location
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appInstallUrlGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/app/installUrl`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserPermissionsApi - functional programming interface
 * @export
 */
export const UserPermissionsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Checks if the Github App is installed for this user or not
         * @summary GH App Installed?
         * @param {string} ghID Github Username of the user whose permissions have to check
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async appGhIDInstalledGet(ghID: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse200>>> {
            const localVarAxiosArgs = await UserPermissionsApiAxiosParamCreator(configuration).appGhIDInstalledGet(ghID, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get the URL where Github app can be installed
         * @summary Github App Install Location
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async appInstallUrlGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse2001>>> {
            const localVarAxiosArgs = await UserPermissionsApiAxiosParamCreator(configuration).appInstallUrlGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * UserPermissionsApi - factory interface
 * @export
 */
export const UserPermissionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Checks if the Github App is installed for this user or not
         * @summary GH App Installed?
         * @param {string} ghID Github Username of the user whose permissions have to check
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async appGhIDInstalledGet(ghID: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse200>> {
            return UserPermissionsApiFp(configuration).appGhIDInstalledGet(ghID, options).then((request) => request(axios, basePath));
        },
        /**
         * Get the URL where Github app can be installed
         * @summary Github App Install Location
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async appInstallUrlGet(options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2001>> {
            return UserPermissionsApiFp(configuration).appInstallUrlGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserPermissionsApi - object-oriented interface
 * @export
 * @class UserPermissionsApi
 * @extends {BaseAPI}
 */
export class UserPermissionsApi extends BaseAPI {
    /**
     * Checks if the Github App is installed for this user or not
     * @summary GH App Installed?
     * @param {string} ghID Github Username of the user whose permissions have to check
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserPermissionsApi
     */
    public async appGhIDInstalledGet(ghID: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse200>> {
        return UserPermissionsApiFp(this.configuration).appGhIDInstalledGet(ghID, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get the URL where Github app can be installed
     * @summary Github App Install Location
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserPermissionsApi
     */
    public async appInstallUrlGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse2001>> {
        return UserPermissionsApiFp(this.configuration).appInstallUrlGet(options).then((request) => request(this.axios, this.basePath));
    }
}