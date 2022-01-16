PetiteVue.createApp({
  // データプロパティ
  data: false,
  zipcode: '',

  // メソッド
  async getResource() {
    // クエリの設定
    const query = new URLSearchParams({
      zipcode: this.zipcode
    });

    const res = await fetch('api?' + query);
    const obj = await res.json();
    this.data = obj.results.shop;
    console.log(JSON.stringify(obj, null, 2));
  }
}).mount();
