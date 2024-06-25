export type Listing = {
    "Instrument Name": string;
    Exchange: string;
    Ticker: string;
};

export type Listings = Listing[];

export type ListingGroup = Record<string, Record<string, string>[]>;
