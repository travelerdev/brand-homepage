import { Metadata } from "next";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get support for our software products. Contact us via email or Twitter for help with any issues."
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="body-font min-h-screen flex-grow flex flex-col justify-start items-stretch">
        <Navbar />
        <div className="container px-5 py-8 mx-auto flex-grow justify-center flex flex-col flex-wrap">
          <div className="max-w-prose">
            <h1 className="mx-auto text-4xl font-title">Here to Help</h1>
            <p className="prose mt-6">
              Traveler Dev is a very small company. Indeed, most of the time
              it&rsquo;s just me,{" "}
              <a
                href="https://www.zack.computer"
                rel="noreferrer noopener"
                target="_blank"
              >
                Zack
              </a>
              .
            </p>
            <p className="prose mt-6">
              Because we&rsquo;re so small, the quality of our software and the
              happiness of each person using it is really important to us. If
              you&rsquo;re having an issue with one of our products, please send
              an email or reach out on Twitter.
            </p>
            <div className="prose flex flex-row mt-6 items-center">
              <strong>Get help by email:</strong>
              <a href="mailto:support@traveler.dev">
                <div className="flex flex-row items-center">
                  <svg
                    className="w-8 h-8 ml-4 mr-2 text-purple-600"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 60 60"
                    enableBackground="new 0 0 60 60"
                    xmlSpace="preserve"
                  >
                    <path d="M54.92,14.88c0-0.02,0-0.04-0.01-0.06s-0.02-0.03-0.03-0.04c-0.01-0.02-0.02-0.05-0.03-0.07c-0.03-0.06-0.08-0.1-0.13-0.15  c-0.02-0.02-0.03-0.04-0.05-0.06c-0.08-0.08-0.18-0.14-0.28-0.18c-0.02-0.01-0.05-0.01-0.07-0.02c-0.08-0.03-0.17-0.05-0.26-0.05  h-0.11c-0.04,0.01-0.08,0-0.12,0.01l-48,8.51c-0.41,0.07-0.73,0.38-0.81,0.79c-0.08,0.4,0.09,0.81,0.43,1.03l9.3,6.1l5.21,14.38  c0.04,0.11,0.1,0.2,0.17,0.29c0,0.01,0,0.01,0.01,0.02s0.03,0.02,0.04,0.03c0.08,0.08,0.16,0.14,0.26,0.19  c0.03,0.02,0.06,0.04,0.09,0.05c0.12,0.04,0.24,0.08,0.36,0.08c0.01,0,0.01,0,0.01,0c0.05,0,0.11-0.01,0.17-0.02  c0.03,0,0.05-0.02,0.08-0.03c0.06-0.01,0.11-0.03,0.16-0.06c0.06-0.02,0.11-0.05,0.16-0.09c0.03-0.02,0.05-0.03,0.08-0.04l6.78-5.82  l5.35,3.51c0.44,0.29,1.04,0.18,1.35-0.25l19.78-27.1c0.06-0.09,0.11-0.18,0.14-0.28c0-0.01,0-0.02,0.01-0.04  c0.03-0.09,0.04-0.19,0.04-0.29c0-0.03-0.01-0.07-0.02-0.1C54.97,15.04,54.95,14.96,54.92,14.88z M21.9,42.54v-7.11l4.69,3.08  L21.9,42.54z M20.41,32.72c-0.01,0-0.01,0.01-0.02,0.01c-0.09,0.06-0.17,0.13-0.25,0.21c-0.02,0.03-0.03,0.05-0.05,0.07  c-0.06,0.09-0.12,0.19-0.15,0.29c0,0.01,0,0.01-0.01,0.02c-0.02,0.09-0.03,0.18-0.03,0.27v5.44l-3.05-8.41l24.06-9.27L20.41,32.72z" />
                    {/* <path d="M49.46,40.78c-0.72,0-1.41,0.19-2.02,0.55c-0.6-0.36-1.3-0.55-2.01-0.55c-2.2,0-3.99,1.79-3.99,3.99  c0,2.75,4.45,6.76,5.35,7.53c0.19,0.17,0.42,0.25,0.65,0.25c0.24,0,0.47-0.08,0.66-0.25c0.89-0.77,5.35-4.78,5.35-7.53  C53.45,42.57,51.66,40.78,49.46,40.78z" />
                    <path d="M14.52,17.22c0.24,0,0.47-0.08,0.66-0.25c0.72-0.62,4.32-3.86,4.32-6.14c0-1.86-1.51-3.38-3.37-3.38  c-0.57,0-1.12,0.14-1.61,0.41c-0.49-0.27-1.03-0.41-1.6-0.41c-1.86,0-3.38,1.52-3.38,3.38c0,2.28,3.61,5.52,4.33,6.14  C14.06,17.15,14.29,17.22,14.52,17.22z" /> */}
                  </svg>
                  support@traveler.dev
                </div>
              </a>
            </div>
            <div className="prose flex flex-row items-center">
              <strong>Reach out on Twitter:</strong>
              <a href="https://www.twitter.com/travelerdev">
                <div className="flex flex-row items-center">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-7 h-7 ml-4 mr-2 text-blue-600"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                  @travelerdev
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
