document.addEventListener('DOMContentLoaded', () => {
    const courseButtons = document.querySelectorAll('.register');
    const timetable = document.getElementById('timetable');
    const timetableData = {
      'Course 1: Introduction to Programming': 'Mon 10 AM - 12 PM',
      'Course 2: Web Development Basics': 'Tue 1 PM - 3 PM',
      'Course 3: Data Science Fundamentals': 'Wed 2 PM - 4 PM'
    };
  
    courseButtons.forEach(button => {
      button.addEventListener('click', function() {
        const courseItem = this.closest('.course').textContent.trim();
        const [courseName, courseDescription] = courseItem.split(':');
        const schedule = timetableData[`${courseName}: ${courseDescription}`];
  
        if (schedule) {
          const timetableEntry = document.createElement('div');
          timetableEntry.textContent = `${courseItem} - ${schedule}`;
          timetable.appendChild(timetableEntry);
        } else {
          console.log("No schedule found for:", courseItem);
        }
      });
    });
  });
  