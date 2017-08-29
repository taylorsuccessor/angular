



<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";



	$sql1="SELECT * FROM shopes WHERE email ='$data->email' ";
$result = $conn->query($sql1);
if ($result->num_rows != 1) {
$sql = "INSERT INTO shopes (name, email, num, radio, car, area, dates, timee)
VALUES ('$data->name', '$data->email' , '$data->num' , '$data->radio' , '$data->car'  , '$data->area' , '$data->dates' , '$data->timee')";

if($data->name){
	$qry = $conn->query($sql);

}

   echo json_encode(['status'=>'success']);
 }else {

   echo json_encode(['status'=>'error']);
} 

$conn->close();

?>