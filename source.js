const makeCalendlyUrl = (base_url) => {
    if ($("#iframe-inject-cal").length) {
        let linkInject = {
            utm_source: Cookies.get("utm_source") || "null",
            utm_medium: Cookies.get("utm_medium") || "null",
            utm_campaign: Cookies.get("utm_campaign") || "null",
            utm_content: Cookies.get("utm_content") || "null",
            utm_content: Cookes.get("utm_content") || "null",
            name: Cookies.get("name") || "",
            email: Cookies.get("email") || "",
        };

        let url =
        `${base_url}?hide_gdpr_banner=1&hide_event_type_details=1&primary_color=fca311&hide_landing_page_details=1`;

        for (const key in linkInject) {
            url += `&${key}=${linkInject[key]}`;
        }
        console.log(url);

        $("#iframe-inject-cal").attr("src", url);
    }
}

const delayedCta = (timeout) => {
    let hiddenCta = $(".hidden-cta");
    hiddenCta.hide();

    if (hiddenCta.hasClass("hidden")) {
        hiddenCta.removeClass("hidden");
    }

    setTimeout(function () {
        console.log("hidden CTA Runs");
        hiddenCta.fadeIn(2000);
    }, timeout);
}