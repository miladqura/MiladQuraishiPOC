const request = require("supertest");
const app = require("../server/server");

// Tests the GET /foods endpoint.
describe("GET /foods", () => {

    test("should return all five food products", async () => {

        const response = await request(app).get("/foods");

        // The request should return a successful status code.
        expect(response.statusCode).toBe(200);

        // The response should contain an array.
        expect(Array.isArray(response.body)).toBe(true);

        // The mock database contains five food items.
        expect(response.body.length).toBe(5);
    });

});