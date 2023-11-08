import naimImage from '../../assets/naimahmad.jpeg';


export default function Blogs() {
  return (
    <div>
      <header className="max-w-[900px] mx-auto px-4 sm:px-10 mt-6">
        <h1 className="text-4xl font-extrabold">
          Difference between var, let, const. nul vs undefined. Rest API
        </h1>
        <div className="flex mt-6">
          <figure className="me-4">
            <img className="rounded-full w-16" src={naimImage} alt="" />
          </figure>
          <div>
            <p>Naim ahmad</p>
            <p className="text-lg">
              Published: <time dateTime="2023-09-1">8-Nov-2023</time>
            </p>
          </div>
        </div>
      </header>
      <main className="max-w-[900px] mx-auto mt-6 px-4 sm:px-10">
        <div className="divider"></div>
        <article>
          <section>
            <h2 className="text-3xl font-semibold">
              var, let, const এর মধ্যে পার্থক্য
            </h2>
            <p className="text-lg" id="let-var-const"></p>
          </section>
          <div className="divider"></div>
          <section className="">
            <h2 className="text-3xl font-semibold">null vs undefined</h2>
            <p className="text-lg" id="null-undefined"></p>
          </section>
          <div className="divider"></div>
          <section className="pb-8">
            <h2 className="text-3xl font-semibold">
              API (application programming interface)
            </h2>
            <p className="text-lg" id="api"></p>
          </section>
        </article>
      </main>
    </div>
  );
}
