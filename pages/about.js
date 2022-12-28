export default function About({ users }) {
  return (
    <div>
      About component is works!
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export async function getStaticProps() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await result.json();

  return {
    props: {
      users,
    },
  };
}
