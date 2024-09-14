import { S as SvelteComponent, i as init, s as safe_not_equal, T as Template, c as create_component, m as mount_component, t as transition_in, a as transition_out, d as destroy_component, o as ensure_array_like, e as element, b as space, f as attr, g as insert, h as append, n as noop, j as detach, p as destroy_each } from "./Template-BZ4s52IX.js";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[0] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[0] = list[i];
  return child_ctx;
}
function create_each_block_1(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      div.innerHTML = `<img class="w-full object-cover aspect-auto image-effect" src="${/*photo*/
      ctx[0]}" alt="Xây nhà thờ mới"/> `;
      attr(div, "class", "rounded-2xl overflow-hidden");
    },
    m(target, anchor) {
      insert(target, div, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
    }
  };
}
function create_each_block(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      div.innerHTML = `<img class="w-full object-cover aspect-auto image-effect" src="${/*photo*/
      ctx[0]}" alt="Nhà thờ mới"/> `;
      attr(div, "class", "rounded-2xl overflow-hidden");
    },
    m(target, anchor) {
      insert(target, div, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
    }
  };
}
function create_content_slot(ctx) {
  let div15;
  let t14;
  let div16;
  let t18;
  let div18;
  let h11;
  let t20;
  let div17;
  let t21;
  let div20;
  let h12;
  let t23;
  let div19;
  let each_value_1 = ensure_array_like([
    "/images/Xây dựng GX/CRW_4620.JPG",
    "/images/Xây dựng GX/CRW_4624.JPG",
    "/images/Xây dựng GX/CRW_4626.JPG",
    "/images/Xây dựng GX/CRW_4628.JPG",
    "/images/Xây dựng GX/CRW_4611.JPG",
    "/images/Xây dựng GX/CRW_4603.JPG"
  ]);
  let each_blocks_1 = [];
  for (let i = 0; i < 6; i += 1) {
    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  let each_value = ensure_array_like([
    "/images/Thánh Hiến nhà thờ mới/CRW_4770.jpg",
    "/images/Thánh Hiến nhà thờ mới/CRW_4801.jpg",
    "/images/Thánh Hiến nhà thờ mới/CRW_4806.jpg",
    "/images/Thánh Hiến nhà thờ mới/CRW_4812.jpg",
    "/images/Thánh Hiến nhà thờ mới/CRW_4822.jpg",
    "/images/Thánh Hiến nhà thờ mới/CRW_4835.jpg"
  ]);
  let each_blocks = [];
  for (let i = 0; i < 6; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      div15 = element("div");
      div15.innerHTML = `<div class=""><div class="rounded-2xl overflow-hidden"><img class="w-full object-cover aspect-square image-effect" src="/images/Cha Quyền.png" alt="Cha AnPhonso Nguyễn Huy Quyền (1993-2012)"/></div> <div class="flex justify-end"><div class="flex-none w-fit text-lg text-gray-600">1993-2012</div></div> <div class="text-lg font-bold">Cha AnPhonso Nguyễn Huy Quyền</div></div> <div class=""><div class="rounded-2xl overflow-hidden"><img class="w-full object-cover aspect-square image-effect" src="/images/Cha Đồng.png" alt="Cha Giuse Bùi văn Đồng (2012-2018)"/></div> <div class="flex justify-end"><div class="flex-none w-fit text-lg text-gray-600">2012-2018</div></div> <div class="text-lg font-bold">Cha Giuse Bùi văn Đồng</div></div> <div class=""><div class="rounded-2xl overflow-hidden"><img class="w-full object-cover aspect-square image-effect" src="/images/Cha Trị.png" alt="Cha Gioan Baotixita Trần văn Trị (2018 - nay)"/></div> <div class="flex justify-end"><div class="flex-none w-fit text-lg text-gray-600">2018 - nay</div></div> <div class="text-lg font-bold">Cha Gioan Baotixita Trần văn Trị</div></div>`;
      t14 = space();
      div16 = element("div");
      div16.innerHTML = `<h1>Lịch Sử Giáo Xứ</h1> <p>Qua sự bảo trợ của cơ quan Công giáo Mỹ, gọi tắt là U.S.C.C, và đặc biệt sự tận tình giúp đỡ của cha Pekin, cha AnPhonso Nguyễn Huy Quyền thuộc Giáo xứ Vinh Phú, Phan Thiết, miền Trung Việt nam và rất nhiều giáo dân Công giáo được bảo lãnh và định cư ở Glendale Heights, Illinois và các vùng lân cận. Vì là người Công giáo Việt Nam nên việc đầu tiên và quan trọng nhất phải có nơi để cử hành thánh lễ bằng tiếng Việt, ít nhất ngày Chúa nhật mỗi tuần. Hiểu được nhu cầu này, tòa giám mục địa phận Joliet đã sắp xếp để cha Quyền có thể cử hành thánh lễ Chủ nhật lúc 3:00 chiều tại nhà thờ Saint Mathew thuộc thành phố Glendale Heights. Năm 1990 Cha Quyền và Ban điều hành giáo xứ bắt đầu ưu tư là làm sao có một ngôi thánh đường riêng cho cộng đoàn VN, và vào thời điểm đó có một ngôi nhà thờ Tin Lành, tên là Faith Congregational Church đang rao bán vì thiếu tín đồ. Ngôi nhà thờ này nằm trên một khu đất rộng năm mẫu, thuộc giữa làng Glendale Heights và Glen Ellyn. Chỉ có một điều là ngôi nhà thờ này hơi chật và rất cũ cần tu bổ nhiều. Một đội ngũ bắt đầu từ già đến trẻ chung tay nhau sửa chữa và tu bổ lại ngôi nhà thờ cũ kỹ. Phải hãnh diện mà nói rằng nguyện đường đầu tiên của giáo xứ Trinh Vương là kết quả đóng góp của rất nhiều giáo dân như bài tường thuật của tờ báo New Catholic Explorer ra ngày 4 tháng 6 năm 1993: &quot;Mỗi viên gạch, mỗi chiếc cọ sơn, mỗi lối đi, mọi chi tiết nhỏ là do sự tham gia của các thành viên nhiệt thành từ già đến trẻ.&quot; (Every brick, every brush of paint, every pavement on the walkway, every single detail has been attended to by dedicated parish members from the young to the old). Qua sự giúp đỡ của tòa giám mục Joliet, lòng nhiệt thành xây dựng nhà Chúa và tinh thần làm việc chung của cộng đoàn, ngôi thánh đường nhỏ bé nhưng ấm cúng đã được thành hình và được khánh thành một cách trọng thể ngày 29 tháng 5, 1993 do Đức Giám Mục Joseph L. Imesch. Cộng đoàn TRINH VƯƠNG (Queenship of Mary Catholic Church) được chính thức ra đời và cha Anphonsô Nguyễn Huy Quyền được phong làm cha Chánh xứ đầu tiên của giáo xứ Trinh Vương. Do số giáo dân ngày càng tăng và nhà thờ thì không đũ sức chứa. Do đó kế hoạch xây nhà thờ mới được Cha Quyền và Hội đồng Mục Vụ đệ trình lên địa phận và đã được sự chấp thuận. Giáo xứ Trinh Vương lại mở thêm một trang sử mới: Ngày 19 tháng 6 năm 2005 Đức giám mục tới đặt viên đá đầu tiên cho ngôi Thánh đường mới và tới ngày 28 tháng 6 năm 2006, cũng Đức giám mục Joseph Imesch đã cắt băng khánh thành nhà thờ mới cùng với cha Quyền.</p>`;
      t18 = space();
      div18 = element("div");
      h11 = element("h1");
      h11.textContent = "Một vài hình ảnh xây dựng nhà thờ mới năm 2005";
      t20 = space();
      div17 = element("div");
      for (let i = 0; i < 6; i += 1) {
        each_blocks_1[i].c();
      }
      t21 = space();
      div20 = element("div");
      h12 = element("h1");
      h12.textContent = "Lễ Thánh Hiến nhà thờ mới January, 2006";
      t23 = space();
      div19 = element("div");
      for (let i = 0; i < 6; i += 1) {
        each_blocks[i].c();
      }
      attr(div15, "class", "columns-1 sm:columns-3");
      attr(div17, "class", "columns-1 sm:columns-3 gap-4 space-y-4");
      attr(div18, "class", "flex flex-col gap-4");
      attr(div19, "class", "columns-1 sm:columns-3 gap-4 space-y-4");
      attr(div20, "class", "flex flex-col gap-4");
    },
    m(target, anchor) {
      insert(target, div15, anchor);
      insert(target, t14, anchor);
      insert(target, div16, anchor);
      insert(target, t18, anchor);
      insert(target, div18, anchor);
      append(div18, h11);
      append(div18, t20);
      append(div18, div17);
      for (let i = 0; i < 6; i += 1) {
        if (each_blocks_1[i]) {
          each_blocks_1[i].m(div17, null);
        }
      }
      insert(target, t21, anchor);
      insert(target, div20, anchor);
      append(div20, h12);
      append(div20, t23);
      append(div20, div19);
      for (let i = 0; i < 6; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div19, null);
        }
      }
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(div15);
        detach(t14);
        detach(div16);
        detach(t18);
        detach(div18);
        detach(t21);
        detach(div20);
      }
      destroy_each(each_blocks_1, detaching);
      destroy_each(each_blocks, detaching);
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
      if (dirty & /*$$scope*/
      32) {
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
class GiauCCu81ou20XuuCCu9BuCCu81 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
new GiauCCu81ou20XuuCCu9BuCCu81({
  target: document.getElementById("app")
});
