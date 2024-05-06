import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => { 
    return (
        <UserProfileForm onSave={function (): void {
            throw new Error("Function not implemented.");
        } } isLoading={false}/>
    )
}; 

export default UserProfilePage;