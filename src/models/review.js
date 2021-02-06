export class Review {
    authorUserName = '';
    authorUserProfilePicturePath = '';
    content = '';
    rating = 0;

    constructor(review) {
        review = review || {};
        this.authorUserName = review.authorUserName || '';
        this.authorUserProfilePicturePath = review.authorUserProfilePicturePath || '';
        this.content = review.content || '';
        this.rating = parseFloat(review.rating) || 0;
    }
}