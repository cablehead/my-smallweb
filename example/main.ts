export default {
  fetch() {
    return new Response("Smallweb is running", {
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
}
