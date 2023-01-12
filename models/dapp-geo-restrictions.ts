/* tslint:disable */
/* eslint-disable */
/**
 * Meroku dApp store
 * Open API specs for Meroku DApp store. This documentation is the guide to Backend API. These APIs are required to build the frontend.  You can choose to build on top of this API or use the npm package available at [some link](https://www.example.com)  **Authentication**  The endpoints themselves are public. The CORS policy restricts browser usage beyond `*.meroku.store`. This means that you can use these APIs in your backend services, but if called directly from frontend, it has to be hosted at *.meroku.store.  The `GET` calls are public without rate limiting.  The `POST`, `UPDATE`, `DELETE` calls ensure that only the dApp developer can make changes to their own dApp listing. This is done by sending the Github (user - server) token in these API calls. The mechanism to get the Github access tokens is up to the frontend to decide. They can for example create a Github App or use a service like Auth0.  In this server, you will be able to see your github details on the top left. You can use those details to enter values in the update calls.   **FAQs**  1. I am getting a `400 Resource not accessible by integration` error on update calls. This can happen when the github token supplied does not have valid permissions. Ensure that you are not sending `org` param. Right now, the fork can only happen on individual and not at org level.   2. I am getting a `400 Not Found` error on update calls. Ensure that you are passing the correct github ID or the user who wants to make the update.
 *
 * OpenAPI spec version: 1.5
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * A list of countries where the dApp is available or unavailable. If this is not present, the dApp is available everywhere. If this is present, then one of either allowedCountries or blockedCountries should be present. If both are present, then the dApp is available in allowedCountries and unavailable in blockedCountries. The name of countries should be in ISO-3661-1 Alpha-2 Code.
 * @export
 * @interface DappGeoRestrictions
 */
export interface DappGeoRestrictions {
    /**
     * A list of countries where the dApp is available
     * @type {Array<string>}
     * @memberof DappGeoRestrictions
     */
    allowedCountries?: Array<string>;
    /**
     * A list of countries where the dApp is unavailable
     * @type {Array<string>}
     * @memberof DappGeoRestrictions
     */
    blockedCountries?: Array<string>;
}
