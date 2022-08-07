

jQuery(document).ready(function () {
});


jQuery(window).bind("load", function () {
	var available_Tags = {
		"data":[
			{
			  "taidam": "ꪻꪠ",
			  "taidam_vi": "Ai",
			  "taidam_sound": "phaư"
			},
			{
			  "taidam": "ꪯꪱꪥ",
			  "taidam_vi": "Anh",
			  "taidam_sound": "ãi"
			},
			{
			  "taidam": "ꪘꪮꪉ",
			  "taidam_vi": "Ao",
			  "taidam_sound": "nong"
			},
			{
			  "taidam": "ꪀꪙꪲ",
			  "taidam_vi": "Ăn",
			  "taidam_sound": "kin"
			},
			{
			  "taidam": "ꪮꪴ꪿ꪙ",
			  "taidam_vi": "Ấm",
			  "taidam_sound": "ún"
			},
			{
			  "taidam": "ꪚꪒꪰ",
			  "taidam_vi": "Ẩn",
			  "taidam_sound": "bắt"
			},
			{
			  "taidam": "ꪮꪱꪥ꫁",
			  "taidam_vi": "Bố",
			  "taidam_sound": "ải"
			},
			{
			  "taidam": "ꪹꪉꪷꪙ",
			  "taidam_vi": "Bạc",
			  "taidam_sound": "ngơn"
			},
			{
			  "taidam": "ꪊꪚꪾ",
			  "taidam_vi": "Bám",
			  "taidam_sound": "chắp"
			},
			{
			  "taidam": "ꪝꪱꪙ",
			  "taidam_vi": "Bàn",
			  "taidam_sound": "pãn"
			},
			{
			  "taidam": "ꪼꪕ꪿",
			  "taidam_vi": "Bao (tải)",
			  "taidam_sound": "tày"
			},
			{
			  "taidam": "ꪖꪺ꫁ꪥ",
			  "taidam_vi": "Bát",
			  "taidam_sound": "thuổi"
			},
			{
			  "taidam": "ꪚꪙꪲ",
			  "taidam_vi": "Bay",
			  "taidam_sound": "bin"
			},
			{
			  "taidam": "ꪜꪱꪥ꫁",
			  "taidam_vi": "Bày ra",
			  "taidam_sound": "Pải"
			},
			{
			  "taidam": "ꪡꪀꪰ",
			  "taidam_vi": "Băm",
			  "taidam_sound": "phặc"
			},
			{
			  "taidam": "ꪵꪚ꪿ꪙ",
			  "taidam_vi": "Bắn",
			  "taidam_sound": "bén"
			},
			{
			  "taidam": "ꪜꪒꪰ",
			  "taidam_vi": "Bắt",
			  "taidam_sound": "pắt"
			},
			{
			  "taidam": "ꪊꪴꪚ",
			  "taidam_vi": "Hút",
			  "taidam_sound": "kin"
			},
			{
			  "taidam": "ꪮꪺ꪿ꪥ",
			  "taidam_vi": "Bẩn",
			  "taidam_sound": "uối"
			},
			{
			  "taidam": "ꪋꪱꪙ",
			  "taidam_vi": "Bò",
			  "taidam_sound": "chãn"
			},
			{
			  "taidam": "ꪫꪱꪉ",
			  "taidam_vi": "Bỏ",
			  "taidam_sound": "vãng"
			},
			{
			  "taidam": "ꪜꪱ",
			  "taidam_vi": "Cá",
			  "taidam_sound": "pa"
			},
			{
			  "taidam": "ꪁꪱ꫁ꪥ",
			  "taidam_vi": "Cãi",
			  "taidam_sound": "cại"
			},
			{
			  "taidam": "ꪵꪬ꫁ꪉ",
			  "taidam_vi": "Cạn",
			  "taidam_sound": "hảnh"
			},
			{
			  "taidam": "ꪵꪀꪉ",
			  "taidam_vi": "Canh",
			  "taidam_sound": "canh"
			},
			{
			  "taidam": "ꪹꪄꪱ꫁",
			  "taidam_vi": "Cơm",
			  "taidam_sound": "khảu"
			},
			{
			  "taidam": "ꪎꪴꪉ",
			  "taidam_vi": "Cao",
			  "taidam_sound": "xung"
			},
			{
			  "taidam": "ꪶꪊꪀ",
			  "taidam_vi": "Cào",
			  "taidam_sound": "chốc"
			},
			{
			  "taidam": "ꪵꪖ",
			  "taidam_vi": "Cạo",
			  "taidam_sound": "the"
			},
			{
			  "taidam": "ꪏꪱꪥ",
			  "taidam_vi": "Cát",
			  "taidam_sound": "xãi"
			},
			{
			  "taidam": "ꪹꪠꪸꪒ",
			  "taidam_vi": "Cay",
			  "taidam_sound": "phết"
			},
			{
			  "taidam": "ꪼꪖ",
			  "taidam_vi": "Cày",
			  "taidam_sound": "thay"
			},
			{
			  "taidam": "ꪜꪀꪰ",
			  "taidam_vi": "Cắm",
			  "taidam_sound": "pắc"
			},
			{
			  "taidam": "ꪶꪄꪚ",
			  "taidam_vi": "Cắn",
			  "taidam_sound": "khốp"
			},
			{
			  "taidam": "ꪔꪒꪰ",
			  "taidam_vi": "Cắt",
			  "taidam_sound": "tắt"
			},
			{
			  "taidam": "ꪒꪉꪸ꪿",
			  "taidam_vi": "Cân",
			  "taidam_sound": "điếng"
			},
			{
			  "taidam": "ꪵꪕꪒ",
			  "taidam_vi": "Chạm",
			  "taidam_sound": "tẹt"
			},
			{
			  "taidam": "ꪨꪱꪙ",
			  "taidam_vi": "Cháu",
			  "taidam_sound": "lan"
			},
			{
			  "taidam": "ꪀꪽ꫁",
			  "taidam_vi": "Chặn",
			  "taidam_sound": "cẳn"
			},
			{
			  "taidam": "ꪎꪴꪀ",
			  "taidam_vi": "Chín",
			  "taidam_sound": "xúc"
			},
			{
			  "taidam": "ꪶꪙꪀ",
			  "taidam_vi": "Chim",
			  "taidam_sound": "nộc"
			},
			{
			  "taidam": "ꪘꪉꪰ",
			  "taidam_vi": "Da",
			  "taidam_sound": "năng"
			},
			{
			  "taidam": "ꪐꪱꪚ",
			  "taidam_vi": "Dai",
			  "taidam_sound": "nháp"
			},
			{
			  "taidam": "ꪊꪾ꫁",
			  "taidam_vi": "Dán",
			  "taidam_sound":"chắp"
			},
			{
			  "taidam": "ꪣꪒꪲ",
			  "taidam_vi": "Dao",
			  "taidam_sound": "mịt"
			},
			{
			  "taidam": "ꪘꪱ",
			  "taidam_vi": "Dày",
			  "taidam_sound": "na"
			},
			{
			  "taidam": "ꪻꪝ꫁",
			  "taidam_vi": "Dâu (con dâu)",
			  "taidam_sound": "pạư"
			},
			{
			  "taidam": "ꪎꪱꪥ",
			  "taidam_vi": "Dây",
			  "taidam_sound": "xai"
			},
			{
			  "taidam": "ꪋꪽ",
			  "taidam_vi": "Dốc",
			  "taidam_sound": "chẵn"
			},
			{
			  "taidam": "ꪔꪉꪰ꫁",
			  "taidam_vi": "Dựng",
			  "taidam_sound": "tẳng"
			},
			{
			  "taidam": "ꪻꪔ꪿",
			  "taidam_vi": "Dưới",
			  "taidam_sound": "táư"
			},
			{
			  "taidam": "ꪏꪒꪰ",
			  "taidam_vi": "Dịch",
			  "taidam_sound": "xặt"
			},
			{
			  "taidam": "ꪩꪱ꫁ꪣ",
			  "taidam_vi": "Dọa",
			  "taidam_sound": "lạm"
			},
			{
			  "taidam": "ꪉꪱꪥ꪿",
			  "taidam_vi": "Dễ",
			  "taidam_sound": "ngài"
			},
			{
			  "taidam": "ꪙꪱ꫁",
			  "taidam_vi": "Dì",
			  "taidam_sound": "nạ"
			},
			{
			  "taidam": "ꪚꪮꪀ",
			  "taidam_vi": "Dạy",
			  "taidam_sound": "bók"
			},
			{
			  "taidam": "ꪭꪲ",
			  "taidam_vi": "Dài",
			  "taidam_sound": "hĩ"
			},
			{
			  "taidam": "ꪑꪉꪳ꪿",
			  "taidam_vi": "Dâng (lên)",
			  "taidam_sound": "nhừng"
			},
			{
			  "taidam": "ꪕꪮ꫁ꪙ",
			  "taidam_vi": "Dọn",
			  "taidam_sound": "dọn"
			},
			{
			  "taidam": "ꪥꪉꪰ꫁",
			  "taidam_vi": "Dừng",
			  "taidam_sound": "dặng"
			},
			{
			  "taidam": "ꪒꪱ꪿ꪙ",
			  "taidam_vi": "Đá",
			  "taidam_sound": "đán"
			},
			{
			  "taidam": "ꪬꪺ",
			  "taidam_vi": "Đầu",
			  "taidam_sound": "hua"
			},
			{
			  "taidam": "ꪎꪱꪙ",
			  "taidam_vi": "Đan",
			  "taidam_sound": "xan"
			},
			{
			  "taidam": "ꪝꪷ",
			  "taidam_vi": "Đủ",
			  "taidam_sound": "põ"
			},
			{
			  "taidam": "ꪹꪊꪸꪚ",
			  "taidam_vi": "Đau",
			  "taidam_sound": "chếp"
			},
			{
			  "taidam": "ꪶꪄꪣ",
			  "taidam_vi": "Đắng",
			  "taidam_sound": "khôm"
			},
			{
			  "taidam": "ꪵꪝꪉ",
			  "taidam_vi": "Đắt",
			  "taidam_sound": "pãnh"
			},
			{
			  "taidam": "ꪶꪜꪉ",
			  "taidam_vi": "Đặt",
			  "taidam_sound": "pông"
			},
			{
			  "taidam": "ꪒꪙꪲ",
			  "taidam_vi": "Đất",
			  "taidam_sound": "đin"
			},
			{
			  "taidam": "ꪙꪮ꫁ꪉ",
			  "taidam_vi": "Em",
			  "taidam_sound": "nọng"
			},
			{
			  "taidam": "ꪘꪱꪣ",
			  "taidam_vi": "Gai",
			  "taidam_sound": "nam"
			},
			{
			  "taidam": "ꪶꪊꪀ",
			  "taidam_vi": "Gãi",
			  "taidam_sound": "chốc"
			},
			{
			  "taidam": "ꪔꪚꪾ",
			  "taidam_vi": "Gan",
			  "taidam_sound": "tắp"
			},
			{
			  "taidam": "ꪬꪱꪚ",
			  "taidam_vi": "Gánh",
			  "taidam_sound": "háp"
			},
			{
			  "taidam": "ꪹꪄꪱ꫁",
			  "taidam_vi": "Gạo",
			  "taidam_sound": "khảu"
			},
			{
			  "taidam": "ꪝꪷ꫁",
			  "taidam_vi": "Gặp",
			  "taidam_sound": "pọ"
			},
			{
			  "taidam": "ꪊꪾ",
			  "taidam_vi": "Gần",
			  "taidam_sound": "chăm"
			},
			{
			  "taidam": "ꪠꪮꪣ",
			  "taidam_vi": "Gầy",
			  "taidam_sound": "phom"
			},
			{
			  "taidam": "ꪬꪀꪰ",
			  "taidam_vi": "Gãy",
			  "taidam_sound": "hắc"
			},
			{
			  "taidam": "ꪚꪮꪀ",
			  "taidam_vi": "Hoa",
			  "taidam_sound": "bók"
			},
			{
			  "taidam": "ꪼꪮ",
			  "taidam_vi": "Ho",
			  "taidam_sound": "ay"
			},
			{
			  "taidam": "ꪜꪒꪲ",
			  "taidam_vi": "Hái",
			  "taidam_sound": "pít"
			},
			{
			  "taidam": "ꪵꪀ꪿ꪙ",
			  "taidam_vi": "Hạt",
			  "taidam_sound": "kén"
			},
			{
			  "taidam": "ꪹꪢꪸꪒ",
			  "taidam_vi": "Hết",
			  "taidam_sound": "mết"
			},
			{
			  "taidam": "ꪵꪁꪚ",
			  "taidam_vi": "Hẹp",
			  "taidam_sound": "kẹp"
			},
			{
			  "taidam": "ꪙꪮ꫁ꪥ",
			  "taidam_vi": "Ít",
			  "taidam_sound": "nọi"
			},
			{
			  "taidam": "ꪋꪱ꪿ꪉ",
			  "taidam_vi": "Khéo",
			  "taidam_sound": "chàng"
			},
			{
			  "taidam": "ꪼꪬ꫁",
			  "taidam_vi": "Khóc",
			  "taidam_sound": "hảy"
			},
			{
			  "taidam": "ꪵꪭꪉ",
			  "taidam_vi": "Khỏe",
			  "taidam_sound": "hãnh"
			},
			{
			  "taidam": "ꪻꪄ꪿",
			  "taidam_vi": "Khô",
			  "taidam_sound": "kháư"
			},
			{
			  "taidam": "ꪀꪺꪙ",
			  "taidam_vi": "Khuấy",
			  "taidam_sound": "cuôn"
			},
			{
			  "taidam": "ꪒꪀꪳ",
			  "taidam_vi": "Khuya",
			  "taidam_sound": "đức"
			},
			{
			  "taidam": "ꪁꪾ",
			  "taidam_vi": "Kiêng",
			  "taidam_sound": "cẵm"
			},
			{
			  "taidam": "ꪹꪄꪸꪣ",
			  "taidam_vi": "Kim",
			  "taidam_sound": "khêm"
			},
			{
			  "taidam": "ꪹꪩꪷꪚ",
			  "taidam_vi": "Kịp",
			  "taidam_sound": "lợp"
			},
			{
			  "taidam": "ꪵꪬꪫ꪿",
			  "taidam_vi": "Héo",
			  "taidam_sound": "héo"
			},
			{
			  "taidam": "ꪵꪮꪚ",
			  "taidam_vi": "Học",
			  "taidam_sound": "ép"
			},
			{
			  "taidam": "ꪖꪱꪣ",
			  "taidam_vi": "Hỏi",
			  "taidam_sound": "tham"
			},
			{
			  "taidam": "ꪻꪚ",
			  "taidam_vi": "Lá",
			  "taidam_sound": "baư"
			},
			{
			  "taidam": "ꪨꪱꪀ",
			  "taidam_vi": "Lạ",
			  "taidam_sound": "lák"
			},
			{
			  "taidam": "ꪹꪥꪸꪒ",
			  "taidam_vi": "làm",
			  "taidam_sound": "dệt"
			},
			{
			  "taidam": "ꪘꪱꪫ",
			  "taidam_vi": "Lạnh",
			  "taidam_sound": "nao"
			},
			{
			  "taidam": "ꪹꪋꪸꪒ",
			  "taidam_vi": "Lau",
			  "taidam_sound": "chệt"
			},
			{
			  "taidam": "ꪒꪾ",
			  "taidam_vi": "Lặn",
			  "taidam_sound": "đăm"
			},
			{
			  "taidam": "ꪄꪙꪳ꫁",
			  "taidam_vi": "Lên",
			  "taidam_sound": "khửn"
			},
			{
			  "taidam": "ꪹꪬꪷꪉ",
			  "taidam_vi": "Lâu",
			  "taidam_sound": "hơng"
			},
			{
			  "taidam": "ꪠꪲ",
			  "taidam_vi": "Ma",
			  "taidam_sound": "phi"
			},
			{
			  "taidam": "ꪀꪱ꫁",
			  "taidam_vi": "Mạ",
			  "taidam_sound": "cả"
			},
			{
			  "taidam": "ꪩꪚꪾ",
			  "taidam_vi": "Mài",
			  "taidam_sound": "lặp"
			},
			{
			  "taidam": "ꪹꪯꪸꪣ",
			  "taidam_vi": "Mẹ",
			  "taidam_sound": "ễm"
			},
			{
			  "taidam": "ꪤꪽ꪿",
			  "taidam_vi": "Màn",
			  "taidam_sound": "dắn"
			},
			{
			  "taidam": "ꪹꪩꪒ",
			  "taidam_vi": "Máu",
			  "taidam_sound": "lượt"
			},
			{
			  "taidam": "ꪙꪴ꪿ꪉ",
			  "taidam_vi": "Mặc",
			  "taidam_sound": "nùng"
			},
			{
			  "taidam": "ꪔꪱ",
			  "taidam_vi": "Mắt",
			  "taidam_sound": "ta"
			},
			{
			  "taidam": "ꪘꪱ꫁",
			  "taidam_vi": "Mặt",
			  "taidam_sound": "nả"
			},
			{
			  "taidam": "ꪜꪱꪀ",
			  "taidam_vi": "Nói",
			  "taidam_sound": "pák"
			},
			{
			  "taidam": "ꪋꪱꪥ",
			  "taidam_vi": "Nam",
			  "taidam_sound": "chãi"
			},
			{
			  "taidam": "ꪵꪮꪀ",
			  "taidam_vi": "Não",
			  "taidam_sound": "ék"
			},
			{
			  "taidam": "ꪜꪲ",
			  "taidam_vi": "Năm",
			  "taidam_sound": "pi"
			},
			{
			  "taidam": "ꪘꪀꪰ",
			  "taidam_vi": "Nặng",
			  "taidam_sound": "nắc"
			},
			{
			  "taidam": "ꪠꪱ",
			  "taidam_vi": "Nắp",
			  "taidam_sound": "pha"
			},
			{
			  "taidam": "ꪖꪣꪲ꫁",
			  "taidam_vi": "Ném",
			  "taidam_sound": "thỉm"
			},
			{
			  "taidam": "ꪮꪣꪲ꪿",
			  "taidam_vi": "No",
			  "taidam_sound": "ím"
			},
			{
			  "taidam": "ꪣꪳ꫁",
			  "taidam_vi": "Ngày",
			  "taidam_sound": "mự"
			},
			{
			  "taidam": "ꪀꪮꪒ",
			  "taidam_vi": "Ôm",
			  "taidam_sound": "cót"
			},
			{
			  "taidam": "ꪙꪽ",
			  "taidam_vi": "Ồn",
			  "taidam_sound": "nẵn"
			},
			{
			  "taidam": "ꪤꪴ꪿",
			  "taidam_vi": "Ở",
			  "taidam_sound": "dú"
			},
			{
			  "taidam": "ꪠꪱ",
			  "taidam_vi": "Pha",
			  "taidam_sound": "pha"
			},
			{
			  "taidam": "ꪵꪣ꪿ꪙ",
			  "taidam_vi": "Phải",
			  "taidam_sound": "mèn"
			},
			{
			  "taidam": "ꪢꪱꪀ",
			  "taidam_vi": "Quả",
			  "taidam_sound": "mák"
			},
			{
			  "taidam": "ꪫꪲ",
			  "taidam_vi": "Quạt",
			  "taidam_sound": "vĩ"
			},
			{
			  "taidam": "ꪜꪙꪲ꪿",
			  "taidam_vi": "Quay",
			  "taidam_sound": "pín"
			},
			{
			  "taidam": "ꪭꪀꪰ",
			  "taidam_vi": "Quý",
			  "taidam_sound": "hặc"
			},
			{
			  "taidam": "ꪮꪮꪀ",
			  "taidam_vi": "Ra",
			  "taidam_sound": "ók"
			},
			{
			  "taidam": "ꪄꪱꪒ",
			  "taidam_vi": "Rách",
			  "taidam_sound": "khát"
			},
			{
			  "taidam": "ꪠꪀꪰ",
			  "taidam_vi": "Rau",
			  "taidam_sound": "phắc"
			},
			{
			  "taidam": "ꪉꪴ",
			  "taidam_vi": "Rắn",
			  "taidam_sound": "ngũ"
			},
			{
			  "taidam": "ꪜꪱ꪿",
			  "taidam_vi": "Rừng",
			  "taidam_sound": "pá"
			},
			{
			  "taidam": "ꪹꪄꪥ",
			  "taidam_vi": "Rể",
			  "taidam_sound": "khươi"
			},
			{
			  "taidam": "ꪄꪱ꪿",
			  "taidam_vi": "Riềng",
			  "taidam_sound": "khá"
			},
			{
			  "taidam": "ꪄꪱꪥ꪿",
			  "taidam_vi": "Rót",
			  "taidam_sound": "khái"
			},
			{
			  "taidam": "ꪹꪡꪉ",
			  "taidam_vi": "Rơm",
			  "taidam_sound": "phưỡng"
			},
			{
			  "taidam": "ꪵꪝꪀ",
			  "taidam_vi": "Sạch",
			  "taidam_sound": "pẹk"
			},
			{
			  "taidam": "ꪹꪄꪱ꫁",
			  "taidam_vi": "Sắc",
			  "taidam_sound": "khảu"
			},
			{
			  "taidam": "ꪭꪴ꪿ꪉ",
			  "taidam_vi": "Sáng",
			  "taidam_sound": "hùng"
			},
			{
			  "taidam": "ꪒꪱꪫ",
			  "taidam_vi": "Sao",
			  "taidam_sound": "đao"
			},
			{
			  "taidam": "ꪜꪲ꪿",
			  "taidam_vi": "Sáo",
			  "taidam_sound": "pí"
			},
			{
			  "taidam": "ꪨꪉꪰ",
			  "taidam_vi": "Sau",
			  "taidam_sound": "lăng"
			},
			{
			  "taidam": "ꪹꪣꪱ",
			  "taidam_vi": "Say",
			  "taidam_sound": "mãu"
			},
			{
			  "taidam": "ꪹꪨꪸꪀ",
			  "taidam_vi": "Sắt",
			  "taidam_sound": "lếch"
			},
			{
			  "taidam": "ꪹꪩꪷꪀ",
			  "taidam_vi": "Sâu",
			  "taidam_sound": "lợc"
			},
			{
			  "taidam": "ꪶꪡꪒ",
			  "taidam_vi": "Sôi",
			  "taidam_sound": "phột"
			},
			{
			  "taidam": "ꪬꪴ",
			  "taidam_vi": "Tai",
			  "taidam_sound": "hu"
			},
			{
			  "taidam": "ꪶꪔꪚ",
			  "taidam_vi": "Tát",
			  "taidam_sound": "tốp"
			},
			{
			  "taidam": "ꪣꪳ",
			  "taidam_vi": "Tay",
			  "taidam_sound": "mữ"
			},
			{
			  "taidam": "ꪶꪠꪣ",
			  "taidam_vi": "Tóc",
			  "taidam_sound": "phôm"
			},
			{
			  "taidam": "ꪮꪱꪚ",
			  "taidam_vi": "Tắm",
			  "taidam_sound": "áp"
			},
			{
			  "taidam": "ꪊꪉꪸ",
			  "taidam_vi": "Tết",
			  "taidam_sound": "chiêng"
			},
			{
			  "taidam": "ꪼꪒ",
			  "taidam_vi": "Thang",
			  "taidam_sound": "đay"
			},
			{
			  "taidam": "ꪖꪱ꪿ꪙ",
			  "taidam_vi": "Than",
			  "taidam_sound": "thán"
			},
			{
			  "taidam": "ꪤꪱꪣ",
			  "taidam_vi": "Thăm",
			  "taidam_sound": "dàm"
			},
			{
			  "taidam": "ꪏꪳ꪿",
			  "taidam_vi": "Thẳng",
			  "taidam_sound": "xừ"
			},
			{
			  "taidam": "ꪵꪝ꫁",
			  "taidam_vi": "Thắng",
			  "taidam_sound": "pẹ"
			},
			{
			  "taidam": "ꪔꪾ꪿",
			  "taidam_vi": "Thấp",
			  "taidam_sound": "tắm"
			},
			{
			  "taidam": "ꪹꪬꪸꪙ",
			  "taidam_vi": "Thấy",
			  "taidam_sound": "hên"
			},
			{
			  "taidam": "ꪀꪙꪲ",
			  "taidam_vi": "Uống",
			  "taidam_sound": "kin"
			},
			{
			  "taidam": "ꪮꪙꪳ",
			  "taidam_vi": "Ướt",
			  "taidam_sound": "ưn"
			},
			{
			  "taidam": "ꪠꪴꪉ",
			  "taidam_vi": "Vá",
			  "taidam_sound": "phung"
			},
			{
			  "taidam": "ꪚꪱ꪿",
			  "taidam_vi": "Vai",
			  "taidam_sound": "bá"
			},
			{
			  "taidam": "ꪠꪱꪥ꫁",
			  "taidam_vi": "Vải",
			  "taidam_sound": "phải"
			},
			{
			  "taidam": "ꪁꪾ",
			  "taidam_vi": "Vàng",
			  "taidam_sound": "cẵm"
			},
			{
			  "taidam": "ꪥꪮ꫁ꪙ",
			  "taidam_vi": "Mượn",
			  "taidam_sound": "dọn"
			},
			{
			  "taidam": "ꪀꪴ꫁",
			  "taidam_vi": "Vay",
			  "taidam_sound": "củ"
			},
			{
			  "taidam": "ꪎꪙꪲ꫁",
			  "taidam_vi": "Váy",
			  "taidam_sound": "xỉn"
			},
			{
			  "taidam": "ꪅꪽ꫁",
			  "taidam_vi": "Xinh",
			  "taidam_sound": "khặn"
			},
			{
			  "taidam": "ꪎꪷ",
			  "taidam_vi": "Xin",
			  "taidam_sound": "xo"
			},
			{
			  "taidam": "ꪜꪙꪲ꪿",
			  "taidam_vi": "Xoay",
			  "taidam_sound": "pín"
			},
			{
			  "taidam": "ꪵꪩꪫ꫁",
			  "taidam_vi": "Xong",
			  "taidam_sound": "lẹo"
			},
			{
			  "taidam": "ꪋꪮ꫁ꪙ",
			  "taidam_vi": "Xúc",
			  "taidam_sound": "chọn"
			},
			{
			  "taidam": "ꪶꪩꪉ",
			  "taidam_vi": "Xuống",
			  "taidam_sound": "lỗng"
			},
			{
			  "taidam": "ꪹꪋꪱ꫁",
			  "taidam_vi": "Xưa",
			  "taidam_sound": "chạu"
			},
			{
			  "taidam": "ꪣꪀꪰ",
			  "taidam_vi": "Yêu",
			  "taidam_sound": "yêu"
			},
			{
			  "taidam": "ꪣꪴ꫁",
			  "taidam_vi": "Mũ",
			  "taidam_sound": "mụ"
			},
			{
			  "taidam": "ꪀꪴꪚ",
			  "taidam_vi": "Nón",
			  "taidam_sound": "cúp"
			},
			{
			  "taidam": "ꪶꪖꪉ",
			  "taidam_vi": "Túi",
			  "taidam_sound": "thông"
			},
			{
			  "taidam": "ꪔꪙꪲ",
			  "taidam_vi": "Chân",
			  "taidam_sound": "tin"
			},
			{
			  "taidam": "ꪩꪴꪀ",
			  "taidam_vi": "Con",
			  "taidam_sound": "lụ"
			},
			{
			  "taidam": "ꪹꪖꪱ꫁",
			  "taidam_vi": "Già",
			  "taidam_sound": "thảu"
			},
			{
			  "taidam": "ꪮꪱꪫ",
			  "taidam_vi": "Chú",
			  "taidam_sound": "ao"
			},
			{
			  "taidam": "ꪮꪱ",
			  "taidam_vi": "Cô",
			  "taidam_sound": "a"
			},
			{
			  "taidam": "ꪋꪮ꪿ꪥ",
			  "taidam_vi": "Giúp",
			  "taidam_sound": "chòi"
			},
			{
			  "taidam": "ꪵꪄꪀ",
			  "taidam_vi": "Gọi",
			  "taidam_sound": "khék"
			},
			{
			  "taidam": "ꪶꪩ꫁ꪣ",
			  "taidam_vi": "Ngã",
			  "taidam_sound": "lộm"
			},
			{
			  "taidam": "ꪜꪴꪣ",
			  "taidam_vi": "Bụng",
			  "taidam_sound": "pum"
			},
			{
			  "taidam": "ꪼꪎ꫁",
			  "taidam_vi": "Ruột",
			  "taidam_sound": "xảy"
			},
			{
			  "taidam": "ꪚꪴꪒ",
			  "taidam_vi": "Bút",
			  "taidam_sound": "bút"
			},
			{
			  "taidam": "ꪵꪀꪫ꪿",
			  "taidam_vi": "Đèo",
			  "taidam_sound": "kéo"
			},
			{
			  "taidam": "ꪬꪺ꫁ꪥ",
			  "taidam_vi": "Suối",
			  "taidam_sound": "huổi"
			},
			{
			  "taidam": "ꫜ",
			  "taidam_vi": "Một",
			  "taidam_sound": "nừng"
			},
			{
			  "taidam": "ꪎꪮꪉ",
			  "taidam_vi": "Hai",
			  "taidam_sound": "xong"
			},
			{
			  "taidam": "ꪎꪱꪣ",
			  "taidam_vi": "Ba",
			  "taidam_sound": "xam"
			},
			{
			  "taidam": "ꪎꪲ꪿",
			  "taidam_vi": "Bốn",
			  "taidam_sound": "xí"
			},
			{
			  "taidam": "ꪬꪱ꫁",
			  "taidam_vi": "Năm",
			  "taidam_sound": "hả"
			},
			{
			  "taidam": "ꪶꪬꪀ",
			  "taidam_vi": "Sáu",
			  "taidam_sound": "hốc"
			},
			{
			  "taidam": "ꪹꪊꪸꪒ",
			  "taidam_vi": "Bảy",
			  "taidam_sound": "chết"
			},
			{
			  "taidam": "ꪵꪜꪒ",
			  "taidam_vi": "Tám",
			  "taidam_sound": "pét"
			},
			{
			  "taidam": "ꪹꪀꪱ꫁",
			  "taidam_vi": "Chín",
			  "taidam_sound": "cảu"
			},
			{
			  "taidam": "ꪎꪚꪲ",
			  "taidam_vi": "Mười",
			  "taidam_sound": "xíp"
			},
			{
			  "taidam": "ꪹꪚꪙ",
			  "taidam_vi": "tháng",
			  "taidam_sound": "bươn"
			},
			{
			  "taidam": "ꪣꪱ",
			  "taidam_vi": "Về",
			  "taidam_sound": "mã"
			},
			{
			  "taidam": "ꪼꪜ",
			  "taidam_vi": "Đi",
			  "taidam_sound": "pay"
			},
			{
			  "taidam": "ꪄꪲ꪿",
			  "taidam_vi": "Cưỡi",
			  "taidam_sound": "khí"
			},
			{
			  "taidam": "ꪣꪀꪰ",
			  "taidam_vi": "Thích",
			  "taidam_sound": "mặc"
			},
			{
			  "taidam": "ꪑꪉꪰ",
			  "taidam_vi": "Còn",
			  "taidam_sound": "nhẵng"
			},
			{
			  "taidam": "ꪡꪉꪰ",
			  "taidam_vi": "Nghe",
			  "taidam_sound": "phẵng"
			},
			{
			  "taidam": "ꪋꪉꪰ",
			  "taidam_vi": "Ghét",
			  "taidam_sound": "chẵng"
			},
			{
			  "taidam": "ꪎꪉꪳ",
			  "taidam_vi": "Khen",
			  "taidam_sound": "xưng"
			},
			{
			  "taidam": "ꪵꪒꪉ",
			  "taidam_vi": "Đỏ",
			  "taidam_sound": "đanh"
			},
			{
			  "taidam": "ꪵꪄꪫ",
			  "taidam_vi": "Xanh",
			  "taidam_sound": "kheo"
			},
			{
			  "taidam": "ꪒꪾ",
			  "taidam_vi": "Đen",
			  "taidam_sound": "đăm"
			},
			{
			  "taidam": "ꪹꪨꪉ",
			  "taidam_vi": "Vàng",
			  "taidam_sound": "lương"
			},
			{
			  "taidam": "ꪜꪉꪰ",
			  "taidam_vi": "Tím",
			  "taidam_sound": "păng"
			},
			{
			  "taidam": "ꪒꪮ꪿ꪙ",
			  "taidam_vi": "Trắng",
			  "taidam_sound": "đón"
			},
			{
			  "taidam": "ꪓꪱꪫ",
			  "taidam_vi": "Hồng",
			  "taidam_sound": "đao"
			},
			{
			  "taidam": "ꪣꪲ",
			  "taidam_vi": "Có",
			  "taidam_sound": "mĩ"
			},
			{
			  "taidam": "ꪹꪭꪙ",
			  "taidam_vi": "Nhà",
			  "taidam_sound": "hưỡn"
			},
			{
			  "taidam": "ꪎꪺꪙ",
			  "taidam_vi": "Vườn",
			  "taidam_sound": "xuôn"
			},
			{
			  "taidam": "ꪮꪱ꪿ꪉ",
			  "taidam_vi": "Chậu",
			  "taidam_sound": "áng"
			},
			{
			  "taidam": "ꪢꪷ꫁",
			  "taidam_vi": "Nồi",
			  "taidam_sound": "mỏ"
			},
			{
			  "taidam": "ꪚꪺ꪿ꪉ",
			  "taidam_vi": "Thìa",
			  "taidam_sound": "buống"
			},
			{
			  "taidam": "ꪖꪴ꪿",
			  "taidam_vi": "Đũa",
			  "taidam_sound": "thú"
			},
			{
			  "taidam": "ꪭꪮꪣ",
			  "taidam_vi": "Hòm",
			  "taidam_sound": "hõm"
			},
			{
			  "taidam": "ꪄꪫꪱ꪿",
			  "taidam_vi": "Khóa",
			  "taidam_sound": "khóa"
			},
			{
			  "taidam": "ꪼꪄ",
			  "taidam_vi": "Mở",
			  "taidam_sound": "khay"
			},
			{
			  "taidam": "ꪬꪚꪾ",
			  "taidam_vi": "đóng",
			  "taidam_sound": "hắp"
			},
			{
			  "taidam": "ꪔꪴ",
			  "taidam_vi": "Cửa",
			  "taidam_sound": "tu"
			},
			{
			  "taidam": "ꪵꪜ꫁ꪙ",
			  "taidam_vi": "Ván",
			  "taidam_sound": "pẻn"
			},
			{
			  "taidam": "ꪼꪣ꫁",
			  "taidam_vi": "Gỗ",
			  "taidam_sound": "mạy"
			},
			{
			  "taidam": "ꪙꪾ꫁",
			  "taidam_vi": "Nước",
			  "taidam_sound": "nặm"
			},
			{
			  "taidam": "ꪪꪱꪙ",
			  "taidam_vi": "Ngọt",
			  "taidam_sound": "van"
			},
			{
			  "taidam": "ꪭꪮ꫁ꪙ",
			  "taidam_vi": "Nóng",
			  "taidam_sound": "họn"
			},
			{
			  "taidam": "ꪚꪱꪉ",
			  "taidam_vi": "Mỏng",
			  "taidam_sound": "bang"
			},
			{
			  "taidam": "ꪶꪁꪒ",
			  "taidam_vi": "Cong",
			  "taidam_sound": "cột"
			},
			{
			  "taidam": "ꪹꪄꪱ꫁",
			  "taidam_vi": "vào",
			  "taidam_sound": "khảu"
			},
			{
			  "taidam": "ꪙꪮꪙ",
			  "taidam_vi": "Ngủ",
			  "taidam_sound": "nõn"
			},
			{
			  "taidam": "ꪒꪲ",
			  "taidam_vi": "Tốt",
			  "taidam_sound": "đi"
			},
			{
			  "taidam": "ꪭꪱꪥ꫁",
			  "taidam_vi": "Xấu",
			  "taidam_sound": "hại"
			},
			{
			  "taidam": "ꫛ",
			  "taidam_vi": "Người",
			  "taidam_sound": "cỗn"
			},
			{
			  "taidam": "ꪶꪁꪙ",
			  "taidam_vi": "Người",
			  "taidam_sound": "cỗn"
			},
			{
			  "taidam": "ꪹꪔꪸꪣ",
			  "taidam_vi": "Đầy",
			  "taidam_sound": "têm"
			},
			{
			  "taidam": "ꪵꪨ",
			  "taidam_vi": "Đĩa",
			  "taidam_sound": "le"
			},
			{
			  "taidam": "ꪢꪷ꫁",
			  "taidam_vi": "Nồi",
			  "taidam_sound": "mỏ"
			},
			{
			  "taidam": "ꪣꪒꪲ",
			  "taidam_vi": "Dao",
			  "taidam_sound": "mịt"
			},
			{
			  "taidam": "ꪵꪫ꪿ꪙ",
			  "taidam_vi": "Gương",
			  "taidam_sound": "vèn"
			},
			{
			  "taidam": "ꪪꪲ",
			  "taidam_vi": "Lược",
			  "taidam_sound": "vi"
			},
			{
			  "taidam": "ꪨꪺ",
			  "taidam_vi": "Củi",
			  "taidam_sound": "lua"
			},
			{
			  "taidam": "ꪡꪱ꫁",
			  "taidam_vi": "Trời",
			  "taidam_sound": "phạ"
			},
			{
			  "taidam": "ꪢꪮꪀ",
			  "taidam_vi": "Mây",
			  "taidam_sound": "mók"
			},
			{
			  "taidam": "ꪹꪚꪙ",
			  "taidam_vi": "Trăng",
			  "taidam_sound": "bươn"
			},
			{
			  "taidam": "ꪶꪩꪣ",
			  "taidam_vi": "Gió",
			  "taidam_sound": "lỗm"
			},
		]
	};
	function search_filter() {
	    var filter, ul, li, a, i;
	    filter = jQuery(document).find("#browsers_txt_taidam").val().toUpperCase();
	    ul = jQuery(document).find(".search_list");
	    li = ul.children("li");
	    if (!filter) {
	      ul.hide();
	    } else {      
			for (i = 0; i < li.length; i++) {
				a = li.eq(i).find("a");
				if (a.html().toUpperCase().indexOf(filter) > -1) {
					ul.show();
	                li.eq(i).show();
				}else{
					li.eq(i).hide();
				}
			}
	    }
	}
	function show_block(data_name){
		var count = 0;
		for(i=0;i < data_name.data.length; i++){ //data_name.data.length
			var taidam = data_name.data[i].taidam;
			var taidam_vi = data_name.data[i].taidam_vi;
			var taidam_sound = data_name.data[i].taidam_sound;

			var li = '<li class="search_list_item"><a href="#" class="search_list_link" data-id="'+count+'">'+taidam_vi+'</a></li>';
			jQuery(document).find(".search_list").append(li);

			var html = '<div class="txt_check_item" data-id="'+count+'">'+
                    		'<div class="txt_info">'+
                        		'<div class="txt_vi">'+taidam_vi+'</div>'+
                        		'<div class="txt_taidam_sound">Phiên âm: <span>'+taidam_sound+'</span></div>'+
                        		'<div class="txt_taidam">'+taidam+'</div>'+
		                    '</div>'+
		                    '<div class="txt_input"></div>'+
		                    '<div class="txt_btn">'+
		                        '<a href="#" class="check_result btn btn-info">Kiểm tra</a>'+
		                    '</div>'+
		                '</div>';
			jQuery(document).find(".txt_check_items").append(html);
			count++;
		}
		
	}
	show_block(available_Tags);
	function show_input(target){
		target.find(".txt_check_item").each(function(){
			var taidam = jQuery(this).find(".txt_info .txt_taidam").text();
			var input = '';
			for(i=0;i < taidam.length; i++){
				input = input +
						'<div class="txt_input_item">'+
		                    '<input type="text" class="form-control">'+
		                '</div>';
			}
			jQuery(this).find(".txt_input").html(input)
		});
		target.addClass("inited");
	}
	show_input(jQuery(document).find(".txt_check_items"));
	jQuery(document).on("keyup","#browsers_txt_taidam",function() {
		search_filter();
	});	
	jQuery(document).on('click', '.check_result', function(e){
		e.preventDefault();
		var input = jQuery(this).parents(".txt_check_item").find(".txt_input_item");
		var txt_taidam = jQuery(this).parents(".txt_check_item").find(".txt_taidam").text();
		input.find(".noti_span").remove();
		var total = input.length;
		var count = 0;
	    input.each(function(index){
	    	var index = jQuery(this).index();
	    	var txt = txt_taidam.charAt(index);
			//jQuery(this).find(".form-control").after('<span class="noti_span text-center">'+txt+'</span>');
	    	if(jQuery(this).find(".form-control").val()==txt){
				jQuery(this).find(".form-control").css("color","#8BC34A");
				jQuery(this).find(".form-control").css("border-color","#8BC34A");
				jQuery(this).find(".form-control").after('<span class="noti_span text-center" style="color:#8BC34A">Đúng</span>');
				count ++;
	    	}else{
				jQuery(this).find(".form-control").css("color","#F44336");
				jQuery(this).find(".form-control").css("border-color","#F44336");
				jQuery(this).find(".form-control").after('<span class="noti_span text-center" style="color:#F44336">Sai</span>');
	    	}
	    });
	    if(count==total){
			jQuery(this).parents(".txt_check_item").find(".txt_taidam").addClass("active");
	    }else{
			jQuery(this).parents(".txt_check_item").find(".txt_taidam").removeClass("active");
	    }
	});
	jQuery(document).on('click', '.txt_clear_input', function(){
	    jQuery(document).find("#browsers_txt_taidam").val("");
	    jQuery(document).find('.txt_check_item').removeClass("active");
	});
	jQuery(document).on('click', '.search_list_item > a', function(e){
		e.preventDefault();
		var id = jQuery(this).attr("data-id");
		var text = jQuery(this).text();
		var ul = jQuery(document).find(".search_list");
	    var li = ul.children("li");
	    var input = jQuery(document).find("#browsers_txt_taidam");
	    ul.hide();
	    li.hide();
	    input.val(text);
	    jQuery(document).find('.txt_check_item').removeClass("active");
	    jQuery(document).find('.txt_check_item[data-id="'+id+'"]').addClass("active");
	});	  
});

jQuery(window).resize(function () { 
});
