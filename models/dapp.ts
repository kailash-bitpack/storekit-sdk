/* tslint:disable */
/* eslint-disable */
/**
 * Meroku dApp store
 * Open API specs for Meroku DApp store. This documentation is the guide to Backend API. These APIs are required to build the frontend.  You can choose to build on top of this API or use the npm package available at [some link](https://www.example.com)  **Authentication**  The endpoints themselves are public. The CORS policy restricts browser usage beyond `*.meroku.store`. This means that you can use these APIs in your backend services, but if called directly from frontend, it has to be hosted at *.meroku.store.  The `GET` calls are public without rate limiting.  The `POST`, `UPDATE`, `DELETE` calls ensure that only the dApp developer can make changes to their own dApp listing. This is done by sending the Github (user - server) token in these API calls. The mechanism to get the Github access tokens is up to the frontend to decide. They can for example create a Github App or use a service like Auth0.  In this server, you will be able to see your github details on the top left. You can use those details to enter values in the update calls.   **FAQs**  1. I am getting a `400 Resource not accessible by integration` error on update calls. This can happen when the github token supplied does not have valid permissions. Ensure that you are not sending `org` param. Right now, the fork can only happen on individual and not at org level.   2. I am getting a `400 Not Found` error on update calls. Ensure that you are passing the correct github ID or the user who wants to make the update.
 *
 * OpenAPI spec version: 1.10
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { DappDeveloper } from './dapp-developer';
import { DappGeoRestrictions } from './dapp-geo-restrictions';
import { DappImages } from './dapp-images';
import { DappMetrics } from './dapp-metrics';
/**
 * 
 * @export
 * @interface Dapp
 */
export interface Dapp {
    /**
     * Dapp Name
     * @type {string}
     * @memberof Dapp
     */
    name: string;
    /**
     * About dApp
     * @type {string}
     * @memberof Dapp
     */
    description: string;
    /**
     * The URL of the dApp from where the webview will be loaded.
     * @type {string}
     * @memberof Dapp
     */
    appUrl?: string;
    /**
     * 
     * @type {DappImages}
     * @memberof Dapp
     */
    images?: DappImages;
    /**
     * If this is in OpenSource, the URL of the repository
     * @type {string}
     * @memberof Dapp
     */
    repoUrl?: string;
    /**
     * A Unique ID for each dApp
     * @type {string}
     * @memberof Dapp
     */
    dappId: string;
    /**
     * The min age of user who should access this dApp
     * @type {number}
     * @memberof Dapp
     */
    minAge: number;
    /**
     * Boolean to signify if the dApp is for mature audience
     * @type {boolean}
     * @memberof Dapp
     */
    isForMatureAudience: boolean;
    /**
     * Boolean to signify if the dApp developers have a moderation in place for the content posted/generated by the dApp or it's users
     * @type {boolean}
     * @memberof Dapp
     */
    isSelfModerated: boolean;
    /**
     * A string in ISO-639-1 which signifies the language of the dApp
     * @type {string}
     * @memberof Dapp
     */
    language: string;
    /**
     * The version of the dApp that is available on the dApp store
     * @type {string}
     * @memberof Dapp
     */
    version: string;
    /**
     * Boolean to signify if the dApp is listed on the dApp store
     * @type {boolean}
     * @memberof Dapp
     */
    isListed: boolean;
    /**
     * The date on which this dApp is listed on dApp store. This date can be a future date as well. This can not be in past.
     * @type {string}
     * @memberof Dapp
     */
    listDate: string;
    /**
     * A string signifying if the dApp is available on which platform - web, iOS, android
     * @type {Array<string>}
     * @memberof Dapp
     */
    availableOnPlatform: Array<DappAvailableOnPlatformEnum>;
    /**
     * 
     * @type {DappGeoRestrictions}
     * @memberof Dapp
     */
    geoRestrictions?: DappGeoRestrictions;
    /**
     * 
     * @type {DappDeveloper}
     * @memberof Dapp
     */
    developer: DappDeveloper;
    /**
     * 
     * @type {Array<string>}
     * @memberof Dapp
     */
    tags: Array<string>;
    /**
     * 
     * @type {Array<number>}
     * @memberof Dapp
     */
    chains: Array<number>;
    /**
     * The category of the dApp. You can assign one category to your dApp. The category you select is particularly important for your app's discoverability on the dApp Store. This will be the category in which the app appears when users browse the dApp Store or filter search results, and it determines placement on the dApps tab or Games.
     * @type {string}
     * @memberof Dapp
     */
    category: DappCategoryEnum;
    /**
     * 
     * @type {DappMetrics}
     * @memberof Dapp
     */
    metrics?: DappMetrics;
}

/**
    * @export
    * @enum {string}
    */
export enum DappAvailableOnPlatformEnum {
    Ios = 'ios',
    Web = 'web',
    Android = 'android'
}
/**
    * @export
    * @enum {string}
    */
export enum DappCategoryEnum {
    Books = 'books',
    Business = 'business',
    DeveloperTools = 'developer tools',
    Education = 'education',
    Entertainment = 'entertainment',
    Finance = 'finance',
    FoodAndDrink = 'food and drink',
    Games = 'games',
    GraphicsAndDesign = 'graphics and design',
    HealthAndFitness = 'health and fitness',
    Lifestyle = 'lifestyle',
    Kids = 'kids',
    MagazinesAndNewspapers = 'magazines and newspapers',
    Medical = 'medical',
    Music = 'music',
    Navigation = 'navigation',
    News = 'news',
    PhotoAndVideo = 'photo and video',
    Productivity = 'productivity',
    Reference = 'reference',
    Shopping = 'shopping',
    SocialNetworking = 'social networking',
    Sports = 'sports',
    Travel = 'travel',
    Utilities = 'utilities',
    Weather = 'weather'
}

