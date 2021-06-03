import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';



// NavBar
import NavBar from './NavBar';
// footer
import Footer from './Footer';
// pages
import Quiz from "./Quiz";
import Home from './Home';
import AllPosts from './Blog-component/Allpost/AllPosts';
import Post from './Blog-component/Post/Post';
import File from './Blog-component/File/File';
import Videos from './Blog-component/videos/Videos';
import Video from './Blog-component/video/Video';



// styling
import './App.css'


const App = () => {
	return (
		<BrowserRouter>
			<NavBar/>
			<Switch>
				<Route exact path ="/" component ={Home} />
				<Route path = '/posts/:id' component = {Post} />
				<Route path = '/posts' component = {AllPosts} />
				<Route  path ="/quiz" component ={Quiz} />
				<Route path = '/file' component ={File} />
				<Route path = '/videos/:filename' component = {Video} />
				<Route path = '/videos' component ={Videos} />
			</Switch>
			<Footer/>
		</BrowserRouter>
	)
}

export default App;