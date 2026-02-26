$(function () {
  /*タイル風レイアウト*/

  setTimeout(function () {
    var sp = 640; //SPのサイズを設定

    function masonry_execute() {
      if ($("html").width() < sp) {
        $(".js-imgList").masonry("destroy");
      } else {
        $(".js-imgList").masonry({
          // options
          itemSelector: ".js-item",
          columnWidth: ".js-item",
          horizontalOrder: true,
          fitWidth: true,
          gutter: 50,
        });
      }
    }
    masonry_execute();
    $(window).resize(function () {
      masonry_execute();
    });
  }, 500);

  /*ギャラリー登場*/
  setTimeout(function () {
    $(".imgList ul").addClass("fadein");
  }, 600);

  //順番に表示
  setTimeout(function () {
    $(".js-item").each(function (i) {
      var that = this;

      // setTimeout(function () {
      //   $(that).addClass("fadein");
      // }, 200 * i);
      $(that).addClass("fadein");
    });
  }, 700);

  //スライダー表示
  var elem = document.querySelector(".swiper-container");
  if (elem !== null) {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true,
      effect: "fade",
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      speed: 1500,
    });
  }

  /*ライトボックス*/
  // オプションを表すオブジェクトを用意します（先程と同じです）
  const luminousOpts = {
    caption: (trigger) => {
      return trigger.querySelector("img").getAttribute("alt");
    },
  };
  // ギャラリースタイル専用のオプションを表すオブジェクトを用意します
  const galleryOpts = {
    arrowNavigation: true,
  };

  // LuminousGallery オブジェクトを生成することでポップアップ表示できます
  new LuminousGallery(
    // 第一引数：ポップアップ表示する<a>要素（複数可）
    document.querySelectorAll("a[data-luminous]"),
    // 第二引数：ギャラリー用オプション
    galleryOpts,
    // 第三引数：オプション
    luminousOpts
  );

  $(".js-item").one("click", function () {
    $(".lum-close-button").prependTo(".lum-lightbox-inner");
    slideefect();
    $(".lum-img").addClass("active");
  });

  function slideefect() {
    $(".lum-gallery-button").on("click.action", function () {
      $(".lum-img").removeClass("active");

      function active() {
        $(".lum-img").addClass("active");
      }
      setTimeout(active, 400);
    });
  }

  /* Modaal */
  $(".video").modaal({
    type: "video",
  });
  // $(".gallery").modaal({
  //   type: 'image'
  // });

  /*intro*/
  $(".worksHead_statement span").on("click", function () {
    $(".statement").addClass("active");
  });

  $(".statement_close").on("click", function () {
    $(".statement").removeClass("active");
  });

  //ナビ開閉
  $("#panel-btn").on("click.action", function () {
    // $("#nav").slideToggle(200);
    $("#panel-btn-icon").toggleClass("close");
    $("#nav").toggleClass("active");
    $("body").toggleClass("active");
    return false;
  });

  //スムーススクロール
  $('a[href^="#"]').click(function () {
    let speed = 500;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  /* 閉じるボタン */

  $(".popup .close").on("click.action", function () {
    $(".popup").addClass("active");
    return false;
  });
});
