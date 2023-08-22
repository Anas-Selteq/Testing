import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #f8fafc !important;
    color: hsl(192, 100%, 9%);
    font-family: 'Roboto', sans-serif;
    font-size: 1.15em;
    margin: 0;
    overflow-y: hidden !important;

  }

  /* Add this to your CSS */
@keyframes speaking-waves {
  0% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(1.1);
  }
  100% {
    transform: scaleY(1);
  }
}

.speaking-waves {
  animation: speaking-waves 0.5s infinite;
  transform-origin: bottom center;
}

  .main_landing_mob
  {
    height: 100vh;
    overflow-y: scroll;
    padding-bottom: 100%;
  }
  .position_set_mob_landing
  {
    top: 5%;
    position: absolute;
    z-index: 100;
    color: white;
    padding-left: 4%;
    padding-right: 4%;
    width: 100%;
  }
  .right_tendon
  {
    background-color: white;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }
  .big_heading
  {
    color: black;
  }
  .margin_top_buttton
  {
    margin-top: 100%;
  }
  .color_button_mob_landing
  {
    background-color: #FF6767 !important;
    border: 1px solid #FF6767 !important;
  }
  .display_ind_sec
  {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    overflow-x: scroll;
  }
  .height_width_landing_ind
  {
    height: 70px;
    width: 70px;
    
  }
  .width_adj_ind
  {
    width: 300px !important;
  }
  .input_left_tendon
  {
    border: none;
    outline: none;
    box-shadow: none;
  }
  .input_left_tendon:focus
  {
    border: none;
    outline: none;
    box-shadow: none;
  }
  .heroSlidermob
  .position_set_notifcation
  {
    position: absolute;
    z-index: 1000;
    width: 20%;
    background-color: white;
    top: 75px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 10px;
  }
  .background_sec4_p
  {
    background-image: url(/imagess/redicons/backgroundnew.png);
    background-size: cover;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
  }
  .heading_color_p_1
  {
    color: #FFF;
font-family: Playfair Display;
font-size: 18px;
font-style: normal;
font-weight: 700;
  }
  .sub_heading_color_p_1
  {
    color: #F1F1F1;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
  }
  .ssub_heading_color_p_1
  {
    color: #F1F1F1;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
  }
  .width_img_setting_p
  {
    border-radius: 30px;
  }
  .sec4_text_1
  {
    color: #FFF;
font-family: Playfair Display;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;
  }
 
  .background_p_sec2
  {
    background-image: url(/imagess/redicons/sidecir.png);
    background-size: 40% 100%;
    position: relative;
    background-position: contain;
    background-repeat: no-repeat;
    height: 70vh;
  }
  .padding_set_second_sec_p
  {
    padding-top: 20% !important; 
  }
  .background_provider_page
  {
    background-image: url(/imagess/redicons/backgroundimg.png);
    background-size: cover;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    z-index: 199;
  }
  .first_p_text
  {
    color: #000;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .first_p_text1
  {
    color: #000;
    font-family: Playfair Display;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .button_p
  {
    color: #FFF4E8;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    background-color: #EC1E27 !important;
    padding-left: 8%;
    padding-right: 8%;
    padding-top: 2%;
    padding-bottom: 2%;
    
  }
  .border_bottom_set
  {
    border-bottom: 1px solid #000;
  }
  .border_bottom_set_non_act
  {
    color: #B1B4B7;
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 400;
  }
  .neg_mar_provider
  {
    margin-top: -145px;
    position: relative;
    z-index: 200;
  }
  .red_p_text
  {
    color: #EC1E27;
font-family: Roboto;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-decoration-line: underline;
  }
  .para_text_p
  {
    color: #6C6C6C;
font-family: Roboto;
line-height: 150%;
font-size: 18px;
font-style: normal;
font-weight: 500;
  }
  .img_width_p
  {
    width: 70%;
    padding-top: 10%;
  }
  .padding_managae_firstcol
  {
    padding-top: 10%;
  }
  .img_rounded_circle_new
  {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
  }
  .label_address_font_pixl
  {
    color: gray;
    font-size: 10px;
    font-family: Roboto;
  }
  .font_for_address_inputs
  {
    margin-left: 0px;
    outline: none;
    background-color: transparent;
    font-size: 14px;
    width: 100%;
    font-family: Roboto;
    padding-left: 0px !important;
  }
  .react-calendar {
    padding-top: 5%;
    padding-bottom: 5%;
    width: 100% !important;
    border-radius: 8px !important;
    border: 1px solid lightgray !important;
  }
  
.react-calendar__tile--active {
  background-color: #D62929 !important;
  border-radius: 8px !important;
}

.react-calendar__tile--now {
  background-color: #ed9999 !important;
  color: white !important;
  border-radius: 8px !important;
  border: 2px solid red !important; 
}
.react-calendar__month-view__weekdays__weekday abbr 
{
  font-family: Roboto !important;
  color: #CCD2D8  !important;
}
.react-calendar__tile react-calendar__month-view__days__day abbr
{
  font-family: Roboto !important;
  color: red  !important;
}
  input[type='radio'] {
    border: 1px solid red !important;
  }
  .profile_cards
{
  padding: 31px 59.5px;
  border-radius: 8px;
  border: solid 0.8px #dcdcdc;
  background-color: white;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000;
}
  .color_red_new
  {
    color: red !important;
  }
  .main_headingg_new
  {
    font-size: 39px;
  }
  .get_a_text
  {
    font-size: 22px;
    font-weight: 300;
    color: #858585;
  }
  .head_free_body
  {
    font-size: 26px;
  }
  .head_free_body2
  {
    font-size: 22px;
  }
  .p_tag_service
  {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    color: #858585;
    line-height: 22px;
  }
  .img_width_monitor
  {
    width: 70%;
  }
  .img_width_mobile
  {
    width: 80%;
  }
  .page_scroll
  {
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    padding-bottom: 50%;
  }
  
 
  .font_size_set_stories
  {
    color: gray;
    font-size: 14px;
  }
  .img_circle
  {
    height: 100px;
    width: 100px;
    border-radius: 50px;
    object-fit: cover;
  }
  .img_height_width_set
  {
    height: 40vh;
    border-radius: 20px;
  }
  .position_relative
  {
    position: relative;
    z-index: 10;
  }
  .position_aa
  {
    margin-top: -70px !important;
    position: absolute;
    z-index: 11;
  }
.background_color_button
{
  background: #dc0000;
  color: #fff;
  padding: 0.85rem 2rem;
  border: none;
  border-radius: 40px;
  font-size: 18px;
  font-weight: 500;
}
  
  .custom_padding_contentpage
  {
    padding-left: 5%;
    padding-right: 5%;
  }
  .custom_padding_contentpage1
  {
    padding-left: 15%;
    padding-right: 10%;
  }
  
  .background_color_sec_1
  {
    background-color: #D0D9E0;
    height: 70vh;
  }
  .background_color_sec_2
  {
    background-color: #D0D9E0;
    height: auto;
  }
  .bg_gray_back
  {
    background-color: rgb(246, 248, 251);
    border-radius: 10px;
  }
  .h1_sec1_landingpage
  {
    font-size: 28px;
    font-weight: 600;
    font-family: Roboto;
    color: #333;
  }
  .padding_top_custon_sec1
  {
    padding-top: 6%;
  }
  .box_shadow_card
  {
    box-shadow: 0 2px 8px 0 rgba(99,99,99,.2);
    margin-top: -50px !important;
    border-radius: 10px;
  }
  .font_color_set
  {
    font-size: 18px;
    color: #565656;
  }
  .font_color_red
  {
    font-size: 18px;
    color: rgb(220, 0, 0);
  }
  .strong_tag
  {
    font-size: 38px; 
    color: rgb(51, 51, 51);
  }
  .width_dropdown
  {
    width: 120px !important;
  }
  .p_sec2_landing
  {
    font-size: 14px;
    font-weight: 400;
    font-family: "Roboto",sans-serif;
    line-height: 22px;
    color: #858585;
    padding: 0.5rem 0 1.5rem;
    margin: 5px 0;
  }
  .input_outline_input_field
  {
    font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #6c6c6c;
  border: 0px solid black;
  }
  .input_outline_input_field:focus
  {
    font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #6c6c6c;
  border: 0px solid black;
  }
  .input_outline_input_field::placeholder
  {
    font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #6c6c6c;
  padding-left: 0px;
  }
  .d_s_1
  {
    font-family: Roboto;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #aaa;
  padding-left: 2px;
  }
  .s_f_1
  {
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000;
  }
  .s_f_2
  {
    font-family: Roboto;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #6c6c6c;
  }
  .width_icon_add
  {
    width: 50px;
    height: 50px;
  }
  .font_21
  {
    color: #000;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 163%; /* 26.08px */
  }
  .font_20
  {
    color: #000;
font-family: Poppins;
font-size: 41px;
font-style: normal;
font-weight: 600;
line-height: 116.523%; /* 47.774px */
text-transform: capitalize;
  }
  .font_srze_11
  {
    color: #FFF;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 163%; /* 26.08px */
  }
  .font_set_10
  {
    color: #FFF;
font-family: Poppins;
font-size: 41px;
font-style: normal;
font-weight: 600;
line-height: 116.523%; /* 47.774px */
text-transform: capitalize;
  }
  .padding_removal
  {
    padding-left: 0px;
  }
  .padding_removal1
  {
    padding-right: 0px;
    background: #A67268;
  }
  .background_sec_89
  {
    background-color: #BFA58D;
    padding-top: 5%;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    color: white;
  }
  .background_sec_99
  {
    background-color: #A67268;
    padding-top: 5%;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    color: white;
  }
  .f_family_sec
  {
    color: #FFF;
    text-align: center;
    font-family: Great Vibes;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 118.023%;
  }
  .f_family_sec2
  {
    color: #FFF;
font-family: Poppins;
font-size: 41px;
font-style: normal;
font-weight: 600;
line-height: 116.523%;
text-transform: capitalize;
  }
  .f_familysec_3
  {
    color: #FFF;
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 106.523%; /* 19.174px */
text-transform: capitalize;
  }
  .f_family_sec4
  {
    color: #FFF;
text-align: center;
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 106.523%; /* 19.174px */
text-transform: capitalize;
  }
  .text_size_sec4
  {
    color: #000;
text-align: center;
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 106.523%; /* 25.565px */
text-transform: capitalize;
  }
  .text_size_sec5
  {
    color: #6A6A6A;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 163%;
  }
  .padding_set_left
  {
    padding-left: 160px;
  }
  .padding_set_right
  {
    padding-right: 160px;
    
  }
  .custom_padding_1
  {
    padding-right: 5%;
    padding-left: 5%;
  }
  .font_set_heading_1
  {
    font-family: Roboto;
    font-size: 14px;
    color: white;
    line-height: 163%; 
  }
  .heading_service_page_main
  {
    font-family: 'Great Vibes', cursive;
    font-size: 85px;
    color: white;
  }
  .button_custom_service
  {
    border-radius: 30px;
    background: #F00;
    color: white;
    border: 1px solid #F00;
    padding-top: 1%;
    padding-bottom: 1%;
    padding-left: 2%;
    padding-right: 2%;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .padding_for_sec1
  {
    
    padding-top: 10%;
  }
  .overflow_scrool_service
  {
    overflow-y: scroll !important;
    height: 100vh;
    padding-bottom: 10%;
  }
  .button_setting
  {
    position: absolute;
    bottom: 40px;
    text-align: center;
    padding-left: 7%;
    padding-right: 7%; 
    color: #000;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      left: 30%;

  }
  .button_setting2
  {
    position: absolute;
    bottom: 40px;
    text-align: center;
    padding-left: 7%;
    padding-right: 7%; 
    color: #000;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      left: 40%;

  }
  .background_secc_2
  {
    background-image: url(/imagess/redicons/girl1.png);
    background-size: cover;
    position: relative;
    background-position: center;
    height: 70vh;
    background-repeat: no-repeat;
    border-raius
  }
  .background_secc_3
  {
    background-image: url(/imagess/redicons/girl2.png);
    background-size: cover;
    position: relative;
    background-position: center;
    height: 30vh;
    background-repeat: no-repeat;
  }
  .background_cupon
  {
    background-image: url(/imagess/redicons/cupon.png);
    background-size: 100% 100%;
    background-position: center;
    height: 20vh;
    background-repeat: no-repeat;
  }
  .background_secc_4
  {
    background-image: url(/imagess/redicons/girl3.png);
    background-size: cover;
    position: relative;
    background-position: center;
    height: 37.5vh;
    background-repeat: no-repeat;
  }
  .background_img_sec1
  {
    background-image: url(/imagess/redicons/servicedetail1.png);
    background-size: 100% 100%;
    background-position: center;
    height: 80vh;
    background-repeat: no-repeat;
  }
  .background_img_sec2
  {
    background-image: url(/imagess/redicons/servicedetail2.png);
    background-size: center;
    background-position: center;
    height: 80vh;
    background-repeat: no-repeat;
  }
  .detailpage_h1
  {
    font-family: Roboto;
  font-size: 18px;
  font-weight: 900 !important;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.89;
  letter-spacing: normal;
  color: #000;
  }
  .badge_texture_active
  {
    padding: 4px 8px 3px !important;
  border-radius: 5px !important;
  background-color: #b8d693 !important;
  font-family: Roboto;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: white;
  }
  .badge_texture_pending
  {
    padding: 4px 8px 3px !important;
    border-radius: 5px !important;
    background-color: #e9b67a !important;
    font-family: Roboto;
    font-size: 11px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: white;
    }
  }
  .flex_direction_detail_page
  {
    display: flex;
    flex-direction: row;
  }
  .detailpage_h3
  {
    font-family: Roboto;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: #aaa;
  }
  .detailpage_h2
  {
    font-family: Roboto;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color: #6c6c6c;
  }
  .border_backsground_color
  {
    padding: 15px 5px 15px 15px;
    border-radius: 8px;
    border: solid 0.8px #dcdcdc;
    background-color: white;
  }
  .img_height_width_userdetail
  {
    height: 116px;
    width: 116px;
  }
  .img_height_width_userdetail2
  {
    height: 60px;
    width: 60px;
  }
  .detailpage_h4
  {
    font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: left;
  color: #000;
  }
  .detailpage_h5
  {
    font-family: Roboto;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color: #6c6c6c;
  }
  .detailpage_h6
  {
    font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #444;
  }
  .button_style
  {
    position: absolute;
    margin-top: 8px;
    left: 135px !important;
    z-index: 100000;
    width: 1.4%;
  }
  .button_style1
  {
    position: absolute;
    margin-top: 8px;
    left: 135px !important;
    z-index: 100000;
  }
  .icon_color_every
  {
    color: #BEC3C7;
    font-size: 30px;
  }
  .icon_color_every2
  {
    color: #BEC3C7;
    font-size: 20px;
  }
  .dropdown-toggle
  {
    background-color: #ffffff00 !important;
    border: 0px solid #ffffff00  !important;
    padding: 0px !important;
  }
  .button_danger_one
  {
    padding: 6.5px 15px 6.5px 16px !important;
  border-radius: 6px !important;
  background-color: #ec1e27 !important;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  font-family: Roboto;
  }
  .search_bar_placeholder::placeholder
  {
   color: #ccd2d8;
  }
  .background_card_payment
  {
    background-image: url(/imagess/redicons/card.png);
    background-size: 100% 100%;
    background-position: center;
    border-radius: 15px !important;
  }
  .background_card_payment_default
  {
    background-image: url(/imagess/redicons/card1.png);
    background-size: 100% 100%;
    background-position: center;
    border-radius: 15px !important;
  }
  .input_font_header
  {
    font-family: Roboto;
    font-size: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #aaa;
  }
  .button_set_search
  {
    background-color: white;
    border: 0px solid white;
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #aaa;
  }
  .input_field_text
  {
    font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000;
  padding-left: 0px;
  }
  .outline_of_input_second
  {
    width: 100%;
  padding: 8px 737px 8px 15px;
  border-radius: 8px;
  border: solid 0.8px #dcdcdc;
  background-color: white;
  }
  .card_bank_text
  {
    font-family: Roboto;
  font-size: 18.4px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.37px;
  color: white;
  }
  .card_bank_text1
  {
    font-family: Roboto;
    font-size: 11.4px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 0.23px;
    color: white;
  }
  .digits_cards
  {
    font-family: Roboto;
  font-size: 16.6px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: white;
  }
  .text_expire
  {
    font-family: Roboto;
  font-size: 13.9px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: white;
  }
  .dropdown-toggle::after
  {
    display: none;
  }
  .dropdown-menu
  {
    right: 30px !important;
  }
  .justify_flex
  {
    justify-content: right;
  }

  .width_add_buttons
  {
    width: 5%;
  }
  
  .cards1 {
    background-color: white;
    border: 2px solid rgb(239, 240, 241);
    width: 12%;
    border-radius: 8px;
    padding-top: 1%;
    padding-bottom: 1%;
    margin-top: 1%;
    text-align: center;
  }
  .img_width_cards {
    width: 18%;
  }
  .flex_of_cards {
    display: flex;
    flex-direction: row;
    
  }
  .width_img_contet
  {
    width: 68.5%;
  }

  .london_text_sub1 {
    position: absolute;
    bottom: 20px;
    right: 15px;
    font-family: Roboto;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: #6c6c6c;
  }

  .fix_height_bookings
  {
    height: 85vh;
    overflow-y: scroll;
    padding-bottom: 100px;
    padding-left: 10%;
    padding-right: 10%;
  }


  .outline_of_input
  {
    padding: 10px 10px 10px 10px;
    background-color: white;
    border: 0.8px solid #dcdcdc;
    border-radius: 8px;
  }

  .outline_of_input1
  {
    padding: 8px 10px 10px 10px;
    background-color: white;
    border: 0.8px solid #dcdcdc;
    border-radius: 8px;
  }

  .input_search_selected_service
  {
    background-color: #F9F9F9;
  }

  .border_of_selected_services
  {
    border: 1.7px solid #dcdcdc;
  }

  .background_disabled_button
  {
    background-color: gray !important;
    color: white !important;
  }
  
  .outline_of_input:hover
  {
   border: 1px solid red !important;
  }

  .selection_css
  {
    border: 0.7px solid lightgrey;
    padding: 0.6rem 1rem;
    background-color: white;
  }

  .label_text_add_services
  {
      font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #000;
  }

  .permission_text
  {
 font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #b2bac5;
  }

  .Permission_new
  {
    font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  color: #aaa;
  }

  .heading_services
  {
      font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: left;
  color: #aaa;
  }

  .new_icon_role
  {
    width: 2.9%;
  }

  .font_inner_icon_services
  {
    width: 1.3%;
  }
  .setting_ul_text_font
  {
    font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #000;
  margin-top: 8px;
  }
  .Allow_text
  {
    font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #c2c2c2;
  }
  .i_agree_text
  {
    font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #404145;
  }
  .role_add_new
  {
    font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #ec1e27;
  }

  .services_drop_down
  {
    background-color: white;
    border: 1px solid lightgray;
    padding: 1rem 1rem;
    margin: 0.8rem 0 1rem 0;
    width: 100%;
  }

  .para_text_services
  {
      font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #aaa;
  }

  .font_size_selected_ser
  {
    font-family: Roboto;
font-size: 15px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: #aaa;
}

  .custom_padding1
  {
    padding-left: 6.5%;
    padding-right: 6.5%;
  }

  .heading_landing_page
  {
    color: #656565;
    font-family: Roboto;
    font-weight: 500;
    font-size: 24px;
  }
  .background_banner_1
  {
    background-image: url(/imagess/girl.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size:100% 100%;
    border-radius: 10px;
  }

  .background_banner_2
  {
    background-image: url(/imagess/blue.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size:100% 100%;
    border-radius: 10px;
  }

  .big_offers_text
  {
    color: #000000;
    font-weight: bold;
    font-family: Poppins;
    font-size: 34px;

  }
  .width_ll
  {
    width: 100%;
  }
  .font_size_and_style
  {
    background-color: rgba(255, 0, 0, 0) !important;
    color: white;
    border-radius: 8px;
    font-size: 120%;
  }
  .font_size_and_style:hover
  {
    background-color: rgba(255, 0, 0, 0) !important;
    color: white;
    border-radius: 8px;
    font-size: 120%;
  }
  .color_of_becoming
  {
    color: white;
    font-size: 80%;
  }
  
  .img_dynamic
  {
    width: 208px;
    height: 276px;
    border-radius: 10px;
  }

  .big_offers_text1
  {
    font-family: Poppins;
font-size: 54px;
font-weight: 700;
line-height: 52px;
letter-spacing: 0em;
text-align: left;
color: #FF0000;
  }
  .react-multi-carousel-track
  {
    background-color: none !important;
  }
  .margin_right_set
  {
    padding-right: 20px;
    background-color: white !important;
  }

  .big_offers_des
  {
    color: #FFFFFF !important;
    font-family: Roboto;
    font-weight: 600;
    font-fize: 26px;
  }
.using_flex
{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.card_width_further
{
  background-image: url(/imagess/maskgirl.png);
  border-radius: 15px;
  background-position: center;
  background-repeat: no-repeat;
  background-size:100% 100%;
  height: 276px;
  width: 208px;
  position: relative;
}

.card_heading_text
{
  font-family: Poppins;
font-size: 14px;
font-weight: 400;
line-height: 13px;
letter-spacing: 0em;
text-align: left;
color: #1E1E1E;
}
.card_heading_text2
{
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: left;
  color: #9D9D9D;

}

.text_50
{
  font-family: Poppins;
font-size: 18px;
font-weight: 600;
line-height: 17px;
letter-spacing: 0em;
text-align: left;
color: #3A3A3A;

}
.text_15
{
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: left;
  color: #9D9D9D;  
}
.background_view_all
{
border-radius: 6px
font-family: Roboto;
font-size: 16px;
font-weight: 500;
line-height: 19px;
letter-spacing: 0em;
text-align: center;
color: #666666;
background-color: #EDEDED;
}
.unselected_numbers
{
  font-family: Roboto;
font-size: 20px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
text-align: center;
color: #C6C6C6;
width: 37px
height: 38px
top: 2548px
left: 895px
border-radius: 10px

}
.active_ind
{
height: 38px;
top: 2548px;
left: 895px;
border-radius: 10px;
background-color: #FF6767 !important;
border: none;
}
  .bg_card_ground
  {
   
    height: 355px;
    border-radius: 7px !important;
   position: relative;
   z-index: 10;
   box-shadow: rgba(204, 204, 204, 0.247) 0px 0px 50px;
   
  }
  .img_rad
  {
    border-radius: 7px !important;
    object-fit: cover;
    height: 350px;
  }
.margin_top_negg
{
  margin-top: -122px;
  position: relative;
  z-index: 11;
  padding-bottom: 10px;
  padding-left: 15px !important;
  padding-right: 15px !important;

}
.bg_set_new
{
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 7px;
}
  .bottom_card_inf
  {
 
  border-radius: 7px;
  color: #414141;
  size: 14px;
  background-color: white;
  margin-bottom: 10px
  }
  
  .bottom_card_inf11
  {
  padding-top: 3%;
  padding-left: 6%;
  padding-right: 6%;
  padding-bottom: 3%;
  border-radius: 50px;
  color: #414141;
  size: 14px;
  background-color: rgba(255, 255, 255, 0.9);
  bottom: 0;
  position: absolute;
  z-index: 111;
  width: auto;
  margin-bottom: 10px;
  margin-left: 10px;
  }
  .neg_stars_top
  {
    margin-top: -60px;
    margin-left: 10px;
    margin-bottom: 10px;
  }
  

  .description_of_card
  {
    color: #414141;
    font-family: Poppins;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0.01em;
    text-align: left;

  }

  .check_padding
  {
    padding-top: 5% !important;
    padding-left: 2.5% !important;
    padding-right: 2.5% !important;
    box-shadow: none !important;
    margin-top: 6.5px;
  }
  

  .form-check-input:checked
  {
    background-color: white;
    border: 1px solid #FAC6C8 !important;
    color: red !important;
    
  }
  .form-check-input:checked[type=checkbox]
  {
    background-image: url(/imagess/check1.png) !important;
  }

.check_services_box
{
  accent-color: red;
}

  input[type="password"] {
    font-size: 30px;
  }
  
  .img_style_flag
  {
    border-radius: 50px !important;
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
  .img_style_flag1
  {
    border-radius: 50px !important;
    width: 15px;
    height: 15px;
  }

  .font_style_flag
  {
    font-size: 12px;
    color: #444444;
    padding-left: 5px;
  }

  .backgroundsignup
  {
    background-color: white;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    height: 80vh;
  }
  .icon_line
  {
    color: #444444;
    font-size: 12px;
  }
  

  .img_width_signup
{
  width: 70%;
}
.font_set_terms_conditions
{
  font-size: 12px;
  color: #454c55;
}
.padding_left_right {
  margin-top: 1%;
  padding-left: 10%;
  padding-right: 10%;
}
.font_set_terms_conditions1
{
  font-size: 12px;
  color: #757677;
}

.otp_code_react_input__lt1lr input
{
  background-color: 1px solid green !important;
}




.padding_apply_signup_terms
{
  // padding-top: 5%;
  // padding-left: 10%;
  // padding-right: 10%;
}

.padding_apply_signup_terms1
{
  padding-top: 2%;
  padding-left: 20%;
  padding-right: 20%;
}
.color_light_font
{
  color: lightgray;
}

  .bg_image_signup
  {
    background-image: url("https://1864597015.rsc.cdn77.org/newexpertpreprod/Images/LoginBg.png");
    background-size: cover;
    background-position: 100% 100%;
    background-repeat: no-repeat;
    height: 80vh;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    object-fit: cover !important;
  }



  input{
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal; 
    color: #4a4a4a;
  }
  .react-tel-input .country-list .country{
    text-align:left;
  }
  img {
    max-width: 100%;
  }
  .react-tel-input .flag-dropdown { 
    background-color: #f1f6fa;
    border: 0px solid #cacaca;
    border-radius: 3px 0 0 3px;
  }
  .react-tel-input .form-control {
    background: #f1f6fa;
    border: 0px solid #CACACA;
    border-radius: 5px;
    line-height: 25px;
    height: 35px;
    width: 300px;
    outline: none;
    box-shadow: none !important;
  }
  .react-tel-input .form-control:focus {
    background: #f1f6fa;
    border: 0px solid #CACACA;
    border-radius: 5px;
    line-height: 25px;
    height: 35px;
    width: 300px;
    outline: none;
  }
  .react-tel-input .selected-flag:hover, .react-tel-input .selected-flag:focus {
    background-color: #f1f6fa;
   }
  .react-tel-input .flag-dropdown.open .selected-flag {
    background: #f1f6fa;
    border-radius: 3px 0 0 0;
  }

  input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
     -webkit-appearance: none;
    margin: 0;  
}

.button_style_profile
{
  background-color: #DF1919;
  color: white;
  width: 40%;
  border-radius: 10px;
}

.button_style_profile:hover
{
  background-color: #DF1919;
  color: white;
  width: 40%;
  border-radius: 10px;
}

.header_nav_icons_width
{
  width: 9%;
}

.font_new_one_header
{
  font-family: Poppins;
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #f2a3a3;
  cursor: pointer;
}

.font_new_one_header1
{
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: white;
  cursor: pointer;
}

.logo_width_image
{
  width: 80%
}

.img_tag
{
  width: 50%;
}

.background_button_nav
{
  background-color: white;
  border-radius: 4px;
  border: solid 1px #eee;
}


.background_button_nav_lang
{
  background-color: white;
  border-radius: 4px;
  border: solid 0px #eee;
}

.background_button_nav_lang:hover
{
  background-color: white;
  border-radius: 4px;
  border: solid 0px #eee;
}

.fontcartlang
{
  color: #4a4a4a;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}


.fontcart
{
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}

.sidebar_style
{
  display: block,
  margin: auto,
  width: 35%,
}

.background_color_sidebar
{
  background-color:#DB0406;
  color: white;
  border-radius: 8px;
  cursor: pointer
}

.background_color_sidebar_one
{
  background-color: white;
  color: rgb(74, 74, 74);
  border-radius: 8px;
  cursor: pointer
}
.image_icon_width
{
  width: 10%
}

.border_profile
{
  border: solid 1px #f1f6fa; 
}

.subheading_profile
{
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  text-align: left;
  font-style: normal;
  color: #ccd2d8;
}



.login_text_profile
{
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: left;
  color: #000;
}

.border_for_all_pages
{
  padding: 15px 15px 15px 15px;
  border-radius: 8px;
  border: solid 0.8px #e7eaec;
  background-color: white;
}
.border_for_all_pages1
{
  padding: 15px 15px 15px 15px;
  border-radius: 8px;
  border: solid 0.8px #e7eaec;
  background-color: white;
}
.basic_text
{
  font-family: Roboto;
  font-size: 15px;
  font-weight: regular;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #aaa;
}

.text_for_all_selection
{
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000;
}

.basic_text1
{
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  color: #ccd2d8;
}

.right_icon_style
{
  width: 1.5%
}

.basic_text2
{
  color: black;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
}

.subheading_profile_switch
{
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #b1b4b7;
  
}

.heading_name_profile
{
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #000;
}

.incorrect_format
{
  font-size: 70%;
  color: red;
}
.correct_format
{
  font-size: 70%;
  color: green;
}

// .total_height_dashboard
// {
//   height: 100vh;
// }
.img_width_verified
{
  width: 10%;
}
.font_exp
{
  color: #fff;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}
.heart_icon
{
  width: 4.5%
}

.guest_option
{
  color: #ccd2d8;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}
.style_a_tag11
{
  text-decoration: none;
}
.style_a_tag11::hover
{
  text-decoration: none;
}

.style_a_tag
{
  text-decoration: none;
  color: rgb(74, 74, 74)
}
.style_a_tag:hover
{
  text-decoration: none;
  color: rgb(74, 74, 74)
}

.guest_hello
{
  color: #fff;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}

.height_of_edit_screens
{
  height: 100vh;
}

.css-1d3z3hw-MuiOutlinedInput-notchedOutline
{
  border-radius: 10px !important
}

.img_ava
{
  width: 75%;
}

.img_ava1
{
 width: 25%;
 width: 80px;
 height: 80px;
}

.text_icon_all
{
  font-size: 100%;
  font-weight: 500;
  color: black;
}

.img_width_all_icons
{
  width: 10%
}

.text-color-black
{
  color: black;
}

.color_email
{
  color: lightgray;
}

.downn
{
  width: 2%;
}

#new_drop
{
  width: 300px !important;
}


#dropdown-basic
{
  width: 100%;
  text-align: left !important;
  background-color: white;
}

.display_but
{
  display: flex;
  flex-direction: row;
}
#dropdown-basic:focus
{
  width: 100%;
  text-align: left !important;
  background-color: white;
}

.guest
{
  color: #bbb;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}

.loginreg
{
  color: #4a4a4a;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}

.img_avatar
{
  width: 20%
}

#dropdown-basic::after
{
 display: none;
}

#dropdown-basicc
{
  padding: 0px;
}

#dropdown-basicc::after
{
 display: none;
}

.border_left_new
{
  border-left: solid 1px #eee;
}

.img_cart
{
  width: 30%
}
.padding_custom_industries
{
  padding-left: 7%;
}
.img_globe
{
  width: 50%
}

.input_form_search
{
  background-color: #f1f6fa;
  border: none;
}
.input_form_search:focus
{
  background-color: #f1f6fa;
  border: none;
  box-shadow: none;
  outline: none;
}

.background_color_navigation_one
{
  background-color: #db0406;
}

.background_color_navigation_two
{
  background-color: rgb(214, 22, 20);
  box-shadow: 0 4px 2px -2px lightgray;
}

.background_color_navigation_two1
{
  background-color: rgb(214, 22, 20);
  box-shadow: 0 4px 2px -2px lightgray;
  position: absolute;
  z-index: 100000;
  height: 100vh;
  width: 100%;
  top: 0px;
}

.header_bottom
{
  border-bottom: 1px solid white;
  padding-bottom: 10px;
}
.mobile_img_adj
{
  border-radius: 50%;
  width: 80px;
  height: 75px;
}
.color_text_mobile
{
  color: white;
  font-size: 14px;
}



input[type=number] {
    -moz-appearance:textfield;  
}

.background_line
{
  background-color: #f1f1f1;
  border: 1px solid #f1f1f1;
}
.navigation_mobile
{
  display: none;
}

.email_font_screen
{
  font-size: 80%;
}

.email_font_screen_sub
{
  color: lightgray;
  font-size: 70%;
}

.recovery_text_red
{
  font-size: 70%;
  color: red;
  cursor: pointer;
}

.a_style
{
  text-decoration: none;
}

.text_des_email
{
  font-size: 70%;
  color: lightgray;
}

.text_style_profile
{
  color: #DB0406;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
}

.mobile_responsive_navigation
{
  display: none;
}

//////////////////////////Anas

input[type="file"] {
  display: none;
}
.display_file_upload
{
  // margin-top:10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 2px;
  padding-top: 2px;
  background: rgb(251, 228, 228); 
  border-radius: 5px;
  color: red;
  font-size: 80%;
  
}
.display_file_upload1
{
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 2px;
  padding-top: 25px;
  padding-bottom: 45px;
  display: table;
  border-radius: 10px;
  color: red;
  font-size: 80%;
  width: 100%;
  height: 100%;
  border: 1px solid lightgray;
  
}

.justify_con
{
  display: flex;
    flex-direction: row;
    justify-content: end;
}

.audio_setting
{
  width: 100%;
  border-radius: 0 !important;
 
}

.img_width_bannerg
{
  width: 30%;
}

.btn_style_light
{
  background-color: white;
  border: 1px solid lightgray;
}

.img_fix_banner
{
  height: 60vh;
  border-radius: 10px;
}

.img_width_setting
{
  height: 25vh;
  width: 30vw;
  border-radius: 10px;
}

.icon_red_upload_cloud
{
  font-size: 260%;
  color: #ccd2d8;
}

  }

  input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
     -webkit-appearance: none;
    margin: 0;  
}

input[type=number] {
    -moz-appearance:textfield;  
}
.width_img
{
  width:400%;
}
.border_cards
{
  border: 1px solid lightgray;
  border-radius: 5px;
}

video {
  width: 100% !important;
  height: 100%;
  object-fit: fill;
  z-index: 0;
  border-radius: 10px;
}

.video-container
{
  height: 80vh;
    width: 100%;
    object-fit: fill;
}

.right_margin
{
  left: auto;
}
.display_flexx
{
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;

}

.catagories_width
{
  width: 10%;
}

.border_container
{
  border: 1px solid lightgray;
  border-radius: 10px;
}

.heading_color
{
  color: #444;
  font-size: 80%
}

.img_width_packages
{
  width: 70%;
}
.font_size_2
{
  font-size: 12px;
  color: #ccd2d8;
}

.font_size_4
{
  font-size: 14px;
}

.poly_width
{
  width: 30%;
}

.position_top
{
  margin-top: -28px;
  font-size: 12px;
  color: white;
}
.save_text
{
  font-size: 6px;
}

.border_right
{
  border-right: 1px solid lightgray
}

.text_300
{
  font-size: 8px;
}

.bcakground_color_card
{
  border-radius: 8px;
  background-color: #f5f5f5;
}

.save_text1
{
  color: #292929;
  font-size: 13px;
  font-weight: 600;
}

.get_now_text1
{
  font-size: 12px;
}

.main_heading_service
{
  font-size: 16px;
  font-weight: 600;
  color: #444;
}

.sub_heading_service
{
  font-size: 14px;
  color: #6c6c6c;
}

ul {
  padding-left: 1rem;
}

.font_ul
{
  font-size: 14px;
  color: #4a4a4a;
}

.font_size_3
{
  font-size: 16px;
  color: #444;
}

.display_flexx_services
{
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;
}

.img_width_ind
{
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
}

.box_width
{
  width: 10%;
}

.border_card_ind
{
  border: 1px solid lightgray;
  border-radius: 5px;
  cursor: pointer;
}

.cursor_back
{
  cursor: pointer;
}


new code css -----------------------------------------------------------------------------------------------------------------------------------
.catagories_width
{
  padding-top: 1%;
  padding-bottom: 1%;
}
.card_serices_by_industry_id
{
  overflow-y: hidden;
  background-color: white;
  border-radius: 8px;
  border: solid 1px #dcdcdc;
  }

.img_border
{
  border-top-left-radius: 10px !important;
  border-top-right-radius: 10px !important;
  height: 30vh;
  width: 100%;
}
.title_text_services
{
  font-family: Roboto;
  font-size: 12px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.08;
  letter-spacing: normal;
  text-align: left;
  color: #2b2b2b;

}

.custom_padding_services_pages
{
  padding-left: 6%;
  padding-right: 6%;
  padding-top: 2%;
}
.border_of_youtube
{
  border-radius: 15px;
  border: 1px solid gray;

}
.shadow_youtube
{
  box-shadow: 1px 1px 3px 3px lightgray;
}

.text_change_service
{
  font-size: 120%;
  color: black;
  weight: 550;
}

.circle_rad
{
  width: 60px;
  height: 60px;
  border-radius: 50px;
}

.cursor_property
{
  cursor: pointer;
  border-radius: 8px;
  border: solid 1px #dcdcdc !important;
  margin-bottom: 15px;
}

.sub_text_para
{
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #aaa;
}

.color_danger
{
  background-color: rgb(236, 30, 39) !important;
}

.back_light_button
{
  background-color: rgb(170, 170, 170) !important;
  padding-top: 0.1%;
  padding-bottom: 0.1%;
}
.back_light_button1
{
  background-color: rgb(170, 170, 170) !important;
  padding-top: 0.1%;
  padding-bottom: 0.1%;
  padding-left: 0.8%;
  padding-right: 0.8%;
}

.text_show
{
  font-size: 18px;
  color: #6c6c6c;
  font-family: Roboto;
}
.loading_giff
{
  width: 15%; 
}
.bg_hr_line
{
  border: solid 0.8px #dcdcdc;
  margin-top: 8px;
  margin-bottom: 8px;
}
.provider_summmary_des
{
  font-size: 14x;
  line-height: 40px;
  color: #000000;
  font-family: Roboto;
}
.label_text
{
  font-size: 10px;
  color: rgb(184, 184, 184);
  padding-bottom: 1px;
}
.description_text
{
  font-family: Roboto;
  font-size: 14px;
  color: #000000;
}

.search_new
{
  color: #aaa;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
}

.border_newwww
{
  border-radius: 8px !important;
  border: solid 0.8px #dcdcdc !important;
  padding-left: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 15px;
}

.border_rad_notes
{
  border-radius: 10px;
  border: 1px solid lightgray;
}


.css-i4bv87-MuiSvgIcon-root
{
  color: red !important;
  border-radius: 100px !important;
  padding: 1px !important;
}
.Calendar 
{
  width: 100%;
}
.Calendar__day.-selected, .Calendar__day.-selectedStart, .Calendar__day.-selectedEnd
{
  border-radius: 5px !important;
}
.Calendar__day.-selected, .Calendar__day.-selectedStart, .Calendar__day.-selectedEnd:hover
{
  border-radius: 5px !important;
}

.new_height
{
  height: 48vh;
  overflow-y: scroll;
  border-radius: 10px;
}

.fonts_slots
{
  font-size: 80%;
}

.img-sizig
{
  width: 100px;
  height: 100px;
  border-radius: 50px;
}

.card_design_provider{
  border-radius: 10px;
  border: 1px solid lightgray;
  background-color: white;
}

.font_one_p
{
  font-size: 80%;
  color: black;
  font-weight: 550;
}

.font_one_p1
{
  font-size: 80%;
  color: rgb(178,178,178); 
}

#new_star
{
  font-size: 90%;
  color: rgb(255,152,0);
}

.font_small_p
{
  font-size: 70%;
  color: gray;
}

.color_distance
{
  color: gray;
  font-size: 85%;
}
.color_drop
{
  font-size: 90% !important;
}

.bg_color_white_thankyou
{
  background-color: white;
  border: 1px solid lightgray;
  margin-bottom: 20px;
  border-radius: 10px;
}




...........................code for navigation

.overflow_main_dashboard {
  overflow-x: hidden !important;
  background-color: #F8FAFC;
}

.side_nav_main_1 {
  height: 100vh;
  /* width: 40px !important; */
  background-color: white;
  cursor: pointer;
  box-shadow: 5px 0 9px -2px #88888823;
  position: relative;
  z-index: 111;
}

.height_fiz_menu_active {
  height: 4%;
  background-color: rgb(253, 229, 229);
  border-radius: 10px;
  color: rgb(233, 0, 0);
  margin-top: 50%;
}

.height_fiz_menu {
  margin-top: 50%;
  color: rgb(170, 170, 170);
}

.height_fiz_menu1 {
  padding-top: 20%;
  font-size: 140%;
  color: rgb(170, 170, 170);
}

.nav_news
{
  width: 3%,
  textAlign: center,
  backgroundColor: white,
  boxShadow: 5px 0 9px -2px #88888823,
  cursor: pointer,
  height: 100vh,
  position: "relative",
}

.padding_balance
{
  padding-top: 0.8%;
}

.input_width
{
  width: 100% !important; 
  border: none;
  height: 5vh !important;
  font-family: Font Awesome 5 Free;
    background-image: url(data:image/png;base64,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);
    background-repeat: no-repeat;
    text-indent: 20px;
    background-size: 12px 12px;
    background-position: 10px 13px;
}


.input_width::placeholder
{
  color: lightgray !important;
}

.img_height_width_profile
{
  height: 30px;
  width: 30px;
  border-radius: 50px;
}

.text_user_profile
{
  font-size: 70%;
  color: white;
}

.width_row_header
{
  width: 80%;
}

.border_right
{
  border-right: 1px solid #EDEDED !important;
}

.login_signup
{
  text-decoration: none;
  color: white;
}

.login_signup:hover
{
  text-decoration: none;
  color: white;
}

/////////////////////////
.main_outer_div
{
  background-color: white;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 6px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.111);
  height: 100vh;
  position: relative;
  z-index: 1000;
}

.link_icon_style
{
  text-decoration: none;
  color: gray;
}

.overflow_scrool_dash
{
  overflow-y: hidden !important;
}

.scrool_hide::-webkit-scrollbar
{
display: none;
}

.custom_bottom_all_pages
{
  height: 80vh;
  overflow-y: scroll;
}

.custom_bottom_all_pages::-webkit-scrollbar
{
  display: none;
}

.children_overflow
{
  overflow-y: scroll;
  overflow-x: hidden !important;
  height: 100vh;
  background-color: #f8fafc;
  position: relative;
  z-index: 600;
}

.address_label
{
  font-family: Roboto;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #aaa;
}
#edit_icon
{
  color: lightgray;
  font-size: 80%;
}
.img_set_users
{
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.main_heading_text
{
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: left;
  color: #000;
}
.main_heading_text1
{
  font-family: Roboto;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: left;
  color: #6c6c6c;
}
.main_heading_text2
{
  font-family: Roboto;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: left;
  color: #b1b4b7;
}
.main_heading_text3
{
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: #aaa;
}

.address_label_des
{
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
}

.label_text_profile
{
  font-family: Roboto;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #aaa;
}

.input_profile_all
{
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
}

.input_profile_all_dob
{
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
}

.non_active
{
  color: rgb(170, 170, 170) !important;
}



/////////////////////////Anas

.map_styles
{
  height: 85vh;
  width: 100%;
  marginTop: 1rem;
  borderRadius: 1rem;
}
.search_map
{
  top: 1rem;
  left: 1rem;
  z-index: 1000;
  width: 100%;
}
.display_mob
  {
    display: none;
  }

  .hide_onpc
  {
    display:none;
  }
.positon_relative_sett
{
  position: relative;
  z-index: 122;
}
.position_set_icons_dots
{
  position: absolute;
  z-index: 123;
  top: 70px;
  left: 310px;
}
.button_size_fixed
{
  margin-top: 30%;
}
.button_size_fixed1
{
  margin-top: 30%;
}
.button_for_email_page
{
  margin-top: 20%;
}
.font_normal_email_fields
{
  font-size: 14px;
  color: black;
}
.verify_now
{
  font-size: 12px;
}
.button_size_fixed2
{
  margin-top: 10%;
}
.text_alignment_user_detail
{
  text-align: right;
}
.d_flex_expert_address
{
   display: flex;
   flex-direction: row;
}
.img_width_set_1
{
  width: 40%;
}
.padding_set_left_provider
{
  display: flex;
  flex-direction: row;
  padding-left: 20px !important;
}
.padding_set_left_provider2
{
  padding-left: 30px !important;
}
.padding_set_left_provider3
{
  padding-right: 30px !important;
}
.padding_top_new_button
  {
    margin-top: 20%;
  }
  .margin_bottom_new
  {
    overflow-y: scroll;
    height: 100vh;
    overflow-x: hidden;
    margin-bottom: 300px;
  }
@media only screen and (max-width: 600px) {
  .card_width_further
{
  background-image: url(/imagess/maskgirl.png);
  border-radius: 15px;
  background-position: center;
  background-repeat: no-repeat;
  background-size:100% 100%;
  height: 250px;
  width: 100%;
  position: relative;
}



.card_width_further1
{
  background-image: url(/imagess/maskgirl.png);
  border-radius: 15px;
  background-position: center;
  background-repeat: no-repeat;
  background-size:100% 100%;
  height: 150px;
  width: 100%;
  position: relative;
}

  .margin_bottom_new
  {
    margin-bottom: 50%;
    overflow-y: scroll;
    height: 85vh;
    overflow-x: hidden;
  }
  
  .border_of_selected_services
  {
    font-family: Roboto;
    font-size: 10px;
    margin-top: 10px;
    margin-left: 10px;
  }
  .text_alignment_user_detail
{
  text-align: left;
  padding-top: 4px;
}
  .img_height_width_userdetail2
  {
    height: 50px;
    width: 50px;
  }
  .img_height_width_userdetail
  {
    height: 90px;
    width: 90px;
  }
  .flex_direction_detail_page
  {
    display: flex;
    flex-direction: row;
  }
  
  .button_size_fixed2
{
  margin-top: 100%;
}
  .react-calendar {
    height: auto !important;
    width: 100% !important;
    border-radius: 8px !important;
    border: 1px solid lightgray !important;
  }
  .button_size_fixed1
  {
    margin-top: 180%;
  }
  .font_normal_email_fields
{
  font-size: 12px;
  color: black;
}
  .button_for_email_page
{
  margin-top: 140%;
}
  .button_size_fixed
{
  margin-top: 190%;
}
  .profile_cards
{
  padding: 14px 9px 3px 9px;
  border-radius: 8px;
  border: solid 0.8px #dcdcdc;
  background-color: white;
  font-family: Roboto;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000;
  height: 9vh;
}
.icon_size_cards_in_mobile
{
  width: 25px;
  height: 42px;
}
  .img_mobile_cam
  {
    position: absolute;
    top: 80px;
    right: 110px;
    width: 7%;
  }
  
  .hide_onpc
  {
    display: block;
  }
 
.subheading_profile
{
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  text-align: center;
  font-style: normal;
  color: #ccd2d8;
}
  .border_for_all_pages1
  {
    display: none;
  }
  .img_profile_mobile_setting
  {
    width: 104px;
    height: 104px;
    border-radius: 50%;
  }
  .margin_top_negg
{
  margin-top: -110px;
  position: relative;
  z-index: 11;
  padding-bottom: 30px;

}
  .img_height_width_set
  {
    height: auto;
    border-radius: 20px;
  }
  .display_pc
  {
    display: none;
  }
  .display_mob
  {
    display: block;
  }
 
  .justify_flex
  {
    justify-content: left;
  }
  
  .width_add_buttons
  {
    width: 50px;
  }
  .cards1 {
    background-color: white;
    border: 2px solid rgb(239, 240, 241);
    width: 100%;
    border-radius: 8px;
    padding-top: 5%;
    padding-bottom: 5%;
    margin-top: 1%;
    text-align: center;
  }
  .img_width_cards {
    width: 10%;
  }
  .flex_of_cards {
    display: flex;
    flex-direction: column; 
    width: 100%;
  }
  .text_center_for_mob
  {
    text-align: center;
  }
  .padding_left_right {
    margin-top: 1%;
    padding-left: 3%;
    padding-right: 3%;
  }
  .london_text_sub1 {
    position: relative;
    bottom: 0px;
    right: 15px;
    font-family: Roboto;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: #6c6c6c;
  }
  .fix_height_bookings
  {
    height: 75vh;
    overflow-y: scroll;
    padding-bottom: 100px;
    padding-left: 3%;
    padding-right: 3%;
  }
  .display_none_on_mobile
  {
    display: none;
  }
  .img_logo_mobile_size
  {
    width: 60%;
  }
  .border_white_mobile_navigaton
  {
    border: 0.7px solid white;
    border-radius: 10px;
  }
  .map_styles
{
  height: 60vh;
  width: 100%;
  margin-top: 1rem;
  border-radius: 1rem;
}
.search_map
{
  top: 1rem;
  left: 0rem;
  z-index: 1000;
  width: 100%;
}
.custom_bottom_all_pages
{
  height: 70vh;
  overflow-y: scroll;
}
.new_icon_role
  {
    width: 14%;
  }
  .font_inner_icon_services
  {
    width: 6%;
  }
  .margin_set_bottom
  {
    margin-bottom: 200%;
  }
 

}


@media(max-width:380px){
  .react-tel-input .form-control { 
     width: 228px !important; 
  }
  .react-tel-input {
      width: 100% !important;  
      padding: 10.9px 21px 13px 15px !important;  
  }
}

@media only screen and (max-width: 600px) {
  .navigation_mobile
{
  display: block;
}
.mobile_responsive_navigation
{
  display: block;
}

  .logo_width_image_mobile
  {
    width: 35%;
  }
  .navigation_pc
  {
    display: none;
  }
  .side_nav_hide
  {
    display: none;
  }
 .bg_image_signup
  {
    display: none;
  }
  .backgroundsignup
  {
    background-color: white;
    border-radius: 10px;
    padding-top: 30px;
  }




}


.css-1db085k-MuiSvgIcon-root{
  color:grey !important;
  background-color: white !important;
  border-radius: 100px !important;
  padding: 4px !important;
}
 .rbc-row-content {
  display: none !important;
}
/*.rbc-btn-group{
  display: none !important;
} */
.rbc-toolbar-label{
  font-weight: 600;
  text-align: start;
  padding: 2;
  color: #5599FF;
}
.rbc-time-view{
  border: none !important;
}
.rbc-time-header-content{
  border: none !important;
}
.rbc-time-header-content > .rbc-row.rbc-row-resource{
  border-bottom: 0 !important;

}
.rbc-time-content >  +  > *{
  border-left: 0 !important;
}
/* .rbc-toolbar{
  display: none !important;
} */
.rbc-timeslot-group{
  min-height: 100px !important;
}
.rbc-time-slot{
  height: 100%;

}
.rbc-event{
  border:4px solid white !important;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.rbc-label{
  display: flex;
  text-align: center !important;
  min-width: 85px !important;
  font-weight: 600 !important;
  font-size: 16px !important;
  margin-top: -7px !important;
}
.rbc-events-container{
  min-width: 285px !important;
  margin-right: 2px !important;
  border-right:0.2px solid #666666 !important
}
.rbc-header{
  height: auto !important;
  color: #5599FF;
  font-size: 20px !important;
  display: flex !important;
  justify-content: center;
  align-items: center;
}
.rbc-event-label{
  font-weight: 700;
  display: none !important;
}
.rbc-event{
  font-weight: 600;
}
.rbc-time-view-resources .rbc-header, .rbc-time-view-resources .rbc-day-bg{
  width: 285px !important;
}
.rbc-time-content > .rbc-day-slot{
  min-width: 285px !important;
}

.rbc-time-content::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
	border-radius: 10px;
}

.rbc-time-content::-webkit-scrollbar
{
	width: 10px;
	background-color: #F5F5F5;
}
.rbc-time-content::-webkit-scrollbar-thumb
{
	background-color: #5599FF;
	border-radius: 10px;
	/* background-image: -webkit-linear-gradient(0deg,
	                                          rgba(255, 255, 255, 0.8) 25%,
											  transparent 25%,
											  transparent 50%,
											  rgba(255, 255, 255, 0.8) 50%,
											  rgba(255, 255, 255, 0.8) 75%,
											  transparent 75%,
											  transparent) */
}
.rbc-today{
background-color: transparent !important;
}
.react-datepicker-wrapper{
  width: 40px !important;
  margin-left:-40px !important
}
.react-datepicker__input-container input{

  text-align: center !important;
}
.css-1t1j96h-MuiPaper-root-MuiDialog-paper{
width: 100% !important;
}
.react-datepicker__triangle{
  left: 40px !important;
}
.rbc-toolbar button{
  border: none !important;
font-weight: 500 !important;
}
.rbc-active{
  background-color: #5599FF !important;
  color: white !important;
}
.rbc-btn-group button:hover{
  background-color: rgb(107, 107, 107);
}
.react-datepicker-popper{
  z-index: 99 !important;
  inset:0px auto auto -51px !important
}
.rbc-month-view {
  height: 100vh !important;
}
.rbc-current-time-indicator{
  background-color: #ffffff !important;
  border: 1px solid #FE0000 !important;
  border-radius: 100px ;
  z-index: 99999999999999 !important;
}
.css-bdhsul-MuiTypography-root-MuiDialogTitle-root{
  padding: 0 !important;
}
.css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected{
  color: #5599FF !important;
}
.css-1aquho2-MuiTabs-indicator{
  background-color: #5599FF !important;
}
.css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon{
  display: none !important;
}
.css-74e2me-MuiInputBase-root-MuiInput-root-MuiSelect-root:before{
  border: none !important;
}
.css-13xfq8m-MuiTabPanel-root{
  padding: 0px !important;
}
.css-1rxz5jq-MuiSelect-select-MuiInputBase-input-MuiInput-input.css-1rxz5jq-MuiSelect-select-MuiInputBase-input-MuiInput-input.css-1rxz5jq-MuiSelect-select-MuiInputBase-input-MuiInput-input{
  display: flex;
  align-items: center;
}
.css-19khbc0-MuiInputBase-root-MuiInput-root-MuiSelect-root:before{
  display: none !important;
}
/* .css-l4u8b9-MuiInputBase-root-MuiInput-root:before{
  display: none !important;
} */
.rbc-time-header.rbc-overflowing{
  border: none !important;
}
.rbc-time-view-resources .rbc-time-gutter, .rbc-time-view-resources .rbc-time-header-gutter{
  border: none !important;
}
.rbc-time-content{
  border: none !important;
}
.rbc-time-content > .rbc-time-gutter{
  border-right: 1px solid #ddd !important ;
}
.rbc-event{
  border-radius: 12px !important;
}
.rbc-timeslot-group{
  border: none !important;
}
.rbc-day-slot .rbc-time-slot{
  border-top:1px solid  #e3e3e3 !important;
}
.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after{
  display: none !important;
}
.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before{
  display: none !important;
}

  .pt1 {
     background-color: #343a40 !important;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%239C92AC' fill-opacity='0.25' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"), linear-gradient(to right top, #343a40, #2b2c31, #211f22, #151314, #000000) !important;
  }


  //////////////////////////////////////////////////styles that are imported for bookings page merge

  .border_radius_for_booking_page
  {
    border-radius: 8px;
  }

  .overflow_main_dashboard {
    overflow-x: hidden !important;
    background-color: #F8FAFC;
  }
  
  .side_nav_main_1 {
    height: 100vh;
    /* width: 40px !important; */
    background-color: white;
    cursor: pointer;
    box-shadow: 5px 0 9px -2px #88888823;
    position: relative;
    z-index: 111;
  }
  
  .height_fiz_menu_active {
    height: 4%;
    background-color: rgb(253, 229, 229);
    border-radius: 10px;
    color: rgb(233, 0, 0);
    margin-top: 50%;
  }
  
  .height_fiz_menu {
    margin-top: 50%;
    color: rgb(170, 170, 170);
  }
  
  .height_fiz_menu1 {
    padding-top: 20%;
    font-size: 140%;
    color: rgb(170, 170, 170);
  }
  
  .background_nav1_header {
    background-color: rgb(233, 0, 0);
    padding-top: 1%;
    padding-bottom: 1%;
  }
  
  .side_nav_1_right {
    width: 100%;
  }
  
  .margin_left_m3 {
    margin-left: -60px;
  }
  
  .col6section {
    color: white;
    font-size: 90%;
    font-weight: 550;
  }
  
  .background_sidenav_one {
    background-color: rgb(248, 250, 252);
    overflow-y: hidden !important;
  }
  
  .background_sidenav_two {
    background-color: white;
    padding-top: 5%;
    padding-bottom: 5%;
    border-radius: 6px;
  }
  
  .background_sidenav_two_t {
    background-color: white;
    padding-top: 3%;
    padding-bottom: 3%;
    border-radius: 6px;
  }
  
  .overflow_hidden {
    overflow-y: hidden !important;
  }
  
  .color_bookings {
    color: rgb(97, 97, 101);
  }
  
  .color_bookings2 {
    color: rgb(97, 97, 101);
    font-size: 70%;
    font-weight: 400;
    cursor: pointer;
    letter-spacing: 70%;
  }
  
  .color_bookings2_active {
    color: rgb(64, 64, 67);
    font-size: 70%;
    font-weight: 550;
    border-bottom: 3px solid rgb(233, 0, 0);
    cursor: pointer;
  }
  
  
  .border_of_subheader {
    border-bottom: 3px solid rgb(239, 240, 241);
  }
  
  .color_bookings1 {
    color: rgb(212, 212, 212);
    font-size: 70%;
  }
  
  .img_set_profile {
    height: 30px;
    width: 30px;
    border-radius: 50px;
  }
  
  .img_set_profile_notifications {
    height: 50px !important;
    width: 50px !important;
    border-radius: 50px;
  }
  
  .equal_padding {
    padding-top: 3%;
    padding-bottom: 2%;
  }
  

  
  .background_color_booking_list {
    background-color: white;
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 1%;
    padding-bottom: 1%;
    border: 2px solid rgb(239, 240, 241);
    border-radius: 8px;
    position: relative;
    cursor: pointer;
    margin-top: 1%;
  }
  
  .img_width_listing {
    /* box-shadow: 1px 1px 3px 3px lightgray; */
    border-radius: 50px;
    height: 80px;
    width: 80px;
  }
  
  .london_text {
    font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #aaa;
  }
  
  .london_text_sub {
    font-family: Roboto;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #6c6c6c;
  }
  
 
  
  .color_microlaser {
    font-family: Roboto;
  font-size: 14px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #444;
  }
  
  .font_size_new {
    font-size: 80%;
    color: rgb(177, 178, 179);
  }
  
  .background_bdg {
    background-color: rgb(240, 244, 245);
  
  }
  
  .text {
    display: inline-block;
    position: relative;
  }
  
  .text::after {
    content: "";
    position: absolute;
    bottom: -10%;
    left: 0;
    width: 100%;
    height: 1.5px;
    background-color: red;
    transform-origin: bottom left;
    transform: rotate(-30deg);
  }
  
  .background_badge {
    background-color: lightgray;
    color: black;
  }
  
  .background_bdg_active {
    background-color: rgb(233, 0, 0) !important;
  }
  
  .font_size_new_active {
    font-size: 80%;
    color: white;
  }
  
  .background_bdg_semi_active {
    background-color: rgb(255, 225, 225) !important;
  }
  
  .font_size_new_semi_active {
    font-size: 80%;
    color: black;
  }
  
  .width_expert_logo {
    width: 20%;
  }
  
  .background_card_color {
    background-color: white;
    padding-top: 1%;
    padding-bottom: 1%;
    padding-left: 1%;
    padding-right: 1%;
    border: 2px solid rgb(239, 240, 241);
    border-radius: 8px;
  }
  
  .width_services {
    height: 15vh;
    width: 15vh;
    border-radius: 60px;
  }
  
  .font_badge_success {
    background-color: rgb(184, 214, 147);
    font-weight: 300 !important;
    font-size: 65% !important;
    border-radius: 5px !important;
  }
  
  .font_badge_success_w {
    background-color: rgb(214, 207, 147);
    font-weight: 300 !important;
    font-size: 65% !important;
    border-radius: 5px !important;
  }
  
  .heading_service_mod {
    font-size: 80%;
    color: rgb(170, 168, 168);
  }
  
  .heading_service_mod_sub {
    font-size: 90%;
  }
  
  .padding_manage_service {
    padding-left: 5%;
    padding-right: 5%;
  }
  
  .border_bottom_services {
    border-bottom: 1px solid rgb(203, 201, 201);
  }
  


  .card_placeholder
  {
    box-shadow: none !important; 
    outline: none !important;
  }

  .card_placeholder::placeholder
  {
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  color: #6c6c6c;
  
  }

  .card_placeholder1
  {
    width: 30%;
    border-radius: 0px;
    box-shadow: none !important; 
    outline: none !important;
  }

  .font_size_card_not_valid
  {
    font-family: Roboto;
    font-size: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
  }

  .card_placeholder1::placeholder
  {
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  color: #6c6c6c;
  }

  .card_number_text
  {
    font-family: Roboto;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.83;
    letter-spacing: normal;
    text-align: left;
    color: #aaa;
  }

  .card-input-field
  {
    border-radius: 0px;
    border-left: none;
    border-right: none;
    border-top: none;
    box-shadow: none !important; 
    outline: none !important;
    padding-left: 0px;
  }

  .border_removal
  {
    border-radius: 0px;
    border-left: none;
    border-right: none;
    border-top: none;
    box-shadow: none !important; 
    outline: none !important;
    font-family: Roboto;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  text-align: left;
  color: #6c6c6c;
}
  }

  .card-input-field::placeholder
  {
    font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  text-align: left;
  color: #6c6c6c;
  
  }

  .Sunspots_frankle
  {
    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.89;
    letter-spacing: normal;
    text-align: left;
    color: #000;
  }

  

  

  
  
  
  .font_cards_width {
    font-size: 80%;
  }
  
  .button_style_danger {
    background-color: rgb(233, 0, 0) !important;
    padding-left: 4% !important;
    padding-right: 4% !important;
  }
  
  #bell_ico_size {
    font-size: 150%;
  }
  
  .spansizing {
    background-color: white;
    color: #D62929;
    font-size: 90%;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 0%;
    padding-bottom: 0%;
    border-radius: 50px;
    margin-left: -10px !important;
    margin-top: -10px !important;
    position: absolute;
  }
  
  .setting_pos_bell {
    cursor: pointer;
  }
  
  .drop_down_custom {
    position: absolute;
    z-index: 1000;
    right: 200px;
    width: 20%;
    margin-top: 10px;
    border-radius: 10px;
    padding-top: 1%;
    padding-bottom: 1%;
    background-color: white;
    box-shadow: 1px 1px 7px 7px rgba(211, 211, 211, 0.427);
  }
  
  .active-button-style {
    background-color: rgb(253, 232, 233) !important;
    border: rgb(253, 232, 233) !important;
    color: #D62929 !important;
    font-size: 80% !important;
    padding-left: 6% !important;
    padding-right: 6% !important;
  }
  
  .unactive-button-style {
    background-color: white !important;
    border: 0px solid white !important;
    font-size: 80% !important;
    color: rgb(116, 116, 116) !important;
  }
  
  .onerow_background_unread {
    background-color: rgb(237, 243, 255);
    padding-top: 2%;
    padding-bottom: 2%;
  }
  
  .onerow_background_read {
    background-color: white;
    padding-top: 2%;
    padding-bottom: 2%;
  }
  
  .font_size_notofication_description {
    font-size: 80%;
  }
  
  .font_size_notofication_description1 {
    font-size: 80%;
    color: gray;
  }
  
  .fixed_height_notifications {
    height: 40vh;
    overflow-y: scroll;
  }

  ////////////////////////////////////////////////////////////////////////////////hammad module

  .foryouSlider {
    width: 100%;
    height: 440px;
  }
  .foryouSlider img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
  .foryouSlider video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
  .alignForyouSlider {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .alignForyouHeading {
    margin-left: 90px;
    margin-top: 50px;
    margin-bottom: 23px;
  }

  .heroSlider {
    width: 100%;
    position: relative;
  }
  .heroSlider img {
    width: 100%;
  }
  .alignSearchContainer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .sloganText {
    font-family: "poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #ffffff;
    margin-bottom: 17px;
  }
  .sloganBold {
    font-weight: 600;
  }
  .CompleteInputField {
    width: 511px;
    height: 46px;
    background: #f5f5f5;
    border-radius: 6px;
    display: flex;
    align-items: center;
    margin-bottom: 36px;
  }
  
  .inputField {
    height: 46px;
    width: 450px;
    background-color: transparent;
    border: none;
    padding-left: 10px;
    font-style: normal;
    font-weight: 600;
    opacity: 1;
    font-size: 14px;
    /* color: #bababa; */
  }
  .inputField[type="text"]:focus {
    outline: none;
  }
  
  .VoiceSearchIconBg {
    width: 36px;
    height: 36px;
    background: #df0303;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
  }
  .bigOfferText {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    margin-bottom: 23px;
    color: #000000;
  }
  .discountText {
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    color: #ffffff;
  }
  .getAppBtn {
    width: 173px;
    height: 46px;
    background: #ff6767;
    box-shadow: 0px 9px 18px rgba(255, 118, 118, 0.5);
    border-radius: 6px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 35px;
  }
  .getAppBtn img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
  .categoryAlignContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 140px;
  }
  .itemContainerBox {
    margin: 0 50px;
  }
  .boxAlign {
    width: 80%;
  }
  .textBoxAlign {
    margin-left: 90px;
    margin-top: 30px;
  }
  .productListContainer {
    display: flex;
    align-items: center;
    /* align-items: center; */
    /* justify-content: center; */
    flex-wrap: wrap;
    width: 94%;
    margin: 0 auto;
    /* padding-left: 0.3vw; */
  }
  .productBox {
    /* margin: 0 2.25vw; */
    /* margin-right: 2vw; */
    padding: 0 2vw;
    /* margin-right: vw; */
  }
  .headingAlign {
    margin-left: 90px;
    margin-top: 30px;
  }
  .foryouSlider {
    width: 100%;
  }
  .foryouSlider img {
    width: 100%;
    margin-bottom: 40px;
  }
  .alignForyouSlider {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .alignForyouHeading {
    margin-left: 90px;
    margin-top: 90px;
    margin-bottom: 23px;
  }
  .categoryItemContainer {
    display: flex;
    width: 60px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 36px;
  }
  .categoryItemContainer img {
    width: 51px;
    height: 51px;
    border-radius: 50%;
    margin: 0;
    padding: 0;
  }
  .categoryItemContainer p {
    font-family: "Poppins";
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #5f5f5f;
    margin-top: 20px;
  }
  .headingResuable {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #656565;
  }
  .serviceCardContainer {
    margin-top: 25px;
    margin-bottom: 36px;
    width: 208px;
    /* height: 276px; */
  }
  .imageBox {
    width: 208px;
    height: 276px;
    background: #f6efe5;
    position: relative;
    margin: 0;
    padding: 0;
    border-radius: 12px;
  }
  .imageBox .img {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    object-fit: cover;
  }
  .addToFav {
    position: absolute;
    bottom: 10px;
    left: 10px;
    width: 31.48px;
    height: 31.48px;
    background: #ffffff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .serviceTitle {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-transform: uppercase;
    color: #1e1e1e;
    margin-top: 12px;
    margin-bottom: 5px;
  }
  .serviceInfo {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #9d9d9d;
    margin-bottom: 8px;
  }
  .servicePrice {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #3a3a3a;
  }
  .serviceOFF {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #9d9d9d;
  }
  .trendingServiceCard {
    width: 268.09px;
    height: 355px;
    background: #d9d9d9;
    border-radius: 12px;
    position: relative;
    /* margin-right: 160px; */
    margin-top: 25px;
  }
  .trendingServiceCard img {
    width: 100%;
    border-radius: 12px;
  }
  .serviceInfoCard {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
    bottom: 8px;
    width: 248.45px;
    height: 134.45px;
  
    background: rgba(255, 255, 255, 0.95);
    /* background: red; */
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    padding: 0 12px;
  }
  
  .serviceInfoCard h3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #414141;
    margin-top: 10px;
    margin-bottom: 2px;
  }
  .serviceInfoCard p {
    width: 228.54px;
    height: 72.62px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.01em;
    color: #414141;
  }
  .serviceCardArrow {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-top: 4px;
    cursor: pointer;
  }
  .serviceListingContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .serviceListingBox {
    width: 90%;
    margin-top: 30px;
  }
  .storyBox {
    height: 240px;
    width: 150px;
    border-radius: 10px;
    background-color: aliceblue;
    margin-right: 30px;
    /* position: relative; */
    border-radius: 15px;
  }
  .storyBox img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
  .storyBox .test {
    width: 135px;
    position: absolute;
    bottom: 5px;
    left: 8px;
  }
  
  .storyBox p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-transform: uppercase;
    color: #1e1e1e;
    word-wrap: break-word;
  }
  .storiesContainer {
    /* width: 100%; */
    height: 240px;
    margin-left: 90px;
    margin-bottom: 110px;
  }
  .alignStoriesContainer {
    width: 100%;
    display: flex;
    margin-top: 30px;
  }
  .boxAlign {
    width: 100%;
  }
  .trendingBox {
    margin-top: 40px;
    margin-left: 90px;
    /* margin-right: 20px; */
  }

  #style_icons
  {
   font-size: 15px;
  }

  .button_danger_sidebar
  {
    width: 100%;
    border-radius: 10px;
    background-color: #F6E2E5;
    border: 1px solid #F6E2E5;
    color: rgb(233,0,0);
    padding-top: 20%;
  }



  /* ////////////////////////edit booking  */



.button_fiz {
  padding-top: 1px !important;
  padding-bottom: 1px !important;
  padding-left: 6px !important;
  padding-right: 6px !important;
  background-color: rgb(170, 170, 170) !important;
  font-weight: 200 !important;
  border: 0px solid white !important;
}

.button_fiz1 {
  padding-top: 1px !important;
  padding-bottom: 1px !important;
  padding-left: 2px !important;
  padding-right: 2px !important;
  background-color: rgb(170, 170, 170) !important;
  font-weight: 200 !important;
  border: 0px solid white !important;
}

.img_set {
  width: 60%;
}

.label_font_size {
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.33;
  letter-spacing: normal;
  text-align: left;
  color: #aaa;
}

.font_sub_text {
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.86;
  letter-spacing: normal;
  text-align: left;
  color: #000;
}


.height_fixxed {
  border: 1px solid lightgray;
  border-radius: 8px;
  height: 40vh;
  overflow-y: scroll;
}

.button_color {
  background-color: lightgray !important;
  color: black !important;
  border: 0px solid lightgray !important;
  width: 100%;
  margin-top: 3%;
}

.react-tel-input input
{
  background-color: white !important;
}

.flag-dropdown
{
  background-color: white !important;
}

.background_grid_auth
{
  background-color: #f8fafc !important;
}

.button_color:hover {
  background-color: #D62929 !important;
  color: white !important;
  border: 0px solid lightgray !important;
}

.button_color:focus {
  background-color: #D62929 !important;
  color: white !important;
  border: 0px solid lightgray !important;
}

#style-2::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

#style-2::-webkit-scrollbar {
  width: 8px;
  background-color: #F5F5F5;
}

#style-2::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: #D62929;
}
                    


`;

export default GlobalStyles;
