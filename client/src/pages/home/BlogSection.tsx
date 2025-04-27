import GradientButton from "@/components/ui/gradient-button";
import { blogPosts } from "@/lib/constants";

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-4 text-primary">Latest Insights & Resources</h2>
          <p className="font-montserrat text-gray-700 max-w-3xl mx-auto">
            Event planning tips, industry trends, and professional advice
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale fade-in-section">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-xs text-gray-500 mr-3">
                    <i className="far fa-calendar-alt mr-1"></i> {post.date}
                  </span>
                  <span className="text-xs text-gray-500">
                    <i className="far fa-clock mr-1"></i> {post.readTime}
                  </span>
                </div>
                <h3 className="font-montserrat font-semibold text-xl mb-3">{post.title}</h3>
                <p className="text-gray-700 text-sm mb-4">
                  {post.excerpt}
                </p>
                <a href="#" className="font-poppins text-primary hover:text-primary/80 inline-flex items-center text-sm">
                  <span>Read More</span>
                  <i className="fas fa-arrow-right ml-1 text-xs"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center fade-in-section">
          <GradientButton 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-white"
            icon={<i className="fas fa-arrow-right"></i>}
          >
            View All Articles
          </GradientButton>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
