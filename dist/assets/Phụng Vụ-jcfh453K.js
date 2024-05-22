import { S as SvelteComponent, i as init, s as safe_not_equal, T as Template, c as create_component, m as mount_component, t as transition_in, a as transition_out, d as destroy_component, e as element, f as attr, g as insert, n as noop, j as detach } from "./Template-CZx_JbhG.js";
function create_content_slot(ctx) {
  let div2;
  return {
    c() {
      div2 = element("div");
      div2.innerHTML = `<h1>Lịch Phụng Vụ Tháng</h1> <div><img class="w-full" src="/Documents/February 2023.jpg" alt="Lich Phung Vu"/></div> <div><p>Lời Chúa</p> <p>Bài Đọc</p></div>`;
      attr(div2, "class", "flex flex-col gap-4");
    },
    m(target, anchor) {
      insert(target, div2, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(div2);
      }
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
      1) {
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
class PhuuCCuA3ngu20VuuCCuA3 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
new PhuuCCuA3ngu20VuuCCuA3({
  target: document.getElementById("app")
});
