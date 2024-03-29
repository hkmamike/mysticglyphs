angular.module('starter.DatabaseUploader', [])


.factory('FirebaseUpload', function($firebaseObject, $firebaseArray) {
  
  var ref = firebase.database().ref();

  return {

    updateDatabase: function() {
			console.log('uploading to database from source');
			updates = {};
/*UploadCode FULL---------------------------------------------------------------------------*/

/*City : Hong Kong--------------------------------------------------------------------------*/
updates['/DatabaseInfo/CityCampaignInfo/HongKong/Order' ] = '1';
updates['/DatabaseInfo/CityCampaignInfo/HongKong/CityName' ] = 'HongKong';
updates['/DatabaseInfo/CityCampaignInfo/HongKong/CoverImg' ] = 'https://firebasestorage.googleapis.com/v0/b/mysticglyphs.appspot.com/o/HongKong.png?alt=media&token=cf0d4098-8445-46b2-b317-15ec36de5c64';
updates['/DatabaseInfo/CityCampaignInfo/HongKong/Description' ] = 'xxx';
updates['/DatabaseInfo/CityCampaignInfo/HongKong/Info' ] = 'xxx';
updates['/DatabaseInfo/CityCampaignInfo/HongKong/Enabled' ] = 'true';

/*HK History Museum Mission*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Location' ] = 'HK History Museum';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/CoverImg' ] = 'https://firebasestorage.googleapis.com/v0/b/mysticglyphs.appspot.com/o/HKHistoryMuseum.png?alt=media&token=236a46a4-1061-4d6c-ac28-84333272b6c2';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/LocationDesc' ] = 'The Riddle Master has placed a few glyphs in this museum. This seems to be an introductory mission that the Master prepared for us. Dont alert the guards and you should be fine. Finding at least 4 of the 6 glyphs will unlock the next mission.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/MissionStatus' ] = 'Current';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Area' ] = 'Tsim Sha Tsui';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/OtherInfo' ] = 'Visit the "HK Story" exhibition for this mission. Be careful not to alert the guards.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Tips' ] = 'The Museum closes every Tuesday. Get a map at the Museum entrance.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/EstimatedDuration' ] = '90-120 minutes';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/GlyphsDifficulty' ] = '1';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/StealthDifficulty' ] = '3';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Direction' ] = 'MTR @ Tsim Sha Tsui (15 mins walk from Exit B2)';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Terrain' ] = 'Indoor';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Hours' ] = '10:00 - 18:00';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/GlyphTypes' ] = 'Magnetic Case, Hanging Case';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/MissionType' ] = 'Free';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Coordinates/centerLat' ] = '22.301883';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Coordinates/centerLng' ] = '114.177437';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Coordinates/markerLng' ] = '114.177264';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Coordinates/markerLat' ] = '22.301457';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Coordinates/polygonCoords' ] = '22.301320,114.176978-22.301446,114.176864-22.301678,114.176878-22.302473,114.177335-22.302544,114.177512-22.302183,114.177840-22.301832,114.177792-22.301620,114.177976-22.301407,114.177726-22.301697,114.177435';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Coordinates/zoom' ] = '18';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/TokenUnlocked' ] = '0';

/*HK History Museum Glyph #1*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_1/Order' ] = '1';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_1/TokenName' ] = 'Mystic Glyph?';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_1/TokenMsg' ] = 'We have got this image but we dont know what it means (see image)';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_1/TokenImg' ] = 'https://firebasestorage.googleapis.com/v0/b/mysticglyphs.appspot.com/o/GlyphClues%2FWinnowing.png?alt=media&token=187840d7-6180-4332-8a6f-4934771b0c46';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_1/TokenImgMessage' ] = 'Find out what they are doing';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_1/SearchHints' ] = 'This one is on the first floor, near an abandoned Chinese house. Investigate the Image.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_1/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_1/HintA' ] = 'There are only two glyphs on the first floor';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_1/HintB' ] = 'Search above the steering wheels for glyph #4';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_1/HintC' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_1/HintD' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_1/HintE' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_1/Type' ] = 'Virtual';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_1/Tips' ] = 'You dont have to solve glyphs in order. Solving glyphs unlock additional clues for other glyphs.';
updates['/DatabaseInfo/TokenInfo/HongKong_1_1_1/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_1_1/TokenCode' ] = 'winnowing';

/*HK History Museum Glyph #2*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_2/Order' ] = '2';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_2/TokenName' ] = 'Folk Culture Theatre';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_2/TokenMsg' ] = 'There is a theatre near the end of the first floor. A great place to rest :)';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_2/TokenImg' ] = 'https://firebasestorage.googleapis.com/v0/b/mysticglyphs.appspot.com/o/GlyphClues%2FGlyphCase.png?alt=media&token=204a8d94-6e2a-42e5-a43f-f8ab8205c858';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_2/TokenImgMessage' ] = 'The image shows a typical glyph case that you are looking for';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_2/SearchHints' ] = 'Search the rightmost seat of the last row (use right hand), or the leftmost seat of the last row (use left hand). Dont act out of place, you can find this sitting down.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_2/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_2/HintA' ] = 'Pay attention to coins for glyph #5';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_2/HintB' ] = 'Go up the wooden upstairs for glyph #3';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_2/HintC' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_2/HintD' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_2/HintE' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_2/Type' ] = 'Case';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_2/Tips' ] = 'Sometimes, glyph codes are hints for other glyphs';
updates['/DatabaseInfo/TokenInfo/HongKong_1_1_2/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_1_2/TokenCode' ] = 'hakka';

/*HK History Museum Glyph #3*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_3/Order' ] = '3';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_3/TokenName' ] = 'Mysterious Man';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_3/TokenMsg' ] = 'Apparently he is one of the important people from colonial Hong Kong, we need his surname to solve this glyph.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_3/TokenImg' ] = 'https://firebasestorage.googleapis.com/v0/b/mysticglyphs.appspot.com/o/GlyphClues%2FBalcony.png?alt=media&token=70fbba92-45f3-4db0-afa6-44e7dcbff3c8';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_3/TokenImgMessage' ] = 'What is his surname?';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_3/TokenImg2' ] = 'https://firebasestorage.googleapis.com/v0/b/mysticglyphs.appspot.com/o/GlyphClues%2FBalcony2.png?alt=media&token=341e487f-d564-4652-a701-516faeea9dd4';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_3/TokenImgMessage2' ] = 'Taken from the glyph location';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_3/SearchHints' ] = 'The glyph location is a good vantage point to look at the pier. See the Images.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_3/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_3/HintA' ] = 'Glyph #4 is hidden behind a black thing';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_3/HintB' ] = 'To take out glyph #2, you would have to pull down';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_3/HintC' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_3/HintD' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_3/HintE' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_3/Type' ] = 'Virtual';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_3/Tips' ] = 'Solving 4 glyphs complete a mission. The timer stops once you complete 4 glyphs.';
updates['/DatabaseInfo/TokenInfo/HongKong_1_1_3/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_1_3/TokenCode' ] = 'bowen';

/*HK History Museum Glyph #4*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_4/Order' ] = '4';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_4/TokenName' ] = 'Early Electric Transportation, way before Tesla';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_4/TokenMsg' ] = 'There are still many of these on the street. They are a great way to tour the Hong Kong Island!';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_4/TokenImg' ] = 'https://firebasestorage.googleapis.com/v0/b/mysticglyphs.appspot.com/o/GlyphClues%2FTram.png?alt=media&token=d0827f83-f4d3-4658-88be-988675194bab';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_4/TokenImgMessage' ] = 'Search here';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_4/SearchHints' ] = 'Be extra careful with the guards when you search for this one. Our intelligence tells us that it is heavily guarded!';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_4/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_4/HintA' ] = 'Pay attention to rice farming for glyph #1';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_4/HintB' ] = 'The solution to glyph #6 can be found on an exhibition board';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_4/HintC' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_4/HintD' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_4/HintE' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_4/Type' ] = 'Case';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_4/Tips' ] = 'Magnetic glyphs only stick to metal parts';
updates['/DatabaseInfo/TokenInfo/HongKong_1_1_4/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_1_4/TokenCode' ] = 'garment';

/*HK History Museum Glyph #5*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_5/Order' ] = '5';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_5/TokenName' ] = 'Mysterious Coin';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_5/TokenMsg' ] = "This coin was made during which Chinese emperor's time? (see image)";
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_5/TokenImg' ] = 'https://firebasestorage.googleapis.com/v0/b/mysticglyphs.appspot.com/o/GlyphClues%2FSilverCoin.png?alt=media&token=5be42590-0043-4e71-a427-a5ac3e08981d';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_5/TokenImgMessage' ] = 'Although the Chinese started using paper money in tha Tang Dynasty (A.D. 618-907), precious metals remained to be an important part of trade.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_5/TokenImgMessage' ] = "This coin was made during which Chinese emperor's time?";
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_5/SearchHints' ] = 'Visit the Hong Kong & Shanghai Banking Corporation in the village ';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_5/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_5/HintA' ] = 'Search the front for glyph #4. Oh, remember there are two fronts!';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_5/HintB' ] = 'Glyph #6 has something to do with the industires in Hong Kong';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_5/HintC' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_5/HintD' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_5/HintE' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_5/Type' ] = 'Virtual';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_5/Tips' ] = '';
updates['/DatabaseInfo/TokenInfo/HongKong_1_1_5/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_1_5/TokenCode' ] = 'xuantong';

/*HK History Museum Glyph #6*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_6/Order' ] = '6';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_6/TokenName' ] = '1960s';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_6/TokenMsg' ] = 'We have to find a number. The glyph asks: How many factory workers were there by late 1960s?';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_6/TokenImg' ] = 'https://firebasestorage.googleapis.com/v0/b/mysticglyphs.appspot.com/o/GlyphClues%2FGarment.png?alt=media&token=ee4cfe10-1fb5-4a31-9936-5e05f8c13b72';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_5/TokenImgMessage' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_6/SearchHints' ] = 'Search the the garment factory for this glyph';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_6/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_6/HintA' ] = 'Banks are usually located in commercial areas';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_6/HintB' ] = 'For glyph #2, there is a compartment on the right side of the seat, with an opening downward';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_6/HintC' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_6/HintD' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_6/HintE' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_6/Type' ] = 'Virtual';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_6/Tips' ] = 'The museum is generally organized chronologically';
updates['/DatabaseInfo/TokenInfo/HongKong_1_1_6/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_1_6/TokenCode' ] = '561563';



/*Kowloon Park Mission*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Location' ] = 'Kowloon Park';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/CoverImg' ] = 'https://firebasestorage.googleapis.com/v0/b/mysticglyphs.appspot.com/o/KowloonPark.png?alt=media&token=7312170f-ad52-4ab8-bde7-6818497c5461';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/LocationDesc' ] = 'Ready for some outdoor fun? Put some sun screen on and stay hydrated! This is an open map mission so solve the glyphs near you first!';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/MissionStatus' ] = 'Current';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Area' ] = 'Tsim Sha Tsui';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/OtherInfo' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Tips' ] = 'Check the weather before starting';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/EstimatedDuration' ] = '60-90 minutes';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/GlyphsDifficulty' ] = '2';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/StealthDifficulty' ] = '2';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Direction' ] = '15 mins away from HK History Museum by walking, or MTR @ Tsim Sha Tsui Exit A1';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Terrain' ] = 'Outdoor (easy)';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Hours' ] = '10:00 - 18:00 (some glyphs can be found 24/7)';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/GlyphTypes' ] = 'Magnetic Case, Hanging Case';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/MissionType' ] = 'Free';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Coordinates/centerLat' ] = '22.300124';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Coordinates/centerLng' ] = '114.170364';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Coordinates/markerLng' ] = '114.169069';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Coordinates/markerLat' ] = '22.300838';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Coordinates/polygonCoords' ] = '22.302167,114.171452-22.302111,114.169376-22.300620,114.168951-22.298138,114.169844-22.298253,114.171629';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Coordinates/zoom' ] = '17';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/TokenUnlocked' ] = '0';

/*Kowloon Park Glyph #1*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_1/Order' ] = '1';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_1/TokenName' ] = 'Defense for the Western Harbour';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_1/TokenMsg' ] = 'The west side of the Kowloon Park used to be a mini military base. This is a good place to play hide and seek!';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_1/TokenImg' ] = '<img>';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_1/TokenImgMessage' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_1/SearchHints' ] = 'Search the cannons at location #16 (find a map), there are 3 cannons in total.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_1/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_1/HintA' ] = 'Glyph #2 is near the floor';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_1/HintB' ] = 'There are 4 magnetic case glyphs and 2 hanging case glyphs';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_1/HintC' ] = 'The southmost glyph is in the museum';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_1/HintD' ] = 'The eastmost glyph is in the maze';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_1/HintE' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_1/Type' ] = 'Case';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_1/Tips' ] = 'Read all the available glyph hints and solve the easiest ones first';
updates['/DatabaseInfo/TokenInfo/HongKong_1_2_1/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_2_1/TokenCode' ] = 'noclimbing';

/*Kowloon Park Glyph #2*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_2/Order' ] = '2';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_2/TokenName' ] = 'Heritage Discovery Center';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_2/TokenMsg' ] = 'Woohoo another museum. This is a good outpost for air-conditioning and shelter.This museum closes every Thursday.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_2/TokenImg' ] = '<img>';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_2/TokenImgMessage' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_2/SearchHints' ] = 'Search the first half of the Heritage Discovery Center (permanent exhibition) for this glyph. Pay attention to black ropes.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_2/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_2/HintA' ] = 'There is only one indoor glyph in this mission';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_2/HintB' ] = 'One glyph hangs on a tree, and one hangs in a bush';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_2/HintC' ] = 'The glyph in the maze is near the light pole';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_2/HintD' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_2/HintE' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_2/Type' ] = 'Case';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_2/Tips' ] = 'Ropes are not magnetic but sometimes magnetic parts are attached to them';
updates['/DatabaseInfo/TokenInfo/HongKong_1_2_2/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_2_2/TokenCode' ] = 'cannon';

/*Kowloon Park Glyph #3*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_3/Order' ] = '3';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_3/TokenName' ] = 'You are supposed to get lost here but you wont';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_3/TokenMsg' ] = 'This place is fun if you try to make your way out blindfolded. Challenge a friend to race you! Make sure there is someone to ensure safety though.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_3/TokenImg' ] = 'https://firebasestorage.googleapis.com/v0/b/mysticglyphs.appspot.com/o/GlyphClues%2FMaze.png?alt=media&token=d91f8adb-341c-4233-b910-d3359e9fa4d9';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_3/TokenImgMessage' ] = 'You would need other clues but the bush patterns might help a bit';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_3/SearchHints' ] = 'A tall shadow points to it the typical summer morning.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_3/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_3/HintA' ] = 'The cannon that has the glyph is near a small castle';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_3/HintB' ] = 'The tree of Glyph #6 is on a small hill with a sign';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_3/HintC' ] = 'The glyph in the museum is in the center of a room. How?';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_3/HintD' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_3/HintE' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_3/Type' ] = 'Case';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_3/Tips' ] = 'Taking photos might help you remember the surroundings of found glyphs';
updates['/DatabaseInfo/TokenInfo/HongKong_1_2_3/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_2_3/TokenCode' ] = 'prehistoric';

/*Kowloon Park Glyph #4*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_4/Order' ] = '4';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_4/TokenName' ] = 'Kids, so many kids';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_4/TokenMsg' ] = 'Identify the area with highest kids density in the Park.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_4/TokenImg' ] = '<img>';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_4/TokenImgMessage' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_4/SearchHints' ] = 'Luckily most kids should not be tall enough to touch this glyph. Our intelligence tells us that this glyph is near a tree. The glyph code of glyph #1 would really help.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_4/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_4/HintA' ] = 'If you enter the park from the southern entrance, there are 4 glyphs on your left and 2 on your right.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_4/HintB' ] = 'Look way up for glyph #6, follow the fishline to lower the glyph';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_4/HintC' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_4/HintD' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_4/HintE' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_4/Type' ] = 'Case';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_4/Tips' ] = 'Magnetic cases only stick to metals';
updates['/DatabaseInfo/TokenInfo/HongKong_1_2_4/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_2_4/TokenCode' ] = 'cagenorth';

/*Kowloon Park Glyph #5*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_5/Order' ] = '5';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_5/TokenName' ] = "They can fly but they can't fly away :(";
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_5/TokenMsg' ] = 'Did you know that Hong Kong is a stopover point along the East-Asian Australasian Flyway for migrating birds? You should visit Mai Po if you are interested in them.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_5/TokenImg' ] = 'https://firebasestorage.googleapis.com/v0/b/mysticglyphs.appspot.com/o/GlyphClues%2FCage.png?alt=media&token=ed26ca5a-3669-4db7-93ad-30a69eddcdce';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_5/TokenImgMessage' ] = 'Taken from the glyph location';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_5/SearchHints' ] = 'This is a magnetic case glyph. Look above the chairs.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_5/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_5/HintA' ] = 'One of the glyphs is hidden behind a sign';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_5/HintB' ] = 'The glyph code of glyph #3 is in the name of the room for glyph #2';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_5/HintC' ] = 'Search under the cannon for glyph #1';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_5/HintD' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_5/HintE' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_5/Type' ] = 'Case';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_5/Tips' ] = 'Be careful and dont alert the guards when you take the glyph case';
updates['/DatabaseInfo/TokenInfo/HongKong_1_2_5/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_2_5/TokenCode' ] = 'wetfloor';

/*Kowloon Park Glyph #6*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_6/Order' ] = '6';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_6/TokenName' ] = 'Chinese Garden';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_6/TokenMsg' ] = 'To be honest, this looks nothing like a traditional Chinese garden. The typical Chinese garden has artificial landscape made from rocks.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_6/TokenImg' ] = 'https://firebasestorage.googleapis.com/v0/b/mysticglyphs.appspot.com/o/GlyphClues%2FChineseGarden.png?alt=media&token=f434c841-08b4-4c21-8a26-62d1e20a408f';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_6/TokenImgMessage' ] = 'Taken from the glyph location';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_6/SearchHints' ] = "Search the mini forest for a hanging glyph. The fountain water does not shoot straight up, if we call where it shoots the 12th o'clock, the glyph is toward the 10 direction";
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_6/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_6/HintA' ] = 'No climbing in the playground';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_6/HintB' ] = 'Glyph #5 is on the north side of the cage';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_6/HintC' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_6/HintD' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_6/HintE' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_6/Type' ] = 'Case';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_6/Tips' ] = '';
updates['/DatabaseInfo/TokenInfo/HongKong_1_2_6/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_2_6/TokenCode' ] = 'shadow';


/*Harbour Side Mission*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Location' ] = 'Harbour Side';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/CoverImg' ] = 'https://firebasestorage.googleapis.com/v0/b/mysticglyphs.appspot.com/o/HarbourSide.png?alt=media&token=c2f60641-0e5b-4a5b-ac1e-d1de42c66a2d';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/LocationDesc' ] = 'Oh wow you are picking this up fast. Harbour Side is the next mission. There seems to be other types of glyphs this time. Keep your eyes open!';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/MissionStatus' ] = 'Current';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Area' ] = 'Tsim Sha Tsui';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/OtherInfo' ] = 'Be careful and do not alert the guards';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Tips' ] = 'For the best experience, begin this mission 30 minutes before sunset';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/EstimatedDuration' ] = '60-90 minutes';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/GlyphsDifficulty' ] = '4';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/StealthDifficulty' ] = '3';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Direction' ] = '10 mins away from Kowloon Park by walking, or MTR @ Tsim Sha Tsui Exit L3';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Terrain' ] = 'Outdoor (easy)';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Hours' ] = '10:00 - 22:00 (some glyphs can be found 24/7)';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/GlyphTypes' ] = 'Magnetic Case, Hanging Case, Sticker';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/MissionType' ] = 'Free';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Coordinates/centerLat' ] = '22.295775';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Coordinates/centerLng' ] = '114.171158';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Coordinates/markerLng' ] = '114.169991';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Coordinates/markerLat' ] = '22.295367';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Coordinates/polygonCoords' ] = '22.294877,114.164575-22.294227,114.164742-22.294937,114.168290-22.294282,114.168432-22.293560,114.167811-22.292912,114.168485-22.293388,114.168928-22.293437,114.169335-22.292929,114.169539-22.293003,114.170897-22.293254,114.172734-22.294583,114.172348-22.295771,114.175503-22.296333,114.176309-22.296982,114.175710-22.296072,114.175569-22.294796,114.172312-22.294706,114.170596-22.295839,114.170248-22.295785,114.169440-22.294579,114.169683-22.294395,114.168637-22.295674,114.168308';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Coordinates/zoom' ] = '16';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/TokenUnlocked' ] = '0';

/*Harbour Side MIssion #1*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_1/Order' ] = '1';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_1/TokenName' ] = '1881 Heritage';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_1/TokenMsg' ] = 'This place is amazing for photos, remember to visit the mini museum in the main building too, it has air conditioning~';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_1/TokenImg' ] = 'https://firebasestorage.googleapis.com/v0/b/mysticglyphs.appspot.com/o/GlyphClues%2F1881.png?alt=media&token=50ff9c57-6841-49fc-8857-9cf5cc098d9c';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_1/TokenImgMessage' ] = 'Investigate this pattern';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_1/SearchHints' ] = 'This glyph is near the Typhoon Signals exhibition. We have got an image hint but dont know what it means.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_1/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_1/HintA' ] = 'Search the front of the ferry for glyph #6';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_1/HintB' ] = 'Search the escalators at the end of Harbour City for glyph #6';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_1/HintC' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_1/HintD' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_1/HintE' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_1/Tips' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_1/Type' ] = 'Case';
updates['/DatabaseInfo/TokenInfo/HongKong_1_3_1/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_3_1/TokenCode' ] = 'jetli';

/*Harbour Side MIssion #2*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_2/Order' ] = '2';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_2/TokenName' ] = 'Cruise pier';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_2/TokenMsg' ] = 'This is one of the two major piers where people board cruises in Hong Kong. Cruises are so big! I have never been on one :(';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_2/TokenImg' ] = 'https://firebasestorage.googleapis.com/v0/b/mysticglyphs.appspot.com/o/GlyphClues%2FCruiseButt.png?alt=media&token=d7c85f75-1a47-45f7-b7b1-5d4d8e2605fe';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_2/TokenImgMessage' ] = 'The glyph says this image "contains" the glyph. What does it mean?';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_2/SearchHints' ] = 'Search the south side of the cruise pier for a hanging case glyph, between the star ferry pier and Harbour City';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_2/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_2/HintA' ] = 'Jet Li';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_2/HintB' ] = 'Glyph #5 is on the upper floor';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_2/HintC' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_2/HintD' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_2/HintE' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_2/Tips' ] = 'Pay attention to white ropes';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_2/Type' ] = 'Case';
updates['/DatabaseInfo/TokenInfo/HongKong_1_3_2/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_3_2/TokenCode' ] = 'ferriesfront';

/*Harbour Side MIssion #3*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_3/Order' ] = '3';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_3/TokenName' ] = 'Olympic Torch';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_3/TokenMsg' ] = 'They like to showcase everything in Tsim Sha Tsui, find the biggest torch statue on the harbour side';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_3/TokenImg' ] = 'https://firebasestorage.googleapis.com/v0/b/mysticglyphs.appspot.com/o/GlyphClues%2FTorch.png?alt=media&token=8f49d7dc-1731-4ffc-a423-fac6968bec40';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_3/TokenImgMessage' ] = 'Search the 10m radius from the Torch';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_3/TokenImg2' ] = 'https://firebasestorage.googleapis.com/v0/b/mysticglyphs.appspot.com/o/GlyphClues%2FHarbourSideTree.png?alt=media&token=c66a08ba-333b-43aa-be93-7952201fbae6';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_3/TokenImgMessage2' ] = 'This picture is taken from the glyph location. Hmm how does this help?';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_3/SearchHints' ] = 'The glyph is hidden at one of the trees near the torch. Solve glyph #5 for specific hint if you want to pin point which tree.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_3/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_3/HintA' ] = 'Glyph #5 is on the upper floor of the ferry';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_3/HintB' ] = 'Each star ferry has a unique code printed on its side';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_3/HintC' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_3/HintD' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_3/HintE' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_3/Tips' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_3/Type' ] = 'Case';
updates['/DatabaseInfo/TokenInfo/HongKong_1_3_3/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_3_3/TokenCode' ] = 'signal';

/*Harbour Side MIssion #4*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_4/Order' ] = '4';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_4/TokenName' ] = 'Garden of Stars';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_4/TokenMsg' ] = 'The Hong Kong version of Hollywood Walk of Fame. There is also a kiosk here for you to get some snacks. It is quite expensive though.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_4/TokenImg' ] = 'https://firebasestorage.googleapis.com/v0/b/mysticglyphs.appspot.com/o/GlyphClues%2FGardenOfStars.png?alt=media&token=68654cb5-2414-4feb-a602-d4909de23ccc';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_4/TokenImgMessage' ] = 'The glyph says that the goddess statue faces its location';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_4/SearchHints' ] = 'Search beneath the chairs. Collect more clues to pinpoint which chair.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_4/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_4/HintA' ] = "If there is a cruise parked on the correct side, glyph #1 would be directly behind its butt :)";
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_4/HintB' ] = 'There are 3 magnetic case glyphs';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_4/HintC' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_4/HintD' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_4/HintE' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_4/Type' ] = 'Case';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_4/Tips' ] = 'This glyph is 10 mins of walking away from the others. The other glyphs are quite clustered up together.';
updates['/DatabaseInfo/TokenInfo/HongKong_1_3_4/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_3_4/TokenCode' ] = 'whiterope';

/*Harbour Side MIssion #5*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_5/Order' ] = '5';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_5/TokenName' ] = 'The Clock Tower';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_5/TokenMsg' ] = 'The glyph asks: In which year was the bell removed from the clock tower?';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_5/TokenImg' ] = '<img>';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_5/TokenImgMessage' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_5/SearchHints' ] = 'Find the biggest clock tower on the harbour side for this glyph';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_5/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_5/HintA' ] = 'solar, meridian, northern, and silver are the cool stars';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_5/HintB' ] = 'Tree 66 is a cute tree';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_5/HintC' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_5/HintD' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_5/HintE' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_5/Type' ] = 'Virtual';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_5/Tips' ] = 'This glyph is not a case! You just need to find the solution';
updates['/DatabaseInfo/TokenInfo/HongKong_1_3_5/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_3_5/TokenCode' ] = '1976';

/*Harbour Side MIssion #6*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_6/Order' ] = '6';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_6/TokenName' ] = 'Star Ferries';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_6/TokenMsg' ] = 'Ferry is the cheapest way to cross the harbour, and the most fun way! You can ride the ferry to Central and Wan Chai from Tsim Sha Tsui';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_6/TokenImg' ] = 'https://firebasestorage.googleapis.com/v0/b/mysticglyphs.appspot.com/o/GlyphClues%2FFerriesfront.png?alt=media&token=b7966244-e28e-4869-b773-aa6c871e2a2d';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_6/TokenImgMessage' ] = 'The force is strong with these chairs';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_6/SearchHints' ] = 'Some of the star ferries have a copy of this glyph and you will have to board and find them. This might take a few try!';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_6/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_6/HintA' ] = 'Both hanging case glyphs use white ropes';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_6/HintB' ] = 'There are two hanging case glyphs';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_6/HintC' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_6/HintD' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_6/HintE' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_6/Type' ] = 'Case';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_6/Tips' ] = 'You can unlock hints to make sure you know which ferries have this glyph.';
updates['/DatabaseInfo/TokenInfo/HongKong_1_3_6/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_3_6/TokenCode' ] = 'thebell';

		return firebase.database().ref().update(updates);  },

  };

})
