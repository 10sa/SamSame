
module.exports: {
	login: function (response, isSuccess)
	{
		response.json({
			isSuccess: isSuccess
		});
	}

	destoryAccount: function (response, isSuccess)
	{
		response.json({
			isSuccess: isSuccess
		});
	}

	editProfile: function (response, isSuccess)
	{
		response.json({
			isSuccess: isSuccess
		});
	}

	userProfile: function (response, isSuccess, profileImagePath, subscribePagesId, goodPagesId)
	{
		response.json({
			isSuccess: isSuccess,
			profile: {
				imagePath: profileImagePath,
				subscribePagesId: subscribePagesId,
				goodPagesId: goodPagesId
			}
		})
	}
}
