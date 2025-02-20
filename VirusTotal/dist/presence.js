var presence = new Presence({
    clientId: "650103083438702613"
  }),
  strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
  });

presence.on("UpdateData", () => {
  var presenceData = {
    largeImageKey: "logo"
  };

  if (document.location.pathname == "/gui/home") {
    // -------------------------------------- Mainpage
    presenceData.state = "Browsing on mainpage...";
    presence.setActivity(presenceData);
  } else if (document.location.pathname == "/gui/home/upload") {
    //-------------------------- Upload File
    presenceData.details = "Uploading an file...";
    presence.setActivity(presenceData);
  } else if (document.location.pathname == "/gui/home/url") {
    //-------------------------- URL Scan
    presenceData.details = "Search an URL...";
    presence.setActivity(presenceData);
  } else if (document.location.pathname == "/gui/home/search") {
    //-------------------------- Search
    presenceData.details = "Search an anything...";
    presence.setActivity(presenceData);
  } else if (document.location.pathname == "/gui/sign-in") {
    //-------------------------- login
    presenceData.details = "Sign In to VirusTotal";
    presence.setActivity(presenceData);
  } else if (document.location.pathname == "/gui/join-us") {
    //-------------------------- join in
    presenceData.details = "Sign Up to VirusTotal";
    presence.setActivity(presenceData);
  } else if (document.location.pathname == "/gui/settings") {
    //-------------------------- Account settings
    nickname = document
      .querySelector("body > vt-virustotal-app")
      .shadowRoot.querySelector("#toolbar")
      .shadowRoot.querySelector("#omnibarWrapper > vt-ui-account-widget")
      .shadowRoot.querySelector("#userDropdown > div.avatar-section > span")
      .innerText;
    presenceData.details = "Update their profile...";
    presenceData.state = nickname;
    presence.setActivity(presenceData);
  } else if (document.location.pathname.includes("/gui/user/")) {
    //-------------------------- Profile of XYZ
    profilex = document
      .querySelector("body > vt-virustotal-app")
      .shadowRoot.querySelector("#authChecker > user-view")
      .shadowRoot.querySelector(
        "#pageWrapper > div.wrapper > vt-ui-generic-card > div:nth-child(2) > div.avatar-name > div > h3"
      ).innerText;
    presenceData.details = "Reading profile of...";
    presenceData.state = profilex;
    presence.setActivity(presenceData);
  } else if (document.location.pathname.includes("/gui/top-users")) {
    //-------------------------- Top users
    presenceData.details = "Looking for top users...";
    presence.setActivity(presenceData);
  }
  //_______________________________________________________________________________________Domain path's
  else if (document.location.pathname.includes("/gui/domain/")) {
    if (document.location.pathname.endsWith("detection")) {
      //-------------------------- Detection
      detectionURL = document
        .querySelector("body > vt-virustotal-app")
        .shadowRoot.querySelector("#domainView")
        .shadowRoot.querySelector("#report")
        .shadowRoot.querySelector("div > header > vt-ui-domain-card")
        .shadowRoot.querySelector(
          "vt-ui-generic-card > div:nth-child(2) > div:nth-child(1) > div.object-id > div.domain-id > span"
        );
      presenceData.details = "Reading detections of...";
      presenceData.state = detectionURL.innerText;
      presence.setActivity(presenceData);
    } else if (document.location.pathname.endsWith("details")) {
      //-------------------------- Details
      detectionURL = document
        .querySelector("body > vt-virustotal-app")
        .shadowRoot.querySelector("#domainView")
        .shadowRoot.querySelector("#report")
        .shadowRoot.querySelector("div > header > vt-ui-domain-card")
        .shadowRoot.querySelector(
          "vt-ui-generic-card > div:nth-child(2) > div:nth-child(1) > div.object-id > div.domain-id > span"
        );
      presenceData.details = "Reading details of...";
      presenceData.state = detectionURL.innerText;
      presence.setActivity(presenceData);
    } else if (document.location.pathname.endsWith("relations")) {
      //-------------------------- relations
      detectionURL = document
        .querySelector("body > vt-virustotal-app")
        .shadowRoot.querySelector("#domainView")
        .shadowRoot.querySelector("#report")
        .shadowRoot.querySelector("div > header > vt-ui-domain-card")
        .shadowRoot.querySelector(
          "vt-ui-generic-card > div:nth-child(2) > div:nth-child(1) > div.object-id > div.domain-id > span"
        );
      presenceData.details = "Reading relations of...";
      presenceData.state = detectionURL.innerText;
      presence.setActivity(presenceData);
    } else if (document.location.pathname.endsWith("community")) {
      //-------------------------- community
      detectionURL = document
        .querySelector("body > vt-virustotal-app")
        .shadowRoot.querySelector("#domainView")
        .shadowRoot.querySelector("#report")
        .shadowRoot.querySelector("div > header > vt-ui-domain-card")
        .shadowRoot.querySelector(
          "vt-ui-generic-card > div:nth-child(2) > div:nth-child(1) > div.object-id > div.domain-id > span"
        );
      presenceData.details = "Reading comments of...";
      presenceData.state = detectionURL.innerText;
      presence.setActivity(presenceData);
    } else if (document.location.pathname.endsWith("summary")) {
      //-------------------------- summary
      detectionURL = document
        .querySelector("body > vt-virustotal-app")
        .shadowRoot.querySelector("#domainView")
        .shadowRoot.querySelector("#report")
        .shadowRoot.querySelector("div > header > vt-ui-domain-card")
        .shadowRoot.querySelector(
          "vt-ui-generic-card > div:nth-child(2) > div:nth-child(1) > div.object-id > div.domain-id > span"
        );
      presenceData.details = "Reading summary of...";
      presenceData.state = detectionURL.innerText;
      presence.setActivity(presenceData);
    }

    //__________________________________________________________________________________________ File Path's
  } else if (document.location.pathname.includes("/gui/file/")) {
    if (document.location.pathname.endsWith("detection")) {
      //-------------------------- detection
      detectionFILE = document
        .querySelector("body > vt-virustotal-app")
        .shadowRoot.querySelector("#authChecker > file-view")
        .shadowRoot.querySelector("#report")
        .shadowRoot.querySelector("div > header > vt-ui-file-card")
        .shadowRoot.querySelector(
          "vt-ui-generic-card > div:nth-child(2) > div:nth-child(1) > div.object-id > div.file-name > a"
        );
      presenceData.details = "Reading detections of...";
      presenceData.state = detectionFILE.innerText;
      presence.setActivity(presenceData);
    } else if (document.location.pathname.endsWith("details")) {
      //-------------------------- details
      detectionFILE = document
        .querySelector("body > vt-virustotal-app")
        .shadowRoot.querySelector("#authChecker > file-view")
        .shadowRoot.querySelector("#report")
        .shadowRoot.querySelector("div > header > vt-ui-file-card")
        .shadowRoot.querySelector(
          "vt-ui-generic-card > div:nth-child(2) > div:nth-child(1) > div.object-id > div.file-name > a"
        );
      presenceData.details = "Reading details of...";
      presenceData.state = detectionFILE.innerText;
      presence.setActivity(presenceData);
    } else if (document.location.pathname.endsWith("community")) {
      //-------------------------- community
      detectionFILE = document
        .querySelector("body > vt-virustotal-app")
        .shadowRoot.querySelector("#authChecker > file-view")
        .shadowRoot.querySelector("#report")
        .shadowRoot.querySelector("div > header > vt-ui-file-card")
        .shadowRoot.querySelector(
          "vt-ui-generic-card > div:nth-child(2) > div:nth-child(1) > div.object-id > div.file-name > a"
        );
      presenceData.details = "Reading comments of...";
      presenceData.state = detectionFILE.innerText;
      presence.setActivity(presenceData);
    } else if (document.location.pathname.endsWith("summary")) {
      //-------------------------- summary
      detectionFILE = document
        .querySelector("body > vt-virustotal-app")
        .shadowRoot.querySelector("#authChecker > file-view")
        .shadowRoot.querySelector("#report")
        .shadowRoot.querySelector("div > header > vt-ui-file-card")
        .shadowRoot.querySelector(
          "vt-ui-generic-card > div:nth-child(2) > div:nth-child(1) > div.object-id > div.file-name > a"
        );
      presenceData.details = "Reading summary of...";
      presenceData.state = detectionFILE.innerText;
      presence.setActivity(presenceData);
    } else if (document.location.pathname.includes("behavior")) {
      //-------------------------- behavior
      detectionFILE = document
        .querySelector("body > vt-virustotal-app")
        .shadowRoot.querySelector("#authChecker > file-view")
        .shadowRoot.querySelector("#report")
        .shadowRoot.querySelector("div > header > vt-ui-file-card")
        .shadowRoot.querySelector(
          "vt-ui-generic-card > div:nth-child(2) > div:nth-child(1) > div.object-id > div.file-name > a"
        );
      presenceData.details = "Reading behavior of...";
      presenceData.state = detectionFILE.innerText;
      presence.setActivity(presenceData);
    }
    // URLS
  } else if (document.location.pathname.includes("/gui/url/")) {
    if (document.location.pathname.endsWith("detection")) {
      //-------------------------- detection
      detectionURL2 = document
        .querySelector("body > vt-virustotal-app")
        .shadowRoot.querySelector("#domainView")
        .shadowRoot.querySelector("#report")
        .shadowRoot.querySelector("div > header > vt-ui-domain-card")
        .shadowRoot.querySelector(
          "vt-ui-generic-card > div:nth-child(2) > div:nth-child(1) > div.object-id > div.parent-domain > a"
        );
      presenceData.details = "Reading detections of ...";
      presenceData.state = detectionURL2.innerText;
      presence.setActivity(presenceData);
    } else if (document.location.pathname.endsWith("details")) {
      //-------------------------- details
      detectionURL2 = document
        .querySelector("body > vt-virustotal-app")
        .shadowRoot.querySelector("#domainView")
        .shadowRoot.querySelector("#report")
        .shadowRoot.querySelector("div > header > vt-ui-domain-card")
        .shadowRoot.querySelector(
          "vt-ui-generic-card > div:nth-child(2) > div:nth-child(1) > div.object-id > div.parent-domain > a"
        );
      presenceData.details = "Reading details of...";
      presenceData.state = detectionURL2.innerText;
      presence.setActivity(presenceData);
    } else if (document.location.pathname.endsWith("community")) {
      //-------------------------- community
      detectionURL2 = document
        .querySelector("body > vt-virustotal-app")
        .shadowRoot.querySelector("#domainView")
        .shadowRoot.querySelector("#report")
        .shadowRoot.querySelector("div > header > vt-ui-domain-card")
        .shadowRoot.querySelector(
          "vt-ui-generic-card > div:nth-child(2) > div:nth-child(1) > div.object-id > div.parent-domain > a"
        );
      presenceData.details = "Reading comments of...";
      presenceData.state = detectionURL2.innerText;
      presence.setActivity(presenceData);
    } else if (document.location.pathname.endsWith("summary")) {
      //-------------------------- summary
      detectionURL2 = document
        .querySelector("body > vt-virustotal-app")
        .shadowRoot.querySelector("#domainView")
        .shadowRoot.querySelector("#report")
        .shadowRoot.querySelector("div > header > vt-ui-domain-card")
        .shadowRoot.querySelector(
          "vt-ui-generic-card > div:nth-child(2) > div:nth-child(1) > div.object-id > div.parent-domain > a"
        );
      presenceData.details = "Reading summary of...";
      presenceData.state = detectionURL2.innerText;
      presence.setActivity(presenceData);
    } else if (document.location.pathname.includes("behavior")) {
      //-------------------------- behavior
      detectionURL2 = document
        .querySelector("body > vt-virustotal-app")
        .shadowRoot.querySelector("#domainView")
        .shadowRoot.querySelector("#report")
        .shadowRoot.querySelector("div > header > vt-ui-domain-card")
        .shadowRoot.querySelector(
          "vt-ui-generic-card > div:nth-child(2) > div:nth-child(1) > div.object-id > div.parent-domain > a"
        );
      presenceData.details = "Reading behavior of...";
      presenceData.state = detectionURL2.innerText;
      presence.setActivity(presenceData);
    } else {
      presence.setActivity();
    }
    function refresh(presence) {
      refresh.refresh;
    }
  }
});
