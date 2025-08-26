const raw = localStorage.getItem("selectedProduct");
const parsed = raw ? JSON.parse(raw) : [];
const orders = Array.isArray(parsed) ? parsed : [parsed];

orders.forEach(o => {
  
    
    title = o.id
    

if (title == 1) {
    document.querySelector('.for_display_tovars').innerHTML=`<div class="for_medium_pizza MuiGrid-root MuiGrid-container css-1d3bbye for_selects_cards">
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-15j76c0 for_selects_card pizza-block" data-id="0"
                        style="margin-top: 35px;">
                        <div class="jss47" style="height: auto; transition: 1s;">
                            <p class="jss48 product-title" style="padding-bottom: 0px;">პროდუქტი 1: საშუალო ზომის პიცა</p>
                            <div style="width: 100%; padding: 20px; position: relative;">
                                <div class="bonus_card" id="selected_card_0">
                                    <img id="bonus_img_0"
                                        src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts" id="bonus_texts_0">
                                            <h2>ტკბილი ჩილის ქათამი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, მწვანე წიწაკა, ხახვი, ტკბილი ჩილის სოუსი
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                        <div onclick="close_choose(0)">
                                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                data-testid="EditIcon" style="cursor: pointer;">
                                                <path
                                                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div onclick="select_choose(0)" class="select_choose" id="select_choose_0">
                                    <p>აირჩიე</p>
                                    <i class='bx bx-chevron-down'></i>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div style="flex: 1 1 0%; padding: 0px;"> </div>
                                </div>
                                <div style="padding: 0px;"></div>
                            </div>
                            <div class="pizza_extra">
                                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                    <div onclick="select_in_menU(0)" style="flex: 1 1 0%; padding: 10px;">
                                        <p class="" style="color: rgb(0, 120, 174); font-size: 16px; cursor: pointer;">
                                            დაამატეთ დამატებითი პარამეტრები</p>
                                    </div>
                                    <div onclick="close_menus(0)" class="close_menu"
                                        style=" align-items: flex-start; cursor: pointer; padding-top: 20px;">
                                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                            data-testid="CloseIcon" style="color: rgb(232, 0, 69);">
                                            <path
                                                d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                            </path>
                                        </svg><span style="margin-left: 5px; color: rgb(232, 0, 69);">დახურვა</span>
                                    </div>
                                </div>
                                <div class="ingredient_cart">
                                <div class="ingre_modal" style="padding: 5px 0px 30px 20px;font-weight: 300;" id="ingredient_cards_0">
                                    </div>
                                </div><div class="ingradients_menu">
                                <div style="padding-bottom: 20px;" class="MuiBox-root css-0">
                                    <div class="MuiBox-root css-0">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">ნაბიჯი 1</h2>
                                                    <p class="">ცომის ტიპი</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 22px;">
                                                        <div
                                                            class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-5.7 MuiGrid-grid-xl-3 css-6yx547">
                                                            <div class="for_vibor  vibor_active">
                                                                <div style="position: absolute; right: 10px;"> <svg
                                                                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-caiwz"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                                <div
                                                                    style="display: flex; justify-content: center; padding-block: 12px; align-items: center;">
                                                                    <div><img
                                                                            src="https://dominosge.s3.eu-central-1.amazonaws.com/thin-dough.webp"
                                                                            alt="Italian Thin"
                                                                            style="width: 95px; height: 45px;"></div>
                                                                </div>
                                                                <div
                                                                    style="display: flex; justify-content: space-between; ">
                                                                    <p class=" fs-12" style="font-weight: 600;">
                                                                        იტალიური თხელი</p><span class=" fs-12"
                                                                        style="font-weight: 600;">+0₾</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-5.7 MuiGrid-grid-xl-3 css-6yx547">
                                                            <div class="for_vibor">
                                                                <div style="position: absolute; right: 10px;"> <svg
                                                                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-caiwz"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                                <div
                                                                    style="display: flex; justify-content: center; padding-block: 12px; align-items: center;">
                                                                    <div><img
                                                                            src="https://dominosge.s3.eu-central-1.amazonaws.com/classic-dough.webp"
                                                                            alt="Hand Tossed"
                                                                            style="width: 95px; height: 45px;"></div>
                                                                </div>
                                                                <div
                                                                    style="display: flex; justify-content: space-between;">
                                                                    <p class=" fs-12" style="font-weight: 600;">
                                                                        ხელით გადაგდებული</p><span class=" fs-12"
                                                                        style="font-weight: 600;">+1.5₾</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="MuiBox-root css-1hnm6b6">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Step 2</h2>
                                                    <p class="">Edge Type</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 22px;">
                                                        <div
                                                            class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-5.7 MuiGrid-grid-lg-3 MuiGrid-grid-xl-3 css-f3bvu0">
                                                            <div
                                                                style="position: relative; border: 2px solid rgb(0, 119, 205); border-radius: 11px; padding: 8px; margin-top: 8px; cursor: pointer;">
                                                                <div style="position: absolute; right: 10px;"> <svg
                                                                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-caiwz"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                                <div
                                                                    style="display: flex; justify-content: center; padding-block: 12px;">
                                                                    <div><img
                                                                            src="https://dominosge.s3.eu-central-1.amazonaws.com/Classic.webp"
                                                                            alt="Classic Edge"
                                                                            style="width: 95px; height: 45px;"></div>
                                                                </div>
                                                                <div
                                                                    style="display: flex; justify-content: space-between; color: rgb(0, 0, 0);">
                                                                    <p class=" fs-12" style="font-weight: 600;">
                                                                        კლასიკური ზღვარი</p><span class=" fs-12"
                                                                        style="font-weight: 600;">+0₾</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="MuiBox-root css-1hnm6b6">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Standard Ingredients</h2>
                                                    <p class=" capitalize">შეგიძლიათ აირჩიოთ მასალა, რომლის ამოღებაც გსურთ</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 22px;">
                                                        <div
                                                            class="for_vibor_2 for_active_2 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp"
                                                                        alt="Mozzarella" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        მოცარელა</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div style="position: absolute; top: 6px; right: 6px;"><svg
                                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                    focusable="false" aria-hidden="true"
                                                                    viewBox="0 0 24 24" data-testid="CheckCircleIcon">
                                                                    <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                    </path>
                                                                </svg></div>
                                                        </div>
                                                        <div
                                                            class="for_vibor_2 for_active_2 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/pizza_sauce.webp"
                                                                        alt="Pizza Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        პიცის სოუსი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div style="position: absolute; top: 6px; right: 6px;"><svg
                                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                    focusable="false" aria-hidden="true"
                                                                    viewBox="0 0 24 24" data-testid="CheckCircleIcon">
                                                                    <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                    </path>
                                                                </svg></div>
                                                        </div>
                                                        <div
                                                            class="for_vibor_2 for_active_2 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/Pepperoni_t.png"
                                                                        alt="Pepperoni" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        პეპერონი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div style="position: absolute; top: 6px; right: 6px;"><svg
                                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                    focusable="false" aria-hidden="true"
                                                                    viewBox="0 0 24 24" data-testid="CheckCircleIcon">
                                                                    <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                    </path>
                                                                </svg></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="MuiBox-root css-1hnm6b6">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Extra Ingredients</h2>
                                                    <p class="">შეგიძლიათ აირჩიოთ მასალა, რომლის დამატებაც გსურთ</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 22px;">
                                                        <div data-title="Corn" data-id="22-1" data-price="+2.5₾"
                                                            class="for_vibor_0 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a"  >
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/cornpng_parspng_com_8.webp"
                                                                        alt="Corn" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        სიმინდი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                            </div>
                                                            <div style="position: absolute; top: 6px; right: 6px;"><svg
                                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                    focusable="false" aria-hidden="true"
                                                                    viewBox="0 0 24 24" data-testid="CheckCircleIcon">
                                                                    <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                    </path>
                                                                </svg></div>
                                                        </div>
                                                        <div data-title="Green Pepper" data-id="22-2" data-price="+2.5₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/green pepper.png"
                                                                        alt="Green Pepper" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        მწვანე წიწაკა</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Chicken" data-id="22-3" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/Chicken_topping.webp"
                                                                        alt="Chicken" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        ქათამი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Halapenio" data-id="22-4" data-price="+2.5₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/jalapeno.png"
                                                                        alt="Halapenio" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        ჰალაპენიო</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Pepperoni" data-id="22-5" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/Pepperoni_t.png"
                                                                        alt="Pepperoni" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        პეპერონი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Mushrooms" data-id="22-6" data-price="+2.5₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/mushroom.png"
                                                                        alt="Mushrooms" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        სოკო</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Onions" data-id="22-7"  data-price="+2.5₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/spanish-onion.webp"
                                                                        alt="Onions" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        ხახვი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Pizza Sauce" data-id="22-8" data-price="+2.5₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/pizza_sauce.webp"
                                                                        alt="Pizza Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        პიცის სოუსი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Fish" data-id="22-9" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/tuna_t.png"
                                                                        alt="Fish" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        თევზი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Feta" data-id="22-10" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/feta.webp"
                                                                        alt="Feta" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        ფეტა</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Mozzarella" data-id="22-11" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp"
                                                                        alt="Mozzarella" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        მოცარელა</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Cheddar" data-id="22-12" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/cheddar.webp"
                                                                        alt="Cheddar" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        ჩედარი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Ham" data-id="22-13" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/ham.webp"
                                                                        alt="Ham" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        ლორი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Tomato" data-id="22-14" data-price="+2.5₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/tomato.png"
                                                                        alt="Tomato" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        პომიდორი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Bacon" data-id="22-15" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/beef.webp"
                                                                        alt="Bacon" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        ბეკონი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Gorgonzola Cheese" data-id="22-16" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/gorgonzola.webp"
                                                                        alt="Gorgonzola Cheese" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        გორგონზოლას ყველი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Black Olive" data-id="22-17" data-price="+2.5₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/black olives.png"
                                                                        alt="Black Olive" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        შავი ზეთისხილი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="MuiBox-root css-1hnm6b6">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Sauce</h2>
                                                    <p class="">შეგიძლიათ აირჩიოთ მასალა, რომლის დამატებაც გსურთ</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 22px;">
                                                        <div data-title="BBQ Sauce" data-price="+2₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/BBQ.webp"
                                                                        alt="BBQ Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        BBQ სოუსი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Ranch Sauce" data-price="+2₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/ranch.webp"
                                                                        alt="Ranch Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        რანჩო ტირიფი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Honey Mustard Sauce" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/20240831224344209_009.webp"
                                                                        alt="Honey Mustard Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        თაფლის მდოგვის სოუსი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Sweet Chilli Sauce" data-price="+2₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/20240831224920676_pizzasauce.webp"
                                                                        alt="Sweet Chilli Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        ტკბილი ჩილის სოუსი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div class="bonus_cards" id="bonus_cards_0">
                                <div data-id="11-2" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/pepperoni_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>პეპერონი</h2>
                                            <p>პიცის სოუსი, მოცარელა, პიცა</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-3" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/margherita_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>მარგარიტა</h2>
                                            <p>პიცის სოუსი, მოცარელა, პომიდორი</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-4" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mushroom_&_ham_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ლორი და სოკო</h2>
                                            <p>პიცის სოუსი, მოცარელა, ლორი, სოკო</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-5" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mexican_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>მექსიკური</h2>
                                            <p>პიცის სოუსი, მოცარელა, პეპერონი, ხალაპენიო, მწვანე წიწაკა, შავი ზეთისხილი, ხახვი</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-6" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/greek_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ბერძენი</h2>
                                            <p>პიცის სოუსი, მოცარელა, მწვანე წიწაკა, შავი ზეთისხილი, ფეტა, პომიდორი</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-7" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/deluxe_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>დელუქსი</h2>
                                            <p>პიცის სოუსი, მოცარელა, სოკო, პეპერონი, ლორი, ხახვი, მწვანე წიწაკა
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-8" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/calipso_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>კალიფსო</h2>
                                            <p>პიცის სოუსი, მოცარელა, თინუსი, ხახვი, სიმინდი, პომიდორი</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-9" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ტკბილი ჩილის ქათამი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, მწვანე წიწაკა, ხახვი, ტკბილი ჩილის სოუსი
                                            </p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-10" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/20240831212119268_HoneyMusterChicken.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>თაფლის მდოგვის ქათამი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, სოკო, თაფლის მდოგვის სოუსი</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-11" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/american_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ამერიკელი</h2>
                                            <p>პიცის სოუსი, მოცარელა, პეპერონი, ბეკონი, სოკო</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-12" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/grilled_chicken.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>შემწვარი ქათამი</h2>
                                            <p>პიცის სოუსი, ქათამი, მოცარელა, სოკო, მწვანილი, წიწაკა, სიმინდი</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-13" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/chicken_BBQ.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ქათმის BBQ</h2>
                                            <p>პიცის სოუსი, მოცარელა, მწვანე წიწაკა, ქათამი, ხახვი, BBQ სოუსი</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-14" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/veggie_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>მცენარეული</h2>
                                            <p>პიცის სოუსი, ხახვი, მწვანე წიწაკა, მოცარელა, შავი ზეთისხილი, სოკო, სიმინდი</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-15" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mix_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>შეურიეთ</h2>
                                            <p>პიცის სოუსი, მოცარელა, ლორი, ბეკონი, მწვანე წიწაკა, ხახვი</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-16" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/4meat_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>4 ხორცი</h2>
                                            <p>პიცის სოუსი, მოცარელა, პეპერონი, ბეკონი, ლორი, საქონლის ძეხვი</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-17" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/extravaganza_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ექსტრავაგანზა</h2>
                                            <p>პიცის სოუსი, ხახვი, მოცარელა, საქონლის ძეხვი, პეპერონი, შავი ზეთისხილი, მწვანე წიწაკა, სოკო, ლორი, სიმინდი</p>
                                        </div>
                                    </div>
                                    <div class="for_red_count">+3.00₾</div>
                                </div>
                                <div data-id="11-18" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/4cheese_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>4 ყველი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ფეტა, ჩედარი, გორგონზოლა</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-19" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/double_pepperoni_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ორმაგი პეპერონი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ორმაგი პეპერონი</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-20" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/domino_s_pizza_Global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>დომინოს პიცა</h2>
                                            <p>პიცის სოუსი, ქათამი, მოცარელა, სოკო, ბეკონი, მწვანე წიწაკა, პომიდორი, პეპერონი, ხახვი</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-21" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/bacon_&_ranch_sauce_global.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ბეკონისა და ქათმის რანჩო</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, პომიდორი, ბეკონი, რანჩის სოუსი</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-15j76c0 for_selects_card pizza-block" data-id="1"
                        style="margin-top: 35px;">
                        <div class="jss47" style="height: auto; transition: 1s;">
                            <p class="jss48 product-title" style="padding-bottom: 0px;">პროდუქტი 2: საშუალო ზომის პიცა</p>
                            <div style="width: 100%; padding: 20px; position: relative;">
                                <div class="bonus_card" id="selected_card_1">
                                    <img id="bonus_img_1"
                                        src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts" id="bonus_texts_1">
                                            <h2>ტკბილი ჩილის ქათამი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, მწვანე წიწაკა, ხახვი, ტკბილი ჩილის სოუსი
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                        <div onclick="close_choose(1)">
                                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                data-testid="EditIcon" style="cursor: pointer;">
                                                <path
                                                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div onclick="select_choose(1)" class="select_choose" id="select_choose_1">
                                    <p>აირჩიე</p>
                                    <i class='bx bx-chevron-down'></i>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div style="flex: 1 1 0%; padding: 0px;"> </div>
                                </div>
                                <div style="padding: 0px;"></div>
                            </div>
                            <div class="pizza_extra">
                                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                    <div onclick="select_in_menU(1)" style="flex: 1 1 0%; padding: 10px;">
                                        <p class="" style="color: rgb(0, 120, 174); font-size: 16px; cursor: pointer;">
                                            დაამატეთ დამატებითი
                                            ოფციები</p>
                                    </div>
                                    <div onclick="close_menus(1)" class="close_menu"
                                        style=" align-items: flex-start; cursor: pointer; padding-top: 20px;">
                                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                            data-testid="CloseIcon" style="color: rgb(232, 0, 69);">
                                            <path
                                                d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                            </path>
                                        </svg><span style="margin-left: 5px; color: rgb(232, 0, 69);">დახურვა</span>
                                    </div>
                                </div>
                                <div class="ingredient_cart">
                                <div class="ingre_modal" style="padding: 5px 0px 30px 20px;font-weight: 300;" id="ingredient_cards_1">
                                    </div>
                                </div><div class="ingradients_menu">
                                <div style="padding-bottom: 20px;" class="MuiBox-root css-0">
                                    <div class="MuiBox-root css-0">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">ნაბიჯი 1</h2>
                                                    <p class="">ცომის ტიპი</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 22px;">
                                                        <div
                                                            class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-5.7 MuiGrid-grid-xl-3 css-6yx547">
                                                            <div class="for_vibor  vibor_active">
                                                                <div style="position: absolute; right: 10px;"> <svg
                                                                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-caiwz"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                                <div
                                                                    style="display: flex; justify-content: center; padding-block: 12px; align-items: center;">
                                                                    <div><img
                                                                            src="https://dominosge.s3.eu-central-1.amazonaws.com/thin-dough.webp"
                                                                            alt="Italian Thin"
                                                                            style="width: 95px; height: 45px;"></div>
                                                                </div>
                                                                <div
                                                                    style="display: flex; justify-content: space-between; ">
                                                                    <p class=" fs-12" style="font-weight: 600;">
                                                                        იტალიური თხელი</p><span class=" fs-12"
                                                                        style="font-weight: 600;">+0₾</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-5.7 MuiGrid-grid-xl-3 css-6yx547">
                                                            <div class="for_vibor">
                                                                <div style="position: absolute; right: 10px;"> <svg
                                                                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-caiwz"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                                <div
                                                                    style="display: flex; justify-content: center; padding-block: 12px; align-items: center;">
                                                                    <div><img
                                                                            src="https://dominosge.s3.eu-central-1.amazonaws.com/classic-dough.webp"
                                                                            alt="Hand Tossed"
                                                                            style="width: 95px; height: 45px;"></div>
                                                                </div>
                                                                <div
                                                                    style="display: flex; justify-content: space-between;">
                                                                    <p class=" fs-12" style="font-weight: 600;">
                                                                        ხელით გადაგდებული</p><span class=" fs-12"
                                                                        style="font-weight: 600;">+1.5₾</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="MuiBox-root css-1hnm6b6">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Step 2</h2>
                                                    <p class="">Edge Type</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 22px;">
                                                        <div
                                                            class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-5.7 MuiGrid-grid-lg-3 MuiGrid-grid-xl-3 css-f3bvu0">
                                                            <div
                                                                style="position: relative; border: 2px solid rgb(0, 119, 205); border-radius: 11px; padding: 8px; margin-top: 8px; cursor: pointer;">
                                                                <div style="position: absolute; right: 10px;"> <svg
                                                                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-caiwz"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                                <div
                                                                    style="display: flex; justify-content: center; padding-block: 12px;">
                                                                    <div><img
                                                                            src="https://dominosge.s3.eu-central-1.amazonaws.com/Classic.webp"
                                                                            alt="Classic Edge"
                                                                            style="width: 95px; height: 45px;"></div>
                                                                </div>
                                                                <div
                                                                    style="display: flex; justify-content: space-between; color: rgb(0, 0, 0);">
                                                                    <p class=" fs-12" style="font-weight: 600;">
                                                                        კლასიკური ზღვარი</p><span class=" fs-12"
                                                                        style="font-weight: 600;">+0₾</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="MuiBox-root css-1hnm6b6">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Standard Ingredients</h2>
                                                    <p class=" capitalize">You Can Select The Material You Want
                                                        To Remove</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 22px;">
                                                        <div
                                                            class="for_vibor_2 for_active_2 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp"
                                                                        alt="Mozzarella" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        მოცარელა</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div style="position: absolute; top: 6px; right: 6px;"><svg
                                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                    focusable="false" aria-hidden="true"
                                                                    viewBox="0 0 24 24" data-testid="CheckCircleIcon">
                                                                    <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                    </path>
                                                                </svg></div>
                                                        </div>
                                                        <div
                                                            class="for_vibor_2 for_active_2 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/pizza_sauce.webp"
                                                                        alt="Pizza Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        პიცის სოუსი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div style="position: absolute; top: 6px; right: 6px;"><svg
                                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                    focusable="false" aria-hidden="true"
                                                                    viewBox="0 0 24 24" data-testid="CheckCircleIcon">
                                                                    <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                    </path>
                                                                </svg></div>
                                                        </div>
                                                        <div
                                                            class="for_vibor_2 for_active_2 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/Pepperoni_t.png"
                                                                        alt="Pepperoni" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        პეპერონი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div style="position: absolute; top: 6px; right: 6px;"><svg
                                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                    focusable="false" aria-hidden="true"
                                                                    viewBox="0 0 24 24" data-testid="CheckCircleIcon">
                                                                    <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                    </path>
                                                                </svg></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="MuiBox-root css-1hnm6b6">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Extra Ingredients</h2>
                                                    <p class="">შეგიძლიათ აირჩიოთ მასალა, რომლის დამატებაც გსურთ</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 22px;">
                                                        <div data-title="Corn" data-id="33-1" data-price="+2.5₾"
                                                            class="for_vibor_1 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a"  >
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/cornpng_parspng_com_8.webp"
                                                                        alt="Corn" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        სიმინდი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                            </div>
                                                            <div style="position: absolute; top: 6px; right: 6px;"><svg
                                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                    focusable="false" aria-hidden="true"
                                                                    viewBox="0 0 24 24" data-testid="CheckCircleIcon">
                                                                    <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                    </path>
                                                                </svg></div>
                                                        </div>
                                                        <div data-title="Green Pepper" data-id="33-2" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/green pepper.png"
                                                                        alt="Green Pepper" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        მწვანე წიწაკა</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Chicken" data-id="33-3" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/Chicken_topping.webp"
                                                                        alt="Chicken" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        ქათამი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Halapenio" data-id="33-4" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/jalapeno.png"
                                                                        alt="Halapenio" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        ჰალაპენიო</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Pepperoni" data-id="33-5" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/Pepperoni_t.png"
                                                                        alt="Pepperoni" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        პეპერონი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Mushrooms" data-id="33-6" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/mushroom.png"
                                                                        alt="Mushrooms" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        სოკო</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Onions" data-id="33-7" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/spanish-onion.webp"
                                                                        alt="Onions" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        ხახვი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Pizza Sauce" data-id="33-8" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/pizza_sauce.webp"
                                                                        alt="Pizza Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        პიცის სოუსი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Fish" data-id="33-9" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/tuna_t.png"
                                                                        alt="Fish" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        თევზი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Feta" data-id="33-10" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/feta.webp"
                                                                        alt="Feta" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        ფეტა</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Mozzarella" data-id="33-11" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp"
                                                                        alt="Mozzarella" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        მოცარელა</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Cheddar" data-id="33-12" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/cheddar.webp"
                                                                        alt="Cheddar" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        ჩედარი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Ham" data-id="33-13" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/ham.webp"
                                                                        alt="Ham" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        ლორი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Tomato" data-id="33-14" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/tomato.png"
                                                                        alt="Tomato" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        პომიდორი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Bacon" data-id="33-15" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/beef.webp"
                                                                        alt="Bacon" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        ბეკონი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Gorgonzola Cheese" data-id="33-16" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/gorgonzola.webp"
                                                                        alt="Gorgonzola Cheese" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        გორგონზოლას ყველი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Black Olive" data-id="33-17" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/black olives.png"
                                                                        alt="Black Olive" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        შავი ზეთისხილი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="MuiBox-root css-1hnm6b6">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Sauce</h2>
                                                    <p class="">შეგიძლიათ აირჩიოთ მასალა, რომლის დამატებაც გსურთ</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 22px;">
                                                        <div data-title="BBQ Sauce" data-price="+2₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/BBQ.webp"
                                                                        alt="BBQ Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        BBQ სოუსი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Ranch Sauce" data-price="+2₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/ranch.webp"
                                                                        alt="Ranch Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        რანჩო ტირიფი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Honey Mustard Sauce" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/20240831224344209_009.webp"
                                                                        alt="Honey Mustard Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        თაფლის მდოგვის სოუსი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Sweet Chilli Sauce" data-price="+2₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/20240831224920676_pizzasauce.webp"
                                                                        alt="Sweet Chilli Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        ტკბილი ჩილის სოუსი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div class="bonus_cards" id="bonus_cards_1">
                                <div data-id="11-22" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/pepperoni_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>პეპერონი</h2>
                                            <p>პიცის სოუსი, მოცარელა, პიცა</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-23" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/margherita_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>მარგარიტა</h2>
                                            <p>პიცის სოუსი, მოცარელა, პომიდორი</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-24" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mushroom_&_ham_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ლორი და სოკო</h2>
                                            <p>პიცის სოუსი, მოცარელა, ლორი, სოკო</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-25" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mexican_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>მექსიკური</h2>
                                            <p>პიცის სოუსი, მოცარელა, პეპერონი, ხალაპენიო, მწვანე წიწაკა, შავი ზეთისხილი, ხახვი</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-26" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/greek_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ბერძენი</h2>
                                            <p>პიცის სოუსი, მოცარელა, მწვანე წიწაკა, შავი ზეთისხილი, ფეტა, პომიდორი</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-27" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/deluxe_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>დელუქსი</h2>
                                            <p>პიცის სოუსი, მოცარელა, სოკო, პეპერონი, ლორი, ხახვი, მწვანე წიწაკა
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-28" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/calipso_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>კალიფსო</h2>
                                            <p>პიცის სოუსი, მოცარელა, თინუსი, ხახვი, სიმინდი, პომიდორი</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-29" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ტკბილი ჩილის ქათამი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, მწვანე წიწაკა, ხახვი, ტკბილი ჩილის სოუსი
                                            </p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-30" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/20240831212119268_HoneyMusterChicken.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>თაფლის მდოგვის ქათამი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, სოკო, თაფლის მდოგვის სოუსი</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-31" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/american_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ამერიკელი</h2>
                                            <p>პიცის სოუსი, მოცარელა, პეპერონი, ბეკონი, სოკო</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-32" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/grilled_chicken.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>შემწვარი ქათამი</h2>
                                            <p>პიცის სოუსი, ქათამი, მოცარელა, სოკო, მწვანილი, წიწაკა, სიმინდი</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-33" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/chicken_BBQ.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ქათმის BBQ</h2>
                                            <p>პიცის სოუსი, მოცარელა, მწვანე წიწაკა, ქათამი, ხახვი, BBQ სოუსი</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-34" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/veggie_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>მცენარეული</h2>
                                            <p>პიცის სოუსი, ხახვი, მწვანე წიწაკა, მოცარელა, შავი ზეთისხილი, სოკო, სიმინდი</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-35" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mix_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>შეურიეთ</h2>
                                            <p>პიცის სოუსი, მოცარელა, ლორი, ბეკონი, მწვანე წიწაკა, ხახვი</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-36" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/4meat_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>4 ხორცი</h2>
                                            <p>პიცის სოუსი, მოცარელა, პეპერონი, ბეკონი, ლორი, საქონლის ძეხვი</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-37" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/extravaganza_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ექსტრავაგანზა</h2>
                                            <p>პიცის სოუსი, ხახვი, მოცარელა, საქონლის ძეხვი, პეპერონი, შავი ზეთისხილი, მწვანე წიწაკა, სოკო, ლორი, სიმინდი</p>
                                        </div>
                                    </div>
                                    <div class="for_red_count">+3.00₾</div>
                                </div>
                                <div data-id="11-38" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/4cheese_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>4 ყველი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ფეტა, ჩედარი, გორგონზოლა</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-39" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/double_pepperoni_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ორმაგი პეპერონი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ორმაგი პეპერონი</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-40" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/domino_s_pizza_Global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>დომინოს პიცა</h2>
                                            <p>პიცის სოუსი, ქათამი, მოცარელა, სოკო, ბეკონი, მწვანე წიწაკა, პომიდორი, პეპერონი, ხახვი</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-41" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/bacon_&_ranch_sauce_global.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ბეკონისა და ქათმის რანჩო</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, პომიდორი, ბეკონი, რანჩის სოუსი</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
}else if(title == 2){
document.querySelector(".for_display_tovars").innerHTML=`<div class="for_bread_souce MuiGrid-root MuiGrid-container css-1d3bbye for_selects_cards">
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-15j76c0 for_selects_card pizza-block" data-id="0"
                        style="margin-top: 35px;">
                        <div class="jss47" style="height: auto; transition: 1s;">
                            <p class="jss48 product-title" style="padding-bottom: 0px;">პროდუქტი 1: პური</p>
                            <div style="width: 100%; padding: 20px; position: relative;">
                                <div class="bonus_card" id="selected_card_0">
                                    <img id="bonus_img_0"
                                        src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts" id="bonus_texts_0">
                                            <h2>ტკბილი ჩილის ქათამი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, მწვანე წიწაკა, ხახვი, ტკბილი ჩილის სოუსი
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                        <div onclick="close_choose(0)">
                                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                data-testid="EditIcon" style="cursor: pointer;">
                                                <path
                                                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div onclick="select_choose(0)" class="select_choose" id="select_choose_0">
                                    <p>აირჩიე</p>
                                    <i class='bx bx-chevron-down'></i>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div style="flex: 1 1 0%; padding: 0px;"> </div>
                                </div>
                                <div style="padding: 0px;"></div>
                            </div>

                            <div class="bonus_cards" id="bonus_cards_0">
                                <div data-id="11-42" class="bonus_card">
                                    <img src="https://dominosge.s3.eu-central-1.amazonaws.com/Cheese-Bread-Bacon-&-Jalapeno.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Cheese Bread (classic)</h2>
                                            <p>Mozzarella and Cheddar</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-43" class="bonus_card">
                                    <img src="https://dominosge.s3.eu-central-1.amazonaws.com/Cheese_Bread_Ham.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Cheese Bread Ham</h2>
                                            <p>Mozzarella, cheddar, ham</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-44" class="bonus_card">
                                    <img src="https://dominosge.s3.eu-central-1.amazonaws.com/Cheese_Bread_Bacon_&_Jalapeno.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Cheese Bread Bacon & Jalapenio</h2>
                                            <p>Mozzarella, cheddar, bacon and jalapeno</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-15j76c0 for_selects_card pizza-block" data-id="1"
                        style="margin-top: 35px;">
                        <div class="jss47" style="height: auto; transition: 1s;">
                            <p class="jss48 product-title" style="padding-bottom: 0px;">პროდუქტი 2: პური</p>
                            <div style="width: 100%; padding: 20px; position: relative;">
                                <div class="bonus_card" id="selected_card_1">
                                    <img id="bonus_img_1"
                                        src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts" id="bonus_texts_1">
                                            <h2>ტკბილი ჩილის ქათამი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, მწვანე წიწაკა, ხახვი, ტკბილი ჩილის სოუსი
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                        <div onclick="close_choose(1)">
                                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                data-testid="EditIcon" style="cursor: pointer;">
                                                <path
                                                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div onclick="select_choose(1)" class="select_choose" id="select_choose_1">
                                    <p>აირჩიე</p>
                                    <i class='bx bx-chevron-down'></i>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div style="flex: 1 1 0%; padding: 0px;"> </div>
                                </div>
                                <div style="padding: 0px;"></div>
                            </div>
                            

                            <div class="bonus_cards" id="bonus_cards_1">
                                <div data-id="11-46" class="bonus_card">
                                    <img src="https://dominosge.s3.eu-central-1.amazonaws.com/Cheese-Bread-Bacon-&-Jalapeno.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Cheese Bread (classic)</h2>
                                            <p>Mozzarella and Cheddar</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-47" class="bonus_card">
                                    <img src="https://dominosge.s3.eu-central-1.amazonaws.com/Cheese_Bread_Ham.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Cheese Bread Ham</h2>
                                            <p>Mozzarella, cheddar, ham</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-48" class="bonus_card">
                                    <img src="https://dominosge.s3.eu-central-1.amazonaws.com/Cheese_Bread_Bacon_&_Jalapeno.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Cheese Bread Bacon & Jalapenio</h2>
                                            <p>Mozzarella, cheddar, bacon and jalapeno</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-15j76c0 for_selects_card pizza-block" data-id="2"
                        style="margin-top: 35px;">
                        <div class="jss47" style="height: auto; transition: 1s;">
                            <p class="jss48 product-title" style="padding-bottom: 0px;">პროდუქტი 3: სოუსი</p>
                            <div style="width: 100%; padding: 20px; position: relative;">
                                <div class="bonus_card" id="selected_card_2">
                                    <img id="bonus_img_2"
                                        src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts" id="bonus_texts_2">
                                            <h2>ტკბილი ჩილის ქათამი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, მწვანე წიწაკა, ხახვი, ტკბილი ჩილის სოუსი
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                        <div onclick="close_choose(2)">
                                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                data-testid="EditIcon" style="cursor: pointer;">
                                                <path
                                                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div onclick="select_choose(2)" class="select_choose" id="select_choose_2">
                                    <p>აირჩიე</p>
                                    <i class='bx bx-chevron-down'></i>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div style="flex: 1 1 0%; padding: 0px;"> </div>
                                </div>
                                <div style="padding: 0px;"></div>
                            </div>

                            <div class="bonus_cards" id="bonus_cards_2">
                                <div data-id="11-50" class="bonus_card">
                                    <img src="https://dominosge.s3.eu-central-1.amazonaws.com/20250319105853125_cheddarsauce.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Cheddar Sauce XL 80gr</h2>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-51" class="bonus_card">
                                    <img src="https://dominosge.s3.eu-central-1.amazonaws.com/20250319110127170_chipotlesauce.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Chipotle Sauce XL 80gr</h2>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
}else if(title == 3){
    document.querySelector(".for_display_tovars").innerHTML=` <div class="for_large_pizza MuiGrid-root MuiGrid-container css-1d3bbye for_selects_cards">
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-15j76c0 for_selects_card pizza-block" data-id="0"
                        style="margin-top: 35px;">
                        <div class="jss47" style="height: auto; transition: 1s;">
                            <p class="jss48 product-title" style="padding-bottom: 0px;">პროდუქტი 1: დიდი პიცა</p>
                            <div style="width: 100%; padding: 20px; position: relative;">
                                <div class="bonus_card" id="selected_card_0">
                                    <img id="bonus_img_0"
                                        src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts" id="bonus_texts_0">
                                            <h2>ტკბილი ჩილის ქათამი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, მწვანე წიწაკა, ხახვი, ტკბილი ჩილის სოუსი
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                        <div onclick="close_choose(0)">
                                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                data-testid="EditIcon" style="cursor: pointer;">
                                                <path
                                                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div onclick="select_choose(0)" class="select_choose" id="select_choose_0">
                                    <p>აირჩიე</p>
                                    <i class='bx bx-chevron-down'></i>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div style="flex: 1 1 0%; padding: 0px;"> </div>
                                </div>
                                <div style="padding: 0px;"></div>
                            </div>
                            <div class="pizza_extra">
                                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                    <div onclick="select_in_menU(0)" style="flex: 1 1 0%; padding: 10px;">
                                        <p class="" style="color: rgb(0, 120, 174); font-size: 16px; cursor: pointer;">
                                            დაამატეთ დამატებითი
                                            ოფციები</p>
                                    </div>
                                    <div onclick="close_menus(0)" class="close_menu"
                                        style=" align-items: flex-start; cursor: pointer; padding-top: 20px;">
                                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                            data-testid="CloseIcon" style="color: rgb(232, 0, 69);">
                                            <path
                                                d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                            </path>
                                        </svg><span style="margin-left: 5px; color: rgb(232, 0, 69);">დახურვა</span>
                                    </div>
                                </div>
                                <div class="ingredient_cart">
                                <div class="ingre_modal" style="padding: 5px 0px 30px 20px;font-weight: 300;" id="ingredient_cards_0">
                                    </div>
                                </div><div class="ingradients_menu">
                                <div style="padding-bottom: 20px;" class="MuiBox-root css-0">
                                    <div class="MuiBox-root css-0">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">ნაბიჯი 1</h2>
                                                    <p class="">ცომის ტიპი</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 22px;">
                                                        <div
                                                            class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-5.7 MuiGrid-grid-xl-3 css-6yx547">
                                                            <div class="for_vibor  vibor_active">
                                                                <div style="position: absolute; right: 10px;"> <svg
                                                                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-caiwz"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                                <div
                                                                    style="display: flex; justify-content: center; padding-block: 12px; align-items: center;">
                                                                    <div><img
                                                                            src="https://dominosge.s3.eu-central-1.amazonaws.com/thin-dough.webp"
                                                                            alt="Italian Thin"
                                                                            style="width: 95px; height: 45px;"></div>
                                                                </div>
                                                                <div
                                                                    style="display: flex; justify-content: space-between; ">
                                                                    <p class=" fs-12" style="font-weight: 600;">
                                                                        იტალიური თხელი</p><span class=" fs-12"
                                                                        style="font-weight: 600;">+0₾</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-5.7 MuiGrid-grid-xl-3 css-6yx547">
                                                            <div class="for_vibor">
                                                                <div style="position: absolute; right: 10px;"> <svg
                                                                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-caiwz"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                                <div
                                                                    style="display: flex; justify-content: center; padding-block: 12px; align-items: center;">
                                                                    <div><img
                                                                            src="https://dominosge.s3.eu-central-1.amazonaws.com/classic-dough.webp"
                                                                            alt="Hand Tossed"
                                                                            style="width: 95px; height: 45px;"></div>
                                                                </div>
                                                                <div
                                                                    style="display: flex; justify-content: space-between;">
                                                                    <p class=" fs-12" style="font-weight: 600;">
                                                                        ხელით გადაგდებული</p><span class=" fs-12"
                                                                        style="font-weight: 600;">+2₾</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="MuiBox-root css-1hnm6b6">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Step 2</h2>
                                                    <p class="">Edge Type</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 22px;">
                                                        <div
                                                            class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-5.7 MuiGrid-grid-lg-3 MuiGrid-grid-xl-3 css-f3bvu0">
                                                            <div
                                                                style="position: relative; border: 2px solid rgb(0, 119, 205); border-radius: 11px; padding: 8px; margin-top: 8px; cursor: pointer;">
                                                                <div style="position: absolute; right: 10px;"> <svg
                                                                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-caiwz"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                                <div
                                                                    style="display: flex; justify-content: center; padding-block: 12px;">
                                                                    <div><img
                                                                            src="https://dominosge.s3.eu-central-1.amazonaws.com/Classic.webp"
                                                                            alt="Classic Edge"
                                                                            style="width: 95px; height: 45px;"></div>
                                                                </div>
                                                                <div
                                                                    style="display: flex; justify-content: space-between; color: rgb(0, 0, 0);">
                                                                    <p class=" fs-12" style="font-weight: 600;">
                                                                        კლასიკური ზღვარი</p><span class=" fs-12"
                                                                        style="font-weight: 600;">+0₾</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="MuiBox-root css-1hnm6b6">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Standard Ingredients</h2>
                                                    <p class=" capitalize">You Can Select The Material You Want
                                                        To Remove</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 22px;">
                                                        <div
                                                            class="for_vibor_2 for_active_2 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp"
                                                                        alt="Mozzarella" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        მოცარელა</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div style="position: absolute; top: 6px; right: 6px;"><svg
                                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                    focusable="false" aria-hidden="true"
                                                                    viewBox="0 0 24 24" data-testid="CheckCircleIcon">
                                                                    <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                    </path>
                                                                </svg></div>
                                                        </div>
                                                        <div
                                                            class="for_vibor_2 for_active_2 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/pizza_sauce.webp"
                                                                        alt="Pizza Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        პიცის სოუსი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div style="position: absolute; top: 6px; right: 6px;"><svg
                                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                    focusable="false" aria-hidden="true"
                                                                    viewBox="0 0 24 24" data-testid="CheckCircleIcon">
                                                                    <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                    </path>
                                                                </svg></div>
                                                        </div>
                                                        <div
                                                            class="for_vibor_2 for_active_2 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/Pepperoni_t.png"
                                                                        alt="Pepperoni" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        პეპერონი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div style="position: absolute; top: 6px; right: 6px;"><svg
                                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                    focusable="false" aria-hidden="true"
                                                                    viewBox="0 0 24 24" data-testid="CheckCircleIcon">
                                                                    <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                    </path>
                                                                </svg></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="MuiBox-root css-1hnm6b6">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Extra Ingredients</h2>
                                                    <p class="">შეგიძლიათ აირჩიოთ მასალა, რომლის დამატებაც გსურთ</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 22px;">
                                                        <div data-title="Corn" data-id="44-1" data-price="+2.5₾"
                                                            class="for_vibor_0 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a"  >
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/cornpng_parspng_com_8.webp"
                                                                        alt="Corn" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        სიმინდი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                            </div>
                                                            <div style="position: absolute; top: 6px; right: 6px;"><svg
                                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                    focusable="false" aria-hidden="true"
                                                                    viewBox="0 0 24 24" data-testid="CheckCircleIcon">
                                                                    <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                    </path>
                                                                </svg></div>
                                                        </div>
                                                        <div data-title="Green Pepper" data-id="44-2" data-price="+2.5₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/green pepper.png"
                                                                        alt="Green Pepper" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        მწვანე წიწაკა</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Chicken" data-id="44-3" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/Chicken_topping.webp"
                                                                        alt="Chicken" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        ქათამი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Halapenio" data-id="44-4" data-price="+2.5₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/jalapeno.png"
                                                                        alt="Halapenio" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        ჰალაპენიო</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Pepperoni" data-id="44-5" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/Pepperoni_t.png"
                                                                        alt="Pepperoni" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        პეპერონი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Mushrooms" data-id="44-6" data-price="+2.5₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/mushroom.png"
                                                                        alt="Mushrooms" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        სოკო</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Onions" data-id="44-7" data-price="+2.5₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/spanish-onion.webp"
                                                                        alt="Onions" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        ხახვი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Pizza Sauce" data-id="44-8" data-price="+2.5₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/pizza_sauce.webp"
                                                                        alt="Pizza Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        პიცის სოუსი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Fish" data-id="44-9" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/tuna_t.png"
                                                                        alt="Fish" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        თევზი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Feta" data-id="44-10" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/feta.webp"
                                                                        alt="Feta" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        ფეტა</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Mozzarella" data-id="44-11" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp"
                                                                        alt="Mozzarella" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        მოცარელა</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Cheddar" data-id="44-12" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/cheddar.webp"
                                                                        alt="Cheddar" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        ჩედარი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Ham" data-id="44-13" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/ham.webp"
                                                                        alt="Ham" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        ლორი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Tomato" data-id="44-14" data-price="+2.5₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/tomato.png"
                                                                        alt="Tomato" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        პომიდორი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Bacon" data-id="44-15" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/beef.webp"
                                                                        alt="Bacon" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        ბეკონი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Gorgonzola Cheese" data-id="44-16" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/gorgonzola.webp"
                                                                        alt="Gorgonzola Cheese" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        გორგონზოლას ყველი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Black Olive" data-id="44-17" data-price="+2.5₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/black olives.png"
                                                                        alt="Black Olive" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        შავი ზეთისხილი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="MuiBox-root css-1hnm6b6">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Sauce</h2>
                                                    <p class="">შეგიძლიათ აირჩიოთ მასალა, რომლის დამატებაც გსურთ</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 22px;">
                                                        <div data-title="BBQ Sauce" data-price="+2₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/BBQ.webp"
                                                                        alt="BBQ Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        BBQ სოუსი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Ranch Sauce" data-price="+2₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/ranch.webp"
                                                                        alt="Ranch Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        რანჩო ტირიფი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Honey Mustard Sauce" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/20240831224344209_009.webp"
                                                                        alt="Honey Mustard Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        თაფლის მდოგვის სოუსი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Sweet Chilli Sauce" data-price="+2₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/20240831224920676_pizzasauce.webp"
                                                                        alt="Sweet Chilli Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        ტკბილი ჩილის სოუსი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div class="bonus_cards" id="bonus_cards_0">
                                <div data-id="11-52" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/deluxe_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>დელუქსი</h2>
                                            <p>პიცის სოუსი, მოცარელა, სოკო, პეპერონი, ლორი, ხახვი, მწვანე წიწაკა
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-53" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/calipso_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>კალიფსო</h2>
                                            <p>პიცის სოუსი, მოცარელა, თინუსი, ხახვი, სიმინდი, პომიდორი</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-54" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/pepperoni_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>პეპერონი</h2>
                                            <p>პიცის სოუსი, მოცარელა, პიცა</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-55" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/margherita_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>მარგარიტა</h2>
                                            <p>პიცის სოუსი, მოცარელა, პომიდორი</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-56" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mushroom_&_ham_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ლორი და სოკო</h2>
                                            <p>პიცის სოუსი, მოცარელა, ლორი, სოკო</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-57" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mexican_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>მექსიკური</h2>
                                            <p>პიცის სოუსი, მოცარელა, პეპერონი, ხალაპენიო, მწვანე წიწაკა, შავი ზეთისხილი, ხახვი</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-58" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/greek_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ბერძენი</h2>
                                            <p>პიცის სოუსი, მოცარელა, მწვანე წიწაკა, შავი ზეთისხილი, ფეტა, პომიდორი</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-59" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/american_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ამერიკელი</h2>
                                            <p>პიცის სოუსი, მოცარელა, პეპერონი, ბეკონი, სოკო</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-60" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/chicken_BBQ.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ქათმის BBQ</h2>
                                            <p>პიცის სოუსი, მოცარელა, მწვანე წიწაკა, ქათამი, ხახვი, BBQ სოუსი</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-61" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/veggie_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>მცენარეული</h2>
                                            <p>პიცის სოუსი, ხახვი, მწვანე წიწაკა, მოცარელა, შავი ზეთისხილი, სოკო, სიმინდი</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-62" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mix_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>შეურიეთ</h2>
                                            <p>პიცის სოუსი, მოცარელა, ლორი, ბეკონი, მწვანე წიწაკა, ხახვი</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-63" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/4meat_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>4 ხორცი</h2>
                                            <p>პიცის სოუსი, მოცარელა, პეპერონი, ბეკონი, ლორი, საქონლის ძეხვი</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-64" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/extravaganza_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ექსტრავაგანზა</h2>
                                            <p>პიცის სოუსი, ხახვი, მოცარელა, საქონლის ძეხვი, პეპერონი, შავი ზეთისხილი, მწვანე წიწაკა, სოკო, ლორი, სიმინდი</p>
                                        </div>
                                    </div>
                                    <div class="for_red_count">+4.00₾</div>
                                </div>
                                <div data-id="11-65" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ტკბილი ჩილის ქათამი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, მწვანე წიწაკა, ხახვი, ტკბილი ჩილის სოუსი
                                            </p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-66" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/20240831212119268_HoneyMusterChicken.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>თაფლის მდოგვის ქათამი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, სოკო, თაფლის მდოგვის სოუსი</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-67" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/grilled_chicken.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>შემწვარი ქათამი</h2>
                                            <p>პიცის სოუსი, ქათამი, მოცარელა, სოკო, მწვანილი, წიწაკა, სიმინდი</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-68" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/double_pepperoni_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ორმაგი პეპერონი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ორმაგი პეპერონი</p>
                                        </div>
                                        <div class="for_red_count">+6.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-69" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/domino_s_pizza_Global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>დომინოს პიცა</h2>
                                            <p>პიცის სოუსი, ქათამი, მოცარელა, სოკო, ბეკონი, მწვანე წიწაკა, პომიდორი, პეპერონი, ხახვი</p>
                                        </div>
                                        <div class="for_red_count">+6.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-70" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/bacon_&_ranch_sauce_global.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ბეკონისა და ქათმის რანჩო</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, პომიდორი, ბეკონი, რანჩის სოუსი</p>
                                        </div>
                                        <div class="for_red_count">+6.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-71" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/4cheese_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>4 ყველი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ფეტა, ჩედარი, გორგონზოლა</p>
                                        </div>
                                        <div class="for_red_count">+6.00₾</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-15j76c0 for_selects_card pizza-block" data-id="1"
                        style="margin-top: 35px;">
                        <div class="jss47" style="height: auto; transition: 1s;">
                            <p class="jss48 product-title" style="padding-bottom: 0px;">პროდუქტი 2: დიდი პიცა</p>
                            <div style="width: 100%; padding: 20px; position: relative;">
                                <div class="bonus_card" id="selected_card_1">
                                    <img id="bonus_img_1"
                                        src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts" id="bonus_texts_1">
                                            <h2>ტკბილი ჩილის ქათამი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, მწვანე წიწაკა, ხახვი, ტკბილი ჩილის სოუსი
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                        <div onclick="close_choose(1)">
                                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                data-testid="EditIcon" style="cursor: pointer;">
                                                <path
                                                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div onclick="select_choose(1)" class="select_choose" id="select_choose_1">
                                    <p>აირჩიე</p>
                                    <i class='bx bx-chevron-down'></i>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div style="flex: 1 1 0%; padding: 0px;"> </div>
                                </div>
                                <div style="padding: 0px;"></div>
                            </div>
                            <div class="pizza_extra">
                                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                    <div onclick="select_in_menU(1)" style="flex: 1 1 0%; padding: 10px;">
                                        <p class="" style="color: rgb(0, 120, 174); font-size: 16px; cursor: pointer;">
                                            დაამატეთ დამატებითი
                                            ოფციები</p>
                                    </div>
                                    <div onclick="close_menus(1)" class="close_menu"
                                        style=" align-items: flex-start; cursor: pointer; padding-top: 20px;">
                                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                            data-testid="CloseIcon" style="color: rgb(232, 0, 69);">
                                            <path
                                                d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                            </path>
                                        </svg><span style="margin-left: 5px; color: rgb(232, 0, 69);">დახურვა</span>
                                    </div>
                                </div>
                                <div class="ingredient_cart">
                                <div class="ingre_modal" style="padding: 5px 0px 30px 20px;font-weight: 300;" id="ingredient_cards_1">
                                    </div>
                                </div><div class="ingradients_menu">
                                <div style="padding-bottom: 20px;" class="MuiBox-root css-0">
                                    <div class="MuiBox-root css-0">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">ნაბიჯი 1</h2>
                                                    <p class="">ცომის ტიპი</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 22px;">
                                                        <div
                                                            class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-5.7 MuiGrid-grid-xl-3 css-6yx547">
                                                            <div class="for_vibor  vibor_active">
                                                                <div style="position: absolute; right: 10px;"> <svg
                                                                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-caiwz"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                                <div
                                                                    style="display: flex; justify-content: center; padding-block: 12px; align-items: center;">
                                                                    <div><img
                                                                            src="https://dominosge.s3.eu-central-1.amazonaws.com/thin-dough.webp"
                                                                            alt="Italian Thin"
                                                                            style="width: 95px; height: 45px;"></div>
                                                                </div>
                                                                <div
                                                                    style="display: flex; justify-content: space-between; ">
                                                                    <p class=" fs-12" style="font-weight: 600;">
                                                                        იტალიური თხელი</p><span class=" fs-12"
                                                                        style="font-weight: 600;">+0₾</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-5.7 MuiGrid-grid-xl-3 css-6yx547">
                                                            <div class="for_vibor">
                                                                <div style="position: absolute; right: 10px;"> <svg
                                                                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-caiwz"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                                <div
                                                                    style="display: flex; justify-content: center; padding-block: 12px; align-items: center;">
                                                                    <div><img
                                                                            src="https://dominosge.s3.eu-central-1.amazonaws.com/classic-dough.webp"
                                                                            alt="Hand Tossed"
                                                                            style="width: 95px; height: 45px;"></div>
                                                                </div>
                                                                <div
                                                                    style="display: flex; justify-content: space-between;">
                                                                    <p class=" fs-12" style="font-weight: 600;">
                                                                        ხელით გადაგდებული</p><span class=" fs-12"
                                                                        style="font-weight: 600;">+2₾</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="MuiBox-root css-1hnm6b6">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Step 2</h2>
                                                    <p class="">Edge Type</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 22px;">
                                                        <div
                                                            class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-5.7 MuiGrid-grid-lg-3 MuiGrid-grid-xl-3 css-f3bvu0">
                                                            <div
                                                                style="position: relative; border: 2px solid rgb(0, 119, 205); border-radius: 11px; padding: 8px; margin-top: 8px; cursor: pointer;">
                                                                <div style="position: absolute; right: 10px;"> <svg
                                                                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-caiwz"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                                <div
                                                                    style="display: flex; justify-content: center; padding-block: 12px;">
                                                                    <div><img
                                                                            src="https://dominosge.s3.eu-central-1.amazonaws.com/Classic.webp"
                                                                            alt="Classic Edge"
                                                                            style="width: 95px; height: 45px;"></div>
                                                                </div>
                                                                <div
                                                                    style="display: flex; justify-content: space-between; color: rgb(0, 0, 0);">
                                                                    <p class=" fs-12" style="font-weight: 600;">
                                                                        კლასიკური ზღვარი</p><span class=" fs-12"
                                                                        style="font-weight: 600;">+0₾</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="MuiBox-root css-1hnm6b6">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Standard Ingredients</h2>
                                                    <p class=" capitalize">You Can Select The Material You Want
                                                        To Remove</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 22px;">
                                                        <div
                                                            class="for_vibor_2 for_active_2 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp"
                                                                        alt="Mozzarella" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        მოცარელა</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div style="position: absolute; top: 6px; right: 6px;"><svg
                                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                    focusable="false" aria-hidden="true"
                                                                    viewBox="0 0 24 24" data-testid="CheckCircleIcon">
                                                                    <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                    </path>
                                                                </svg></div>
                                                        </div>
                                                        <div
                                                            class="for_vibor_2 for_active_2 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/pizza_sauce.webp"
                                                                        alt="Pizza Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        პიცის სოუსი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div style="position: absolute; top: 6px; right: 6px;"><svg
                                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                    focusable="false" aria-hidden="true"
                                                                    viewBox="0 0 24 24" data-testid="CheckCircleIcon">
                                                                    <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                    </path>
                                                                </svg></div>
                                                        </div>
                                                        <div
                                                            class="for_vibor_2 for_active_2 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/Pepperoni_t.png"
                                                                        alt="Pepperoni" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        პეპერონი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div style="position: absolute; top: 6px; right: 6px;"><svg
                                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                    focusable="false" aria-hidden="true"
                                                                    viewBox="0 0 24 24" data-testid="CheckCircleIcon">
                                                                    <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                    </path>
                                                                </svg></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="MuiBox-root css-1hnm6b6">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Extra Ingredients</h2>
                                                    <p class="">შეგიძლიათ აირჩიოთ მასალა, რომლის დამატებაც გსურთ</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 22px;">
                                                        <div data-title="Corn" data-id="55-1" data-price="+2.5₾"
                                                            class="for_vibor_1 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a"  >
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/cornpng_parspng_com_8.webp"
                                                                        alt="Corn" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        სიმინდი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                            </div>
                                                            <div style="position: absolute; top: 6px; right: 6px;"><svg
                                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                    focusable="false" aria-hidden="true"
                                                                    viewBox="0 0 24 24" data-testid="CheckCircleIcon">
                                                                    <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                    </path>
                                                                </svg></div>
                                                        </div>
                                                        <div data-title="Green Pepper" data-id="55-2" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/green pepper.png"
                                                                        alt="Green Pepper" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        მწვანე წიწაკა</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Chicken" data-id="55-3" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/Chicken_topping.webp"
                                                                        alt="Chicken" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        ქათამი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Halapenio" data-id="55-4" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/jalapeno.png"
                                                                        alt="Halapenio" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        ჰალაპენიო</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Pepperoni" data-id="55-5" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/Pepperoni_t.png"
                                                                        alt="Pepperoni" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        პეპერონი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Mushrooms" data-id="55-6" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/mushroom.png"
                                                                        alt="Mushrooms" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        სოკო</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Onions" data-id="55-7" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/spanish-onion.webp"
                                                                        alt="Onions" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        ხახვი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Pizza Sauce" data-id="55-8" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/pizza_sauce.webp"
                                                                        alt="Pizza Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        პიცის სოუსი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Fish" data-id="55-9" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/tuna_t.png"
                                                                        alt="Fish" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        თევზი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Feta" data-id="55-10" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/feta.webp"
                                                                        alt="Feta" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        ფეტა</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Mozzarella" data-id="55-11" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp"
                                                                        alt="Mozzarella" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        მოცარელა</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Cheddar" data-id="55-12" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/cheddar.webp"
                                                                        alt="Cheddar" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        ჩედარი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Ham" data-id="55-13" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/ham.webp"
                                                                        alt="Ham" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        ლორი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Tomato" data-id="55-14" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/tomato.png"
                                                                        alt="Tomato" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        პომიდორი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Bacon" data-id="55-15" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/beef.webp"
                                                                        alt="Bacon" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        ბეკონი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Gorgonzola Cheese" data-id="55-16" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/gorgonzola.webp"
                                                                        alt="Gorgonzola Cheese" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        გორგონზოლას ყველი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Black Olive" data-id="55-17" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/black olives.png"
                                                                        alt="Black Olive" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        შავი ზეთისხილი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="MuiBox-root css-1hnm6b6">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Sauce</h2>
                                                    <p class="">შეგიძლიათ აირჩიოთ მასალა, რომლის დამატებაც გსურთ</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 22px;">
                                                        <div data-title="BBQ Sauce" data-price="+2₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/BBQ.webp"
                                                                        alt="BBQ Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        BBQ სოუსი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Ranch Sauce" data-price="+2₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/ranch.webp"
                                                                        alt="Ranch Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        რანჩო ტირიფი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Honey Mustard Sauce" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/20240831224344209_009.webp"
                                                                        alt="Honey Mustard Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        თაფლის მდოგვის სოუსი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Sweet Chilli Sauce" data-price="+2₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/20240831224920676_pizzasauce.webp"
                                                                        alt="Sweet Chilli Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        ტკბილი ჩილის სოუსი</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div class="bonus_cards" id="bonus_cards_1">
                                <div data-id="11-72" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/deluxe_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>დელუქსი</h2>
                                            <p>პიცის სოუსი, მოცარელა, სოკო, პეპერონი, ლორი, ხახვი, მწვანე წიწაკა
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-73" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/calipso_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>კალიფსო</h2>
                                            <p>პიცის სოუსი, მოცარელა, თინუსი, ხახვი, სიმინდი, პომიდორი</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-74" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/pepperoni_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>პეპერონი</h2>
                                            <p>პიცის სოუსი, მოცარელა, პიცა</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-75" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/margherita_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>მარგარიტა</h2>
                                            <p>პიცის სოუსი, მოცარელა, პომიდორი</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-76" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mushroom_&_ham_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ლორი და სოკო</h2>
                                            <p>პიცის სოუსი, მოცარელა, ლორი, სოკო</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-77" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mexican_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>მექსიკური</h2>
                                            <p>პიცის სოუსი, მოცარელა, პეპერონი, ხალაპენიო, მწვანე წიწაკა, შავი ზეთისხილი, ხახვი</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-78" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/greek_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ბერძენი</h2>
                                            <p>პიცის სოუსი, მოცარელა, მწვანე წიწაკა, შავი ზეთისხილი, ფეტა, პომიდორი</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-79" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/american_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ამერიკელი</h2>
                                            <p>პიცის სოუსი, მოცარელა, პეპერონი, ბეკონი, სოკო</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-80" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/chicken_BBQ.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ქათმის BBQ</h2>
                                            <p>პიცის სოუსი, მოცარელა, მწვანე წიწაკა, ქათამი, ხახვი, BBQ სოუსი</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-81" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/veggie_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>მცენარეული</h2>
                                            <p>პიცის სოუსი, ხახვი, მწვანე წიწაკა, მოცარელა, შავი ზეთისხილი, სოკო, სიმინდი</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-82" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mix_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>შეურიეთ</h2>
                                            <p>პიცის სოუსი, მოცარელა, ლორი, ბეკონი, მწვანე წიწაკა, ხახვი</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-83" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/4meat_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>4 ხორცი</h2>
                                            <p>პიცის სოუსი, მოცარელა, პეპერონი, ბეკონი, ლორი, საქონლის ძეხვი</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-84" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/extravaganza_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ექსტრავაგანზა</h2>
                                            <p>პიცის სოუსი, ხახვი, მოცარელა, საქონლის ძეხვი, პეპერონი, შავი ზეთისხილი, მწვანე წიწაკა, სოკო, ლორი, სიმინდი</p>
                                        </div>
                                    </div>
                                    <div class="for_red_count">+4.00₾</div>
                                </div>
                                <div data-id="11-85" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ტკბილი ჩილის ქათამი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, მწვანე წიწაკა, ხახვი, ტკბილი ჩილის სოუსი
                                            </p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-86" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/20240831212119268_HoneyMusterChicken.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>თაფლის მდოგვის ქათამი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, სოკო, თაფლის მდოგვის სოუსი</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-87" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/grilled_chicken.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>შემწვარი ქათამი</h2>
                                            <p>პიცის სოუსი, ქათამი, მოცარელა, სოკო, მწვანილი, წიწაკა, სიმინდი</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-88" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/double_pepperoni_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ორმაგი პეპერონი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ორმაგი პეპერონი</p>
                                        </div>
                                        <div class="for_red_count">+6.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-89" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/domino_s_pizza_Global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>დომინოს პიცა</h2>
                                            <p>პიცის სოუსი, ქათამი, მოცარელა, სოკო, ბეკონი, მწვანე წიწაკა, პომიდორი, პეპერონი, ხახვი</p>
                                        </div>
                                        <div class="for_red_count">+6.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-90" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/bacon_&_ranch_sauce_global.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ბეკონისა და ქათმის რანჩო</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, პომიდორი, ბეკონი, რანჩის სოუსი</p>
                                        </div>
                                        <div class="for_red_count">+6.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-91" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/4cheese_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>4 ყველი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ფეტა, ჩედარი, გორგონზოლა</p>
                                        </div>
                                        <div class="for_red_count">+6.00₾</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
`
}else if(title == 4){
    document.querySelector(".for_display_tovars").innerHTML=`<div class="for_garlic_souce MuiGrid-root MuiGrid-container css-1d3bbye for_selects_cards">
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-15j76c0 for_selects_card pizza-block" data-id="0"
                        style="margin-top: 35px;">
                        <div class="jss47" style="height: auto; transition: 1s;">
                            <p class="jss48 product-title" style="padding-bottom: 0px;">პროდუქტი 1: პური</p>
                            <div style="width: 100%; padding: 20px; position: relative;">
                                <div class="bonus_card" id="selected_card_0">
                                    <img id="bonus_img_0"
                                        src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts" id="bonus_texts_0">
                                            <h2>ტკბილი ჩილის ქათამი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, მწვანე წიწაკა, ხახვი, ტკბილი ჩილის სოუსი
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                        <div onclick="close_choose(0)">
                                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                data-testid="EditIcon" style="cursor: pointer;">
                                                <path
                                                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div onclick="select_choose(0)" class="select_choose" id="select_choose_0">
                                    <p>აირჩიე</p>
                                    <i class='bx bx-chevron-down'></i>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div style="flex: 1 1 0%; padding: 0px;"> </div>
                                </div>
                                <div style="padding: 0px;"></div>
                            </div>

                            <div class="bonus_cards" id="bonus_cards_0">
                                <p style="color: rgb(73, 73, 73);">No options</p>
                            </div>
                        </div>
                    </div>
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-15j76c0 for_selects_card pizza-block" data-id="1"
                        style="margin-top: 35px;">
                        <div class="jss47" style="height: auto; transition: 1s;">
                            <p class="jss48 product-title" style="padding-bottom: 0px;">პროდუქტი 2: პური</p>
                            <div style="width: 100%; padding: 20px; position: relative;">
                                <div class="bonus_card" id="selected_card_1">
                                    <img id="bonus_img_1"
                                        src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts" id="bonus_texts_1">
                                            <h2>ტკბილი ჩილის ქათამი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, მწვანე წიწაკა, ხახვი, ტკბილი ჩილის სოუსი
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                        <div onclick="close_choose(1)">
                                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                data-testid="EditIcon" style="cursor: pointer;">
                                                <path
                                                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div onclick="select_choose(1)" class="select_choose" id="select_choose_1">
                                    <p>აირჩიე</p>
                                    <i class='bx bx-chevron-down'></i>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div style="flex: 1 1 0%; padding: 0px;"> </div>
                                </div>
                                <div style="padding: 0px;"></div>
                            </div>
                            

                            <div class="bonus_cards" id="bonus_cards_1">
                                <p style="color: rgb(73, 73, 73);">No options</p>
                            </div>
                        </div>
                    </div>
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-15j76c0 for_selects_card pizza-block" data-id="2"
                        style="margin-top: 35px;">
                        <div class="jss47" style="height: auto; transition: 1s;">
                            <p class="jss48 product-title" style="padding-bottom: 0px;">პროდუქტი 3: სოუსი</p>
                            <div style="width: 100%; padding: 20px; position: relative;">
                                <div class="bonus_card" id="selected_card_2">
                                    <img id="bonus_img_2"
                                        src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts" id="bonus_texts_2">
                                            <h2>ტკბილი ჩილის ქათამი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, მწვანე წიწაკა, ხახვი, ტკბილი ჩილის სოუსი
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                        <div onclick="close_choose(2)">
                                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                data-testid="EditIcon" style="cursor: pointer;">
                                                <path
                                                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div onclick="select_choose(2)" class="select_choose" id="select_choose_2">
                                    <p>აირჩიე</p>
                                    <i class='bx bx-chevron-down'></i>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div style="flex: 1 1 0%; padding: 0px;"> </div>
                                </div>
                                <div style="padding: 0px;"></div>
                            </div>

                            <div class="bonus_cards" id="bonus_cards_2">
                                <div data-id="11-92" class="bonus_card">
                                    <img src="https://dominosge.s3.eu-central-1.amazonaws.com/20250319110018170_yogurtsauce.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Yogurt Sauce 25gr</h2>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-93" class="bonus_card">
                                    <img src="https://dominosge.s3.eu-central-1.amazonaws.com/20250319110232362_hotsauce.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Hot Sauce 30gr</h2>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
}else if(title == 5){
    document.querySelector(".for_display_tovars").innerHTML=`<div class="for_mega_week MuiGrid-root MuiGrid-container css-1d3bbye for_selects_cards">
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-15j76c0 for_selects_card pizza-block" data-id="0"
                        style="margin-top: 35px;">
                        <div class="jss47" style="height: auto; transition: 1s;">
                            <p class="jss48 product-title" style="padding-bottom: 0px;">პროდუქტი 1: საშუალო ზომის პიცა</p>
                            <div style="width: 100%; padding: 20px; position: relative;">
                                <div class="bonus_card" id="selected_card_0">
                                    <img id="bonus_img_0"
                                        src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts" id="bonus_texts_0">
                                            <h2>ტკბილი ჩილის ქათამი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, მწვანე წიწაკა, ხახვი, ტკბილი ჩილის სოუსი
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                        <div onclick="close_choose(0)">
                                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                data-testid="EditIcon" style="cursor: pointer;">
                                                <path
                                                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div onclick="select_choose(0)" class="select_choose" id="select_choose_0">
                                    <p>აირჩიე</p>
                                    <i class='bx bx-chevron-down'></i>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div style="flex: 1 1 0%; padding: 0px;"> </div>
                                </div>
                                <div style="padding: 0px;"></div>
                            </div>

                            <div class="bonus_cards" id="bonus_cards_0">
                                <div data-id="11-94" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/pepperoni_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>პეპერონი</h2>
                                            <p>პიცის სოუსი, მოცარელა, პიცა</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-95" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/margherita_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>მარგარიტა</h2>
                                            <p>პიცის სოუსი, მოცარელა, პომიდორი</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-96" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mushroom_&_ham_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ლორი და სოკო</h2>
                                            <p>პიცის სოუსი, მოცარელა, ლორი, სოკო</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-97" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mexican_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>მექსიკური</h2>
                                            <p>პიცის სოუსი, მოცარელა, პეპერონი, ხალაპენიო, მწვანე წიწაკა, შავი ზეთისხილი, ხახვი</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-98" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/greek_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ბერძენი</h2>
                                            <p>პიცის სოუსი, მოცარელა, მწვანე წიწაკა, შავი ზეთისხილი, ფეტა, პომიდორი</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-99" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/deluxe_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>დელუქსი</h2>
                                            <p>პიცის სოუსი, მოცარელა, სოკო, პეპერონი, ლორი, ხახვი, მწვანე წიწაკა
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-100" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/calipso_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>კალიფსო</h2>
                                            <p>პიცის სოუსი, მოცარელა, თინუსი, ხახვი, სიმინდი, პომიდორი</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-101" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ტკბილი ჩილის ქათამი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, მწვანე წიწაკა, ხახვი, ტკბილი ჩილის სოუსი
                                            </p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-102" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/20240831212119268_HoneyMusterChicken.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>თაფლის მდოგვის ქათამი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, სოკო, თაფლის მდოგვის სოუსი</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-103" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/american_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ამერიკელი</h2>
                                            <p>პიცის სოუსი, მოცარელა, პეპერონი, ბეკონი, სოკო</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-104" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/grilled_chicken.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>შემწვარი ქათამი</h2>
                                            <p>პიცის სოუსი, ქათამი, მოცარელა, სოკო, მწვანილი, წიწაკა, სიმინდი</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-105" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/chicken_BBQ.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ქათმის BBQ</h2>
                                            <p>პიცის სოუსი, მოცარელა, მწვანე წიწაკა, ქათამი, ხახვი, BBQ სოუსი</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-106" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/veggie_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>მცენარეული</h2>
                                            <p>პიცის სოუსი, ხახვი, მწვანე წიწაკა, მოცარელა, შავი ზეთისხილი, სოკო, სიმინდი</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-107" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mix_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>შეურიეთ</h2>
                                            <p>პიცის სოუსი, მოცარელა, ლორი, ბეკონი, მწვანე წიწაკა, ხახვი</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-108" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/4meat_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>4 ხორცი</h2>
                                            <p>პიცის სოუსი, მოცარელა, პეპერონი, ბეკონი, ლორი, საქონლის ძეხვი</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-109" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/extravaganza_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ექსტრავაგანზა</h2>
                                            <p>პიცის სოუსი, ხახვი, მოცარელა, საქონლის ძეხვი, პეპერონი, შავი ზეთისხილი, მწვანე წიწაკა, სოკო, ლორი, სიმინდი</p>
                                        </div>
                                    </div>
                                    <div class="for_red_count">+3.00₾</div>
                                </div>
                                <div data-id="11-110" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/4cheese_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>4 ყველი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ფეტა, ჩედარი, გორგონზოლა</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-111" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/double_pepperoni_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ორმაგი პეპერონი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ორმაგი პეპერონი</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-112" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/domino_s_pizza_Global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>დომინოს პიცა</h2>
                                            <p>პიცის სოუსი, ქათამი, მოცარელა, სოკო, ბეკონი, მწვანე წიწაკა, პომიდორი, პეპერონი, ხახვი</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-113" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/bacon_&_ranch_sauce_global.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ბეკონისა და ქათმის რანჩო</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, პომიდორი, ბეკონი, რანჩის სოუსი</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-15j76c0 for_selects_card pizza-block" data-id="1"
                        style="margin-top: 35px;">
                        <div class="jss47" style="height: auto; transition: 1s;">
                            <p class="jss48 product-title" style="padding-bottom: 0px;">პროდუქტი 2: საშუალო ზომის პიცა</p>
                            <div style="width: 100%; padding: 20px; position: relative;">
                                <div class="bonus_card" id="selected_card_1">
                                    <img id="bonus_img_1"
                                        src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts" id="bonus_texts_1">
                                            <h2>ტკბილი ჩილის ქათამი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, მწვანე წიწაკა, ხახვი, ტკბილი ჩილის სოუსი
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                        <div onclick="close_choose(1)">
                                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                data-testid="EditIcon" style="cursor: pointer;">
                                                <path
                                                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div onclick="select_choose(1)" class="select_choose" id="select_choose_1">
                                    <p>აირჩიე</p>
                                    <i class='bx bx-chevron-down'></i>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div style="flex: 1 1 0%; padding: 0px;"> </div>
                                </div>
                                <div style="padding: 0px;"></div>
                            </div>
                            

                            <div class="bonus_cards" id="bonus_cards_1">
                                <div data-id="11-114" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/pepperoni_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>პეპერონი</h2>
                                            <p>პიცის სოუსი, მოცარელა, პიცა</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-115" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/margherita_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>მარგარიტა</h2>
                                            <p>პიცის სოუსი, მოცარელა, პომიდორი</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-116" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mushroom_&_ham_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ლორი და სოკო</h2>
                                            <p>პიცის სოუსი, მოცარელა, ლორი, სოკო</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-117" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mexican_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>მექსიკური</h2>
                                            <p>პიცის სოუსი, მოცარელა, პეპერონი, ხალაპენიო, მწვანე წიწაკა, შავი ზეთისხილი, ხახვი</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-118" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/greek_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ბერძენი</h2>
                                            <p>პიცის სოუსი, მოცარელა, მწვანე წიწაკა, შავი ზეთისხილი, ფეტა, პომიდორი</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-119" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/deluxe_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>დელუქსი</h2>
                                            <p>პიცის სოუსი, მოცარელა, სოკო, პეპერონი, ლორი, ხახვი, მწვანე წიწაკა
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-120" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/calipso_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>კალიფსო</h2>
                                            <p>პიცის სოუსი, მოცარელა, თინუსი, ხახვი, სიმინდი, პომიდორი</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-121" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ტკბილი ჩილის ქათამი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, მწვანე წიწაკა, ხახვი, ტკბილი ჩილის სოუსი
                                            </p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-122" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/20240831212119268_HoneyMusterChicken.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>თაფლის მდოგვის ქათამი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, სოკო, თაფლის მდოგვის სოუსი</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-123" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/american_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ამერიკელი</h2>
                                            <p>პიცის სოუსი, მოცარელა, პეპერონი, ბეკონი, სოკო</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-124" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/grilled_chicken.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>შემწვარი ქათამი</h2>
                                            <p>პიცის სოუსი, ქათამი, მოცარელა, სოკო, მწვანილი, წიწაკა, სიმინდი</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-125" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/chicken_BBQ.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ქათმის BBQ</h2>
                                            <p>პიცის სოუსი, მოცარელა, მწვანე წიწაკა, ქათამი, ხახვი, BBQ სოუსი</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-126" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/veggie_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>მცენარეული</h2>
                                            <p>პიცის სოუსი, ხახვი, მწვანე წიწაკა, მოცარელა, შავი ზეთისხილი, სოკო, სიმინდი</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-127" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mix_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>შეურიეთ</h2>
                                            <p>პიცის სოუსი, მოცარელა, ლორი, ბეკონი, მწვანე წიწაკა, ხახვი</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-128" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/4meat_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>4 ხორცი</h2>
                                            <p>პიცის სოუსი, მოცარელა, პეპერონი, ბეკონი, ლორი, საქონლის ძეხვი</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-129" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/extravaganza_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ექსტრავაგანზა</h2>
                                            <p>პიცის სოუსი, ხახვი, მოცარელა, საქონლის ძეხვი, პეპერონი, შავი ზეთისხილი, მწვანე წიწაკა, სოკო, ლორი, სიმინდი</p>
                                        </div>
                                    </div>
                                    <div class="for_red_count">+3.00₾</div>
                                </div>
                                <div data-id="11-130" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/4cheese_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>4 ყველი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ფეტა, ჩედარი, გორგონზოლა</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-131" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/double_pepperoni_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ორმაგი პეპერონი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ორმაგი პეპერონი</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-132" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/domino_s_pizza_Global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>დომინოს პიცა</h2>
                                            <p>პიცის სოუსი, ქათამი, მოცარელა, სოკო, ბეკონი, მწვანე წიწაკა, პომიდორი, პეპერონი, ხახვი</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-133" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/bacon_&_ranch_sauce_global.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ბეკონისა და ქათმის რანჩო</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, პომიდორი, ბეკონი, რანჩის სოუსი</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-15j76c0 for_selects_card pizza-block" data-id="2"
                        style="margin-top: 35px;">
                        <div class="jss47" style="height: auto; transition: 1s;">
                            <p class="jss48 product-title" style="padding-bottom: 0px;">პროდუქტი 3: საშუალო ზომის პიცა</p>
                            <div style="width: 100%; padding: 20px; position: relative;">
                                <div class="bonus_card" id="selected_card_2">
                                    <img id="bonus_img_2"
                                        src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts" id="bonus_texts_2">
                                            <h2>ტკბილი ჩილის ქათამი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, მწვანე წიწაკა, ხახვი, ტკბილი ჩილის სოუსი
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                        <div onclick="close_choose(2)">
                                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                data-testid="EditIcon" style="cursor: pointer;">
                                                <path
                                                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div onclick="select_choose(2)" class="select_choose" id="select_choose_2">
                                    <p>აირჩიე</p>
                                    <i class='bx bx-chevron-down'></i>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div style="flex: 1 1 0%; padding: 0px;"> </div>
                                </div>
                                <div style="padding: 0px;"></div>
                            </div>

                            <div class="bonus_cards" id="bonus_cards_2">
                                <div data-id="11-134" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/pepperoni_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>პეპერონი</h2>
                                            <p>პიცის სოუსი, მოცარელა, პიცა</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-135" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/margherita_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>მარგარიტა</h2>
                                            <p>პიცის სოუსი, მოცარელა, პომიდორი</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-136" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mushroom_&_ham_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ლორი და სოკო</h2>
                                            <p>პიცის სოუსი, მოცარელა, ლორი, სოკო</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-137" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mexican_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>მექსიკური</h2>
                                            <p>პიცის სოუსი, მოცარელა, პეპერონი, ხალაპენიო, მწვანე წიწაკა, შავი ზეთისხილი, ხახვი</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-138" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/greek_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ბერძენი</h2>
                                            <p>პიცის სოუსი, მოცარელა, მწვანე წიწაკა, შავი ზეთისხილი, ფეტა, პომიდორი</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-139" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/deluxe_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>დელუქსი</h2>
                                            <p>პიცის სოუსი, მოცარელა, სოკო, პეპერონი, ლორი, ხახვი, მწვანე წიწაკა
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-140" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/calipso_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>კალიფსო</h2>
                                            <p>პიცის სოუსი, მოცარელა, თინუსი, ხახვი, სიმინდი, პომიდორი</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div data-id="11-141" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ტკბილი ჩილის ქათამი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, მწვანე წიწაკა, ხახვი, ტკბილი ჩილის სოუსი
                                            </p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-142" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/20240831212119268_HoneyMusterChicken.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>თაფლის მდოგვის ქათამი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, სოკო, თაფლის მდოგვის სოუსი</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-143" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/american_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ამერიკელი</h2>
                                            <p>პიცის სოუსი, მოცარელა, პეპერონი, ბეკონი, სოკო</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-144" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/grilled_chicken.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>შემწვარი ქათამი</h2>
                                            <p>პიცის სოუსი, ქათამი, მოცარელა, სოკო, მწვანილი, წიწაკა, სიმინდი</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-145" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/chicken_BBQ.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ქათმის BBQ</h2>
                                            <p>პიცის სოუსი, მოცარელა, მწვანე წიწაკა, ქათამი, ხახვი, BBQ სოუსი</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-146" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/veggie_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>მცენარეული</h2>
                                            <p>პიცის სოუსი, ხახვი, მწვანე წიწაკა, მოცარელა, შავი ზეთისხილი, სოკო, სიმინდი</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-147" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mix_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>შეურიეთ</h2>
                                            <p>პიცის სოუსი, მოცარელა, ლორი, ბეკონი, მწვანე წიწაკა, ხახვი</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-148" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/4meat_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>4 ხორცი</h2>
                                            <p>პიცის სოუსი, მოცარელა, პეპერონი, ბეკონი, ლორი, საქონლის ძეხვი</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-149" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/extravaganza_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ექსტრავაგანზა</h2>
                                            <p>პიცის სოუსი, ხახვი, მოცარელა, საქონლის ძეხვი, პეპერონი, შავი ზეთისხილი, მწვანე წიწაკა, სოკო, ლორი, სიმინდი</p>
                                        </div>
                                    </div>
                                    <div class="for_red_count">+3.00₾</div>
                                </div>
                                <div data-id="11-150" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/4cheese_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>4 ყველი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ფეტა, ჩედარი, გორგონზოლა</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-151" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/double_pepperoni_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ორმაგი პეპერონი</h2>
                                            <p>პიცის სოუსი, მოცარელა, ორმაგი პეპერონი</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-152" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/domino_s_pizza_Global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>დომინოს პიცა</h2>
                                            <p>პიცის სოუსი, ქათამი, მოცარელა, სოკო, ბეკონი, მწვანე წიწაკა, პომიდორი, პეპერონი, ხახვი</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div data-id="11-153" class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/bacon_&_ranch_sauce_global.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>ბეკონისა და ქათმის რანჩო</h2>
                                            <p>პიცის სოუსი, მოცარელა, ქათამი, პომიდორი, ბეკონი, რანჩის სოუსი</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
}

});