<script>
  import Template from './Template.svelte';
</script>

<Template>
  <svelte:fragment slot="content">

    <div class="columns-1 sm:columns-2 gap-4 space-y-4">
      {#each [
        {date: 'January 8, 2023', google: 'https://drive.google.com/file/d/1-5Xu1MLz5gwPVt840EFrdJKv5pKtQgQd/preview', pdf: '/Thong Tin Lien Lac/TTLL_8-1-2023.pdf'},
        {date: 'January 15, 2023', google: 'https://drive.google.com/file/d/1984vAQQdgE38-YROn3obYCfjNCpe2NIe/preview', pdf: '/Thong Tin Lien Lac/TTLL_15-1-2023.pdf'},
        {date: 'January 22, 2023', google: 'https://drive.google.com/file/d/1OlrJkWrrYd7K04tdc3sE2wDa0vrFlQ9m/preview', pdf: '/Thong Tin Lien Lac/TTLL_22-1-2023.pdf'},
        {date: 'January 29, 2023', google: 'https://drive.google.com/file/d/1rrqNU_IKgM3UdcQMc1V9nNtY22XpRq-Q/preview', pdf: '/Thong Tin Lien Lac/TTLL_29-1-2023.pdf'},
      ] as { date, google, pdf }}

        <div class="flex flex-col gap-4">
          <h1>{date}</h1>
          <embed class="w-full h-80" type="application/pdf" src={pdf} />
          <p><a class="link" href={google}>Xem chi tiết</a></p>
        </div>

      {/each}
    </div>

  </svelte:fragment>
</Template>