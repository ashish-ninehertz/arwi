import { Star } from 'lucide-react';
import { Testimonial } from '../data/mockData';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg h-full flex flex-col">
      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-warning fill-warning" />
        ))}
      </div>
      <p className="text-text-secondary mb-6 flex-grow italic">
        "{testimonial.content}"
      </p>
      <div className="flex items-center space-x-4">
        <img
          src={testimonial.avatarUrl}
          alt={testimonial.clientName}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-text">{testimonial.clientName}</p>
          <p className="text-sm text-text-secondary">
            {testimonial.position} at {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
