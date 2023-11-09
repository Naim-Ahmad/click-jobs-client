import { Typography } from "@material-tailwind/react";
import naimImage from "../../assets/naimahmad.jpeg";

export default function Blogs() {
  return (
    <div>
      <header className="max-w-[900px] mx-auto px-4 sm:px-10 mt-6">
        <h1 className="text-4xl font-extrabold">
          What is an access token and refresh token? How do they work and
          where should we store them on the client-side? What is express js?
          What is Nest JS ?.
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
          <div>
            <Typography variant="h5">Access Token and Refresh Token</Typography>

            <p>
              <strong>Access Token:</strong> An access token is a temporary and
              short-lived credential that is used to access protected resources
              on a server. It is typically issued by an authentication server
              when a user or application successfully authenticates. Access
              tokens are used to make authenticated requests to APIs, services,
              or resources.
            </p>

            <p>
              <strong>Refresh Token:</strong> A refresh token is a longer-lived
              credential that is used to obtain a new access token when the
              original access token expires. It is typically used in combination
              with an access token to maintain continuous access to resources
              without requiring the user to re-enter their credentials.
            </p>

            <h3>How they work:</h3>
            <ol>
              <li>
                When a user or application authenticates, the authentication
                server issues an access token with a specific expiration time.
              </li>
              <li>
                The client-side (e.g., a web or mobile app) stores the access
                token securely.
              </li>
              <li>
                When the access token expires, the client can use the refresh
                token to request a new access token from the authentication
                server without requiring the user to re-authenticate.
              </li>
              <li>
                The refresh token itself is typically long-lived and should be
                stored securely on the client-side.
              </li>
            </ol>

            <h3>Storage on the client-side:</h3>
            <p>
              Access tokens and refresh tokens should be stored securely on the
              client-side to prevent unauthorized access. Common storage options
              include:
            </p>
            <ul>
              <li>
                Browser storage (LocalStorage or SessionStorage): Suitable for
                web applications, but not the most secure option.
              </li>
              <li>
                Cookies: Can be used for storing tokens with appropriate
                security settings (e.g., HttpOnly and Secure flags).
              </li>
              <li>
                Mobile app storage: In the case of mobile apps, tokens can be
                stored in secure storage mechanisms provided by the platform
                (e.g., Keychain in iOS, Keystore in Android).
              </li>
              <li>
                In-memory storage: For single-page applications, tokens can be
                stored in memory but may be vulnerable to certain attacks.
              </li>
              <li>
                Native app secure storage: For desktop or native mobile apps,
                there are platform-specific secure storage mechanisms.
              </li>
            </ul>
          </div>
          <div className="py-10">
            <Typography variant="h5">What is Express.js?</Typography>
            <p>
              <strong>Express.js</strong> is a minimal and flexible Node.js web
              application framework that is commonly used to build web and API
              servers. It simplifies the process of handling HTTP requests,
              routing, middleware, and other web-related tasks. Express.js is
              known for its simplicity, performance, and a large ecosystem of
              middleware and extensions.
            </p>

            <h2>What is Nest.js?</h2>
            <p>
              <strong>Nest.js</strong> is a full-featured, extensible Node.js
              framework that is designed for building scalable and maintainable
              server-side applications. It builds on top of Express.js and
              provides a structured, modular, and opinionated architecture for
              developing applications. Nest.js promotes the use of decorators,
              modules, and dependency injection, making it suitable for building
              enterprise-grade applications.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
