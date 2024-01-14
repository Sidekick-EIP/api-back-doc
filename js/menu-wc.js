'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">back documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-9063b7822688203e5fe43d0c0a87f9457e2fa5c8f69d3eb707e67f2ae6323cb3a2bf8099ab643e7dc86ccda20a03b01b129b99e401296ad57f9220907742e0cb"' : 'data-bs-target="#xs-controllers-links-module-AppModule-9063b7822688203e5fe43d0c0a87f9457e2fa5c8f69d3eb707e67f2ae6323cb3a2bf8099ab643e7dc86ccda20a03b01b129b99e401296ad57f9220907742e0cb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-9063b7822688203e5fe43d0c0a87f9457e2fa5c8f69d3eb707e67f2ae6323cb3a2bf8099ab643e7dc86ccda20a03b01b129b99e401296ad57f9220907742e0cb"' :
                                            'id="xs-controllers-links-module-AppModule-9063b7822688203e5fe43d0c0a87f9457e2fa5c8f69d3eb707e67f2ae6323cb3a2bf8099ab643e7dc86ccda20a03b01b129b99e401296ad57f9220907742e0cb"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/NutritionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NutritionController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-9063b7822688203e5fe43d0c0a87f9457e2fa5c8f69d3eb707e67f2ae6323cb3a2bf8099ab643e7dc86ccda20a03b01b129b99e401296ad57f9220907742e0cb"' : 'data-bs-target="#xs-injectables-links-module-AppModule-9063b7822688203e5fe43d0c0a87f9457e2fa5c8f69d3eb707e67f2ae6323cb3a2bf8099ab643e7dc86ccda20a03b01b129b99e401296ad57f9220907742e0cb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-9063b7822688203e5fe43d0c0a87f9457e2fa5c8f69d3eb707e67f2ae6323cb3a2bf8099ab643e7dc86ccda20a03b01b129b99e401296ad57f9220907742e0cb"' :
                                        'id="xs-injectables-links-module-AppModule-9063b7822688203e5fe43d0c0a87f9457e2fa5c8f69d3eb707e67f2ae6323cb3a2bf8099ab643e7dc86ccda20a03b01b129b99e401296ad57f9220907742e0cb"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NutritionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NutritionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-613710ea7b5aadf4d8918c3a4fd78fc33a75a70b9e3b379827f34246e7ad1dcb331a72c9fe5f21c30f2299446d529a32a10b025ad5ea7a444f391a948353a1f8"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-613710ea7b5aadf4d8918c3a4fd78fc33a75a70b9e3b379827f34246e7ad1dcb331a72c9fe5f21c30f2299446d529a32a10b025ad5ea7a444f391a948353a1f8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-613710ea7b5aadf4d8918c3a4fd78fc33a75a70b9e3b379827f34246e7ad1dcb331a72c9fe5f21c30f2299446d529a32a10b025ad5ea7a444f391a948353a1f8"' :
                                            'id="xs-controllers-links-module-AuthModule-613710ea7b5aadf4d8918c3a4fd78fc33a75a70b9e3b379827f34246e7ad1dcb331a72c9fe5f21c30f2299446d529a32a10b025ad5ea7a444f391a948353a1f8"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-613710ea7b5aadf4d8918c3a4fd78fc33a75a70b9e3b379827f34246e7ad1dcb331a72c9fe5f21c30f2299446d529a32a10b025ad5ea7a444f391a948353a1f8"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-613710ea7b5aadf4d8918c3a4fd78fc33a75a70b9e3b379827f34246e7ad1dcb331a72c9fe5f21c30f2299446d529a32a10b025ad5ea7a444f391a948353a1f8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-613710ea7b5aadf4d8918c3a4fd78fc33a75a70b9e3b379827f34246e7ad1dcb331a72c9fe5f21c30f2299446d529a32a10b025ad5ea7a444f391a948353a1f8"' :
                                        'id="xs-injectables-links-module-AuthModule-613710ea7b5aadf4d8918c3a4fd78fc33a75a70b9e3b379827f34246e7ad1dcb331a72c9fe5f21c30f2299446d529a32a10b025ad5ea7a444f391a948353a1f8"' }>
                                        <li class="link">
                                            <a href="injectables/AuthConfig.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthConfig</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChatModule.html" data-type="entity-link" >ChatModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ChatModule-183d3d4a9928b3678c3a4fdec192c076b69ed017b2c9dc4b221832a700eb3fad99097f6d8693fcadf8dcfa3801d61f4d9add358064768d39a03b48d27225e3b1"' : 'data-bs-target="#xs-controllers-links-module-ChatModule-183d3d4a9928b3678c3a4fdec192c076b69ed017b2c9dc4b221832a700eb3fad99097f6d8693fcadf8dcfa3801d61f4d9add358064768d39a03b48d27225e3b1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ChatModule-183d3d4a9928b3678c3a4fdec192c076b69ed017b2c9dc4b221832a700eb3fad99097f6d8693fcadf8dcfa3801d61f4d9add358064768d39a03b48d27225e3b1"' :
                                            'id="xs-controllers-links-module-ChatModule-183d3d4a9928b3678c3a4fdec192c076b69ed017b2c9dc4b221832a700eb3fad99097f6d8693fcadf8dcfa3801d61f4d9add358064768d39a03b48d27225e3b1"' }>
                                            <li class="link">
                                                <a href="controllers/ChatController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChatController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ChatModule-183d3d4a9928b3678c3a4fdec192c076b69ed017b2c9dc4b221832a700eb3fad99097f6d8693fcadf8dcfa3801d61f4d9add358064768d39a03b48d27225e3b1"' : 'data-bs-target="#xs-injectables-links-module-ChatModule-183d3d4a9928b3678c3a4fdec192c076b69ed017b2c9dc4b221832a700eb3fad99097f6d8693fcadf8dcfa3801d61f4d9add358064768d39a03b48d27225e3b1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ChatModule-183d3d4a9928b3678c3a4fdec192c076b69ed017b2c9dc4b221832a700eb3fad99097f6d8693fcadf8dcfa3801d61f4d9add358064768d39a03b48d27225e3b1"' :
                                        'id="xs-injectables-links-module-ChatModule-183d3d4a9928b3678c3a4fdec192c076b69ed017b2c9dc4b221832a700eb3fad99097f6d8693fcadf8dcfa3801d61f4d9add358064768d39a03b48d27225e3b1"' }>
                                        <li class="link">
                                            <a href="injectables/ChatService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChatService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExercisesLibraryModule.html" data-type="entity-link" >ExercisesLibraryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ExercisesLibraryModule-eae89e6ad302003631492a73708f7737c58deffac40b2da761e664005b551619acd927d671c9c69cf643e86795b2e7c0f894eed4b81e7d6d386a65e3f0d6ef3a"' : 'data-bs-target="#xs-controllers-links-module-ExercisesLibraryModule-eae89e6ad302003631492a73708f7737c58deffac40b2da761e664005b551619acd927d671c9c69cf643e86795b2e7c0f894eed4b81e7d6d386a65e3f0d6ef3a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ExercisesLibraryModule-eae89e6ad302003631492a73708f7737c58deffac40b2da761e664005b551619acd927d671c9c69cf643e86795b2e7c0f894eed4b81e7d6d386a65e3f0d6ef3a"' :
                                            'id="xs-controllers-links-module-ExercisesLibraryModule-eae89e6ad302003631492a73708f7737c58deffac40b2da761e664005b551619acd927d671c9c69cf643e86795b2e7c0f894eed4b81e7d6d386a65e3f0d6ef3a"' }>
                                            <li class="link">
                                                <a href="controllers/ExercisesLibraryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExercisesLibraryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ExercisesLibraryModule-eae89e6ad302003631492a73708f7737c58deffac40b2da761e664005b551619acd927d671c9c69cf643e86795b2e7c0f894eed4b81e7d6d386a65e3f0d6ef3a"' : 'data-bs-target="#xs-injectables-links-module-ExercisesLibraryModule-eae89e6ad302003631492a73708f7737c58deffac40b2da761e664005b551619acd927d671c9c69cf643e86795b2e7c0f894eed4b81e7d6d386a65e3f0d6ef3a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ExercisesLibraryModule-eae89e6ad302003631492a73708f7737c58deffac40b2da761e664005b551619acd927d671c9c69cf643e86795b2e7c0f894eed4b81e7d6d386a65e3f0d6ef3a"' :
                                        'id="xs-injectables-links-module-ExercisesLibraryModule-eae89e6ad302003631492a73708f7737c58deffac40b2da761e664005b551619acd927d671c9c69cf643e86795b2e7c0f894eed4b81e7d6d386a65e3f0d6ef3a"' }>
                                        <li class="link">
                                            <a href="injectables/ExercisesLibraryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExercisesLibraryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeedbackUserModule.html" data-type="entity-link" >FeedbackUserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FeedbackUserModule-97be7c5ead0d0f8179da521c3b1da3c0290939e578814d3874424b9b333649ebb3fb5aa841c0240361a35d849fb77557f818e591a365a471bad9cc3248825e15"' : 'data-bs-target="#xs-controllers-links-module-FeedbackUserModule-97be7c5ead0d0f8179da521c3b1da3c0290939e578814d3874424b9b333649ebb3fb5aa841c0240361a35d849fb77557f818e591a365a471bad9cc3248825e15"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FeedbackUserModule-97be7c5ead0d0f8179da521c3b1da3c0290939e578814d3874424b9b333649ebb3fb5aa841c0240361a35d849fb77557f818e591a365a471bad9cc3248825e15"' :
                                            'id="xs-controllers-links-module-FeedbackUserModule-97be7c5ead0d0f8179da521c3b1da3c0290939e578814d3874424b9b333649ebb3fb5aa841c0240361a35d849fb77557f818e591a365a471bad9cc3248825e15"' }>
                                            <li class="link">
                                                <a href="controllers/FeedbackUserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeedbackUserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FeedbackUserModule-97be7c5ead0d0f8179da521c3b1da3c0290939e578814d3874424b9b333649ebb3fb5aa841c0240361a35d849fb77557f818e591a365a471bad9cc3248825e15"' : 'data-bs-target="#xs-injectables-links-module-FeedbackUserModule-97be7c5ead0d0f8179da521c3b1da3c0290939e578814d3874424b9b333649ebb3fb5aa841c0240361a35d849fb77557f818e591a365a471bad9cc3248825e15"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FeedbackUserModule-97be7c5ead0d0f8179da521c3b1da3c0290939e578814d3874424b9b333649ebb3fb5aa841c0240361a35d849fb77557f818e591a365a471bad9cc3248825e15"' :
                                        'id="xs-injectables-links-module-FeedbackUserModule-97be7c5ead0d0f8179da521c3b1da3c0290939e578814d3874424b9b333649ebb3fb5aa841c0240361a35d849fb77557f818e591a365a471bad9cc3248825e15"' }>
                                        <li class="link">
                                            <a href="injectables/FeedbackUserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeedbackUserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FileModule.html" data-type="entity-link" >FileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FileModule-ee594a71e59104e9a1187188e9b2ae4bb48cc3637f1ef9b84c638eed1a4df148a6776538d6e15403b63f0fbfa6fe880128422b4472488321fc356c3fa092e3af"' : 'data-bs-target="#xs-controllers-links-module-FileModule-ee594a71e59104e9a1187188e9b2ae4bb48cc3637f1ef9b84c638eed1a4df148a6776538d6e15403b63f0fbfa6fe880128422b4472488321fc356c3fa092e3af"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FileModule-ee594a71e59104e9a1187188e9b2ae4bb48cc3637f1ef9b84c638eed1a4df148a6776538d6e15403b63f0fbfa6fe880128422b4472488321fc356c3fa092e3af"' :
                                            'id="xs-controllers-links-module-FileModule-ee594a71e59104e9a1187188e9b2ae4bb48cc3637f1ef9b84c638eed1a4df148a6776538d6e15403b63f0fbfa6fe880128422b4472488321fc356c3fa092e3af"' }>
                                            <li class="link">
                                                <a href="controllers/FileController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FileModule-ee594a71e59104e9a1187188e9b2ae4bb48cc3637f1ef9b84c638eed1a4df148a6776538d6e15403b63f0fbfa6fe880128422b4472488321fc356c3fa092e3af"' : 'data-bs-target="#xs-injectables-links-module-FileModule-ee594a71e59104e9a1187188e9b2ae4bb48cc3637f1ef9b84c638eed1a4df148a6776538d6e15403b63f0fbfa6fe880128422b4472488321fc356c3fa092e3af"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FileModule-ee594a71e59104e9a1187188e9b2ae4bb48cc3637f1ef9b84c638eed1a4df148a6776538d6e15403b63f0fbfa6fe880128422b4472488321fc356c3fa092e3af"' :
                                        'id="xs-injectables-links-module-FileModule-ee594a71e59104e9a1187188e9b2ae4bb48cc3637f1ef9b84c638eed1a4df148a6776538d6e15403b63f0fbfa6fe880128422b4472488321fc356c3fa092e3af"' }>
                                        <li class="link">
                                            <a href="injectables/FileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MealRecoModule.html" data-type="entity-link" >MealRecoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MealRecoModule-be93f312e00854ef62f38c5f02144f6b452a7ec42f9703fb86e897eba48b41ceec9d5eeb6c4b789e57f4301361d2ee2656a21f97b00d462ec64b476fc4224097"' : 'data-bs-target="#xs-controllers-links-module-MealRecoModule-be93f312e00854ef62f38c5f02144f6b452a7ec42f9703fb86e897eba48b41ceec9d5eeb6c4b789e57f4301361d2ee2656a21f97b00d462ec64b476fc4224097"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MealRecoModule-be93f312e00854ef62f38c5f02144f6b452a7ec42f9703fb86e897eba48b41ceec9d5eeb6c4b789e57f4301361d2ee2656a21f97b00d462ec64b476fc4224097"' :
                                            'id="xs-controllers-links-module-MealRecoModule-be93f312e00854ef62f38c5f02144f6b452a7ec42f9703fb86e897eba48b41ceec9d5eeb6c4b789e57f4301361d2ee2656a21f97b00d462ec64b476fc4224097"' }>
                                            <li class="link">
                                                <a href="controllers/MealRecoController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MealRecoController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MealRecoModule-be93f312e00854ef62f38c5f02144f6b452a7ec42f9703fb86e897eba48b41ceec9d5eeb6c4b789e57f4301361d2ee2656a21f97b00d462ec64b476fc4224097"' : 'data-bs-target="#xs-injectables-links-module-MealRecoModule-be93f312e00854ef62f38c5f02144f6b452a7ec42f9703fb86e897eba48b41ceec9d5eeb6c4b789e57f4301361d2ee2656a21f97b00d462ec64b476fc4224097"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MealRecoModule-be93f312e00854ef62f38c5f02144f6b452a7ec42f9703fb86e897eba48b41ceec9d5eeb6c4b789e57f4301361d2ee2656a21f97b00d462ec64b476fc4224097"' :
                                        'id="xs-injectables-links-module-MealRecoModule-be93f312e00854ef62f38c5f02144f6b452a7ec42f9703fb86e897eba48b41ceec9d5eeb6c4b789e57f4301361d2ee2656a21f97b00d462ec64b476fc4224097"' }>
                                        <li class="link">
                                            <a href="injectables/MealRecoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MealRecoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NutritionModule.html" data-type="entity-link" >NutritionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-NutritionModule-f9653bc9c1d81e954e65eac703bf5a30e59497fba6add5d271a9ebc55dce9a56a6867c12d7a9eb330c58a76acf3ad851b316bdf1c116ead3405410da9bd715f7"' : 'data-bs-target="#xs-controllers-links-module-NutritionModule-f9653bc9c1d81e954e65eac703bf5a30e59497fba6add5d271a9ebc55dce9a56a6867c12d7a9eb330c58a76acf3ad851b316bdf1c116ead3405410da9bd715f7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-NutritionModule-f9653bc9c1d81e954e65eac703bf5a30e59497fba6add5d271a9ebc55dce9a56a6867c12d7a9eb330c58a76acf3ad851b316bdf1c116ead3405410da9bd715f7"' :
                                            'id="xs-controllers-links-module-NutritionModule-f9653bc9c1d81e954e65eac703bf5a30e59497fba6add5d271a9ebc55dce9a56a6867c12d7a9eb330c58a76acf3ad851b316bdf1c116ead3405410da9bd715f7"' }>
                                            <li class="link">
                                                <a href="controllers/NutritionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NutritionController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-NutritionModule-f9653bc9c1d81e954e65eac703bf5a30e59497fba6add5d271a9ebc55dce9a56a6867c12d7a9eb330c58a76acf3ad851b316bdf1c116ead3405410da9bd715f7"' : 'data-bs-target="#xs-injectables-links-module-NutritionModule-f9653bc9c1d81e954e65eac703bf5a30e59497fba6add5d271a9ebc55dce9a56a6867c12d7a9eb330c58a76acf3ad851b316bdf1c116ead3405410da9bd715f7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NutritionModule-f9653bc9c1d81e954e65eac703bf5a30e59497fba6add5d271a9ebc55dce9a56a6867c12d7a9eb330c58a76acf3ad851b316bdf1c116ead3405410da9bd715f7"' :
                                        'id="xs-injectables-links-module-NutritionModule-f9653bc9c1d81e954e65eac703bf5a30e59497fba6add5d271a9ebc55dce9a56a6867c12d7a9eb330c58a76acf3ad851b316bdf1c116ead3405410da9bd715f7"' }>
                                        <li class="link">
                                            <a href="injectables/NutritionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NutritionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OpenffModule.html" data-type="entity-link" >OpenffModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-OpenffModule-786bbb610c408a262c13c1353a6c4dc1f26186ec52bb6ef54bdb7fc00a50b4150fd0bda40159560bca59a18bb8c06ae82fe4f13e52314834c17bf42bfb1070df"' : 'data-bs-target="#xs-controllers-links-module-OpenffModule-786bbb610c408a262c13c1353a6c4dc1f26186ec52bb6ef54bdb7fc00a50b4150fd0bda40159560bca59a18bb8c06ae82fe4f13e52314834c17bf42bfb1070df"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OpenffModule-786bbb610c408a262c13c1353a6c4dc1f26186ec52bb6ef54bdb7fc00a50b4150fd0bda40159560bca59a18bb8c06ae82fe4f13e52314834c17bf42bfb1070df"' :
                                            'id="xs-controllers-links-module-OpenffModule-786bbb610c408a262c13c1353a6c4dc1f26186ec52bb6ef54bdb7fc00a50b4150fd0bda40159560bca59a18bb8c06ae82fe4f13e52314834c17bf42bfb1070df"' }>
                                            <li class="link">
                                                <a href="controllers/OpenffController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OpenffController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-OpenffModule-786bbb610c408a262c13c1353a6c4dc1f26186ec52bb6ef54bdb7fc00a50b4150fd0bda40159560bca59a18bb8c06ae82fe4f13e52314834c17bf42bfb1070df"' : 'data-bs-target="#xs-injectables-links-module-OpenffModule-786bbb610c408a262c13c1353a6c4dc1f26186ec52bb6ef54bdb7fc00a50b4150fd0bda40159560bca59a18bb8c06ae82fe4f13e52314834c17bf42bfb1070df"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OpenffModule-786bbb610c408a262c13c1353a6c4dc1f26186ec52bb6ef54bdb7fc00a50b4150fd0bda40159560bca59a18bb8c06ae82fe4f13e52314834c17bf42bfb1070df"' :
                                        'id="xs-injectables-links-module-OpenffModule-786bbb610c408a262c13c1353a6c4dc1f26186ec52bb6ef54bdb7fc00a50b4150fd0bda40159560bca59a18bb8c06ae82fe4f13e52314834c17bf42bfb1070df"' }>
                                        <li class="link">
                                            <a href="injectables/OpenffService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OpenffService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PreferencesModule.html" data-type="entity-link" >PreferencesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PreferencesModule-fdcbfd4872d20bfaa966962a408cd33801d1b8d18f01a68a429ece2c618d793c16ba35dd6e6c34806449446d208af7907c8728582b49db611724f9be34012a1f"' : 'data-bs-target="#xs-controllers-links-module-PreferencesModule-fdcbfd4872d20bfaa966962a408cd33801d1b8d18f01a68a429ece2c618d793c16ba35dd6e6c34806449446d208af7907c8728582b49db611724f9be34012a1f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PreferencesModule-fdcbfd4872d20bfaa966962a408cd33801d1b8d18f01a68a429ece2c618d793c16ba35dd6e6c34806449446d208af7907c8728582b49db611724f9be34012a1f"' :
                                            'id="xs-controllers-links-module-PreferencesModule-fdcbfd4872d20bfaa966962a408cd33801d1b8d18f01a68a429ece2c618d793c16ba35dd6e6c34806449446d208af7907c8728582b49db611724f9be34012a1f"' }>
                                            <li class="link">
                                                <a href="controllers/PreferencesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PreferencesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PreferencesModule-fdcbfd4872d20bfaa966962a408cd33801d1b8d18f01a68a429ece2c618d793c16ba35dd6e6c34806449446d208af7907c8728582b49db611724f9be34012a1f"' : 'data-bs-target="#xs-injectables-links-module-PreferencesModule-fdcbfd4872d20bfaa966962a408cd33801d1b8d18f01a68a429ece2c618d793c16ba35dd6e6c34806449446d208af7907c8728582b49db611724f9be34012a1f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PreferencesModule-fdcbfd4872d20bfaa966962a408cd33801d1b8d18f01a68a429ece2c618d793c16ba35dd6e6c34806449446d208af7907c8728582b49db611724f9be34012a1f"' :
                                        'id="xs-injectables-links-module-PreferencesModule-fdcbfd4872d20bfaa966962a408cd33801d1b8d18f01a68a429ece2c618d793c16ba35dd6e6c34806449446d208af7907c8728582b49db611724f9be34012a1f"' }>
                                        <li class="link">
                                            <a href="injectables/PreferencesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PreferencesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-c3825d437e84d4500343a0129aba19f3c6ae04d73d62f19584e96671d6b4895a2b68b0f3ae32bb855481d9287e0a286c9848aa65d3d386c861f577d44cc06cd4"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-c3825d437e84d4500343a0129aba19f3c6ae04d73d62f19584e96671d6b4895a2b68b0f3ae32bb855481d9287e0a286c9848aa65d3d386c861f577d44cc06cd4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-c3825d437e84d4500343a0129aba19f3c6ae04d73d62f19584e96671d6b4895a2b68b0f3ae32bb855481d9287e0a286c9848aa65d3d386c861f577d44cc06cd4"' :
                                        'id="xs-injectables-links-module-PrismaModule-c3825d437e84d4500343a0129aba19f3c6ae04d73d62f19584e96671d6b4895a2b68b0f3ae32bb855481d9287e0a286c9848aa65d3d386c861f577d44cc06cd4"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReportsModule.html" data-type="entity-link" >ReportsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ReportsModule-a48e2cd2cec676b46a35e9036d546ca97293e00cbdb3bbc370145fe171bb288619f6fb26f49ce492555045470be5a0010ab2d32de43a437cd5fc33c85586753a"' : 'data-bs-target="#xs-controllers-links-module-ReportsModule-a48e2cd2cec676b46a35e9036d546ca97293e00cbdb3bbc370145fe171bb288619f6fb26f49ce492555045470be5a0010ab2d32de43a437cd5fc33c85586753a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ReportsModule-a48e2cd2cec676b46a35e9036d546ca97293e00cbdb3bbc370145fe171bb288619f6fb26f49ce492555045470be5a0010ab2d32de43a437cd5fc33c85586753a"' :
                                            'id="xs-controllers-links-module-ReportsModule-a48e2cd2cec676b46a35e9036d546ca97293e00cbdb3bbc370145fe171bb288619f6fb26f49ce492555045470be5a0010ab2d32de43a437cd5fc33c85586753a"' }>
                                            <li class="link">
                                                <a href="controllers/ReportsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ReportsModule-a48e2cd2cec676b46a35e9036d546ca97293e00cbdb3bbc370145fe171bb288619f6fb26f49ce492555045470be5a0010ab2d32de43a437cd5fc33c85586753a"' : 'data-bs-target="#xs-injectables-links-module-ReportsModule-a48e2cd2cec676b46a35e9036d546ca97293e00cbdb3bbc370145fe171bb288619f6fb26f49ce492555045470be5a0010ab2d32de43a437cd5fc33c85586753a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ReportsModule-a48e2cd2cec676b46a35e9036d546ca97293e00cbdb3bbc370145fe171bb288619f6fb26f49ce492555045470be5a0010ab2d32de43a437cd5fc33c85586753a"' :
                                        'id="xs-injectables-links-module-ReportsModule-a48e2cd2cec676b46a35e9036d546ca97293e00cbdb3bbc370145fe171bb288619f6fb26f49ce492555045470be5a0010ab2d32de43a437cd5fc33c85586753a"' }>
                                        <li class="link">
                                            <a href="injectables/ReportsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StepsModule.html" data-type="entity-link" >StepsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-StepsModule-b2913e1e2630bf27cc067d2530cdc04801d1ab52611d4e4c403de629f55c7d209434a66edb2eb33876f8cc253a33636be7580ed19b8c1417ef72996de5b4ee5f"' : 'data-bs-target="#xs-controllers-links-module-StepsModule-b2913e1e2630bf27cc067d2530cdc04801d1ab52611d4e4c403de629f55c7d209434a66edb2eb33876f8cc253a33636be7580ed19b8c1417ef72996de5b4ee5f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StepsModule-b2913e1e2630bf27cc067d2530cdc04801d1ab52611d4e4c403de629f55c7d209434a66edb2eb33876f8cc253a33636be7580ed19b8c1417ef72996de5b4ee5f"' :
                                            'id="xs-controllers-links-module-StepsModule-b2913e1e2630bf27cc067d2530cdc04801d1ab52611d4e4c403de629f55c7d209434a66edb2eb33876f8cc253a33636be7580ed19b8c1417ef72996de5b4ee5f"' }>
                                            <li class="link">
                                                <a href="controllers/StepsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StepsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-StepsModule-b2913e1e2630bf27cc067d2530cdc04801d1ab52611d4e4c403de629f55c7d209434a66edb2eb33876f8cc253a33636be7580ed19b8c1417ef72996de5b4ee5f"' : 'data-bs-target="#xs-injectables-links-module-StepsModule-b2913e1e2630bf27cc067d2530cdc04801d1ab52611d4e4c403de629f55c7d209434a66edb2eb33876f8cc253a33636be7580ed19b8c1417ef72996de5b4ee5f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StepsModule-b2913e1e2630bf27cc067d2530cdc04801d1ab52611d4e4c403de629f55c7d209434a66edb2eb33876f8cc253a33636be7580ed19b8c1417ef72996de5b4ee5f"' :
                                        'id="xs-injectables-links-module-StepsModule-b2913e1e2630bf27cc067d2530cdc04801d1ab52611d4e4c403de629f55c7d209434a66edb2eb33876f8cc253a33636be7580ed19b8c1417ef72996de5b4ee5f"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StepsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StepsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TicketsModule.html" data-type="entity-link" >TicketsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TicketsModule-296bc6627e57b2db1dd9d6571bbbf839940ba833810370911d330bf64065d15d3635f62686ba9f1253beccb9ab3a9f4d878140d1c25f8b55bd309dd90443b2ee"' : 'data-bs-target="#xs-controllers-links-module-TicketsModule-296bc6627e57b2db1dd9d6571bbbf839940ba833810370911d330bf64065d15d3635f62686ba9f1253beccb9ab3a9f4d878140d1c25f8b55bd309dd90443b2ee"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TicketsModule-296bc6627e57b2db1dd9d6571bbbf839940ba833810370911d330bf64065d15d3635f62686ba9f1253beccb9ab3a9f4d878140d1c25f8b55bd309dd90443b2ee"' :
                                            'id="xs-controllers-links-module-TicketsModule-296bc6627e57b2db1dd9d6571bbbf839940ba833810370911d330bf64065d15d3635f62686ba9f1253beccb9ab3a9f4d878140d1c25f8b55bd309dd90443b2ee"' }>
                                            <li class="link">
                                                <a href="controllers/TicketsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TicketsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TicketsModule-296bc6627e57b2db1dd9d6571bbbf839940ba833810370911d330bf64065d15d3635f62686ba9f1253beccb9ab3a9f4d878140d1c25f8b55bd309dd90443b2ee"' : 'data-bs-target="#xs-injectables-links-module-TicketsModule-296bc6627e57b2db1dd9d6571bbbf839940ba833810370911d330bf64065d15d3635f62686ba9f1253beccb9ab3a9f4d878140d1c25f8b55bd309dd90443b2ee"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TicketsModule-296bc6627e57b2db1dd9d6571bbbf839940ba833810370911d330bf64065d15d3635f62686ba9f1253beccb9ab3a9f4d878140d1c25f8b55bd309dd90443b2ee"' :
                                        'id="xs-injectables-links-module-TicketsModule-296bc6627e57b2db1dd9d6571bbbf839940ba833810370911d330bf64065d15d3635f62686ba9f1253beccb9ab3a9f4d878140d1c25f8b55bd309dd90443b2ee"' }>
                                        <li class="link">
                                            <a href="injectables/TicketsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TicketsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserAdminModule.html" data-type="entity-link" >UserAdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserAdminModule-63885a10688fa7a3671d5f16f898cde69c07c642089a3ecbc9e7507acfcfdcdc3cd21c9348a2b8822169633cf75460b717443675e89fbefc611f56d68c01031a"' : 'data-bs-target="#xs-controllers-links-module-UserAdminModule-63885a10688fa7a3671d5f16f898cde69c07c642089a3ecbc9e7507acfcfdcdc3cd21c9348a2b8822169633cf75460b717443675e89fbefc611f56d68c01031a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserAdminModule-63885a10688fa7a3671d5f16f898cde69c07c642089a3ecbc9e7507acfcfdcdc3cd21c9348a2b8822169633cf75460b717443675e89fbefc611f56d68c01031a"' :
                                            'id="xs-controllers-links-module-UserAdminModule-63885a10688fa7a3671d5f16f898cde69c07c642089a3ecbc9e7507acfcfdcdc3cd21c9348a2b8822169633cf75460b717443675e89fbefc611f56d68c01031a"' }>
                                            <li class="link">
                                                <a href="controllers/UserAdminController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserAdminController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserAdminModule-63885a10688fa7a3671d5f16f898cde69c07c642089a3ecbc9e7507acfcfdcdc3cd21c9348a2b8822169633cf75460b717443675e89fbefc611f56d68c01031a"' : 'data-bs-target="#xs-injectables-links-module-UserAdminModule-63885a10688fa7a3671d5f16f898cde69c07c642089a3ecbc9e7507acfcfdcdc3cd21c9348a2b8822169633cf75460b717443675e89fbefc611f56d68c01031a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserAdminModule-63885a10688fa7a3671d5f16f898cde69c07c642089a3ecbc9e7507acfcfdcdc3cd21c9348a2b8822169633cf75460b717443675e89fbefc611f56d68c01031a"' :
                                        'id="xs-injectables-links-module-UserAdminModule-63885a10688fa7a3671d5f16f898cde69c07c642089a3ecbc9e7507acfcfdcdc3cd21c9348a2b8822169633cf75460b717443675e89fbefc611f56d68c01031a"' }>
                                        <li class="link">
                                            <a href="injectables/UserAdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserAdminService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserInfosModule.html" data-type="entity-link" >UserInfosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserInfosModule-f9802a0e0c7bc1b2c25132ceedb0e8f63bff1f19110dd223a51c3295d5b46f106874482ce7c7766925c60289b2d1d4cd5ddc1e72331bb9ae4687014d5f0b6253"' : 'data-bs-target="#xs-controllers-links-module-UserInfosModule-f9802a0e0c7bc1b2c25132ceedb0e8f63bff1f19110dd223a51c3295d5b46f106874482ce7c7766925c60289b2d1d4cd5ddc1e72331bb9ae4687014d5f0b6253"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserInfosModule-f9802a0e0c7bc1b2c25132ceedb0e8f63bff1f19110dd223a51c3295d5b46f106874482ce7c7766925c60289b2d1d4cd5ddc1e72331bb9ae4687014d5f0b6253"' :
                                            'id="xs-controllers-links-module-UserInfosModule-f9802a0e0c7bc1b2c25132ceedb0e8f63bff1f19110dd223a51c3295d5b46f106874482ce7c7766925c60289b2d1d4cd5ddc1e72331bb9ae4687014d5f0b6253"' }>
                                            <li class="link">
                                                <a href="controllers/UserInfosController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserInfosController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserInfosModule-f9802a0e0c7bc1b2c25132ceedb0e8f63bff1f19110dd223a51c3295d5b46f106874482ce7c7766925c60289b2d1d4cd5ddc1e72331bb9ae4687014d5f0b6253"' : 'data-bs-target="#xs-injectables-links-module-UserInfosModule-f9802a0e0c7bc1b2c25132ceedb0e8f63bff1f19110dd223a51c3295d5b46f106874482ce7c7766925c60289b2d1d4cd5ddc1e72331bb9ae4687014d5f0b6253"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserInfosModule-f9802a0e0c7bc1b2c25132ceedb0e8f63bff1f19110dd223a51c3295d5b46f106874482ce7c7766925c60289b2d1d4cd5ddc1e72331bb9ae4687014d5f0b6253"' :
                                        'id="xs-injectables-links-module-UserInfosModule-f9802a0e0c7bc1b2c25132ceedb0e8f63bff1f19110dd223a51c3295d5b46f106874482ce7c7766925c60289b2d1d4cd5ddc1e72331bb9ae4687014d5f0b6253"' }>
                                        <li class="link">
                                            <a href="injectables/UserInfoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserInfoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/WorkoutsModule.html" data-type="entity-link" >WorkoutsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-WorkoutsModule-ce409fb04d6ceeb4667184ec9dc494008d60d6daab0d5fe73160af66ad03f02b5d50dd760d0821c2ad07afdc9e6d04b64d20d8fbfe062d15c625fe89c28848a0"' : 'data-bs-target="#xs-controllers-links-module-WorkoutsModule-ce409fb04d6ceeb4667184ec9dc494008d60d6daab0d5fe73160af66ad03f02b5d50dd760d0821c2ad07afdc9e6d04b64d20d8fbfe062d15c625fe89c28848a0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-WorkoutsModule-ce409fb04d6ceeb4667184ec9dc494008d60d6daab0d5fe73160af66ad03f02b5d50dd760d0821c2ad07afdc9e6d04b64d20d8fbfe062d15c625fe89c28848a0"' :
                                            'id="xs-controllers-links-module-WorkoutsModule-ce409fb04d6ceeb4667184ec9dc494008d60d6daab0d5fe73160af66ad03f02b5d50dd760d0821c2ad07afdc9e6d04b64d20d8fbfe062d15c625fe89c28848a0"' }>
                                            <li class="link">
                                                <a href="controllers/WorkoutsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkoutsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-WorkoutsModule-ce409fb04d6ceeb4667184ec9dc494008d60d6daab0d5fe73160af66ad03f02b5d50dd760d0821c2ad07afdc9e6d04b64d20d8fbfe062d15c625fe89c28848a0"' : 'data-bs-target="#xs-injectables-links-module-WorkoutsModule-ce409fb04d6ceeb4667184ec9dc494008d60d6daab0d5fe73160af66ad03f02b5d50dd760d0821c2ad07afdc9e6d04b64d20d8fbfe062d15c625fe89c28848a0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-WorkoutsModule-ce409fb04d6ceeb4667184ec9dc494008d60d6daab0d5fe73160af66ad03f02b5d50dd760d0821c2ad07afdc9e6d04b64d20d8fbfe062d15c625fe89c28848a0"' :
                                        'id="xs-injectables-links-module-WorkoutsModule-ce409fb04d6ceeb4667184ec9dc494008d60d6daab0d5fe73160af66ad03f02b5d50dd760d0821c2ad07afdc9e6d04b64d20d8fbfe062d15c625fe89c28848a0"' }>
                                        <li class="link">
                                            <a href="injectables/WorkoutsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkoutsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AuthDto.html" data-type="entity-link" >AuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChatGateway.html" data-type="entity-link" >ChatGateway</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateExercisesLibraryDto.html" data-type="entity-link" >CreateExercisesLibraryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFeedbackUserDto.html" data-type="entity-link" >CreateFeedbackUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOpenffDto.html" data-type="entity-link" >CreateOpenffDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTicketDto.html" data-type="entity-link" >CreateTicketDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditInfosDto.html" data-type="entity-link" >EditInfosDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditInfosDto-1.html" data-type="entity-link" >EditInfosDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUserAdminDto.html" data-type="entity-link" >GetUserAdminDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MatchEvent.html" data-type="entity-link" >MatchEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/MealRecoDto.html" data-type="entity-link" >MealRecoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ModeratorAnswerDto.html" data-type="entity-link" >ModeratorAnswerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/NutritionDto.html" data-type="entity-link" >NutritionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Rooms.html" data-type="entity-link" >Rooms</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateExercisesLibraryDto.html" data-type="entity-link" >UpdateExercisesLibraryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFeedbackUserDto.html" data-type="entity-link" >UpdateFeedbackUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateNutritionDto.html" data-type="entity-link" >UpdateNutritionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateOpenffDto.html" data-type="entity-link" >UpdateOpenffDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePreferenceDto.html" data-type="entity-link" >UpdatePreferenceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserAnswerDto.html" data-type="entity-link" >UserAnswerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserInfosDto.html" data-type="entity-link" >UserInfosDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserNotFoundException.html" data-type="entity-link" >UserNotFoundException</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserNotFoundException-1.html" data-type="entity-link" >UserNotFoundException</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserNotFoundException-2.html" data-type="entity-link" >UserNotFoundException</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserWithoutSidekickException.html" data-type="entity-link" >UserWithoutSidekickException</a>
                            </li>
                            <li class="link">
                                <a href="classes/WorkoutsDto.html" data-type="entity-link" >WorkoutsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/WorkoutsDto-1.html" data-type="entity-link" >WorkoutsDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AtGuard.html" data-type="entity-link" >AtGuard</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdminGuard.html" data-type="entity-link" >AdminGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ValidatedUser.html" data-type="entity-link" >ValidatedUser</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});