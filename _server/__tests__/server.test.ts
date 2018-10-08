import express from "express";
import { bootstrap } from "../server";

jest.mock("express", () => {
    return jest.fn().mockImplementation(() => {
        return {
            set: jest.fn(),
            get: jest.fn(),
            listen: jest.fn((_options, callback) => callback())
        };
    });
});

describe("Bootstraping server", () => {
    beforeEach(() => {
        (express as any).mockClear();
    })
    test("bootstrap through express", () => {
        bootstrap();
        expect(express).toHaveBeenCalledTimes(1);
    })
})