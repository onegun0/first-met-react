// // page 컴포넌트는 PageLayout컴포넌트를 렌더링
// <Page user={user} avatarSize={avatarSize} />

// // PageLayout 컴포넌트는  NavigationBar 컴포넌트를 렌더링
// <PageLayout user={user} avatarSize={avatarSize} />

// // NavigationBar 컴포넌트는 Link 컴포넌트를 렌더링
// <NavigationBar user={user} avatarSize={avatarSize} />

// // Link 컴포넌트는 Avatar 컴포넌트를 렌더링
// <Link href={user.permalink}>
//     <Avatar user={user} size={avatarSize} />
// </Link>

// function Page(props){
//     const user = props.user;

//     const userLink =(
//         <Link href={user.permalink}>
//             <Avatar user={user} size={props.avatarSize} />
//         </Link>
//     );
//     // Page 컴포넌트는 PageLayout컴포넌트를 렌더링
//     // 이때 props로 userLink를 함께 전달함.
//     return <PageLayout userLink={userLink} />;
// }
// // PageLayout 컴포넌트는 NavigationBar 컴포넌트 렌더링
// <PageLayout userLink={...} />

// // NavigationBar 컴포넌트는 props로 전달받은 userLink element를 리턴
// <NavigationBar userLink={...} />


function Page(props){
    const user = props.user;
    const topBar=(
        <NavigationBar>
            <Link href={user.permalink}>
                <Avatar user={user} size={props.avatarSize} />
            </Link>
        </NavigationBar>
    );
    const content  = <Feed user={user} />;
    return (
        <PageLayout topBar={topBar}
                    content={content} />
    );
}
