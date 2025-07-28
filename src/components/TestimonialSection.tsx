const TestimonialSection = () => {
  return (
    <section className="py-24 px-6 bg-background-subtle">
      <div className="max-w-4xl mx-auto text-center">
        {/* Testimonial Quote */}
        <div className="space-y-8">
          <blockquote className="text-3xl font-medium text-text-primary leading-relaxed italic">
            "This platform has been a game-changer for our business. The intuitive interface and powerful features have made financial management so much easier. We've saved countless hours and gained valuable insights into our spending patterns."
          </blockquote>

          {/* Author */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
                alt="John Doe"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <div className="font-semibold text-text-primary">
                John Doe
              </div>
              <div className="text-text-tertiary">
                CEO, Company
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;