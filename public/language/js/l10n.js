/**
 * @class: L10N
 * @description: Defines L10N functions
 * @version: 1.0
 **/

var L10N = {
	required: {			
		username: 'please enter your name',
		profilename: 'please enter profile name',
		firstNameSign:'please enter first name',
		lastNameSign:'please enter first name',
		birthdaySign:'please enter date of brith',
		addressSign:'please enter address',
		zipSign:'please enterzip code',
		phoneSign:'please enter phone number',
		emailSign:'please enter email',
		password: 'please enter your password',
		generate: 'please click Generate button',
		clientname: 'client name is required',
		surveyname: 'survey name is required',
		clientgroupname: 'client group name is required',
		address: 'address is required',
		zip: 'zip code is required',
		code: 'code is required',
		label: 'label is required',
		city: 'city is required',
		country: 'country is required',
		phone: 'phone number is required',
		email: 'please enter email address',
		url: 'web address is required',
		firstname: 'first name is required',
		lastname: 'last name is required',
		title: 'title is required',
		mobile: 'mobile phone is required',
		gender: 'gender is required',
		birthday: 'birthday is required',		
		nameofbank: 'name of a bank is required',
		accountholder: 'account holder is required',
		accountno: 'account number is required',
		swiftno: 'swift number is required',
		ebanno: 'swift number is required',
		salary: 'salary is required',
		cprno: 'salary is required',
		keyword: 'keyword is required',
		roundname: 'please enter round name',
		startdate: 'please choose start date',
		enddate: 'please choose end date',
		deadline: 'please choose deadline date',
		emailDashBoard:'please enter your email',
		femailDashBoard:'please enter friend email',
		surveytemplate: 'please choose survey template',		
		jobname: 'please enter job name',
		jobnameDashBoard:'please enter your name',
		fjobnameDashBoard:'please enter friend name',
		mess:'please enter message',
		description:'please enter description',		
		responsible: 'please choose responsible',
		playlistname: 'please enter playlist name',
		unitname: 'please enter unit name',
		language: 'please select language',
		fileUpload: 'file upload is required'
	},
	valid: {
		validHours:'Number of hours is invalid.',
		name: 'please dont enter special character',
		email: 'please enter valid email address',
		zip: 'zip code must be number',
		phone: 'please input valid phone number',
		mobile: 'please input valid mobile number',
		url: 'please input valid web address',
		birthday: 'please input valid birthday',
		accountno: 'please input valid account number',
		swiftno: 'please input valid swift number',
		ebanno: 'please input valid EBAN number',
		salary: 'please input valid salary number',
		cprno: 'please input valid cpr number',
		date: 'start date must be less than end date',
		target: 'target should from 0 to 100%',
		mobilearea: 'please input valid mobile area code',
		mobileareaTimetracking: 'hour must be from 0 to 24',
		conversion: 'please input valid conversion rating',
		code: 'please input valid code',
		emailDashBoard:'please input valid email',
		femailDashBoard:'please input valid email',
		bookdate: 'please input valide booked date',
		birthdaySign:'please input valide date of brith',
		phoneSign:'please input valide phone',
		emailSign:'please input valide email',
		sheet:'sheet must be number',
		existedData:'Data is existed.',
		customTag: 'custom tag is existed',
		uploadExcel: 'file type must be xls or xlsx',
		deadline: 'deadline must be greater than start date',
		numset: 'number must be greater than 0'
	},
	confirm: {
		password: 'are you sure you want to delete?'
	},
	alert: {
		register: 'your account has been created successfully',
		existsClentGroup: 'Client group name is not available',
		clientselect: 'You must select client type!',
		newplaylistsucc: 'play list has been created/edit successfully',
		importlanguagesucc: 'language has been imported successfully',
		importunitsucc: 'Unit has been imported Succsessfully.',
		importsurveysucc: 'Result survey has been imported Succsessfully.',
		selectquestion: 'please select question',
		selectanswer: 'please select answer',
		selectclient: 'please select client',
		importlanguagefail: 'The sheet could not be imported. Please check the validity of the sheet and try again.',
		selectChk: 'You must select 1 checkbox.',
		taglist: 'There no system tags or custom tags.',
		noquestion: 'There no questions to preview.'
	},
	init: {
		username: 'Username',
		password: 'Password',
		email: 'enter your email...',
		clientgroupname: 'Enter name here...',
		keyword: 'Type name to search...',
		deleteuser: 'Are you sure you want to delete this user ?',
		deleteanswer: 'Are you sure you want to delete this answer ?',
		deletelanguage: 'Are you sure you want to delete this language ?',
		deleteplaylist: 'Are you sure you want to delete this playlist ?',
		deletedemographic: 'Are you sure you want to delete this demographic ?',
		deletesystemtags: 'Are you sure you want to delete this systemtags ?',
		deletetimetracking: 'Are you sure you want to delete this timetracking ?',
		deleteprofiles: 'Are you sure you want to delete this profiles ?',
		deletecontinent: 'Are you sure you want to delete this continent ?',
		deletecountries: 'Are you sure you want to delete this country ?',
		deletephoto: 'Are you sure you want to delete this photo ?',
		deletevalue: 'Are you sure you want to delete this value ?',
		deletecolection: 'Are you sure you want to delete this colection ?',
		deleteprofile: 'Are you sure you want to delete this profile ?',
		deleteRow: 'Do you want to delete this profile ?',
		deleteOrganization: 'Are you sure to delete this organization ?',
		deleteclient: 'Are you sure you want to delete this client ?',
		deletevisit: 'Are you sure you want to delete this visit ?',
		deleteunitexception: 'Are you sure you want to delete this exception ?',
		viewphoto: 'There is no image to view.',
		continent: 'Type continent...',
		addValue: 'Some text ...',
		searchVisit:'Search by Visit ID',
		descTimetracking:'Description here',
		hours: 'Hour',
		des:'Description here',
		leavepage: 'You have unsaved changes. Are you sure you want to leave page ?',
		delUnit: 'Are you sure you want to delete this unit ?',
		importSuccess: 'Unit has been imported Succsessfully.',
		importUnit: 'You are about to upload unit file for the Unit which will replace any existing data. If you wish to continue press Yes',
		importResultUnit: 'You are about to upload a result template file for the Unit which will replace any existing data. If you wish to continue press Yes'
	}
};