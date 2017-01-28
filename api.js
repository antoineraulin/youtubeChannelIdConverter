var process;
var youtubeChannelIdConverterResult = "";

function youtubeChannelIdConvert(channelName){
process = $.ajax({
    type:     "GET",
    url:      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBU_oWEIULi3-n96vWKETYCMsldYDAlz2M&part=snippet&q="+channelName+"&type=channel",
    dataType: "jsonp",
    success: function(data1){
	result = data1['items'][0]['id']['channelId'];
        console.log(result);
    
    }
});
wait();
}

function wait(){
    console.log(process);
   if(process['readyState'] == 1){
       setTimeout(wait, 100);
       console.log("timeoutSet");
   } else if(process['readyState']== 4){
       youtubeChannelIdConverterResult = process['responseJSON']['items'][0]['id']['channelId'];
       console.log(youtubeChannelIdConverterResult);
   }

}