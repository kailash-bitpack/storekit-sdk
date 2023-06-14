/* tslint:disable */
/* eslint-disable */
/**
 * Meroku API Documentation
 * Open API specs for Meroku APIs. These APIs are required to inteact with the registry in a safe, easy way. The recommended way to use in a project is to use the npm package published at [@merokudao/storekit-sdk](https://www.npmjs.com/package/@merokudao/storekit-sdk). This npmjs package is a wrapper around the api. You would still want to use the APIs if you're building on a different platform.  # Authentication - To learn more on Authentication and the benefits of using higher rate limit, [read this Meroku.xyz blog post](https://meroku.xyz/2023/06/08/meroku-api-updates/). - To request an API key [fill this developer access form](https://form.jotform.com/231576486954067) - You can try this UI without getting any API Key as well # Learn More - [How to build a dApp Store using Meroku APIs](https://docs.meroku.org/dapp-store-kit-docs/for-dapp-store-builders#api--sdk-1) - [Meroku Blog](https://meroku.xyz) # Support - [Support Discourse Group](https://meroku.discourse.group) # Stay Connected - [Follow us on Github](https://github.com/merokudao) - [Follow us on Twitter](https://twitter.com/MerokuStore) 
 *
 * OpenAPI spec version: 1.21
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface DomainverificationGetVerificationIdBody1
 */
export interface DomainverificationGetVerificationIdBody1 {
    /**
     * 
     * @type {string}
     * @memberof DomainverificationGetVerificationIdBody1
     */
    githubId: string;
    /**
     * 
     * @type {string}
     * @memberof DomainverificationGetVerificationIdBody1
     */
    domain: string;
}