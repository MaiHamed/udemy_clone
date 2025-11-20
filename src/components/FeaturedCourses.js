import React from "react";

function FeaturedCourses({ data }) {
  return (
    <section className="featured-courses">
      <div className="container">
        <h2>{data.title}</h2>
        <p className="description">{data.description}</p>
        
        <div className="tags-container">
          {data.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        
        <div className="courses-grid">
          {data.courses.map(course => (
            <div key={course.id} className="course-card">
              <div className="course-image">
                <img src={course.image} alt={course.title} />
              </div>
              <div className="course-badge">{course.badge}</div>
              <h3 className="course-title">{course.title}</h3>
              <p className="instructor">{course.instructor}</p>
              <div className="rating">
                <span className="stars">{course.rating} ★</span>
                <span className="reviews">({course.reviews})</span>
              </div>
              <div className="price">{course.price}</div>
              {course.originalPrice && (
                <div className="original-price">{course.originalPrice}</div>
              )}
            </div>
          ))}
        </div>
        
        <button className="show-all-btn">
          Show all Artificial Intelligence (AI) courses →
        </button>
      </div>
    </section>
  );
}

export default FeaturedCourses;