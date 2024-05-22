<script>
  import Template from './Template.svelte';
</script>

<Template>
  <svelte:fragment slot="content">

    <div>
      <h1>Sinh Hoạt Hội trường Thánh Gia (Quán Tình)</h1>
      <p>Lịch Phục vụ: Phục vụ các món ăn mang về trong mỗi Chúa Nhật hàng tuần.</p>
    </div>

    <div class="flex flex-col gap-4">
      <h1>Giáo Lý-Việt Ngữ</h1>
      <div class="columns-1 sm:columns-3 gap-4 space-y-4">
        {#each ['/images/GLVN/GLVN1.jpg', '/images/GLVN/GLVN2.jpg', '/images/GLVN/GLVN3.jpg'] as photo}
          <div class="rounded-2xl overflow-hidden">
            <img class="w-full object-cover aspect-auto image-effect" src={photo} alt="Giáo Lý-Việt Ngữ" />
          </div>
        {/each}
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <h1>Đoàn TNTT</h1>
      <div class="columns-1 sm:columns-3 gap-4 space-y-4">
        {#each ['/images/Trung thu 2022/TT1.jpg', '/images/Trung thu 2022/TT2.jpg', '/images/Trung thu 2022/TT3.jpg', '/images/Trung thu 2022/TT4.jpg', '/images/Trung thu 2022/TT5.jpg', '/images/Trung thu 2022/TT6.jpg', '/images/Trung thu 2022/TT7.jpg', '/images/Trung thu 2022/TT8.jpg', '/images/Trung thu 2022/TT9.jpg', '/images/Trung thu 2022/TT10.jpg', '/images/Trung thu 2022/TT11.jpg', '/images/Trung thu 2022/TT12.jpg'] as photo}
          <div class="rounded-2xl overflow-hidden">
            <img class="w-full object-cover aspect-auto image-effect" src={photo} alt="Đoàn TNTT" />
          </div>
        {/each}
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <h1>Ca Đoàn GXTV</h1>
      <div class="columns-1 sm:columns-3 gap-4 space-y-4">
        {#each [] as photo}
          <div class="rounded-2xl overflow-hidden">
            <img class="w-full object-cover aspect-auto image-effect" src={photo} alt="Ca Đoàn GXTV" />
          </div>
        {/each}
      </div>
    </div>

  </svelte:fragment>
</Template>