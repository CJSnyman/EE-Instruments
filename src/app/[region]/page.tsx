import { getRegionItems } from "@/actions/getRegionItems";
import GroupItems from "@/components/GroupItems";
import React from "react";

function RegionItems({ params }: { params: { region: string } }) {
    return (
        <div>
            RegionItems: {params.region}
            <GroupItems region={params.region} />
        </div>
    );
}

export default RegionItems;
