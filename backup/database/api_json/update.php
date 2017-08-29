




<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";




$sql = "UPDATE shopes SET
name ='$data->name',  email ='$data->email',  num='$data->num' , radio='$data->radio' , car='$data->car'  , area='$data->area' , dates='$data->dates' , timee='$data->timee'
WHERE shop_id = $data->shop_id ";

if($data->name){
	$qry = $conn->query($sql);
echo json_encode(['status'=>'success']);
}


   
 else {

   echo json_encode(['status'=>'error']);
} 

$conn->close();

?>