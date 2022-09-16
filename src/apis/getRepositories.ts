import { z } from "zod";

const RespositoryListApiResponse = z.object({
  data: z.object({
    viewer: z.object({
      repositories: z.object({
        nodes: z
          .object({
            name: z.string(),
            url: z.string(),
            description: z.string().nullable(),
            createdAt: z.preprocess((arg) => {
              if (typeof arg === "string" || arg instanceof Date)
                return new Date(arg);
            }, z.date()),
            languages: z.object({
              nodes: z
                .object({
                  name: z.string(),
                })
                .array(),
            }),
          })
          .array(),
      }),
    }),
  }),
});

export type Repository = {
  name: string;
  url: string;
  createdAt: Date;
  description: string | null;
  languages: string[];
};

export async function getRepositories(): Promise<Repository[]> {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.SECRET_GITHUB_TOKEN}`,
    },
    body: JSON.stringify({
      query: `query {
        viewer {
          repositories(first: 25, orderBy: {direction: DESC, field: CREATED_AT}, isFork: false, privacy: PUBLIC) {
            nodes {
              name
              url
              description
              createdAt
              languages(first: 5, orderBy: {direction: DESC, field: SIZE}) {
                nodes {
                  name
                }
              }
            }
          }
      }}`,
    }),
  });
  const json = RespositoryListApiResponse.parse(await response.json());
  return json.data.viewer.repositories.nodes
    .filter((repository) => repository.description !== null)
    .map(({ name, description, createdAt, url, languages }) => ({
      name,
      description,
      createdAt,
      url,
      languages: languages.nodes.map((language) => language.name),
    }));
}
