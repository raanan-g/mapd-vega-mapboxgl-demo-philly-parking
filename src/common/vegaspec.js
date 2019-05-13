import sls from "single-line-string"

const makeVegaSpec = ({
  width,
  height,
  minXBounds,
  minYBounds,
  maxYBounds,
  maxXBounds,
  dateString
}) => ({"width":885,"height":639,"data":[{"name":"backendChoropleth","format":"polys","sql":"SELECT flint_parce_pred_test.rowid, flint_parce_pred_test.omnisci_geo, avg_ as color FROM flint_parce_pred_test WHERE (ST_XMax(flint_parce_pred_test.omnisci_geo) >= -83.75698168309283 AND ST_XMin(flint_parce_pred_test.omnisci_geo) <= -83.45231955083288 AND ST_YMax(flint_parce_pred_test.omnisci_geo) >= 42.946208131752456 AND ST_YMin(flint_parce_pred_test.omnisci_geo) <= 43.1070188297042)"},{"name":"backendChoropleth_stats","source":"backendChoropleth","transform":[{"type":"aggregate","fields":["color","color","color","color"],"ops":["min","max","avg","stddev"],"as":["mincol","maxcol","avgcol","stdcol"]},{"type":"formula","expr":"max(mincol, avgcol-2*stdcol)","as":"mincolor"},{"type":"formula","expr":"min(maxcol, avgcol+2*stdcol)","as":"maxcolor"}]}],"scales":[{"name":"x","type":"linear","domain":[-9323784.550064169,-9289869.716641651],"range":"width"},{"name":"y","type":"linear","domain":[5303787.756180053,5328275.415566543],"range":"height"},{"name":"backendChoropleth_fillColor","type":"quantize","domain":{"data":"backendChoropleth_stats","fields":["mincolor","maxcolor"]},"range":["rgba(77,144,79,0.85)","rgba(90,166,81,0.85)","rgba(137,188,85,0.85)","rgba(191,211,89,0.85)","rgba(237,225,91,0.85)","rgba(237,179,78,0.85)","rgba(236,124,63,0.85)","rgba(225,75,49,0.85)","rgba(194,55,40,0.85)"],"nullValue":"rgba(214, 215, 214, 0.65)","default":"rgba(214, 215, 214, 0.65)"}],"projections":[{"name":"mercator_map_projection","type":"mercator","bounds":{"x":[-83.75698168309283,-83.45231955083288],"y":[42.946208131752456,43.1070188297042]}}],"marks":[{"type":"polys","from":{"data":"backendChoropleth"},"properties":{"x":{"field":"x"},"y":{"field":"y"},"fillColor":{"scale":"backendChoropleth_fillColor","field":"color"},"strokeColor":"white","strokeWidth":0,"lineJoin":"miter","miterLimit":10},"transform":{"projection":"mercator_map_projection"}}]}

);

export default makeVegaSpec
