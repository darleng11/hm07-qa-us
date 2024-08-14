// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {"products": [{"id": 2}, {"id": 7}, {"id": 20}, {"id": 62}]};

test('Should be status 200', async () => {
    let testStatus;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        testStatus = response.status;
    } catch (error) {
        console.error(error);
    }
    expect(testStatus).toBe(200);
});

test('should body product contain "Mountain Dew Soft Drink"', async () => {
    let testProduct;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        const data = await response.json();
        console.log('Response Data:', data);

        const storeNames = Object.keys(data);
        for (const store of storeNames) {
            console.log(`Checking store: ${store}`);
            const products = data[store];
            console.log(`Products in store ${store}:`, products);
            if (products.hasOwnProperty('Mountain Dew Soft Drink')) {
                testProduct = 'Mountain Dew Soft Drink';
                break;
            }
        }
        expect(testProduct).toBe('Mountain Dew Soft Drink');
    } catch (error) {
        console.error(error);
    }
});