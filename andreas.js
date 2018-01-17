	function generieren() {
		var lines = document.getElementById('userListFiled').value.split('\n');
		for(var i = 0;i < lines.length;i++){
			//code here using lines[i] which will give you each line
			//addToExportField("\t" + "0000" + "\t" + "T" + "\t" + "SU01");
addToExportField("\t" + "0000" + "\t" + "M" + "\t" + "SU01" + "\t" + "U217646" + "\t" + "17012018" + "\t" + "121811");
addToExportField("\t" + "0000" + "\t" + "T" + "\t" + "SU01" + "\t" + "BS" + "\t" + "AA" + "\t" + "X" + "\t" + "F");
			addToExportField("SAPLSUID_MAINTENANCE" + "\t" + "1050	X");
			addToExportField("\t" + "0000" + "\t" + "\t" + "BDC_CURSOR" + "\t" + "SUID_ST_BNAME-BNAME");
			addToExportField("\t" + "0000" + "\t" + "\t" + "BDC_OKCODE" + "\t" + "=PASS");
			addToExportField("\t" + "0000" + "\t" + "\t" + "SUID_ST_BNAME-BNAME" + "\t" + lines[i]);
			addToExportField("SAPLSUID_MAINTENANCE" + "\t" + "1400" + "\t" + "X");
			addToExportField("\t" + "0000" + "\t" + "\t" + "BDC_CURSOR" + "\t" + "G_PASSWORD2");
			addToExportField("\t" + "0000" + "\t" + "\t" + "BDC_OKCODE" + "\t" + "=TC_RECEIVERS_MARK");
			addToExportField("SAPLSUU5" + "\t" + "1400" + "\t" + "X");
			addToExportField("\t" + "0000" + "\t" + "\t" + "BDC_CURSOR" + "\t" + "G_PASSWORD1");
			addToExportField("\t" + "0000" + "\t" + "\t" + "BDC_OKCODE" + "\t" + "=SAVE");
			addToExportField("\t" + "0000" + "\t" + "\t" + "SUID_ST_NODE_PASSWORD_EXT-PASSWORD" + "\t" + document.getElementById('newPWField').value);
			addToExportField("\t" + "0000" + "\t" + "\t" + "SUID_ST_NODE_PASSWORD_EXT-PASSWORD2" + "\t" + document.getElementById('newPWField').value);
		}
		document.getElementById('inputTableDiv').style.display = "none";
		document.getElementById('genButtonDiv').style.display = "none";
		document.getElementById('outputAreaDiv').style.display = "block";
		document.getElementById('resetButtonDiv').style.display = "block";
document.getElementById('saveButtonDiv').style.display = "block";
	 }
	 
	function addToExportField(newLineText) {
		var field = document.getElementById('exportField');
		var textValue = field.value;
		textValue += newLineText + "\n";
		field.value = textValue;
	}
	function clearExportField() {
		var field = document.getElementById('exportField');
		var textValue = field.value;
		field.value = "";
	}
	
	function inputSanityCheck() {
		var field1 = document.getElementById('newPWField');
		var field2 = document.getElementById('userListFiled');
		var textValue1 = field1.value;
		var textValue2 = field2.value;
		
	if (textValue1!="")
	  {
		  if (textValue2!=""){
				document.getElementById('genButtonDiv').style.display = "block";
		  }else {
			  document.getElementById('genButtonDiv').style.display = "none";
		  }
	  } else {
		document.getElementById('genButtonDiv').style.display = "none";
	  }
	}
	function resetAll() {
		document.getElementById('inputTableDiv').style.display = "block";
		inputSanityCheck();
		clearExportField();
		document.getElementById('outputAreaDiv').style.display = "none";
		document.getElementById('resetButtonDiv').style.display = "none";
document.getElementById('saveButtonDiv').style.display = "none";
	}

$("#btn-save").click( function() {
  var text = $("#exportField").val();
  var filename = "Export_For_SM35.txt";
  var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
  saveAs(blob, filename+".txt");
});
