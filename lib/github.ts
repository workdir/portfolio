import { string, z } from "zod";

const GITHUB_URL = "https://api.github.com/users/";

const RepoSchema = z.object({
    id: z.number(),
    name: string(),
    clone_url: string(),
});

export type Repo = z.infer<typeof RepoSchema>;

export async function getAllRespos() {
    const reposUrl = GITHUB_URL + "users/workdir/repos";
    try {
        const results = (await fetch(reposUrl).then((res) =>
            res.json()
        )) as Repo[];
        const repos = results.map((result) => RepoSchema.parse(result));
        return repos;
    } catch (error) {
        throw error;
    }
}
