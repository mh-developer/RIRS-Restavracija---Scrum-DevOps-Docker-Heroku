const request = require("supertest");
const app = require("../app");

describe("test index strani", () => {
    it("ali se prikaže ime aplikacije", async () => {
        const res = await request(app).get("/").send();
        expect(res.statusCode).toEqual(200);
    });
});
