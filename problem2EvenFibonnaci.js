var sum = 0;

var prev = 1;
var cur = 2;

while(cur <= 4000000)
{
	if(cur % 2 === 0)
	{
		sum += cur;
	}
	
	cur = cur + prev;
	prev = cur - prev;
}

console.log(sum);