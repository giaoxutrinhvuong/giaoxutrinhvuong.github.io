import { S as SvelteComponent, i as init, s as safe_not_equal, T as Template, c as create_component, m as mount_component, t as transition_in, a as transition_out, d as destroy_component, o as ensure_array_like, e as element, b as space, f as attr, g as insert, h as append, n as noop, j as detach, p as destroy_each } from "./Template-Dcmw46pL.js";
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
function get_each_context_2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[0] = list[i];
  return child_ctx;
}
function create_each_block_2(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      div.innerHTML = `<img class="w-full object-cover aspect-auto image-effect" src="${/*photo*/
      ctx[0]}" alt="Giáo Lý-Việt Ngữ"/> `;
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
function create_each_block_1(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      div.innerHTML = `<img class="w-full object-cover aspect-auto image-effect" src="${/*photo*/
      ctx[0]}" alt="Đoàn TNTT"/> `;
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
      ctx[0]}" alt="Ca Đoàn GXTV"/> `;
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
  let div0;
  let t3;
  let div2;
  let h11;
  let t5;
  let div1;
  let t6;
  let div4;
  let h12;
  let t8;
  let div3;
  let t9;
  let div6;
  let h13;
  let t11;
  let div5;
  let each_value_2 = ensure_array_like(["/images/GLVN/GLVN1.jpg", "/images/GLVN/GLVN2.jpg", "/images/GLVN/GLVN3.jpg"]);
  let each_blocks_2 = [];
  for (let i = 0; i < 3; i += 1) {
    each_blocks_2[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
  }
  let each_value_1 = ensure_array_like([
    "/images/Trung thu 2022/TT1.jpg",
    "/images/Trung thu 2022/TT2.jpg",
    "/images/Trung thu 2022/TT3.jpg",
    "/images/Trung thu 2022/TT4.jpg",
    "/images/Trung thu 2022/TT5.jpg",
    "/images/Trung thu 2022/TT6.jpg",
    "/images/Trung thu 2022/TT7.jpg",
    "/images/Trung thu 2022/TT8.jpg",
    "/images/Trung thu 2022/TT9.jpg",
    "/images/Trung thu 2022/TT10.jpg",
    "/images/Trung thu 2022/TT11.jpg",
    "/images/Trung thu 2022/TT12.jpg"
  ]);
  let each_blocks_1 = [];
  for (let i = 0; i < 12; i += 1) {
    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  let each_value = ensure_array_like([]);
  let each_blocks = [];
  for (let i = 0; i < 0; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      div0 = element("div");
      div0.innerHTML = `<h1>Sinh Hoạt Hội trường Thánh Gia (Quán Tình)</h1> <p>Lịch Phục vụ: Phục vụ các món ăn mang về trong mỗi Chúa Nhật hàng tuần.</p>`;
      t3 = space();
      div2 = element("div");
      h11 = element("h1");
      h11.textContent = "Giáo Lý-Việt Ngữ";
      t5 = space();
      div1 = element("div");
      for (let i = 0; i < 3; i += 1) {
        each_blocks_2[i].c();
      }
      t6 = space();
      div4 = element("div");
      h12 = element("h1");
      h12.textContent = "Đoàn TNTT";
      t8 = space();
      div3 = element("div");
      for (let i = 0; i < 12; i += 1) {
        each_blocks_1[i].c();
      }
      t9 = space();
      div6 = element("div");
      h13 = element("h1");
      h13.textContent = "Ca Đoàn GXTV";
      t11 = space();
      div5 = element("div");
      for (let i = 0; i < 0; i += 1) {
        each_blocks[i].c();
      }
      attr(div1, "class", "columns-1 sm:columns-3 gap-4 space-y-4");
      attr(div2, "class", "flex flex-col gap-4");
      attr(div3, "class", "columns-1 sm:columns-3 gap-4 space-y-4");
      attr(div4, "class", "flex flex-col gap-4");
      attr(div5, "class", "columns-1 sm:columns-3 gap-4 space-y-4");
      attr(div6, "class", "flex flex-col gap-4");
    },
    m(target, anchor) {
      insert(target, div0, anchor);
      insert(target, t3, anchor);
      insert(target, div2, anchor);
      append(div2, h11);
      append(div2, t5);
      append(div2, div1);
      for (let i = 0; i < 3; i += 1) {
        if (each_blocks_2[i]) {
          each_blocks_2[i].m(div1, null);
        }
      }
      insert(target, t6, anchor);
      insert(target, div4, anchor);
      append(div4, h12);
      append(div4, t8);
      append(div4, div3);
      for (let i = 0; i < 12; i += 1) {
        if (each_blocks_1[i]) {
          each_blocks_1[i].m(div3, null);
        }
      }
      insert(target, t9, anchor);
      insert(target, div6, anchor);
      append(div6, h13);
      append(div6, t11);
      append(div6, div5);
      for (let i = 0; i < 0; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div5, null);
        }
      }
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(div0);
        detach(t3);
        detach(div2);
        detach(t6);
        detach(div4);
        detach(t9);
        detach(div6);
      }
      destroy_each(each_blocks_2, detaching);
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
      128) {
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
class Sinhu20HoauCCuA3t extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
new Sinhu20HoauCCuA3t({
  target: document.getElementById("app")
});
