import * as firebase from '../../firebase'
import { Item } from '../models/item';

export async function getItemListWithCategory(category,searchKey) {
    let items = [];
    let collectionRef = firebase.itemCollection;
    if(category == 'all') {
        const {docs} = await collectionRef.get();
        items = docs.map(doc=> new Item({...doc.data(),$key: doc.id}) );
    }else {
        const {docs} = await firebase.itemCollection.where("categoryIds", "array-contains", category).get();
        items = docs.map(doc=> new Item({...doc.data(),$key: doc.id}) );
    }
    if(searchKey)  {
        searchKey = searchKey.toLowerCase();
        items = items.filter(item => item.title.toLowerCase().includes(searchKey) || item.description.toLowerCase().includes(searchKey))
    }
    return items;
}

export async function getItemWithId(id) {
    const doc = await firebase.itemCollection.doc(id).get();
    return new Item({...doc.data(),$key: doc.id});
}

export async function getRelatedItemsWithInCategory(categoryIds,itemKey) {
    let category = categoryIds[0];
    const {docs} = await firebase.itemCollection.where("categoryIds", "array-contains", category).get();
    let items = docs.map(doc=> new Item({...doc.data(),$key: doc.id}) );
    items = items.filter(item => item.$key!=itemKey)
    return items;
}