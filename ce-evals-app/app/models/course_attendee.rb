class CourseAttendee < ActiveRecord::Base
  belongs_to :course
  belongs_to :attendee
end
