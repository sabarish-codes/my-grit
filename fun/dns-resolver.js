const dns = require('dns');

const dnsCallback = (host, err, address, family) => {
	console.log('Host: ', host);
	console.log('Address: ', address);
	console.log('Family: ', family);
}

['google.com', 'localhost'].forEach((host) => {
	dns.lookup(host, (err, address, family) => {
		dnsCallback(host, err, address, family);
	});
})
