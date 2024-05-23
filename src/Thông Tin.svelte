<script>
  import Template from './Template.svelte';
</script>

<Template>
  <svelte:fragment slot="content">

    <div class="columns-1 sm:columns-2 gap-4 space-y-4">
      {#each [
        {date: 'January 8, 2023', google: 'https://drive.google.com/file/d/1FHmBroPitZAECsWRYHBEENv9aVLCEHFf/preview?usp=sharing'},
        {date: 'January 15, 2023', google: 'https://drive.google.com/file/d/1krm75grGIEzA6wFUYuceX96zmeZBEMrW/preview?usp=sharing'},
        {date: 'January 22, 2023', google: 'https://drive.google.com/file/d/14GWgWvsw3E3pTGiplxXeMrBKTnhgSMKP/preview?usp=sharing'},
        {date: 'January 29, 2023', google: 'https://drive.google.com/file/d/15PROUIQB-oLK-nGFsVuJO9QwhpHydZqi/preview?usp=sharing'},
      ] as { date, google, pdf }}

        <div class="flex flex-col gap-4">
          <h1>{date}</h1>
          <iframe src={google+'&embedded=true'} class="w-full h-80" frameborder="0"></iframe>
          <p><a class="link" href={google}>Xem chi tiết</a></p>
        </div>

      {/each}
    </div>

  </svelte:fragment>
</Template>