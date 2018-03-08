<?php
include "db.php";

//$req=$db->prepare('SELECT * FROM user WHERE email= :email');
//$req->execute(['email' => $_POST['email']]);
//$user = $req->fetch();
//if (($user) == null)
//{
//	$values['result']="unlisted";
//}
//else
//{
//	if ($_POST['password'] == $user->password)
//	{
//		$values['result']="success";
//		$data []= $user;
//    $encode_donnees = json_encode($data);
//    $values['user']=$encode_donnees;
//	}
//	else
//	{
//		$values['result']="incorrect";
//	}
//}

//$req2=$db->prepare("SELECT DescriptionP FROM `Produit` LIMIT 1;");
//$req2->execute();
//$trial=$req2->fetch();
//$description = $trial;
//$encode_donnees2 = json_encode($description);
//$values['description']=$encode_donnees2;

//$req3=$db->prepare("SELECT * FROM `Produit` WHERE TypeP = 'blonde';");
//$req3->execute();
//$trial2=$req3->fetch();
//$description2 = $trial2;
//$encode_donnees3 = json_encode($description2);
//$values['blonde']=$encode_donnees3;

$values = "boop";
echo json_encode($values);
$req->closeCursor();

?>