export default async function Page({
  params,
}: {
  params: Promise<{ sid: string }>;
}) {
  const { sid } = await params;

  return <div>Category {sid}</div>;
}
