<?php

include('../config/config.php');

destroySession();

// Redirect to the session page
header("Location: session.php");

exit();
