import * as usersService from '../../utilities/users-service';

export default function OrderHistoryPage() {
  const handleCheckToken = async () => {
    const expiryDate = await usersService.checkToken();
    console.log(expiryDate);
  }

  return (
    <>
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Check when my login expires</button>
    </>
  );
}