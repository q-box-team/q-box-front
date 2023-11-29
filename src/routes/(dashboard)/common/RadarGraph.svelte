<script>
  import { LayerCake, Svg } from 'layercake';
  // import { scaleLinear } from 'd3-scale';
  // import { onMount } from 'svelte';
  import Radar from './_components/Radar.svelte';
  import AxisRadial from './_components/AxisRadial.svelte';
  import Button from '@smui/button';
  // This example loads csv data as json using @rollup/plugin-dsv
  const data = [
  {
    name: "Allison",
    "과제": 10,
    "난이도": 0,
    "중요도": 4,
    "흥미": 8,
    "성적": 5,
  }
];

  const seriesKey = 'name';
  const xKey = ['과제', '난이도', '중요도', '흥미', '성적'];

  const seriesNames = Object.keys(data[0]).filter(d => d !== seriesKey);

  data.forEach(d => {
    seriesNames.forEach(name => {
      d[name] = +d[name];
    });
  });
  $: console.log(data);
</script>

<div
  class="bg-c_wt wd_100p hg_100p blink_disable bd-rd_35"
  style="box-shadow: 0px 8px 13px #9d9d9d, 0px 25px #f0f2f7;"
>
  <div class="fnt-sz_30" style="padding-top: 30px; padding-left: 30px;"><b>평가분포</b></div>
  <div class="flex-child_j-start_a-start f_column" style="gap: 30px; padding-left: 30px; padding-right: 30px;">
    <div class="chart-container">
      <LayerCake
        padding={{ top: 30, right: 0, bottom: 7, left: 0 }}
        x={xKey}
        xDomain={[0, 10]}
        xRange={({ height }) => [0, height / 2]}
        data={data}
      >
        <Svg>
          <AxisRadial/>
          <Radar/>
        </Svg>
      </LayerCake>
    </div>
    <div class="flex-child_center wd_100p">
      <Button variant="outlined">평가하기</Button>
    </div>
  </div>
</div>


<style>
  /*
    The wrapper div needs to have an explicit width and height in CSS.
    It can also be a flexbox child or CSS grid element.
    The point being it needs dimensions since the <LayerCake> element will
    expand to fill it.
  */
  .chart-container {
    width: 100%;
    height: 250px;
  }
</style>