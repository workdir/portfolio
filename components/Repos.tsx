import useSWR, { type Fetcher } from "swr";
import { getAllRespos, type Repo } from "../lib/github";

const fetcher: Fetcher<Repo[], Error> = () => getAllRespos();

function FallbackUI() {
    return <div>Hmm...</div>;
}

function Skeleton() {
    return <div>Skeleton</div>;
}

function Repo({ data }: { data: Repo }) {
    return <div>{data.clone_url}</div>;
}

function Repos({ data }: { data: Repo[] }) {
    return (
        <ul>
            {data.map((d) => (
                <Repo data={d} />
            ))}
        </ul>
    );
}

export default () => {
    const { data, error } = useSWR("", fetcher);
    if (error) {
        return <div>nic</div>;
    }
    if (!data) {
        return <div>loading</div>;
    }
    return (
        <div>
            <h1>Projects that i'm currently working on..</h1>
            <div>
                <Repos data={data} />
            </div>
        </div>
    );
};
