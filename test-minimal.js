// 最小测试A：验证 Egern 能正常运行自定义脚本（不含任何图片）
export default async function (ctx) {
  return {
    type: "widget",
    padding: 12,
    children: [
      { type: "text", text: "最小测试 OK", fontSize: 16, fontWeight: "bold" }
    ],
    refreshAfter: 3600
  };
}
