"use server";

import { Listings } from "@/types";
import { getRegionItems } from "./getRegionItems";
import exchanges from "@/utils/exchanges";

export async function getAllItems() {
    const errors: string[] = [];
    const data: Listings = [];

    const fetches = await Promise.allSettled(exchanges.map((exchange) => getRegionItems(exchange)));

    fetches.map((result) => {
        if (result.status === "fulfilled") {
            if (result.value.errors) {
                errors.push(result.value.errors);
            } else {
                data.push(...result.value.data);
            }
        }
    });
    return { data, errors };
}
