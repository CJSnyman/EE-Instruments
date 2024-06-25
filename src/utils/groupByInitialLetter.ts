import { ListingGroup, Listings } from "@/types";

function groupByInitialLetter({
    data,
    errors,
}: {
    data: Listings;
    errors: string[] | string;
}): [ListingGroup, string[]] {
    const listingsGroup: ListingGroup = {};

    data.map((listing) => {
        const firstLetter = listing["Instrument Name"].charAt(0);
        if (listingsGroup[firstLetter] === undefined) {
            listingsGroup[firstLetter] = [{ [listing["Instrument Name"]]: listing.Exchange }];
        } else {
            listingsGroup[firstLetter].push({ [listing["Instrument Name"]]: listing.Exchange });
        }
    });
    return [listingsGroup, typeof errors === "string" ? [errors] : errors];
}

export default groupByInitialLetter;
