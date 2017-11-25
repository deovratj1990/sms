<head>
<title>SMS</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="/resources/common/css/bootstrap.min.css">
<script type="text/javascript">
	var config = {
			serviceProtocol: "${serviceProtocol}",
			serviceHost: "${serviceHost}",
			servicePort: "${servicePort}",
			serviceBaseUrl: "${serviceBaseUrl}",
			getServiceProtocol: function() {
				return this.serviceProtocol;			
			},
			getServiceHost: function() {
				return this.serviceHost;
			},
			getServicePort: function() {
				return this.servicePort;
			},	
			getServiceBaseUrl: function() {
				return this.serviceBaseUrl;
			},
			getServiceUrl: function(url) {
				return this.getServiceBaseUrl() + url;
			}
	};	
</script>
</head>