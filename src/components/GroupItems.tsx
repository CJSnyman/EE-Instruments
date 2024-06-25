import { getAllItems } from "@/actions/getAllItems";
import { getRegionItems } from "@/actions/getRegionItems";
import { ListingGroup } from "@/types";
import groupByInitialLetter from "@/utils/groupByInitialLetter";

async function GroupItems({ region }: { region: string }) {
    let [data, errors]: [ListingGroup, string[]] =
        region.toLowerCase() === "all"
            ? groupByInitialLetter(await getAllItems())
            : groupByInitialLetter(await getRegionItems(region));

    return (
        <div>
            <section>
                {errors.map((error, errorsIndex) => (
                    <p key={errorsIndex}>{error}</p>
                ))}
            </section>
            <section>
                {Object.entries(data).map((group, groupIndex) => (
                    <div key={groupIndex}>
                        <h2>{group[0]}</h2>
                        {group[1].map((listing, listingIndex) => (
                            <p key={listingIndex}>{JSON.stringify(listing, null, 2)}</p>
                        ))}
                    </div>
                ))}
            </section>
        </div>
    );
}

export default GroupItems;
