import app1 from "./server1";
import app2 from "./server2";

app1.listen(3001, () => {
    console.log('Server 1 running on 3001')
});

app2.listen(3002, () => {
    console.log('Server 2 running on 3002');
})