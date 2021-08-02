const url = "https://assets.breatheco.de/apis/fake/contact/agenda/mappel21";
const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			loadContact() {
				fetch(url + "agenda/downtown_xii")
					.then(response => response.json())
					.then(result => {
							setStore({
								contacts: result
							});
					})	
					.catch(e => console.error);
			},

			addContact(name, phone, email, address) {
				fetch(url, {
					method: "post",
					headers: {"content-type":"application/json", mode: "no-cors"},
					body: JSON.stringify({
						full_name: name,
						phone: phone,
						address: address,
						email: email,
						agenda_slug: "downtown_xii"
					})
				}).then(()=>{
					fetch (url + "agenda/downtown_xii")
					.then(response=> response.json())
					.then(result => {
						console.log("result", result),
						setStore({
							contacts: result
						});
					}) .catch(e=> console.error(e))
				}),

			editContact(id, name, phone, email, address) {
					fetch(url + id, {
						method: "put",
					headers: {"content-type":"application/json"},
					body: JSON.stringify({
						full_name: name,
						phone: phone,
						address: address,
						email: email,
						agenda_slug: "downtown_xii"
					})
				}).then(()=>{
					fetch (url + "agenda/downtown_xii")
					.then(Response=> Response.json())
					.then(result => {
						console.log("result", result),
						setStore({
							contacts: result
						});
					}) .catch(e=> console.error(e))
					});
				}

		}
	};
};

export default getState;
