import Head from "next/head";
import { useEffect, useState } from "react";
import { createTestimonial } from "@/utils/helper";
import Testimonial from "@/components/testimonial";
import { chunk } from "lodash/array";

const Home = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTestimonials(Array(12).fill(null).map(createTestimonial));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-16 font-sans text-gray-900 lg:py-24">
      <Head>
        <title>Testimonials</title>
      </Head>

      <header className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <div className="space-y-4 lg:space-y-5">
              <h1 className="text-3xl font-semibold lg:text-4xl lg:tracking-tight">
                Our reviews
              </h1>

              <p className="text-lg text-gray-600 lg:text-xl">
                Hear first-hand from our incredible community of customers.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="mt-16">
        <main className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-5 lg:grid-cols-3">
            {chunk(testimonials, 4).map((testimonials, index) => (
              <div key={index} className="lg:first:mt-8 lg:last:mt-10">
                <div className="space-y-5 lg:space-y-8">
                  {testimonials.map((testimonial) => (
                    <Testimonial
                      key={testimonial.id}
                      testimonial={testimonial}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
