const makeArray = (string) => {
    return string.split("\n\n");
}

console.log(JSON.stringify(makeArray("Now that we are familiar with all the participants of the Carrier's side, we will consider the documents themselves that the Carrier possesses, namely those that the dispatcher will need in his work.\n\nIn the course of work, when the dispatcher decides that he is taking the load from the broker, the process of exchanging documents between the two companies begins, Carrier and Broker (if these companies have previously worked together, then this step is skipped). \nThis process is called Setup.\n\nWhen setting up, usually the broker sends a package of his documents to the dispatcher. The dispatcher signs the necessary papers and sends them to the broker. In addition, he also sends a package of his documents, which is called the Carrier Packet.")))