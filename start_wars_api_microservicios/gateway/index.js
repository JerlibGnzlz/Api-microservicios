const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(express.json());
app.use(morgan("dev"));


app.use("/characters",
  createProxyMiddleware({
    target: "http://localhost:8001",
    changeOrigin: true,
  }));

app.use("/films",
  createProxyMiddleware({
    target: "http://localhost:8002",
    changeOrigin: true,
  }));


app.use("/planets",
  createProxyMiddleware({
    target: "http://localhost:8003",
    changeOrigin: true,
  }));


const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Gateway server lisntening on port ${PORT}`);
});
