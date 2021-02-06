export class Category {
    $key = '';
    name = '';
    numberOfTimesViewed = 0;
    pathOfCoverPicture = '';
    pathOfCoverPictureWeb = '';
    pathOfIcon = '';

    constructor(category) {
        category = category || {};
        this.$key = category.$key || '';
        this.name = category.name || '';
        this.numberOfTimesViewed = category.numberOfTimesViewed ? parseInt(category.numberOfTimesViewed) : 0;
        this.pathOfCoverPicture = category.pathOfCoverPicture || '';
        this.pathOfCoverPictureWeb = category.pathOfCoverPictureWeb || '';
        this.pathOfIcon = category.pathOfIcon || '';
    }

    get categoryImagePath() {
        if(!this.pathOfCoverPictureWeb) return this.pathOfCoverPicture;
        return this.pathOfCoverPictureWeb;
    }
}