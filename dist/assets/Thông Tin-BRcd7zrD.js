import { S as SvelteComponent, i as init, s as safe_not_equal, T as Template, c as create_component, m as mount_component, t as transition_in, a as transition_out, d as destroy_component, o as ensure_array_like, e as element, f as attr, g as insert, n as noop, j as detach, p as destroy_each, b as space, q as src_url_equal, h as append } from "./Template-BZ4s52IX.js";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[0] = list[i].date;
  child_ctx[1] = list[i].google;
  child_ctx[2] = list[i].pdf;
  return child_ctx;
}
function create_each_block(ctx) {
  let div;
  let h1;
  let t1;
  let iframe;
  let iframe_src_value;
  let t2;
  let p;
  let t4;
  return {
    c() {
      div = element("div");
      h1 = element("h1");
      h1.textContent = `${/*date*/
      ctx[0]}`;
      t1 = space();
      iframe = element("iframe");
      t2 = space();
      p = element("p");
      p.innerHTML = `<a class="link" href="${/*google*/
      ctx[1]}">Xem chi tiết</a>`;
      t4 = space();
      if (!src_url_equal(iframe.src, iframe_src_value = /*google*/
      ctx[1] + "&embedded=true"))
        attr(iframe, "src", iframe_src_value);
      attr(iframe, "class", "w-full h-80");
      attr(iframe, "frameborder", "0");
      attr(div, "class", "flex flex-col gap-4");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, h1);
      append(div, t1);
      append(div, iframe);
      append(div, t2);
      append(div, p);
      append(div, t4);
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
  let div;
  let each_value = ensure_array_like([
    {
      date: "January 8, 2023",
      google: "https://drive.google.com/file/d/1FHmBroPitZAECsWRYHBEENv9aVLCEHFf/preview?usp=sharing"
    },
    {
      date: "January 15, 2023",
      google: "https://drive.google.com/file/d/1krm75grGIEzA6wFUYuceX96zmeZBEMrW/preview?usp=sharing"
    },
    {
      date: "January 22, 2023",
      google: "https://drive.google.com/file/d/14GWgWvsw3E3pTGiplxXeMrBKTnhgSMKP/preview?usp=sharing"
    },
    {
      date: "January 29, 2023",
      google: "https://drive.google.com/file/d/15PROUIQB-oLK-nGFsVuJO9QwhpHydZqi/preview?usp=sharing"
    }
  ]);
  let each_blocks = [];
  for (let i = 0; i < 4; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      div = element("div");
      for (let i = 0; i < 4; i += 1) {
        each_blocks[i].c();
      }
      attr(div, "class", "columns-1 sm:columns-2 gap-4 space-y-4");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      for (let i = 0; i < 4; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div, null);
        }
      }
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
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
class ThouCCu82ngu20Tin extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
new ThouCCu82ngu20Tin({
  target: document.getElementById("app")
});
