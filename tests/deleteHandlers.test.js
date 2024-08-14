// eslint-disable-next-line no-undef
const config = require('../config');

test('should status code be 200', async () => {
	let actualStatusCode;
	try
	{
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect (actualStatusCode) .toBe (200);
});

test('should delete kit 7', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		const data = await response.json();
		expect(data.message).toBe("Kit deleted successfully");
		console.log (data);
	} catch (error) {
		console.error(error);
	}
});
