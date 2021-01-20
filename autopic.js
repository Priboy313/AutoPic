	//  https://vk.com/im
	// write the tagname and press F2
	//список тегов и ссылки на пикчи
	var Tags = new Map([
		['действительно', 'https://sun9-75.userapi.com/impf/c837232/v837232139/599e6/UVsU_o_B5WU.jpg?size=1000x563&quality=96&proxy=1&sign=063b6cae6ba23e5f45b2cd935cda1f9e&type=album'],
		['нунахер', 'https://sun9-61.userapi.com/impf/c840530/v840530855/3525a/VO7v5o-yAZ0.jpg?size=600x338&quality=96&proxy=1&sign=d8e835d552ba4b39692bf1b98fc466ed&type=album'],
		['пичот', 'https://sun9-50.userapi.com/impf/8ze-oNod7rliD7UvBfFkJcQ7l6WRobFd1HDAtQ/mVs5gJorNkY.jpg?size=1280x720&quality=96&proxy=1&sign=eab7051ad2a6cfc020660e23129ac161&type=album'],
		['хех', 'https://sun9-31.userapi.com/impg/DRZqjGZ2R5O49vP34CN6LcSLmxRTK9rziN4aFA/Aorq1demghk.jpg?size=1080x1041&quality=96&proxy=1&sign=2f314d9f966f1a1781fd793b184417ad&type=album'],
		['дориме', 'https://sun9-61.userapi.com/impg/WA99cnoKYq7UE8neDwsjqQ_5cp-VwarTxOuGpA/madZoCsygko.jpg?size=1080x1065&quality=96&proxy=1&sign=bf5609f76a8a1f8106e526a79c38924c&type=album'],
		['сделяль', 'https://sun9-42.userapi.com/impf/c841638/v841638657/3082e/eF9dIAFvajs.jpg?size=600x750&quality=96&proxy=1&sign=5811a772d0ed1169b06ff556f5ea851e&type=album'],
		['ооообля', 'https://sun9-15.userapi.com/impg/w_JYXlAqZ_DD-XDnvElBw81_XTKiZ0NPHO-dKw/9k6vVGSPit0.jpg?size=1080x1080&quality=96&proxy=1&sign=3d23bd6634c29760a08bf94156b52873&type=album'],
		['курнул', 'https://sun9-76.userapi.com/impg/tqsO2V7PzUspM11kx8r50l_ay1NqTLXZHHVIpg/570rgAiEZrE.jpg?size=1280x851&quality=96&sign=d50875147f4621db8f18835c6a3bdf5e&type=album'],
		['ушёлвсебя', 'https://sun9-52.userapi.com/impg/R5j2HrCiaFTki_muU5TvnoBGeXYjICsBrfKowQ/uJpVfaiTV-o.jpg?size=500x500&quality=96&proxy=1&sign=6246d04bf50797595fde2c715cf89cdb&type=album'],
		['хуита', 'https://sun9-34.userapi.com/impg/UhPAKf9P29wA5JE0YjMF4FBSo-53KOfbxzeyGg/-PHL2AL3Ef4.jpg?size=553x570&quality=96&proxy=1&sign=ecce6ed1ba0e5647b52e0098f48d32db&type=album'],
		['бонжур', 'https://sun9-53.userapi.com/impg/jP0f2Y-oqlVcugQ7QzCQKEhoZ_DiTyO92Bh79Q/E1olQZFCkZ8.jpg?size=884x525&quality=96&proxy=1&sign=cea26a84b8b5d155d96dfe6b9b042d9a&type=album'],
		['ересь','https://sun9-58.userapi.com/impg/4YbOSw7xH8hS3lHZTDs4MQLP3SvP21bS-wCo2g/RooLByNQOPk.jpg?size=600x400&quality=96&proxy=1&sign=ffe6d003e6239d4b35fa2d20add44bc7&type=album%27'],
		['адаптируйся', 'https://sun9-54.userapi.com/impg/rTBYVfdTtz9BkNHZN5au8BSSp_-ggfWQKbeNmA/TP1NnrnMqdc.jpg?size=1080x603&quality=96&proxy=1&sign=103775d0c02b769242663d6590f0bc74&type=album'],
		['богоугодно', 'https://sun9-6.userapi.com/impg/ofW02RS4umG3bedqE4uu4qi16u1ALie09T4CYA/29KhRBmAWYI.jpg?size=604x170&quality=96&proxy=1&sign=0119644e369c9a40fbab683e0165ece5&type=album'],
		['дублируй_меня_полностью', 'и_поставь_тут_запятую']
	]); 
	document.addEventListener("keydown", function(event) {
	if(event.keyCode == 113 && document.activeElement.classList.contains("im-chat-input--text")){
		var field = document.activeElement;
			if(field.innerHTML == "хелп"){
				var help = "";
				for (let key of Tags.keys()){
					if(key != "дублируй_меня_полностью") help += key + "<br />";
				}
				var length = Tags.size - 1;
				field.innerHTML = "Команд: " + length + '<br />' + help;
				}else{
				for (let key of Tags.keys()) {
					if (field.innerHTML == key && field != "дублируй_меня_полностью") {
						field.innerHTML = Tags.get(key);
					}
	}}}});
	
	//меню
	var dialog = document.getElementsByClassName("im_chat-input--buttons");
	//миниатюра
	var picwin = document.createElement("div");
		picwin.className = "autopic";
			picwin_pic = document.createElement("img");
			picwin_pic.src = "data:image/svg+xml;charset=utf-8,%3Csvg%20fill%3D%22none%22%20height%3D%2220%22%20width%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20clip-rule%3D%22evenodd%22%20d%3D%22M6.84%2016.44c.76.06%201.74.06%203.16.06%201.42%200%202.4%200%203.16-.06a3.75%203.75%200%20001.43-.32%203.5%203.5%200%20001.53-1.53c.15-.29.26-.69.32-1.43l.03-.63-1.3-1.3c-.3-.3-.5-.5-.67-.64a.86.86%200%2000-.27-.18.75.75%200%2000-.46%200%20.86.86%200%2000-.27.18c-.16.13-.36.33-.67.64l-2.3%202.3a.75.75%200%2001-1.06%200l-.3-.3c-.3-.3-.5-.5-.67-.64a.86.86%200%2000-.27-.18.75.75%200%2000-.46%200%20.86.86%200%2000-.27.18c-.16.13-.36.33-.67.64L4.56%2015.5c.25.24.53.45.85.6.29.16.69.27%201.43.33zm9.39-6.27l.27.27V10c0-1.42%200-2.4-.06-3.16a3.75%203.75%200%2000-.32-1.43%203.5%203.5%200%2000-1.53-1.53%203.75%203.75%200%2000-1.43-.32A43.2%2043.2%200%200010%203.5c-1.42%200-2.4%200-3.16.06-.74.06-1.14.17-1.43.32a3.5%203.5%200%2000-1.53%201.53c-.15.29-.26.69-.32%201.43A43.2%2043.2%200%20003.5%2010c0%201.42%200%202.4.06%203.16.04.47.1.8.17%201.05l2.04-2.04.02-.02c.28-.28.52-.52.74-.7.23-.2.47-.37.77-.47.46-.15.94-.15%201.4%200%20.3.1.54.27.77.46.16.14.34.3.53.5l1.77-1.77.02-.02c.28-.28.52-.52.74-.7.23-.2.47-.37.77-.47.46-.15.94-.15%201.4%200%20.3.1.54.27.77.46.22.19.46.43.74.7zM2.54%204.73C2%205.8%202%207.2%202%2010c0%202.8%200%204.2.54%205.27a5%205%200%20002.19%202.19C5.8%2018%207.2%2018%2010%2018c2.8%200%204.2%200%205.27-.54a5%205%200%20002.19-2.19C18%2014.2%2018%2012.8%2018%2010c0-2.8%200-4.2-.55-5.27a5%205%200%2000-2.18-2.19C14.2%202%2012.8%202%2010%202c-2.8%200-4.2%200-5.27.54a5%205%200%2000-2.19%202.19zM7.25%206a1.25%201.25%200%20100%202.5%201.25%201.25%200%20000-2.5z%22%20fill%3D%22%235181b8%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E";
			picwin_pic.style.height = "23px";
		dialog[0].appendChild(picwin);
		picwin.appendChild(picwin_pic);
	//тело
	var picwin_block = document.createElement("div");
		picwin_block.className = "autopic_expanded";
		picwin.appendChild(picwin_block);
	//head
	var picwin_block_head = document.createElement("div");
		picwin_block_head.className = "autopic_head";
		picwin_block_head.innerHTML = "AutoPic by Priboy313";
		picwin_block.appendChild(picwin_block_head);
	//content
	var picwin_block_cont = document.createElement("div");
		picwin_block_cont.className = "autopic_cont";
		picwin_block_cont.innerHTML = "";
		picwin_block.appendChild(picwin_block_cont);
	//left tab
	var picwin_block_cont_left = document.createElement("div");
		picwin_block_cont_left.className = "contTab contL";
		picwin_block_cont_left.innerHTML = "";
		picwin_block_cont.appendChild(picwin_block_cont_left);
	//right tab
	var picwin_block_cont_right = document.createElement("div");
		picwin_block_cont_right.className = "contTab contR";
		picwin_block_cont_right.innerHTML = "";
		picwin_block_cont.appendChild(picwin_block_cont_right);
		
	var cont__i = 1;
		Tags.forEach(function(value,key){
			if(key != "дублируй_меня_полностью"){
				//оболочка
				var cont_but = document.createElement("div");
					cont_but.className = "autopic_pic_but";
				//имя
				var nam = document.createElement("div")
					nam.className = "autopic_pic_name";
					nam.innerHTML = key;
				//картинка
				var min = document.createElement("input");
					min.type = "image";
					min.src = value;
					min.className = "autopic_pic";
					min.addEventListener("mouseup", function(){
						var field = document.getElementsByClassName("im-chat-input--text")[0];
							field.focus();
							field.innerHTML = value;
					});
					
					cont_but.appendChild(nam); //добавление имени в оболочку
					cont_but.appendChild(min); //добавление картинки в оболочку
					
				//вставка оболочки в таблицу
				if(cont__i % 2 != 0){
					picwin_block_cont_left.appendChild(cont_but);
					cont__i++;
				}else{
					picwin_block_cont_right.appendChild(cont_but);
					cont__i++;
				}
		}});
