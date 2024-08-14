// eslint-disable-next-line no-undef
const config = require('../config');

test('should return 200 status code', async () => {
	let actualStatuscode;
	try 
	{
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualStatuscode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatuscode).toBe(200);
});

const requestBody = {
	"productsList": [
		{
			"id": 1,
			"quality": 4
		}
	],
	"name": "Tastes of Paris"
};

test('should product name contain "Tastes of Paris"', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody= await response.json();
		expect(actualResponseBody.name).toBe("Tastes of Paris");
	} catch (error) {
		console.error(error);
	}
});
