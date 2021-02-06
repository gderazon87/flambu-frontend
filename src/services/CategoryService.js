import * as firebase from '../../firebase'
import { Category } from '../models/category';

export async function getCategoryList() {
    const {docs} = await firebase.categoryCollection.get();
    return docs.map(doc=> new Category({...doc.data(),$key: doc.id}) );
}

export async function getCategoryWithId(id) {
    const doc = await firebase.categoryCollection.doc(id).get();
    return new Category({...doc.data(),$key: doc.id});
}