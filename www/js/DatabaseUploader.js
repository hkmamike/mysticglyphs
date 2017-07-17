angular.module('starter.DatabaseUploader', [])


.factory('FirebaseUpload', function(userData, $firebaseObject, $firebaseArray) {
  
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
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/OtherInfo' ] = 'Be careful and do not alert the guards';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Tips' ] = 'The Museum closes every Tuesday';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/EstimatedDuration' ] = '90-120 minutes';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/GlyphsDifficulty' ] = '2';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/StealthDifficulty' ] = '4';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Direction' ] = 'MTR @ Tsim Sha Tsui Exit B2 (15 mins walk)';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Terrain' ] = 'Indoor';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Hours' ] = '10:00 - 18:00';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/GlyphTypes' ] = 'Magnetic Case, Hanging Case';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/MissionType' ] = 'Free';

/*HK History Museum Glyph #1*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_1/Order' ] = '1';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_1/TokenName' ] = 'Glyph in the House';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_1/TokenMsg' ] = 'This is a pretty cool mock-up traditional Chinese house. There are still Chinese people that live in this kind of houses, they look wierd with TVs in them.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_1/TokenImg' ] = '<img>';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_1/SearchHints' ] = 'This one is on the first floor, in one of the small rooms of the abandoned house';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_1/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_1/HintA' ] = 'Search the last row for glyph #2';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_1/HintB' ] = 'Glyph #3 is at a good vantage point to cover the pier';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_1/HintC' ] = 'Search above the steering wheels for glyph #4';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_1/HintD' ] = 'Glyph #5 is in a dark room';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_1/HintE' ] = 'Glyph #6 has something to do with how people work';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_1/Tips' ] = 'You dont have to solve glyphs in order';
updates['/DatabaseInfo/TokenInfo/HongKong_1_1_1/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_1_1/TokenCode' ] = 'Theatre';

/*HK History Museum Glyph #2*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_2/Order' ] = '2';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_2/TokenName' ] = 'Folk Culture Theatre';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_2/TokenMsg' ] = 'There is a theatre near the end of the first floor. A great place to relax or even sleep :)';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_2/TokenImg' ] = '<img>';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_2/SearchHints' ] = 'Search the rightmost seat of the last row. Use your right hand.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_2/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_2/HintA' ] = 'Search the 2nd room to the left for glyph #1';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_2/HintB' ] = 'Glyph #3 is upstairs';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_2/HintC' ] = 'Glyph #4 is hidden behind something black';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_2/HintD' ] = 'Search handrails for glyph #5';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_2/HintE' ] = 'Glyph #6 has something to do with clothes';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_2/Tips' ] = 'Sometimes, glyph codes are hints for other glyphs';
updates['/DatabaseInfo/TokenInfo/HongKong_1_1_2/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_1_2/TokenCode' ] = 'Hakka';

/*HK History Museum Glyph #3*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_3/Order' ] = '3';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_3/TokenName' ] = 'Where people go to get some air';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_3/TokenMsg' ] = 'You would have to collect more clues or guess where this is. Quite fun huh?';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_3/TokenImg' ] = '<img>';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_3/SearchHints' ] = 'This one is in the second part of the museum, after going up the escalator';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_3/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_3/HintA' ] = 'Notice anything with the ladder?';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_3/HintB' ] = 'To take out glyph #2, you would have to pull down';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_3/HintC' ] = 'Search waist level for glyph #4';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_3/HintD' ] = 'Glyph #5 is near the end of the museum route';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_3/HintE' ] = 'Mysterous number: 561563';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_3/Tips' ] = 'You only need 4 glyphs to complete a mission';
updates['/DatabaseInfo/TokenInfo/HongKong_1_1_3/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_1_3/TokenCode' ] = 'Return';

/*HK History Museum Glyph #4*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_4/Order' ] = '4';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_4/TokenName' ] = 'Early Electric Transportation, way before Tesla';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_4/TokenMsg' ] = 'There are still many of these on the street. They are a great way to tour the Hong Kong Island!';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_4/TokenImg' ] = '<img>';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_4/SearchHints' ] = 'Be extra careful with the guards when you search for this one. Our intelligence tells us that it is heavily guarded!';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_4/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_4/HintA' ] = 'Glyph #1 is in a bucket';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_4/HintB' ] = 'Glyph #3 is also where people would go to smoke (if it wasnt in the museum)';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_4/HintC' ] = 'You can see a boat from glyph #3';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_4/HintD' ] = 'Glyph #5 is not hidden among the seats';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_4/HintE' ] = 'Glyph #6 is behind an exhibition board';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_4/Tips' ] = 'Magnetic glyphs only stick to metal parts';
updates['/DatabaseInfo/TokenInfo/HongKong_1_1_4/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_1_4/TokenCode' ] = 'Garment';

/*HK History Museum Glyph #5*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_5/Order' ] = '5';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_5/TokenName' ] = '1997';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_5/TokenMsg' ] = 'Find out how why this year is significant to Hong Kong. Oh and this is another good place to take a break.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_5/TokenImg' ] = '<img>';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_5/SearchHints' ] = 'Search the right side of the theatre. You probably cannot see it, use your hands to feel';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_5/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_5/HintA' ] = 'Pull on the fish line';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_5/HintB' ] = 'Glyph #2 is near the theatre exit';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_5/HintC' ] = 'Outside the balustrade';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_5/HintD' ] = 'Search the front for glyph #4. Oh, remember there are two fronts!';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_5/HintE' ] = 'Pay attention to grey colored objects for glyph #6';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_5/Tips' ] = 'Get a friend to cover you if possible when you access the glyphs';
updates['/DatabaseInfo/TokenInfo/HongKong_1_1_5/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_1_5/TokenCode' ] = 'Tram';

/*HK History Museum Glyph #6*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_6/Order' ] = '6';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_6/TokenName' ] = '1960s';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_6/TokenMsg' ] = 'You will learn about the Hong Kong industries and the labour conditions here. ';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_6/TokenImg' ] = '<img>';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_6/SearchHints' ] = 'Search the near the garment factory for this glyph';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_6/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_6/HintA' ] = 'Glyph #1 is in the Hakka area';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_6/HintB' ] = 'There is a compartment on the right side of the seat, with an opening downward';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_6/HintC' ] = 'Look down but dont look too down for glyph #3';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_6/HintD' ] = 'Under the newspapers';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_6/HintE' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_1/Token/HongKong_1_1_6/Tips' ] = 'There is a guard that patrols between the glyph location and the nearby theatre. Watch out!';
updates['/DatabaseInfo/TokenInfo/HongKong_1_1_6/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_1_6/TokenCode' ] = 'Balcony';



/*Kowloon Park Mission*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Location' ] = 'Kowloon Park';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/CoverImg' ] = 'https://firebasestorage.googleapis.com/v0/b/mysticglyphs.appspot.com/o/KowloonPark.png?alt=media&token=7312170f-ad52-4ab8-bde7-6818497c5461';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/LocationDesc' ] = 'Good hunting there buddy, you have potential. Kowloon Park is the next mission. This is an open map mission, so the glyphs are not placed according to a route.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/MissionStatus' ] = 'Current';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Area' ] = 'Tsim Sha Tsui';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/OtherInfo' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Tips' ] = 'Check the weather before starting';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/EstimatedDuration' ] = '60-90 minutes';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/GlyphsDifficulty' ] = '3';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/StealthDifficulty' ] = '2';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Direction' ] = '15 mins away from HK History Museum by walking, or MTR @ Tsim Sha Tsui Exit A1';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Terrain' ] = 'Outdoor (easy)';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Hours' ] = '10:00 - 18:00 (some glyphs can be found 24/7)';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/GlyphTypes' ] = 'Magnetic Case, Hanging Case';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/MissionType' ] = 'Free';

/*Kowloon Park Glyph #1*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_1/Order' ] = '1';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_1/TokenName' ] = 'Defense for the Western Harbour';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_1/TokenMsg' ] = 'The west side of the Kowloon Park used to be a mini military base. This is a good place to play hide and seek!';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_1/TokenImg' ] = '<img>';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_1/SearchHints' ] = 'Search the cannons at location #16 (find a map), there are 3 in total.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_1/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_1/HintA' ] = 'Glyph #2 is near the floor';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_1/HintB' ] = 'There are 4 magnetic case glyphs and 2 hanging case glyphs ';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_1/HintC' ] = 'The southmost glyph is in the museum';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_1/HintD' ] = 'The eastmost glyph is in the maze';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_1/HintE' ] = 'Walk around the cage to find glyph #5';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_1/Tips' ] = 'Read all the available glyph hints and solve the easiest ones first';
updates['/DatabaseInfo/TokenInfo/HongKong_1_2_1/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_2_1/TokenCode' ] = 'Noclimbing';

/*Kowloon Park Glyph #2*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_2/Order' ] = '2';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_2/TokenName' ] = 'Heritage Discovery Center';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_2/TokenMsg' ] = 'Woohoo another museum. This is a good outpost for air-conditioning and shelter.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_2/TokenImg' ] = '<img>';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_2/SearchHints' ] = 'Search the first half of the Heritage Discovery Center (permanent exhibition) for this glyph. Pay attention to black robes.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_2/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_2/HintA' ] = 'There is only one indoor glyph in this mission';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_2/HintB' ] = 'One glyph hangs on a tree, and one hangs in a bush';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_2/HintC' ] = 'The glyph in the maze is near the light pole';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_2/HintD' ] = 'The northmost glyph is at the Children Play Area';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_2/HintE' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_2/Tips' ] = 'Robes are not magnetic but sometimes they magnetic parts are attached to them';
updates['/DatabaseInfo/TokenInfo/HongKong_1_2_2/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_2_2/TokenCode' ] = 'Cannon';

/*Kowloon Park Glyph #3*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_3/Order' ] = '3';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_3/TokenName' ] = 'You are supposed to get lost here but you wont';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_3/TokenMsg' ] = 'This place is fun if start in the middle and try to make your way out blindfolded. Challenge a friend to race you! Make sure there is someone to ensure safety though.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_3/TokenImg' ] = '<img>';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_3/SearchHints' ] = 'Search where the bushes have openings. A tall shadow points to in the typical summer morning.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_3/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_3/HintA' ] = 'The cannon that has the glyph is near a small castle';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_3/HintB' ] = 'The tree of Glyph #6 is on a hill';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_3/HintC' ] = 'The glyph in the museum is in the center of a room. How?';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_3/HintD' ] = 'Trace the fishline to figure out how to lower the tree glyph';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_3/HintE' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_3/Tips' ] = 'Taking photos might help you remember the surroundings of found glyphs';
updates['/DatabaseInfo/TokenInfo/HongKong_1_2_3/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_2_3/TokenCode' ] = 'Prehistoric';

/*Kowloon Park Glyph #4*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_4/Order' ] = '4';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_4/TokenName' ] = 'Kids, so many kids';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_4/TokenMsg' ] = 'Identify the area with highest kids density in the Park.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_4/TokenImg' ] = '<img>';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_4/SearchHints' ] = 'Luckily most kids should not be tall enough to touch this glyph. Our intelligence tells us that this glyph is near a tree. The glyph code of glyph #1 would really help';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_4/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_4/HintA' ] = 'You can see the biggest pond in the birdcage from glyph #5';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_4/HintB' ] = 'Look way up for glyph #6, you need to find a way to lower the glyph';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_4/HintC' ] = 'If you enter the park from the southern entrance, there are 4 glyphs on your left and 2 on your right.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_4/HintD' ] = 'Glyph #2 is in a museum room that talks about archaeology in Ma Wan';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_4/HintE' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_4/Tips' ] = 'Magnetic cases only stick to metals';
updates['/DatabaseInfo/TokenInfo/HongKong_1_2_4/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_2_4/TokenCode' ] = 'Cagenorth';

/*Kowloon Park Glyph #5*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_5/Order' ] = '5';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_5/TokenName' ] = 'They can fly but they cant fly away :(';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_5/TokenMsg' ] = 'Did you know that Hong Kong is a stopover point along the East-Asian Australasian Flyway for migrating birds? You should visit Mai Po if you are interested in them.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_5/TokenImg' ] = '<img>';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_5/SearchHints' ] = 'This is a magnetic case glyph. Look above the chairs.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_5/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_5/HintA' ] = 'One glyph is hidden behind a sign';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_5/HintB' ] = 'The glyph code of glyph #3 is in the name of the room for glyph #2';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_5/HintC' ] = 'From glyph glyph #6, you can see the biggest tree in the garden';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_5/HintD' ] = 'Under the cannon';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_5/HintE' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_5/Tips' ] = 'Be careful and dont alert the guards when you approach the glyph';
updates['/DatabaseInfo/TokenInfo/HongKong_1_2_5/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_2_5/TokenCode' ] = 'Wetfloor';

/*Kowloon Park Glyph #6*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_6/Order' ] = '6';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_6/TokenName' ] = 'Chinese Garden';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_6/TokenMsg' ] = 'To be honest, this looks nothing like a traditional Chinese garden. The typical Chinese garden has many artificial landscape made from rocks.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_6/TokenImg' ] = 'https://firebasestorage.googleapis.com/v0/b/mysticglyphs.appspot.com/o/GlyphClues%2FChineseGarden.png?alt=media&token=f434c841-08b4-4c21-8a26-62d1e20a408f';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_6/SearchHints' ] = 'Search the mini forest for a hanging glyph. The fountain water does not shoot straight up, if we call where it shoots the 12th o&rsquoclock, the glyph is toward the 10 direction';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_6/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_6/HintA' ] = 'No climbing in the playground?';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_6/HintB' ] = 'You can see the biggest pond in the birdcage from glyph #5';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_6/HintC' ] = 'The glyph in the museum is in the center of a room. How?';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_6/HintD' ] = 'Under the cannon';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_6/HintE' ] = 'Glyph #5 is on the north side of the cage';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_2/Token/HongKong_1_2_6/Tips' ] = 'Some unlocked hints are duplicates of eachother';
updates['/DatabaseInfo/TokenInfo/HongKong_1_2_6/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_2_6/TokenCode' ] = 'Shadow';



/*Harbour Side Mission*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Location' ] = 'Harbour Side';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/CoverImg' ] = 'https://firebasestorage.googleapis.com/v0/b/mysticglyphs.appspot.com/o/HarbourSide.png?alt=media&token=c2f60641-0e5b-4a5b-ac1e-d1de42c66a2d';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/LocationDesc' ] = 'Oh wow you are picking this up fast. Harbour Side is the next mission. There seems to be other types glyphs this time. Keep your eyes open!';
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

/*Harbour Side MIssion #1*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_1/Order' ] = '1';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_1/TokenName' ] = 'Cruise pier';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_1/TokenMsg' ] = 'This is one of the two major piers where people board cruises in Hong Kong. Cruises are so big! I have never been on one :(';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_1/TokenImg' ] = '<img>';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_1/SearchHints' ] = 'Search the south side of the cruise pier for a hanging case glyph, between the star ferry pier and Harbour City';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_1/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_1/HintA' ] = 'Jet Li';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_1/HintB' ] = 'Search rightside handrail for the escalator glyph';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_1/HintC' ] = 'Glyph #5 is on the upper floor';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_1/HintD' ] = 'There are two hanging case glyphs';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_1/HintE' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_1/Tips' ] = 'Pay attention to white robes';
updates['/DatabaseInfo/TokenInfo/HongKong_1_3_1/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_3_1/TokenCode' ] = 'Ferriesfront';

/*Harbour Side MIssion #2*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_2/Order' ] = '2';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_2/TokenName' ] = 'Garden of Stars';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_2/TokenMsg' ] = 'The Hong Kong version of Hollywood Walk of Fame. There is also a kiosk here for you to get some snacks. It is quite expensive though.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_2/TokenImg' ] = '<img>';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_2/SearchHints' ] = 'Search the under the chairs';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_2/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_2/HintA' ] = 'Directly behind the cruise butt for glyph #1';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_2/HintB' ] = 'Search the escalator from lv3 to lv2';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_2/HintC' ] = 'There are 3 magnetic case glyphs';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_2/HintD' ] = 'Only ferries A2671, A2971, and A31 have copies of glyph #5';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_2/HintE' ] = 'Each star ferry has a unique code printed on its side';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_2/Tips' ] = 'This glyph is 10 mins of walking away from the others. The other glyphs are quite clustered up together.';
updates['/DatabaseInfo/TokenInfo/HongKong_1_3_2/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_3_2/TokenCode' ] = 'Whiterobe';

/*Harbour Side MIssion #3*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_3/Order' ] = '3';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_3/TokenName' ] = 'Olympic Torch';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_3/TokenMsg' ] = 'Apparently they like to showcase everything in Tsim Sha Tsui, find the biggest torch on the harbour side';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_3/TokenImg' ] = '<img>';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_3/SearchHints' ] = 'Behind the torch';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_3/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_3/HintA' ] = 'Both sides of the Harbour City can park cruises, glyph #1 is on the south side';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_3/HintB' ] = 'Only ferries A2671, A2971, and A31 have copies of glyph #5';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_3/HintC' ] = 'Glyph #5 is on the upper floor of the ferry';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_3/HintD' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_3/HintE' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_3/Tips' ] = '';
updates['/DatabaseInfo/TokenInfo/HongKong_1_3_3/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_3_3/TokenCode' ] = 'Signal';

/*Harbour Side MIssion #4*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_4/Order' ] = '4';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_4/TokenName' ] = '1881 Heritage';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_4/TokenMsg' ] = 'This place is amazing for photos, remember to visit the mini museum in the main building too, it has air conditioning~';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_4/TokenImg' ] = '<img>';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_4/SearchHints' ] = 'This glyph is near the Typhoon Signals exhibition. We have got a geometric hint but dont know what it means.';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_4/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_4/HintA' ] = 'Search the front of the ferry';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_4/HintB' ] = 'Search the escalators at the end of Harbour City for glyph #6';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_4/HintC' ] = 'Each star ferry has a unique code printed on its side';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_4/HintD' ] = 'Glyph #5 is on the upper floor of the ferry';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_4/HintE' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_4/Tips' ] = '';
updates['/DatabaseInfo/TokenInfo/HongKong_1_3_4/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_3_4/TokenCode' ] = 'Jetli';

/*Harbour Side MIssion #5*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_5/Order' ] = '5';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_5/TokenName' ] = 'Star Ferry';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_5/TokenMsg' ] = 'Ferry is the cheapest way to cross the harbour, and the most fun way! You can ride the ferry to Central and Wan Chai from Tsim Sha Tsui';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_5/TokenImg' ] = '<img>';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_5/SearchHints' ] = 'Some of the star ferries have a copy of this glyph and you will have to board and find them. This might take a few try!';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_5/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_5/HintA' ] = 'Both hanging case glyphs use white robes';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_5/HintB' ] = 'Search the escalator from lv3 to lv2';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_5/HintC' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_5/HintD' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_5/HintE' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_5/Tips' ] = 'Make sure you know which ferries have the glyphs and where to search before attempting this glyph.';
updates['/DatabaseInfo/TokenInfo/HongKong_1_3_5/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_3_5/TokenCode' ] = 'Escalator6';

/*Harbour Side MIssion #6*/
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_6/Order' ] = '6';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_6/TokenName' ] = 'Harbour City';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_6/TokenMsg' ] = 'Harbour City is where rich people shop. Sometimes you can even see people pulling suitcases of branded items around :O';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_6/TokenImg' ] = '<img>';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_6/SearchHints' ] = 'There is a great place at the end of the Harbour City where you can enjoy a great sunset view. Search the escalators';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_6/ClaimStatus' ] = 'Pending';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_6/HintA' ] = 'Only ferries A2671, A2971, and A31 have copies of glyph #5';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_6/HintB' ] = 'Both hanging case glyphs are right on the harbour side';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_6/HintC' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_6/HintD' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_6/HintE' ] = '';
updates['/DatabaseInfo/MissionInfo/HongKong/HongKong_1_3/Token/HongKong_1_3_6/Tips' ] = 'This glyph is not a case! It is a sticker with a code that starts with Mg';
updates['/DatabaseInfo/TokenInfo/HongKong_1_3_6/ClaimRecord' ] = 'xxx';
updates['/DatabaseInfo/TokenInfo/HongKong_1_3_6/TokenCode' ] = 'Mg3206';


		return firebase.database().ref().update(updates);  },

  };

})
