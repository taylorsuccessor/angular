<?php
include "db.php";


$sql = "SELECT * FROM shopes ";
$total = "SELECT count(*) as total FROM shopes";
$result = $conn->query($sql);
$rr=$result->num_rows;
if ( $rr> 0) {
    // output data of each row
     $data = array() ;
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode(['rows'=>$data,'totalNumber'=>$rr]);
} else {
    echo "0";
}
$conn->close();
?>
