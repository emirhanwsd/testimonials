const Testimonial = ({ testimonial }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="p-6 lg:p-8">
        <div className="space-y-8 lg:space-y-12">
          <div className="space-y-3">
            <h5 className="text-lg font-semibold">
              {testimonial.company.name}
            </h5>

            <p className="text-gray-600">{testimonial.text}</p>
          </div>

          <div className="flex gap-x-3">
            <img
              src={testimonial.person.image}
              alt={testimonial.person.name}
              loading="lazy"
              className="size-12 rounded-full border border-black/10 bg-gray-100"
            />

            <div className="truncate">
              <h6 className="font-semibold">{testimonial.person.name}</h6>

              <p className="text-gray-600">{testimonial.person.job}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
