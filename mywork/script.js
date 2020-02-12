 <script>



        function addCard() {
            var addCard = null;
			
			//alert("hi");

            var inr = document.getElementById('inr').value;
            var firstname = document.getElementById('firstname').value;
            var lastname = document.getElementById('lastname').value;
            var address = document.getElementById('address').value;
            var city = document.getElementById('city').value;
            var state = document.getElementById('state').value;
            var country = document.getElementById('country').value;
            var pincode = document.getElementById('pincode').value;
            var bfname = document.getElementById('bfname').value;
            var blname = document.getElementById('blname').value;
            var phone = document.getElementById('phone').value;
            var email = document.getElementById('email').value;
            //alert("hello");

            

            if (sessionStorage.getItem('addCard')) {
                addCard = JSON.parse(sessionStorage.getItem('addCard'));
				alert("if:" + addCard.length);
                var size = addCard.length;
                addCard[size] = {
                    inr: inr,
                    firstname: firstname,
                    lastname: lastname,
                    address: address,
                    city: city,
                    state: state,
                    country: country,
                    pincode: pincode,
                    bfname: bfname,
                    blname: blname,
                    phone: phone,
                    email: email

                };
				alert("if:" + addCard.length);
            }
            else {
                alert("else:" );
                addCard = [{
                    inr: inr,
                    firstname: firstname,
                    lastname: lastname,
                    address: address,
                    city: city,
                    state: state,
                    country: country,
                    pincode: pincode,
                    bfname: bfname,
                    blname: blname,
                    phone: phone,
                    email: email
                }];
            }

            sessionStorage.setItem('addCard', JSON.stringify(addCard));
            //addCard = JSON.parse(sessionStorage.getItem('addCard'));
            alert('length' + addCard.length);
            //alert('get' + JSON.stringify(addCard));

            //return true;
        }


    </script>