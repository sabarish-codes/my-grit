import LinkedListNode from './LinkedListNode.js';
import Comparator from '../Comparator.js';

export default class LinkedList{

	constructor(comparatorFunction){
		this.head = null;
		this.tail = null;
		this.compare = comparatorFunction;
	}

	prepend(value){
		const newNode = new LinkedListNode(value, this.head);
		this.head = newNode;
		if(!this.tail){  // condition when there are no nodes, head and tail is null
			this.tail = newNode;
		}
		return this;
	}

	append(value){
		const newNode = new LinkedListNode(value);
		if(!this.head){
			this.head = newNode;
			this.tail = newNode;
			return this;
		}
		this.tail.next = newNode;
		this.tail = newNode;
		return this;
	}

}
