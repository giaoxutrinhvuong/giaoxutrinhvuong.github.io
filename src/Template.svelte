<script>
  let navMenuExpanded = false;
  function clickNavExpand() {
    navMenuExpanded = !navMenuExpanded;
  }

  const navLinks = [{title: 'Giáo Xứ', link: 'Giáo Xứ.html'}, {title: 'Mục Vụ', link: 'Mục Vụ.html'}, {title: 'Phụng Vụ', link: 'Phụng Vụ.html'}, {title: 'Sinh Hoạt', link: 'Sinh Hoạt.html'}, {title: 'Thông Tin', link: 'Thông Tin.html'}, {title: 'Đoàn Thể', link: 'Đoàn Thể.html'}];
</script>

<link rel="shortcut icon" type="image/svg+xml" href="/images/Maria.png"/>

<div class="fixed -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-100 to-white w-screen h-screen"></div>

<div class="font-sans w-full min-h-screen">

  <div class="w-full flex gap-4 justify-between items-center px-8 bg-gray-200 sticky top-0 z-10">
    <a class="flex-none w-20 flex justify-center items-center" href="/">
      <img src="/images/Maria.png" class="w-16 h-16 image-effect" alt="Maria" />
    </a>
    <div class="flex-1 flex-col">
      <div class="sm:hidden h-24 flex items-center justify-center cursor-pointer select-none" on:click={() => clickNavExpand()}>
        <svg class="fill-black w-10 h-10" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.001 7.128L6 10.438l19.998-.005L26 7.124zM6.001 21.566L6 24.876l19.998-.006.002-3.308zM6.001 14.341L6 17.65l19.998-.004.002-3.309z"></path></g></svg>
      </div>
      <div class="sm:flex sm:flex-row flex-col sm:h-24 gap-1 justify-center items-center" class:hidden={!navMenuExpanded}>
        {#each navLinks as {title, link}}
          <div class="w-36 h-16 flex justify-center items-center">
            <a class="rounded-2xl w-4/5 h-4/5 flex justify-center items-center transition-all duration-250 ease-in-out bg-gray-400 text-gray-900 hover:bg-gray-600 hover:text-gray-200 hover:font-extrabold hover:scale-125" href={link}>{title}</a>
          </div>
        {/each}
      </div>
    </div>
    <a class="flex-none w-20 flex justify-center items-center" href="https://www.facebook.com/Queenshipofmary">
      <svg class="w-12 h-12 image-effect" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Facebook-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-200.000000, -160.000000)" fill="#4460A0"> <path d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z" id="Facebook"> </path> </g> </g> </g></svg>
    </a>
  </div>

  <div class="flex items-center justify-center mb-12">
    <div class="w-full lg:w-[1150px] px-4">
      <div class="w-full flex flex-col gap-12 mt-12">
        <div class="w-full overflow-hidden rounded-2xl">
          <img class="image-effect" src="/images/Trinh Vương Church 4.png" alt="Giao xu Trinh Vuong"  />
        </div>
        <slot name="content" />
      </div>
    </div>
  </div>

  <div class="w-full min-h-20 flex justify-center items-center font-bold text-xl bg-gray-200 p-4">
    Queenship of Mary Parish &mdash; 219 Armitage Avenue, Glen Ellyn, IL 60137
  </div>


</div>
