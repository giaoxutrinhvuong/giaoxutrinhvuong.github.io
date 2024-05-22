<script>
  // const $ = document.querySelector.bind(document);
  // const $$ = document.querySelectorAll.bind(document);

  // let slides = $(".carousel").children.length;
  // let slide = 0;
  // let w = $(".carousel").clientWidth;

  let carousel;
  let slide = 0;
  let slides = 0;
  let carouselWidth = 0;

  $: {
    if (carousel) {
      slides = carousel.children.length;
      carouselWidth = carousel.clientWidth;
    }
  }

  function nextCarousel() {
    slide = (slide + 1) % slides;
    carousel.scrollLeft = slide * carouselWidth;
  }
  function prevCarousel() {
    slide = (slides + slide - 1) % slides;
    carousel.scrollLeft = slide * carouselWidth;
  }

  let navMenuExpanded = false;
  function clickNavExpand() {
    navMenuExpanded = !navMenuExpanded;
  }

  const navLinks = [{title: 'Giáo Xứ', link: 'Giáo Xứ.html'}, {title: 'Mục Vụ', link: 'Mục Vụ.html'}, {title: 'Phụng Vụ', link: 'Phụng Vụ.html'}, {title: 'Sinh Hoạt', link: 'Sinh Hoạt.html'}, {title: 'Thông Tin', link: 'Thông Tin.html'}, {title: 'Đoàn Thể', link: 'Đoàn Thể.html'}];
</script>

