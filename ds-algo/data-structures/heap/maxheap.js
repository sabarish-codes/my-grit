class MaxHeap{

	constructor(){
		this.data = []
	}

	push(x){
		this.data.push(x);
		this._up(this.data.length-1);
	}

	_up(i){
		const a = this.data;
		while(i > 0){
			const p = Math.floor((i-1)/2);
			if(a[p] >= a[i])
				break;

			[a[p], a[i]] = [a[i], a[p]];
			i = p;
		}
	}

	pop(){
		const a = this.data;
		if(a.length === 0) return undefined;
		if(a.length === 1) return a.pop();

		const max = a[0];
		const last = a.pop();
		a[0] = last;
		this._down(0);

		return max;
	}

	_down(i){
		const a = this.data;
		const n = a.length;
		while(true){
			const l = (2*i) + 1;
			const r = (2*i) + 2;
			let largest = i;
			if(l<n && a[l]>a[largest])
				largest = l;
			if(r<n && a[r]>a[largest])
				largest = r;

			if(i === largest)
				break;

			[a[i], a[largest]] = [a[largest], a[i]];

			i = largest;
		}
	}
}

function main(){
	const a = new MaxHeap();
	a.push(2);
	a.push(19);
	a.push(3);
	a.push(22);
	console.log(a);
	console.log(a.data);
}
main();

