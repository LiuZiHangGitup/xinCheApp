export const token = () => {
	uni.getStorage({
		key: 'token',
		success: (res) => {
			return res.data;
		}
	})
}

export const uuid = () => {
	uni.getStorage({
		key: 'uuid',
		success: (res) => {
			return res.data;
		}
	})
}