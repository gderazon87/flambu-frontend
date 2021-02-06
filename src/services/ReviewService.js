
import * as firebase from '../../firebase'
import { Review } from '../models/review';

export async function getItemReviews(itemId) {
    const itemRef = '/items/' + itemId;
    const {docs} = await firebase.reviewCollection.where("itemRef", "==", itemRef).get();
    let reviews = docs.map(doc=> new Review({...doc.data(),$key: doc.id}) );
    return reviews;
}

export async function getOwnerItemReviews(userId) {
    const userRef = '/users/' + userId;
    const {docs} = await firebase.ownerReviewCollection.where("itemOwnerUserRef","==",userRef).get();
    let reviews = docs.map(doc=> new Review({...doc.data(),$key: doc.id}) );
    return reviews;
}