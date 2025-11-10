import requests from 'supertest';
import app from '../src/app.js';
import { expect } from 'vitest';

describe('Appointments API', () => {
    it("GET /api/appointments - should return an array of all appointments", async () => {
        const res = await requests(app).get("/api/appointments");
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it("POST /api/appointments - should create a new appointment", async () => {
        const res = await requests(app)
            .post("/api/appointments")
            .send({
                date: "2024-07-10",
                time: "14:00",
                client: "Bob Johnson",
                doctor: "Dr. Brown"
            });
        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty("id");
        expect(res.body.client).toBe("Bob Johnson");
    });
});