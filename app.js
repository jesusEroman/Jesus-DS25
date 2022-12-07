console.log("Hello B2S");

let viz;

function initViz() {
  const containerDiv = document.getElementById("vizContainer");
  const options = {
    device: "desktop",
    height: "800px",
    width: "100%",
  };
  const url =
    "https://public.tableau.com/views/EmbeddingDashboard_16704095775320/EmbeddingDashboard";
  viz = new tableau.Viz(containerDiv, url, options);
}

function exportPDFfunction() {
  viz.showExportPDFDialog();
}

function exportPPfunction() {
  viz.showExportPowerPointDialog();
}

function getRangeValues() {
  const minValue = document.getElementById("minValue").value;
  const maxValue = document.getElementById("maxValue").value;
  console.log("Range Values:", minValue, "-", maxValue);
  const workbook = viz.getWorkbook();
  const activeSheet = workbook.getActiveSheet();
  const sheets = activeSheet.getWorksheets();
  console.log("Wokrsheets: ", sheets);
  const sheetToFilter = sheets[0];
  sheetToFilter
    .applyRangeFilterAsync("SUM(Sales)", { min: minValue, max: maxValue })
    .then(alert("Worksheet filtered"));
}
