import "./DashboardPage.css";

export default function DashboardPage({ user }) {
  return (
    <div className="DashboardPage">
      <h1 className="ledgerly hidden">Finance</h1>
      <div>
        <h1>{user.businessName}</h1>
        <h1>
          Welcome <span>{user.name}</span>
        </h1>
      </div>
      <div></div>
    </div>
  );
}
