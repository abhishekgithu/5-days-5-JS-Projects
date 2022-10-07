
        // JavaScript Program for the above approach
 
 
        /* Function to print reverse of the passed string */
        function reverse(str, len) {
            if (len == str.length) {
                return;
            }
            reverse(str, len + 1);
 
            console.log(str[len]);
 
        }
 
        /* Driver program to test above function */
 
        let a = "Abhishek is a good boy";
 
        reverse(a, 0);