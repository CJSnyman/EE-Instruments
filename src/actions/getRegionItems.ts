"use server";

import { Listings } from "@/types";

export async function getRegionItems(region: string) {
    try {
        const list: Listings = [];
        const data = (await import(
            `@/../public/${region.toUpperCase()}-Instruments.json`
        )) as unknown;
        if (typeof data === "object" && data && "default" in data && Array.isArray(data.default)) {
            data.default.forEach((item) => {
                if (
                    typeof item === "object" &&
                    item &&
                    "Ticker" in item &&
                    "Instrument Name" in item &&
                    "Exchange" in item &&
                    typeof item.Ticker === "string" &&
                    typeof item["Instrument Name"] === "string" &&
                    typeof item.Exchange === "string"
                ) {
                    list.push(item);
                }
            });
        }
        return { data: list, errors: "" };
    } catch (error) {
        if (typeof error === "object" && "message" in error!) {
            return { data: <Listings>[], errors: `${region.toUpperCase()} do not exist yet.` };
        }
        return { data: <Listings>[], errors: "Internal error" };
    }
}
