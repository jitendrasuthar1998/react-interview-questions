import useFetchHook from "./useFetchHook"

const CustomHookHome = () => {
 
    const {data, loading} = useFetchHook("posts");
    console.log("posts data", data);
    const {data:comments, loading:commentsLoading} = useFetchHook("comments");
    console.log("comments data", comments);
  return (
    <div>CustomHookHome</div>
  )
}

export default CustomHookHome