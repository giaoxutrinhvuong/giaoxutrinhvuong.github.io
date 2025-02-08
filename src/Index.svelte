<script>
  import Template from './Template.svelte';
</script>

<Template>
  <svelte:fragment slot="content">

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-12">
      <div class="flex flex-col gap-4 items-center justify-center">
        <h1>Xem Thánh lễ trực tuyến</h1>
        <iframe class="w-full aspect-video" src="https://www.youtube.com/embed/Q4rK_cRjvqA?si=SZHo8rtDlYEmUsDt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div class="flex flex-col gap-4 items-center justify-center">
        <h1>Giờ Thánh lễ:</h1>
        <h2>Ngày trong tuần:</h2>
        <div class="flex flex-wrap gap-4 justify-evenly">
          <div class="w-fit min-h-8 flex justify-center rounded-lg px-4 text-lg bg-gray-200">Thứ Ba: 6:00pm</div>
          <div class="w-fit min-h-8 flex justify-center rounded-lg px-4 text-lg bg-gray-200">Thứ Tư: 6:00pm</div>
          <div class="w-fit min-h-8 flex justify-center rounded-lg px-4 text-lg bg-gray-200">Thứ Năm: 6:00pm</div>
          <div class="w-fit min-h-8 flex justify-center rounded-lg px-4 text-lg bg-gray-200">Thứ Sáu: 6:00pm</div>
        </div>
        <h2>Chúa Nhật:</h2>
        <div class="flex flex-wrap gap-4 justify-evenly">
          <div class="w-fit min-h-8 flex justify-center rounded-lg px-4 text-lg bg-gray-200">8:30am &ndash; 9:30am Thánh lễ I</div>
          <div class="w-fit min-h-8 flex justify-center rounded-lg px-4 text-lg bg-gray-200">12:30pm &ndash; 1:30pm Thánh lễ II</div>
          <div class="w-fit min-h-8 flex justify-center rounded-lg px-4 text-lg bg-gray-200">Rửa tội: Sau Thánh lễ II</div>
          <div class="w-fit min-h-8 flex justify-center rounded-lg px-4 text-lg bg-gray-200">Giải tội: Trước các Thánh Lễ Chúa Nhật hoặc lấy hẹn trước</div>
        </div>
      </div>
    </div>

    <div class="w-full flex flex-col sm:flex-row-reverse gap-12">
      <div class="flex-1 w-full sm:w-1/2 flex flex-col gap-4 items-center justify-center">
        <div class="w-full overflow-hidden rounded-2xl">
          <img class="image-effect" src="images/Cha Trị.png" alt="Cha Trị image" />
        </div>
      </div>
      <div class="flex-1 w-full sm:w-1/2 flex flex-col gap-4 items-center justify-center text-center">
        <h2>Cha Chánh xứ: JB Trần văn Trị</h2>
        <h2 class="text-red-500">Kinh Năm Thánh</h2>
        <p>Lạy Cha trên trời.</p>
        <p>Xin cho ơn đức tin mà Cha ban tặng chúng con trong Chúa Giêsu Kitô. Con Cha và Anh của chúng con, cùng ngọn lửa đức ái được thắp lên trong tâm hồn chúng con bởi Chúa Thánh Thần, khơi dậy trong chúng con niềm hy vọng hồng phúc hướng về nước Cha trị đến.</p>
        <p>Xin ân sủng Cha biến đổi chúng con thành những người miệt mài vun trồng hạt giống Tin Mừng. Ước gì nhũng hạt giống ấy biến đổi từ bên trong nhân loại và toàn thể vũ trụ này, trong khi vững lòng mong đợi trời mới đất mới, lúc mà quyền lực Sự Dữ sẽ bị đánh bại, và vinh quang Cha sẽ chiếu sáng muôn đời. </p>
        <p>Xin cho ân sủng của Năm Thánh này khơi dậy trong chúng con, là Những Người Lữ Hành Hy Vọng, niềm khao khát kho tàng ở trên trời. Đồng thời cũng làm lan toả trên khắp thế giới niềm vui và sự bình an của Đấng Cứu Chuộc chúng con. Xin tôn vinh và ngợi khen Cha là Thiên Chúa chúng con, Cha đáng chúc tụng mãi muôn đời. Amen. </p>
        <p> Đức Giáo Hoàng Phanxico</p>
        <p><a class="link" href="/Documents/Lời Nguyện trong cơn dịch bệnh.pdf">Đọc Tiếp</a></p>
      </div>
    </div>

    <div class="w-full flex flex-col sm:flex-row gap-12">
      <div class="flex-1 w-full sm:w-1/2 flex flex-col gap-4 items-center justify-center">
        <div class="w-full flex flex-col relative">
          <div class="flex overflow-x-scroll scroll-smooth snap-x snap-mandatory w-full h-full carousel rounded-2xl" id="carousel">
            <div class="snap-start w-full flex-none">
              <img class="w-full h-full object-cover" src="images/Cung Thánh 1.jpg" alt="" />
            </div>
            <div class="snap-start w-full flex-none">
              <img class="w-full h-full object-cover" src="images/Cung Thánh 2.jpg" alt="" />
            </div>
            <div class="snap-start w-full flex-none">
              <img class="w-full h-full object-cover" src="images/Đài Đức Mẹ.jpg" alt="" />
            </div>
          </div>
          <div class="w-full flex justify-between absolute bottom-1/2 translate-y-1/2 p-4 z-1">
            <div class="prev select-none cursor-pointer text-3xl rounded-full bg-white/50 w-10 h-10 flex justify-center items-center p-1" id="carouselPrevButton">
              <svg fill="#000000" class="w-full h-full" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="213.3,205.3 213.3,77.3 0,248 213.3,418.7 213.3,290.7 512,290.7 512,205.3 "></polygon> </g></svg>
            </div>
            <div class="next select-none cursor-pointer text-3xl rounded-full bg-white/50 w-10 h-10 flex justify-center items-center p-1" id="carouselNextButton">
              <svg fill="#000000" class="w-full h-full" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve" transform="matrix(-1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="213.3,205.3 213.3,77.3 0,248 213.3,418.7 213.3,290.7 512,290.7 512,205.3 "></polygon> </g></svg>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 w-full sm:w-1/2 flex flex-col gap-4 items-center justify-center text-center">
        <h2>Giáo Xứ Trinh Vương</h2>
        <h2 class="text-blue-500">Thông Báo</h2>
        <p>Ban Phụng Vụ:</p>
        <p>Bắt đầu ngày đầu năm mới phụng vụ (năm A) nhằm ngày 27 tháng 11 Chúa Nhật thứ nhất mùa Vọng, thánh lễ sẽ có sự hiện diện của các em giúp lễ và gia đình dâng của lễ. Kính mời các gia đình và các em thiếu nhi cộng tác với chúng tôi để cho Thánh lễ thêm phần sốt sắng và trang nghiêm. Mọi chi tiết xin liên lạc với anh Đức- Trưởng ban Phụng Vụ</p>
      </div>
    </div>

    <div class="flex w-full">
      <div class="mapouter"><div class="gmap_canvas"><iframe crossorigin="anonymous" class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="//maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=219 Armitage Ave Glen Ellyn, IL&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://embed-googlemap.com">embed google map</a></div><style>.mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}</style></div>
    </div>

  </svelte:fragment>
</Template>
