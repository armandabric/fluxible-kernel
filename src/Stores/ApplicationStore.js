import BaseStore from 'fluxible/addons/BaseStore';
// import routesConfig from './../Ressources/routes';
// import RouteStore from './RouteStore';

class ApplicationStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);

        this.currentPageName = null;
        this.currentPage = null;
        // this.pages = routesConfig;
        this.pageTitle = '';
    }

    // handlePageTitle(currentRoute) {
    //     this.dispatcher.waitFor(RouteStore, () => {
    //         if (currentRoute && currentRoute.get('title')) {
    //             this.pageTitle = currentRoute.get('title');
    //             this.currentPageName = currentRoute.get('name');
    //             this.currentPage = this.pages[this.currentPageName];
    //             this.emitChange();
    //         }
    //     });
    // }

    getCurrentPageName() {
        return this.currentPageName;
    }

    getPageTitle() {
        return this.pageTitle;
    }

    getPages() {
        return this.pages;
    }

    dehydrate() {
        return {
            currentPageName: this.currentPageName,
            currentPage: this.currentPage,
            pages: this.pages,
            pageTitle: this.pageTitle,
        };
    }

    rehydrate(state) {
        this.currentPageName = state.currentPageName;
        this.currentPage = state.currentPage;
        this.pages = state.pages;
        this.pageTitle = state.pageTitle;
    }
}

ApplicationStore.storeName = 'ApplicationStore';
// FIXME: Handle page title change
// ApplicationStore.handlers = {
//     'NAVIGATE_SUCCESS': 'handlePageTitle',
// };

export default ApplicationStore;
