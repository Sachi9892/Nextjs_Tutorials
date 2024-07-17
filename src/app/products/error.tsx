"use client";


//Error as prop to show error details
export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
    return
    <div>Error Occured  :
        {error.message}

        <button onClick={reset}> try again </button>

    </div>
}