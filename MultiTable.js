function print_table(n, i = 1)
{
    if (i == 11)// base case
        return;
    document.write(n + " * " + i + " = " + n * i+"<br>");
    i++;//increment i
    print_table(n,i);
}
 
// Driver Code
let n = parseInt(prompt("Enter a number:"));
print_table(n);add