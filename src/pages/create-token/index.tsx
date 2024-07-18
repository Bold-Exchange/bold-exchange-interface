import { useState } from "react";

const CreateToken = () => {
    const [name, setName] = useState("");
    const [ticker, setTicker] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState<File | undefined>(undefined);
    const [showMore, setShowMore] = useState(false);

    const [tw, setTw] = useState("");
    const [tg, setTg] = useState("");
    const [website, setWebsite] = useState("");

    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

    }

    return (
        <div>
            <h1>Create Token</h1>
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Name" />
                <label htmlFor="ticker">Ticker</label>
                <input type="text" placeholder="Ticker" />
                <label htmlFor="description">Description</label>
                <input type="text" id="description" placeholder="Description" />
                <label htmlFor="image">Image</label>
                <input type="file" id="image" placeholder="Image" accept="image/*" onChange={(e) => setImage(e.target.files?.[0])} />

                <p onClick={() => setShowMore(!showMore)}>Show more options</p>

                {
                    showMore ? (
                        <div className="flex flex-col gap-2">
                            <label htmlFor="tw">Twitter link</label>
                            <input type="text" id="tw" placeholder="(optional)" value={tw} onChange={(e) => setTw(e.target.value)} />
                            <label htmlFor="tg">Telegram link</label>
                            <input type="text" id="tg" placeholder="(optional)" value={tg} onChange={(e) => setTg(e.target.value)} />
                            <label htmlFor="website">Website</label>
                            <input type="text" id="website" placeholder="(optional)" value={website} onChange={(e) => setWebsite(e.target.value)} />
                        </div>
                    ) : null
                }

                <button type="submit">Create Coin</button>
                <p>Cost to deploy: ~0.02 SOL</p>
            </form>
        </div>
    );
}

export default CreateToken;