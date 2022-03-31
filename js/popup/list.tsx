import * as React from "react";
import "../../scss/popup.scss";

export default function List() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        fetch("https://www.jindw.xyz/api/content/posts", {
            headers: {
                "API-Authorization": "joe2.0",
            },
        })
            .then((response) => response.json())
            .then((result) => setData(result.data.content));
    }, []);

    function open(url: string) {
        (window as any).chrome.tabs.create({
            url: `https://jindw.xyz/${url}`,
        });
    }

    return (
        <dl className='popup-list'>
            {data.map((itm) => (
                <dd onClick={open.bind(null, itm.fullPath)} key={itm.fullPath}>
                    {itm.title}
                </dd>
            ))}
        </dl>
    );
}