export default {
  fetch() {
    return new Response("example domain:: edit ~/smallweb/example/main.tx to change", {
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
}
