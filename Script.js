$(document).ready(function() {
    // Function to fetch brewery details from API
    function fetchBreweryDetails(breweryId) {
        $.ajax({
            type: 'GET',
            url: 'https://www.openbrewerydb.org/documentation' + breweryId,
            success: function(response) {
                // Populate brewery details
                $('#breweryInfo').html(`
                    <p><strong>Name:</strong> ${response.name}</p>
                    <p><strong>Address:</strong> ${response.address}</p>
                    <p><strong>Phone:</strong> ${response.phone}</p>
                    <p><strong>Website:</strong> <a href="${response.website_url}" target="_blank">${response.website_url}</a></p>
                    <p><strong>State, City:</strong> ${response.state}, ${response.city}</p>
                    <p><strong>Current rating:</strong> ${response.rating}</p>
                `);
            },
            error: function(error) {
                console.error('Error:', error);
            }
        });
    }

    // Fetch brewery details when page loads
    var breweryId = '123'; // Replace with actual brewery ID
    fetchBreweryDetails(breweryId);

    // Function to fetch and display existing reviews
    function fetchReviews() {
        $.ajax({
            type: 'GET',
            url: 'https://api.example.com/breweries/' + breweryId + '/reviews',
            success: function(reviews) {
                $('#reviews').empty();
                reviews.forEach(function(review) {
                    $('#reviews').append(`
                        <div class="review">
                            <p><strong>Rating:</strong> ${review.rating}</p>
                            <p><strong>Description:</strong> ${review.description}</p>
                        </div>
                    `);
                });
            },
            error: function(error) {
                console.error('Error:', error);
            }
        });
    }

    // Fetch and display existing reviews when page loads
    fetchReviews();

    // Submit review form
    $('#reviewForm').submit(function(event) {
        event.preventDefault();
        var rating = $('#rating').val();
        var description = $('#description').val();
        // Send review data to API
        $.ajax({
            type: 'POST',
            url: 'https://www.openbrewerydb.org/documentation' + breweryId + '/reviews',
            data: { rating: rating, description: description },
            success: function(response) {
                // Clear form fields
                $('#rating').val('');
                $('#description').val('');
                // Fetch and display updated reviews
                fetchReviews();
            },
            error: function(error) {
                console.error('Error:', error);
            }
        });
    });
});









$(document).ready(function() {
    // Default username and password for demo
    const defaultUsername = 'prakash';
    const defaultPassword = 'prakash';

    // Function to handle login form submission
    $('#loginForm').submit(function(event) {
        event.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();

        // Check if entered username and password match the default credentials
        if (username === defaultUsername && password === defaultPassword) {
            // Redirect to brewery.html
            window.location.href = 'brewery.html';
        } else {
            // Show error message for incorrect credentials
            alert('Invalid username or password. Please try again.');
        }
    });

    // Function to handle signup form submission
    $('#signupForm').submit(function(event) {
        event.preventDefault();
        // Implement signup functionality if needed
        alert('Signup functionality not implemented.');
    });
});

