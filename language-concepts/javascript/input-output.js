process.stdout.write('Give input data: ');

process.stdin.setEncoding('utf-8');

process.stdin.on('data', (data) => {
    //const formattedData = data.toString();
    executor(data);
    process.exit();
})

const executor = (data) => {
    console.log(data);
}

/*
Generally process.stdin.on deal with raw binary data, so either we have to explicitly set
the encoding as 'utf-8' (normal string) or we should convert explicitly using .toString()
*/