
module.exports = {
	getPages: function (response, pagesId)
	{
		response.json({
			pages:pagesId
		});
	}

	getPage: function (response, category, reputation, summary, origin, text)
	{
		response.json({
			pageData: {
				category: category,
				reputation: reputation,
				summary: summary,
				origin: origin,
				text: text
			}
		});
	}

	badPage: function (response, isSuccess)
	{
		response.json({
			isSuccess: isSuccess
		});
	}

	goodPage: function (response, isSuccess)
	{
		response.json({
			isSuccess: isSuccess
		});
	}

	subscribePage: function (response, isSuccess)
	{
		response.json({
			isSuccess: isSuccess
		})
	}

	unsubscribePage: function (response, isSuccess)
	{
		response.json({
			isSuccess: isSuccess
		})
	}

	subscribeTag: function (response, isSuccess)
	{
		response.json({
			isSuccess: isSuccess
		})
	}

	unsubscribeTag: function (response, isSuccess)
	{
		response.json({
			isSuccess: isSuccess
		})
	}

	getRegisteredPages: function (response, pagesId)
	{
		response.json({
			pagesId: pagesId
		})
	}
}

