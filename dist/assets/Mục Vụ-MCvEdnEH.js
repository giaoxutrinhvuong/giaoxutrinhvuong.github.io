import { S as SvelteComponent, i as init, s as safe_not_equal, T as Template, c as create_component, m as mount_component, t as transition_in, a as transition_out, d as destroy_component, e as element, b as space, f as attr, g as insert, n as noop, j as detach } from "./Template-CZx_JbhG.js";
function create_content_slot(ctx) {
  let div3;
  let t6;
  let div7;
  let t13;
  let div11;
  let t22;
  let div15;
  let t29;
  let div19;
  let t36;
  let div23;
  return {
    c() {
      div3 = element("div");
      div3.innerHTML = `<div class="flex-none w-full sm:w-1/2 flex flex-col gap-4 items-center justify-center"><div class="w-full overflow-hidden rounded-2xl"><img class="image-effect" src="/images/baptism2.png" alt="Baptism"/></div></div> <div class="flex-none w-full sm:w-1/2 flex flex-col gap-4 items-center justify-center text-center"><h2>Bí Tích Rửa tội</h2> <p class="font-bold">&quot;Khi được sinh ra, tất cả chúng ta đều có tội. Đó là tội nguyên tổ, tội mà gia đình đầu tiên là ông Ađam và Evà đã phạm. Khi rửa tội, chúng ta được rửa sạch tội nguyên tổ và tất cả các tội ta đã phạm trước đó.&quot;</p> <p>Bí tích rửa tội được tiến hành sau mỗi Thánh lễ Chúa Nhật, mọi chi tiết xin liên lạc với Cha Chánh xứ, anh Đức-Trưởng ban Phụng Vụ hoặc cô Phước- Trưởng ban GLVN.</p></div>`;
      t6 = space();
      div7 = element("div");
      div7.innerHTML = `<div class="flex-none w-full sm:w-1/2 flex flex-col gap-4 items-center justify-center"><div class="w-full overflow-hidden rounded-2xl"><img class="image-effect" src="/images/GLVN/Thêm Sức 1.JPG" alt="Confirmation"/></div></div> <div class="flex-none w-full sm:w-1/2 flex flex-col gap-4 items-center justify-center text-center"><h2>Bí Tích Thêm Sức</h2> <p class="font-bold">&quot;Là bí tích Ðức Chúa Giêsu đã lập cho ta nhận lấy Chúa Thánh Thần cách đặc biệt, để ta giữ đạo nên và trở thành chiến Sĩ Chúa Kitô. Bất cứ ai đã được rửa tội đều có thể nhận bí tích Thêm Sức&quot;</p> <p>Mọi chi tiết xin liên lạc với Cha Chánh xứ, anh Đức-Trưởng Ban Phụng Vụ hoặc cô Phước-Trưởng ban GLVN.</p></div>`;
      t13 = space();
      div11 = element("div");
      div11.innerHTML = `<div class="flex-none w-full sm:w-1/2 flex flex-col gap-4 items-center justify-center"><div class="w-full overflow-hidden rounded-2xl"><img class="image-effect" src="/images/GLTT-HN/GLTT1.jpg" alt="Tân Tòng"/></div></div> <div class="flex-none w-full sm:w-1/2 flex flex-col gap-4 items-center justify-center text-center"><h2>Lớp Giáo lý Tân Tòng - Hôn Nhân</h2> <p>Lớp Giáo lý Tân Tòng và Hôn Nhân sẽ được khai giảng vào ngày 30 tháng 10 năm 2022. Mọi chi tiết xin liên lạc với Cha Chánh Xứ, anh Lĩnh hoặc anh Bắc.</p> <p>Anh Lĩnh: 630-947-3858</p> <p>Anh Bắc: 630-935-5125</p></div>`;
      t22 = space();
      div15 = element("div");
      div15.innerHTML = `<div class="flex-none w-full sm:w-1/2 flex flex-col gap-4 items-center justify-center"><div class="w-full overflow-hidden rounded-2xl"><img class="image-effect" src="/images/Bí Tích Giải tội.png" alt="Sacrament of reconciliation"/></div></div> <div class="flex-none w-full sm:w-1/2 flex flex-col gap-4 items-center justify-center text-center"><h2>Bí Tích Giải tội</h2> <p class="font-bold">&quot;Bí tích này là một quà tặng lớn lao của Thiên Chúa. Qua linh mục, người lắng nghe tội lỗi của chúng ta khi chúng ta đến và xưng thú tội lỗi trong sự tin tưởng ngài, Thiên Chúa tha thứ mọi hành động và thiếu sót của chúng ta vỗn đã làm chúng ta xúc phạm Ngài. Một lần nữa, chúng ta phải thật sự ăn năn về những điều xấu chúng ta đã làm, và những điều tốt đẹp mà chúng ta đã bỏ qua. Bên cạnh đó, bí tích Hòa giải mang lại cho chúng ta một sự bình an lớn lao và tăng sức mạnh cho chúng ta để trở thành Kitô hữu tốt, nghĩa là những người con của Thiên Chúa.&quot;</p> <p>Bí tích giải tội thường tiến hành trước các Thánh Lễ Chúa Nhật hoặc gọi lấy hẹn trước với Cha Chánh Xứ.</p></div>`;
      t29 = space();
      div19 = element("div");
      div19.innerHTML = `<div class="flex-none w-full sm:w-1/2 flex flex-col gap-4 items-center justify-center"><div class="w-full overflow-hidden rounded-2xl"><img class="image-effect" src="/images/Bí Tích Hôn Phối.png" alt="Sacrament of Holy Matrimony"/></div></div> <div class="flex-none w-full sm:w-1/2 flex flex-col gap-4 items-center justify-center text-center"><h2>Bí Tích Hôn Phối</h2> <p class="font-bold">&quot;Bí tích này là sự kết hợp vĩnh viễn giữa một người nam và một người nữ. Khi họ kết hôn trong Giáo Hội, chính Thiên Chúa là Đấng hiệp nhất thân thể và linh hồn của họ. Những người kết hôn sẽ không phá vỡ mối quan hệ hôn nhân của họ: “Điều mà Thiên Chúa đã kết hiệp, con người không được phân ly”.&quot;</p> <p>Mọi chi tiết xin liên lạc với Cha Chánh xứ hoặc anh Đức-Trưởng Ban Phụng Vụ.</p></div>`;
      t36 = space();
      div23 = element("div");
      div23.innerHTML = `<div class="flex-none w-full sm:w-1/2 flex flex-col gap-4 items-center justify-center"><div class="w-full overflow-hidden rounded-2xl"><img class="image-effect" src="/images/Anointing of the Sick.jpg" alt="Anointing of the Sick"/></div></div> <div class="flex-none w-full sm:w-1/2 flex flex-col gap-4 items-center justify-center text-center"><h2>Bí Tích Hôn Phối</h2> <p class="font-bold">&quot;Xức dầu là sự trợ giúp đem lại sức mạnh, sự bình an và sự khích lệ; thêm vào đó, là việc tha thứ tất cả những lỗi lầm của người bệnh và chuẩn bị cho họ trong lúc chết.&quot;</p> <p>Xin vui lòng lên hệ Cha Chánh Xứ hoặc Cha Quyền.</p></div>`;
      attr(div3, "class", "flex flex-col even:sm:flex-row-reverse odd:sm:flex-row gap-12");
      attr(div7, "class", "flex flex-col even:sm:flex-row-reverse odd:sm:flex-row gap-12");
      attr(div11, "class", "flex flex-col even:sm:flex-row-reverse odd:sm:flex-row gap-12");
      attr(div15, "class", "flex flex-col even:sm:flex-row-reverse odd:sm:flex-row gap-12");
      attr(div19, "class", "flex flex-col even:sm:flex-row-reverse odd:sm:flex-row gap-12");
      attr(div23, "class", "flex flex-col even:sm:flex-row-reverse odd:sm:flex-row gap-12");
    },
    m(target, anchor) {
      insert(target, div3, anchor);
      insert(target, t6, anchor);
      insert(target, div7, anchor);
      insert(target, t13, anchor);
      insert(target, div11, anchor);
      insert(target, t22, anchor);
      insert(target, div15, anchor);
      insert(target, t29, anchor);
      insert(target, div19, anchor);
      insert(target, t36, anchor);
      insert(target, div23, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(div3);
        detach(t6);
        detach(div7);
        detach(t13);
        detach(div11);
        detach(t22);
        detach(div15);
        detach(t29);
        detach(div19);
        detach(t36);
        detach(div23);
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
class MuuCCuA3cu20VuuCCuA3 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
new MuuCCuA3cu20VuuCCuA3({
  target: document.getElementById("app")
});
