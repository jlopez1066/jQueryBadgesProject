$(function() {

$.ajax({
		url: 'https://www.codeschool.com/users/1195804.json',
		dataType: 'jsonp',
		success: function(response) {
			addCourses(response.courses.completed);
		}
	});
	
	function addCourses(courses) {
		var $badges = $('#badges');

		courses.forEach(function(course) {

			$('<div />', {
				'class': 'course'
			}).appendTo($badges)
		})
	}
});
