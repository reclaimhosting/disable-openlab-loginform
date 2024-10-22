(function($){
	$(document).ready(function(){
		$('#wp-admin-bar-bp-login > a').unbind('click');
      
        var signupDiv = $('#open-lab-join');
        if (signupDiv.length) {
            signupDiv.html(`
            <h2 class="title"><span class="fa fa-plus-circle flush-left"></span> Sign Up</h2>
            <p><a class="btn btn-default btn-primary link-btn pull-right semibold" href="/wp-login.php">Sign up</a> <span class="font-size font-14">Need an account?<br>Sign Up to become a member!</span></p>
            `);
        } else {
            console.error('Element with id open-lab-join not found');
        } 

        var loginDiv = $('#user-login');
        if (loginDiv.length) {
            loginDiv.html(`
            <h2 class="title"><span class="fa fa-arrow-circle-right"></span> Log in</h2>
            <p class="font-size font-14">Returning user?<br>Log in using your username and password.</p>
            <a class="btn btn-default btn-primary link-btn pull-right semibold" href="/wp-login.php">Log in</a>
            `);
        } else {
            console.error('Element with id user-login not found');
        }
      
	});
}(jQuery));
