<?php
function createUser($firstname, $lastname, $email, $country){
   include('connect.php');

    $check_exist_query = 'SELECT COUNT(*) FROM tbl_users';
    $check_exist_query .= ' WHERE user_email = :email ';
    $user_set = $pdo->prepare($check_exist_query);
    $user_set->execute(
        array(
            ':email'=>$email
        )
        );
        $email_found = $user_set->fetchColumn();
        if($email_found > 0){


            $update_user_query = 'UPDATE tbl_users SET user_lastupdate = date("h:i:sa") WHERE user_email = :email';
            $message = 'You already did this!';
            return $message;
        }


        $update_query = "INSERT INTO tbl_users (user_firstname, user_lastname, user_email, user_country, user_subscribe, user_lastupdate, user_ip)
        VALUES ('firstname', 'lastname', 'email', 'country')
        ON DUPLICATE KEY UPDATE
        user_firstname = values(firstname),
        user_lastname = values(lastname),
        user_country = values(country);";


   $create_user_query = 'INSERT INTO tbl_users(user_firstname,user_lastname,user_email,user_country)';
   $create_user_query .= ' VALUES(:firstname,:lastname,:email,:country)';
   $create_user_set = $pdo->prepare($create_user_query);
   $create_user_set->execute(
       array(
          ':firstname'=>$firstname,
          ':lastname'=>$lastname,
          ':email'=>$email,
          ':country'=>$country
       )
       );
    if($create_user_set->rowCount()){
        $notification = 'You are subscribed!';
        return $notification;
    }else{
        $message = 'Error';
        return $message;
    }
}
