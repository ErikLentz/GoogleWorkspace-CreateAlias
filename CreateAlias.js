function createrAlias() {
	
	
	var ss = SpreadSheetApp.getActive()
	var sheet = ss.getSheetByName("Create Alias")
	var values = sheet.getDataRange().getValues()
	var fileArray = [["Alias Creation Status"]]
	
	for(i=1; i <values.length; i++)
	{
		
		var userKey = values[i][0]
		var aliasId = values[i][0]
		
		try{
			
			var status = "Alias Not Created"
			var status = AdminDirectory.Users.Aliases.insert({"primaryEmail": userKey,"alias": aliasId}, userKey)
			if (status != "Alias Not Created"){
				
				status = "Alias Created Successfully"
				
			}
			
		}
		
		catch (e) {
			
			Logger.log(e.message)
			var status = e.message
			
			}
		
		fileArray.push([status])
		
		
	}
	
	var range = sheet.getRange(1, 3, fileArray.length, 1).setValues(fileArray)
	
	}