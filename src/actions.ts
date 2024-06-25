export const fetch_start_agent = async (
  serverUrl: string,
  serverAuth: string | null
) => {
  console.log(serverUrl)
  const req = await fetch(`${serverUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${serverAuth}`
    },
    body: JSON.stringify({}),
  });

  const data = await req.json();

  if (!req.ok) {
    return { error: true, detail: data.detail };
  }
  return data;
};
