import { createElement } from "react";
import ReactJson from "react-json-view";

import "./ui/TbnJsonView.css";

export function TbnJsonView({ jsonString, themeName, iconStyle }) {
    if (jsonString.status === "available" && themeName.status === "available" && iconStyle.status === "available") {
        const removeJsonChar = jsonString.value.replace(/\n/g, "");
        const jsonObj = JSON.parse(removeJsonChar);
        return (
            <ReactJson
                src={jsonObj}
                theme={themeName.value}
                iconStyle={iconStyle.value}
                collapsed={false}
                collapseStringsAfterLength={20}
                indentWidth={4}
                enableClipboard={true}
                displayObjectSize={true}
                displayDataTypes={true}
            />
        );
    } else {
        return <div />;
    }
}
