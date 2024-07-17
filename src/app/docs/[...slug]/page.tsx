/**
 * 
 * @example - What It Is: A way to capture multiple parts of a URL into a single route
            How It Works: Use three dots inside square brackets like this: [...parts].
 */


export default function Docs({ params }: {
    params: {
        slug: string[];
    };
}) {
    if (params.slug.length === 2) {
        return (<h1>
            Viewing docs for features {params.slug[0]} and concept {params.slug[1]}
        </h1>
        )
    } else if (params.slug.length === 1) {
        return (<h1>
            Viewing docs for features {params.slug[0]}.
        </h1>)
    }

    return (<h1>Hello from catch all segment</h1>);

}