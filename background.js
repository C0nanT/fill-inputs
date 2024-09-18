chrome.contextMenus.create({
	id: "generateFormValues",
	title: "Preencher formulário",
	contexts: ["all"],
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
	if (info.menuItemId === "generateFormValues") {
		chrome.tabs.sendMessage(
			tab.id,
			"generateFormValues",
			{ frameId: info.frameId },
			() => {}
		);
	}
});
