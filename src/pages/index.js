import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Meddly NextJS App - Tailwind SASS</title>
        <meta
          name="description"
          content="Meddly NextJS App with Tailwind and SASS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="container mx-auto">Body</div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
