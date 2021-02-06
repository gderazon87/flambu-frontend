import getSymbolFromCurrency from 'currency-symbol-map'

export class Item {
    $key = '';
    pathsOfPictures = [];
    title = '';
    description = '';
    rating = 0;
    numberOfReviews  = 0;
    dailyRentalPrice = {amount: '', currency: ''};
    categoryIds = [];
    location = {lat: '', lon: '' };
    locationAddress = '';
    ownerUserName = '';
    ownerUserLastName = '';
    userRef = '';

    constructor(item) {
        item = item || {};
        this.$key = item.$key || '';
        this.pathsOfPictures = item.pathsOfPictures || [];
        this.categoryIds = item.categoryIds || [];
        this.title = item.title || '';
        this.description = item.description || '';
        this.rating = item.rating? parseFloat(item.rating) : 0;
        this.numberOfReviews = item.numberOfReviews || 0;
        if(item.dailyRentalPrice) this.dailyRentalPrice = item.dailyRentalPrice;
        this.locationAddress = item.locationAddress || '';
        if(item.location) this.location = { lat: item.location.latitude, lon: item.location.longitude};
        this.ownerUserName = item.ownerUserName || '';
        this.ownerUserLastName = item.ownerUserLastName || '';
        this.userRef = item.userRef || '';
    }

    get publicImagePath() {
        if(this.pathsOfPictures[0]) return this.pathsOfPictures[0];
        return '';
    }

    get dailyRentalPriceWithCurrencySymbol() {
        if(this.dailyRentalPrice.amount && this.dailyRentalPrice.currency) {
            let currency = this.dailyRentalPrice.currency;
            if(currency == 'NIS') return this.dailyRentalPrice.amount + getSymbolFromCurrency('ILS');
            return this.dailyRentalPrice.amount + getSymbolFromCurrency(currency);
        }
        return ''
    }

}