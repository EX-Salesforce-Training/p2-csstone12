({    
    handleClick : function(component, event, helper) {
        var searchText = component.get("v.searchText");
        var action = component.get("c.searchForIds");
        //console.log(searchText);
        
        action.setParams({"SearchText": searchText});
        
        action.setCallback(this, function(response) {
        	var state = response.getState();
        
        	if (state === 'SUCCESS') {
                var ids = response.getReturnValue();
                console.log(ids);
                component.set("v.Amiibo.AmiiboName1", null);
                component.set("v.Amiibo.AmiiboImage1", null);
                component.set("v.Amiibo.AmiiboRelease1", null);
                component.set("v.Amiibo.AmiiboSeries1", null);
                
                component.set("v.Amiibo.AmiiboName2", null);
                component.set("v.Amiibo.AmiiboImage2", null);
                component.set("v.Amiibo.AmiiboRelease2", null);
                component.set("v.Amiibo.AmiiboSeries2", null);
                
                if (ids.amiibo.length=3){
                    console.log("this is a test.");
                    component.set("v.Amiibo.AmiiboName1", ids.amiibo[0].name);
                    component.set("v.Amiibo.AmiiboImage1", ids.amiibo[0].image);
                    component.set("v.Amiibo.AmiiboRelease1", ids.amiibo[0].release);
                    component.set("v.Amiibo.AmiiboSeries1", ids.amiibo[0].amiiboSeries);
                    
                    component.set("v.Amiibo.AmiiboName2", ids.amiibo[1].name);
                    component.set("v.Amiibo.AmiiboImage2", ids.amiibo[1].image);
                    component.set("v.Amiibo.AmiiboRelease2", ids.amiibo[1].release);
                    component.set("v.Amiibo.AmiiboSeries2", ids.amiibo[1].amiiboSeries);
                    
                    component.set("v.Amiibo.AmiiboName3", ids.amiibo[2].name);
                    component.set("v.Amiibo.AmiiboImage3", ids.amiibo[2].image);
                    component.set("v.Amiibo.AmiiboRelease3", ids.amiibo[2].release);
                    component.set("v.Amiibo.AmiiboSeries3", ids.amiibo[2].amiiboSeries);
                }
                
                if (ids.amiibo.length=2){
                    console.log("this is a test.");
                    component.set("v.Amiibo.AmiiboName1", ids.amiibo[0].name);
                    component.set("v.Amiibo.AmiiboImage1", ids.amiibo[0].image);
                    component.set("v.Amiibo.AmiiboRelease1", ids.amiibo[0].release);
                    component.set("v.Amiibo.AmiiboSeries1", ids.amiibo[0].amiiboSeries);
                    
                    component.set("v.Amiibo.AmiiboName2", ids.amiibo[1].name);
                    component.set("v.Amiibo.AmiiboImage2", ids.amiibo[1].image);
                    component.set("v.Amiibo.AmiiboRelease2", ids.amiibo[1].release);
                    component.set("v.Amiibo.AmiiboSeries2", ids.amiibo[1].amiiboSeries);
                }
                
                if (ids.amiibo.length<2){
                    component.set("v.Amiibo.AmiiboName1", ids.amiibo[0].name);
                    component.set("v.Amiibo.AmiiboImage1", ids.amiibo[0].image);
                    component.set("v.Amiibo.AmiiboRelease1", ids.amiibo[0].release);
                    component.set("v.Amiibo.AmiiboSeries1", ids.amiibo[0].amiiboSeries);
                }
                
                //console.log(ids.amiibo);
                //console.log(ids.amiibo[1].name);
                //console.log(ids.amiibo[1].amiiboSeries);
                //console.log(ids.amiibo[1].release);
        	}
            if (state !== 'SUCCESS'){
                var ids = response.getReturnValue();
                component.set("v.Amiibo.AmiiboName1", "I'm sorry, no Amiibo was found.");
                component.set("v.Amiibo.AmiiboImage1", null);
                component.set("v.Amiibo.AmiiboRelease1", null);
                component.set("v.Amiibo.AmiiboSeries1", null);
                
                component.set("v.Amiibo.AmiiboName2", null);
                component.set("v.Amiibo.AmiiboImage2", null);
                component.set("v.Amiibo.AmiiboRelease2", null);
                component.set("v.Amiibo.AmiiboSeries2", null);
            }
        });
        $A.enqueueAction(action);
    }
})