function updateTitle() {
  
  var videoID = 'MnBx6-uxZ_A';  

  var part = 'snippet,statistics';
  var params = {'id': videoID};
  
  var response = YouTube.Videos.list(part, params);
  var video = response.items[0];
  
  var channelID = 'UCuyCA15tOP0GKq9pgI3454w' ;   

  var part2 = 'snippet,contentDetails,statistics';
  var params2 = {'id': channelID};
  var response2 = YouTube.Channels.list(part2, params2);
  var channel = response2.items[0];
  var subscribers = channel.statistics.subscriberCount;
  var videos = channel.statistics.videoCount;
  var views = channel.statistics.viewCount;
  
  var videoTitle = 'This channel has ' + subscribers + ' Subscribers , '+ videos +' Videos & ' + views + ' Views!';
  
  video.snippet.title = videoTitle;
  
  try{
    YouTube.Videos.update(video, part);
    
  }catch(e){
    
  
  }
  
}
