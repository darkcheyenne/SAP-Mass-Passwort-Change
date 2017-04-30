	function generieren() {
		var lines = document.getElementById('userListFiled').value.split('\n');
		for(var i = 0;i < lines.length;i++){
			//code here using lines[i] which will give you each line
			addToExportField("\t" + "0000" + "\t" + "T" + "\t" + "SU01");
			addToExportField("SAPLSUU5" + "\t" + "0050	X");
			addToExportField("\t" + "0000" + "\t" + "\t" + "BDC_CURSOR" + "\t" + "USR02-BNAME");
			addToExportField("\t" + "0000" + "\t" + "\t" + "BDC_OKCODE" + "\t" + "=PASS");
			addToExportField("\t" + "0000" + "\t" + "\t" + "USR02-BNAME" + "\t" + lines[i]);
			addToExportField("SAPLSUU5" + "\t" + "0400" + "\t" + "X");
			addToExportField("\t" + "0000" + "\t" + "\t" + "BDC_CURSOR" + "\t" + "G_PASSWORD2");
			addToExportField("\t" + "0000" + "\t" + "\t" + "BDC_OKCODE" + "\t" + "=TC_RECEIVERS_MARK");
			addToExportField("SAPLSUU5" + "\t" + "0400" + "\t" + "X");
			addToExportField("\t" + "0000" + "\t" + "\t" + "BDC_CURSOR" + "\t" + "G_PASSWORD1");
			addToExportField("\t" + "0000" + "\t" + "\t" + "BDC_OKCODE" + "\t" + "=SAVE");
			addToExportField("\t" + "0000" + "\t" + "\t" + "G_PASSWORD1" + "\t" + document.getElementById('newPWField').value);
			addToExportField("\t" + "0000" + "\t" + "\t" + "G_PASSWORD2" + "\t" + document.getElementById('newPWField').value);
		}
		document.getElementById('inputTableDiv').style.display = "none";
		document.getElementById('genButtonDiv').style.display = "none";
		document.getElementById('outputAreaDiv').style.display = "initial";
		document.getElementById('resetButtonDiv').style.display = "initial";
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
				document.getElementById('genButtonDiv').style.display = "initial";
		  }else {
			  document.getElementById('genButtonDiv').style.display = "none";
		  }
	  } else {
		document.getElementById('genButtonDiv').style.display = "none";
	  }
	}
	function resetAll() {
		document.getElementById('inputTableDiv').style.display = "initial";
		inputSanityCheck();
		clearExportField();
		document.getElementById('outputAreaDiv').style.display = "none";
		document.getElementById('resetButtonDiv').style.display = "none";
	}