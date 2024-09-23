import { S as SvelteComponent, i as init, s as safe_not_equal, T as Template, c as create_component, m as mount_component, t as transition_in, a as transition_out, d as destroy_component, e as element, b as space, f as attr, g as insert, h as append, l as listen, n as noop, j as detach, r as run_all, k as binding_callbacks } from "./Template-C88_TxDO.js";
function create_content_slot(ctx) {
  let div12;
  let t24;
  let div16;
  let t35;
  let div27;
  let div25;
  let div24;
  let div20;
  let t38;
  let div23;
  let div21;
  let t39;
  let div22;
  let t40;
  let div26;
  let t48;
  let div30;
  let mounted;
  let dispose;
  return {
    c() {
      div12 = element("div");
      div12.innerHTML = `<div class="flex flex-col gap-4 items-center justify-center"><h1>Xem Thánh lễ trực tuyến</h1> <iframe class="w-full aspect-video" src="https://www.youtube.com/embed/Q4rK_cRjvqA?si=SZHo8rtDlYEmUsDt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe></div> <div class="flex flex-col gap-4 items-center justify-center"><h1>Giờ Thánh lễ:</h1> <h2>Ngày trong tuần:</h2> <div class="flex flex-wrap gap-4 justify-evenly"><div class="w-fit min-h-8 flex justify-center rounded-lg px-4 text-lg bg-gray-200">Thứ Ba: 6:00pm</div> <div class="w-fit min-h-8 flex justify-center rounded-lg px-4 text-lg bg-gray-200">Thứ Tư: 6:00pm</div> <div class="w-fit min-h-8 flex justify-center rounded-lg px-4 text-lg bg-gray-200">Thứ Năm: 6:00pm</div> <div class="w-fit min-h-8 flex justify-center rounded-lg px-4 text-lg bg-gray-200">Thứ Sáu: 6:00pm</div></div> <h2>Chúa Nhật:</h2> <div class="flex flex-wrap gap-4 justify-evenly"><div class="w-fit min-h-8 flex justify-center rounded-lg px-4 text-lg bg-gray-200">8:30am – 9:30am Thánh lễ I</div> <div class="w-fit min-h-8 flex justify-center rounded-lg px-4 text-lg bg-gray-200">12:30pm – 1:30pm Thánh lễ II</div> <div class="w-fit min-h-8 flex justify-center rounded-lg px-4 text-lg bg-gray-200">Rửa tội: Sau Thánh lễ II</div> <div class="w-fit min-h-8 flex justify-center rounded-lg px-4 text-lg bg-gray-200">Giải tội: Trước các Thánh Lễ Chúa Nhật hoặc lấy hẹn trước</div></div></div>`;
      t24 = space();
      div16 = element("div");
      div16.innerHTML = `<div class="flex-1 w-full sm:w-1/2 flex flex-col gap-4 items-center justify-center"><div class="w-full overflow-hidden rounded-2xl"><img class="image-effect" src="/images/Cha Trị.png" alt="Cha Trị image"/></div></div> <div class="flex-1 w-full sm:w-1/2 flex flex-col gap-4 items-center justify-center text-center"><h2>Cha Chánh xứ: JB Trần văn Trị</h2> <h2 class="text-red-500">Lời nguyện trong cơn dịch bệnh</h2> <p>Lạy Thiên chúa Ba Ngôi toàn năng chúng con đang họp nhau cầu nguyện, tha thiết nài xin cho cơn dịch bệnh mau chấm dứt.</p> <p>Lạy Chúa Cha giàu lòng thương xót xin nhìn đến nỗi thống khổ của đoàn con trên khắp thế giới, đặc biệt tại những nơi dịch bệnh đang hoành hành. Xin củng cố đức tin của chúng con, cho chúng con hoàn toàn tín thác vào tình yêu quan phòng của Cha.</p> <p><a class="link" href="/Documents/Lời Nguyện trong cơn dịch bệnh.pdf">Đọc Tiếp</a></p></div>`;
      t35 = space();
      div27 = element("div");
      div25 = element("div");
      div24 = element("div");
      div20 = element("div");
      div20.innerHTML = `<div class="snap-start w-full flex-none"><img class="w-full h-full object-cover" src="/images/Cung Thánh 1.jpg" alt=""/></div> <div class="snap-start w-full flex-none"><img class="w-full h-full object-cover" src="/images/Cung Thánh 2.jpg" alt=""/></div> <div class="snap-start w-full flex-none"><img class="w-full h-full object-cover" src="/images/Đài Đức Mẹ.jpg" alt=""/></div>`;
      t38 = space();
      div23 = element("div");
      div21 = element("div");
      div21.innerHTML = `<svg fill="#000000" class="w-full h-full" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><polygon points="213.3,205.3 213.3,77.3 0,248 213.3,418.7 213.3,290.7 512,290.7 512,205.3 "></polygon></g></svg>`;
      t39 = space();
      div22 = element("div");
      div22.innerHTML = `<svg fill="#000000" class="w-full h-full" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve" transform="matrix(-1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><polygon points="213.3,205.3 213.3,77.3 0,248 213.3,418.7 213.3,290.7 512,290.7 512,205.3 "></polygon></g></svg>`;
      t40 = space();
      div26 = element("div");
      div26.innerHTML = `<h2>Giáo Xứ Trinh Vương</h2> <h2 class="text-blue-500">Thông Báo</h2> <p>Ban Phụng Vụ:</p> <p>Bắt đầu ngày đầu năm mới phụng vụ (năm A) nhằm ngày 27 tháng 11 Chúa Nhật thứ nhất mùa Vọng, thánh lễ sẽ có sự hiện diện của các em giúp lễ và gia đình dâng của lễ. Kính mời các gia đình và các em thiếu nhi cộng tác với chúng tôi để cho Thánh lễ thêm phần sốt sắng và trang nghiêm. Mọi chi tiết xin liên lạc với anh Đức- Trưởng ban Phụng Vụ</p>`;
      t48 = space();
      div30 = element("div");
      div30.innerHTML = `<div class="mapouter"><div class="gmap_canvas"><iframe crossorigin="anonymous" class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="//maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=219 Armitage Ave Glen Ellyn, IL&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://embed-googlemap.com">embed google map</a></div><style>.mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}</style></div>`;
      attr(div12, "class", "grid grid-cols-1 sm:grid-cols-2 gap-12");
      attr(div16, "class", "w-full flex flex-col sm:flex-row-reverse gap-12");
      attr(div20, "class", "flex overflow-x-scroll scroll-smooth snap-x snap-mandatory w-full h-full carousel rounded-2xl");
      attr(div21, "class", "prev select-none cursor-pointer text-3xl rounded-full bg-white/50 w-10 h-10 flex justify-center items-center p-1");
      attr(div22, "class", "next select-none cursor-pointer text-3xl rounded-full bg-white/50 w-10 h-10 flex justify-center items-center p-1");
      attr(div23, "class", "w-full flex justify-between absolute bottom-1/2 translate-y-1/2 p-4 z-1");
      attr(div24, "class", "w-full flex flex-col relative");
      attr(div25, "class", "flex-1 w-full sm:w-1/2 flex flex-col gap-4 items-center justify-center");
      attr(div26, "class", "flex-1 w-full sm:w-1/2 flex flex-col gap-4 items-center justify-center text-center");
      attr(div27, "class", "w-full flex flex-col sm:flex-row gap-12");
      attr(div30, "class", "flex w-full");
    },
    m(target, anchor) {
      insert(target, div12, anchor);
      insert(target, t24, anchor);
      insert(target, div16, anchor);
      insert(target, t35, anchor);
      insert(target, div27, anchor);
      append(div27, div25);
      append(div25, div24);
      append(div24, div20);
      ctx[3](div20);
      append(div24, t38);
      append(div24, div23);
      append(div23, div21);
      append(div23, t39);
      append(div23, div22);
      append(div27, t40);
      append(div27, div26);
      insert(target, t48, anchor);
      insert(target, div30, anchor);
      if (!mounted) {
        dispose = [
          listen(
            div21,
            "click",
            /*prevCarousel*/
            ctx[2]
          ),
          listen(
            div22,
            "click",
            /*nextCarousel*/
            ctx[1]
          )
        ];
        mounted = true;
      }
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(div12);
        detach(t24);
        detach(div16);
        detach(t35);
        detach(div27);
        detach(t48);
        detach(div30);
      }
      ctx[3](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment(ctx) {
  let template;
  let current;
  template = new Template({
    props: {
      $$slots: { content: [create_content_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(template.$$.fragment);
    },
    m(target, anchor) {
      mount_component(template, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const template_changes = {};
      if (dirty & /*$$scope, carousel*/
      129) {
        template_changes.$$scope = { dirty, ctx: ctx2 };
      }
      template.$set(template_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(template.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(template.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(template, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let carousel;
  let slide = 0;
  let slides = 0;
  let carouselWidth = 0;
  function nextCarousel() {
    slide = (slide + 1) % slides;
    $$invalidate(0, carousel.scrollLeft = slide * carouselWidth, carousel);
  }
  function prevCarousel() {
    slide = (slides + slide - 1) % slides;
    $$invalidate(0, carousel.scrollLeft = slide * carouselWidth, carousel);
  }
  function div20_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      carousel = $$value;
      $$invalidate(0, carousel);
    });
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*carousel*/
    1) {
      {
        if (carousel) {
          slides = carousel.children.length;
          carouselWidth = carousel.clientWidth;
        }
      }
    }
  };
  return [carousel, nextCarousel, prevCarousel, div20_binding];
}
class Index extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
new Index({
  target: document.getElementById("app")
});