<div class="font-serif w-full min-h-screen bg-gradient-to-bl from-rose-100 to-teal-100">

  <div class="w-full flex gap-4 justify-between items-center px-8 bg-fuchsia-200">
    <a class="flex-none w-20 flex justify-center items-center" href="/">
      <img src="images/Maria.png" class="w-16 h-16 hover:scale-125 transition-all duration-250 ease-in-out" alt="Maria" />
    </a>
    <div class="flex-1 flex-col">
      <div class="sm:hidden h-24 flex items-center justify-center cursor-pointer select-none" on:click={() => clickNavExpand()}>
        <svg class="fill-black w-10 h-10" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.001 7.128L6 10.438l19.998-.005L26 7.124zM6.001 21.566L6 24.876l19.998-.006.002-3.308zM6.001 14.341L6 17.65l19.998-.004.002-3.309z"></path></g></svg>
      </div>
      <div class="sm:flex sm:flex-row flex-col sm:h-24 gap-1 justify-center items-center" class:hidden={!navMenuExpanded}>
        {#each navLinks as {title, link}}
          <div class="w-36 h-16 flex justify-center items-center">
            <a class="rounded-xl w-4/5 h-4/5 flex justify-center items-center transition-all duration-250 ease-in-out bg-fuchsia-400 text-fuchsia-900 hover:bg-fuchsia-600 hover:text-fuchsia-200 hover:font-extrabold hover:scale-125" href={link}>{title}</a>
          </div>
        {/each}
      </div>
    </div>
    <a class="flex-none w-20 flex justify-center items-center" href="https://www.facebook.com/Queenshipofmary">
      <svg class="w-12 h-12 hover:scale-125 transition-all duration-250 ease-in-out" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Facebook-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-200.000000, -160.000000)" fill="#4460A0"> <path d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z" id="Facebook"> </path> </g> </g> </g></svg>
    </a>
  </div>

  <div class="w-full flex justify-center p-4">

    <div class="w-full lg:w-[1000px] flex flex-col gap-6">

      <div class="">
        <img class="w-full" src="/images/Trinh Vương Church 4.png" alt="Giao xu Trinh Vuong" />
      </div>
      <div class="">
        <div class="w-full grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div class="flex flex-col gap-4">
            <h1>Giờ Thánh lễ:</h1>
            <h2>Ngày trong tuần:</h2>
            <p>Thứ Ba: 6:00pm</p>
            <p>Thứ Tư: 6:00pm</p>
            <p>Thứ Năm: 6:00pm</p>
            <p>Thứ Sáu: 6:00pm</p>
            <h2>Chúa Nhật:</h2>
            <p>8:30am-9:30am Thánh lễ I</p>
            <p>12:30pm-1:30pm Thánh lễ II</p>
            <p>Rửa tội: Sau Thánh lễ II</p>
            <p>Giải tội: Trước các Thánh Lễ Chúa Nhật hoặc lấy hẹn trước</p>
            <video controls>
              <source src="/Video/Thánh Lễ Chúa Nhật 30 Mùa Thường Niên – Thirtieth Sunday in Ordinary Time, October 24, 2021 8-30 AM Mass.mp4" type="video/mp4" />
            </video>
            <h2>Xem Thánh lễ trực tuyến</h2>
          </div>
          <div class="flex flex-col gap-4">
            <div class="h-full overflow-hidden">
              <img class="hover:scale-125 hover:brightness-125 ease-in-out transition-all duration-500 cursor-pointer" src="/images/Cha Trị.png" alt="Cha Trị image" />
            </div>
            <h2>Cha Chánh xứ: JB Trần văn Trị</h2>
            <h2 class="text-red-500">Lời nguyện trong cơn dịch bệnh</h2>
            <p>Lạy Thiên chúa Ba Ngôi toàn năng chúng con đang họp nhau cầu nguyện, tha thiết nài xin cho cơn dịch bệnh mau chấm dứt.</p>
            <p>Lạy Chúa Cha giàu lòng thương xót xin nhìn đến nỗi thống khổ của đoàn con trên khắp thế giới, đặc biệt tại những nơi dịch bệnh đang hoành hành. Xin củng cố đức tin của chúng con, cho chúng con hoàn toàn tín thác vào tình yêu quan phòng của Cha.</p>
            <p><a class="link" href="/Documents/Lời Nguyện trong cơn dịch bệnh.pdf">Đọc Tiếp</a></p>
          </div>
          <div class="flex flex-col gap-4">
            <div class="w-full flex flex-col relative">
              <div class="flex overflow-x-scroll scroll-smooth snap-x snap-mandatory w-full h-full carousel" bind:this={carousel}>
                <div class="snap-start w-full flex-none">
                  <img class="w-full h-full object-cover" src="/images/Cung Thánh 1.png" alt="" />
                </div>
                <div class="snap-start w-full flex-none">
                  <img class="w-full h-full object-cover" src="/images/Cung Thánh 2.png" alt="" />
                </div>
                <div class="snap-start w-full flex-none">
                  <img class="w-full h-full object-cover" src="/images/Đài Đức Mẹ.png" alt="" />
                </div>
              </div>
              <div class="w-full flex justify-between absolute bottom-1/2 translate-y-1/2 p-4 z-10">
                <div class="prev select-none cursor-pointer text-3xl rounded-full bg-white/50 w-10 h-10 flex justify-center items-center p-1" on:click={prevCarousel}>
                  <svg fill="#000000" class="w-full h-full" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="213.3,205.3 213.3,77.3 0,248 213.3,418.7 213.3,290.7 512,290.7 512,205.3 "></polygon> </g></svg>
                </div>
                <div class="next select-none cursor-pointer text-3xl rounded-full bg-white/50 w-10 h-10 flex justify-center items-center p-1" on:click={nextCarousel}>
                  <svg fill="#000000" class="w-full h-full" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve" transform="matrix(-1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="213.3,205.3 213.3,77.3 0,248 213.3,418.7 213.3,290.7 512,290.7 512,205.3 "></polygon> </g></svg>
                </div>
              </div>
            </div>
            <h2>Giáo Xứ Trinh Vương</h2>
            <h2 class="text-blue-500">Thông Báo</h2>
            <p>Ban Phụng Vụ:</p>
            <p>Bắt đầu ngày đầu năm mới phụng vụ (năm A) nhằm ngày 27 tháng 11 Chúa Nhật thứ nhất mùa Vọng, thánh lễ sẽ có sự hiện diện của các em giúp lễ và gia đình dâng của lễ. Kính mời các gia đình và các em thiếu nhi cộng tác với chúng tôi để cho Thánh lễ thêm phần sốt sắng và trang nghiêm. Mọi chi tiết xin liên lạc với anh Đức- Trưởng ban Phụng Vụ</p>
          </div>
        </div>
      </div>
      <div class="p-4 flex justify-left items-center font-bold text-xl bg-gray-200">
        Queenship of Mary Parish &mdash; 219 Armitage Avenue, Glen Ellyn, IL 60137
      </div>


    </div>
  </div>
</div>