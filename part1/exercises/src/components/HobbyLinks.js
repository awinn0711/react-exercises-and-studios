export default function HobbyLinks() {
    let hobbyLinks = ["https://www.thriftbooks.com/", "https://www.moderndrummer.com/"];
    return (
        <div>
            <h3>My Hobbies</h3>
            <p><a href = {hobbyLinks[0]}>https://www.thriftbooks.com/</a></p>
            <p><a href = {hobbyLinks[1]}>https://www.moderndrummer.com/</a></p>
        </div>
    )
}