"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Button from "./ui/atoms/button";


export default function CalButton() {

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "15min" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, []);

    return (
        <Button
            variant="primary"
            data-cal-namespace="15min"
            data-cal-link="roney-gajjar-qbehlx/15min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
        >
            Book a call
        </Button>
    );
};
