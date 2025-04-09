"use client"
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from "./button";
export default function Calendar() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "15min" });
            cal("ui", { "theme": "dark", "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return <Button data-cal-namespace="15min"
        data-cal-link="syed-ahmed/15min"
        data-cal-config='{"layout":"month_view","theme":"dark"}'
        className="w-full" variant="outline" 
    >Book a meeting</Button>;
};
